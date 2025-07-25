// src/components/GreenScreenCat.tsx
"use client";

import { useRef, useEffect } from "react";

export default function GreenScreenCat() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        video.play().catch(() => { /* autoplay might be blocked */ });

        function renderFrame() {
            if (video.paused || video.ended) return;
            if (!ctx) return;

            // draw the current video frame
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0);

            // grab the pixels and chroma‑key out green
            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = frame.data;
            for (let i = 0; i < d.length; i += 4) {
                const r = d[i], g = d[i + 1], b = d[i + 2];
                // simple green detection: adjust thresholds as needed
                if (g > 100 && r < 100 && b < 100) {
                    d[i + 3] = 0; // set alpha to 0
                }
            }
            ctx.putImageData(frame, 0, 0);

            requestAnimationFrame(renderFrame);
        }

        // once the video can play, start rendering
        const onCanPlay = () => renderFrame();
        video.addEventListener("canplay", onCanPlay);
        return () => {
            video.pause();
            video.removeEventListener("canplay", onCanPlay);
        };
    }, []);

    return (
        <div className="wrapper">
            {/* hidden video source with iPhone-friendly attributes */}
            <video
                ref={videoRef}
                src="/cat-green-screen.mp4"
                muted
                loop
                playsInline
                autoPlay
                style={{ display: "none" }}
            />
            {/* canvas shows the keyed result */}
            <canvas ref={canvasRef} />
            <style jsx>{`
                .wrapper {
                    width: 910px;
                    height: 575px;
                    margin: auto;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                }
                canvas {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                /* ensure page fills viewport for centering */
                :global(html, body) {
                    height: 100%;
                    margin: 0;
                }
            `}</style>
        </div>
    );
}
