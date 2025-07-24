// src/lib/talker.ts

import {Animalese, AnimaleseOptions} from "@/lib/animalese";

export interface SpeakerOptions extends AnimaleseOptions {
    /** final audio playbackRate (1.0 = normal, 0.5 = half‑speed) */
    playbackRate?: number;
}

export default class AnimaleseSpeaker {
    private engine: Animalese;
    private opts: SpeakerOptions;

    constructor(
        lettersUrl?: string,
        opts: SpeakerOptions = {}
    ) {
        this.engine = new Animalese(lettersUrl);
        this.opts   = { playbackRate: 1.0, ...opts };
    }

    public async init(): Promise<void> {
        await this.engine.init();
    }

    public async speak(text: string): Promise<void> {
        if (typeof window === 'undefined') return;
        let url: string;
        try {
            url = this.engine.synth(text, this.opts);
        } catch (err) {
            console.warn('Animalese.synth() failed:', (err as Error).message);
            return;
        }

        await new Promise<void>(resolve => {
            const audio = new Audio(url);
            // <-- set your desired playbackRate here:
            audio.playbackRate = this.opts.playbackRate!;
            audio.onended = () => resolve();
            audio.onerror = () => resolve();
            audio.play().catch(() => resolve());
        });
    }
}
