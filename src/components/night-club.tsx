// src/components/NightClub.tsx
"use client";

import { useEffect, useRef } from "react";

export default function NightClub() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;
        let player: any = null;

        function initPlayer() {
            if (cancelled) return;

            const RuffleAPI = (window as any).RufflePlayer?.newest?.();
            if (!RuffleAPI) {
                // retry until Ruffle is available
                return setTimeout(initPlayer, 100);
            }

            // clear any existing instance
            const container = containerRef.current!;
            container.innerHTML = "";

            // create the Ruffle player
            player = RuffleAPI.createPlayer();
            Object.assign(player.style, {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            });

            // mount and load
            container.appendChild(player);
            player.load("/dance.swf");
            player.play();
        }

        initPlayer();

        return () => {
            cancelled = true;
            if (player && containerRef.current?.contains(player)) {
                containerRef.current.removeChild(player);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="swf-container">
            <noscript>Flash content requires JavaScript to run.</noscript>
            <style jsx>{`
                .swf-container {
                    /* Club Penguin viewport size */
                    width: 910px;
                    height: 575px;
                    /* center it in the page */
                    margin: auto;
                    /* allow the page itself to center vertically */
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    position: relative;
                    overflow: hidden;
                    background: black;
                }
                /* ensure the page fills the viewport so centering works */
                :global(html, body) {
                    height: 100%;
                    margin: 0;
                }
            `}</style>
        </div>
    );
}
