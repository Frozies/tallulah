// src/lib/animalese.ts
export interface AnimaleseOptions {
    /** Collapse each word to its first+last letter (classic Animalese) */
    shorten?: boolean;
    /** Speed multiplier on playback of each letter snippet (1.0 = normal) */
    pitch?: number;
}

/**
 * Animalese synthesizer: loads a single “animalese.wav” containing 26 × 0.15 s
 * of letters A–Z in order, decodes it, slices out each letter’s samples,
 * then builds and returns an 8‑bit WAV blob URL for any input text.
 */
export class Animalese {
    private letterLibrary: Float32Array | null = null;
    private readonly sampleRate = 44100;
    private readonly libSecs    = 0.15;
    private readonly outSecs    = 0.075;
    private readonly libSamples: number;
    private readonly outSamples: number;

    /**
     * @param lettersUrl URL (public folder) to your concatenated letter WAV
     *                   (should be 26 × 0.15 s of A→Z).
     */
    constructor(private lettersUrl = '/animalese.wav') {
        this.libSamples = Math.floor(this.libSecs * this.sampleRate);
        this.outSamples = Math.floor(this.outSecs * this.sampleRate);
    }

    /**
     * Fetches and decodes the letters WAV into a Float32Array library.
     * Must be called once (in browser) before calling synth().
     */
    public async init(): Promise<void> {
        const res = await fetch(this.lettersUrl);
        if (!res.ok) {
            throw new Error(`Failed to load ${this.lettersUrl}: ${res.status}`);
        }
        const arrayBuffer = await res.arrayBuffer();
        // Decode via Web Audio API
        const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
        if (!AudioCtx) {
            throw new Error('Web Audio API not supported');
        }
        const ctx = new AudioCtx();
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
        // We assume channel 0 contains our concatenated A→Z samples
        this.letterLibrary = audioBuffer.getChannelData(0);
        // optional: ctx.close();
    }

    /**
     * Synthesize a Blob URL of an 8‑bit WAV speaking `script` in Animalese.
     * Throws if not initialized or run under SSR.
     */
    public synth(
        script: string,
        { shorten = false, pitch = 1.0 }: AnimaleseOptions = {}
    ): string {
        if (!this.letterLibrary) {
            throw new Error('Animalese not initialized—call init() first');
        }
        if (typeof window === 'undefined' || !('Blob' in window) || !URL.createObjectURL) {
            throw new Error('Animalese.synth() only works in a browser');
        }

        // 1) Preprocess and uppercase
        let s = script;
        if (shorten) {
            s = s
                .replace(/[^a-z]/gi, ' ')
                .split(/\s+/)
                .map(w => w.length > 1 ? w[0] + w[w.length - 1] : w)
                .join('');
        }
        s = s.toUpperCase();

        // 2) Prepare output buffer
        const total = s.length * this.outSamples;
        const out = new Uint8Array(total);

        // 3) Fill each letter’s waveform
        for (let ci = 0; ci < s.length; ci++) {
            const c = s.charCodeAt(ci);
            const base = ci * this.outSamples;
            if (c >= 65 && c <= 90) {
                const start = (c - 65) * this.libSamples;
                for (let i = 0; i < this.outSamples; i++) {
                    const idx = Math.min(
                        start + Math.floor(i * pitch),
                        this.letterLibrary.length - 1
                    );
                    const f = this.letterLibrary[idx];       // in [-1,1]
                    out[base + i] = Math.floor((f * 0.5 + 0.5) * 255);
                }
            } else {
                // silence = midpoint 128
                out.fill(128, base, base + this.outSamples);
            }
        }

        // 4) Build WAV header + PCM data
        const bits  = 8;
        const ch    = 1;
        const byteRate  = this.sampleRate * ch * bits / 8;
        const blockAlign = ch * bits / 8;
        const dataSize   = out.length * (bits / 8);
        const chunkSize  = 36 + dataSize;
        const buffer     = new ArrayBuffer(44 + dataSize);
        const view       = new DataView(buffer);
        let o = 0;

        const writeStr = (str: string) => {
            for (let k = 0; k < str.length; k++) {
                view.setUint8(o++, str.charCodeAt(k));
            }
        };

        writeStr('RIFF');         view.setUint32(o, chunkSize, true); o += 4;
        writeStr('WAVE');
        writeStr('fmt ');         view.setUint32(o, 16, true);        o += 4;
        view.setUint16(o, 1, true);    o += 2;  // PCM
        view.setUint16(o, ch, true);   o += 2;
        view.setUint32(o, this.sampleRate, true); o += 4;
        view.setUint32(o, byteRate, true);        o += 4;
        view.setUint16(o, blockAlign, true);      o += 2;
        view.setUint16(o, bits, true);            o += 2;
        writeStr('data');         view.setUint32(o, dataSize, true);  o += 4;

        // PCM samples
        for (let i = 0; i < out.length; i++) {
            view.setUint8(44 + i, out[i]);
        }

        // 5) Return a Blob URL
        return URL.createObjectURL(new Blob([buffer], { type: 'audio/wav' }));
    }
}
