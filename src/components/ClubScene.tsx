// src/components/ClubScene.tsx
"use client";

import dynamic from "next/dynamic";
import GreenScreenCat from "./GreenScreenCat";
import SimpleSpotifyEmbed from "@/components/SpotifyPlayer";

// dynamic import of NightClub to avoid SSR
const NightClubDynamic = dynamic(() => import("./night-club"), {
    ssr: false,
});

export default function ClubScene() {
    return (
        <div className="scene-container">
            <div className="cat-overlay">
                <GreenScreenCat />
            </div>
            <NightClubDynamic />



            <style jsx>{`
        .scene-container {
          position: relative;
          width: 910px;
          height: 575px;
          margin: auto;
          overflow: hidden;
          background: black;
        }
        /* Make sure the SWF canvas fills the container */
        .scene-container :global(.swf-container) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        /* Overlay the cat at 30% size, centered */
        .cat-overlay {
            position: absolute;
            top: 26%;
            left: 42%;
            transform: translate(-50%, -50%) scale(0.3);
            width: 100%;
            height: 100%;
            pointer-events: none; /* so clicks pass through to the background */
            z-index: 30;
        }
      `}</style>
        </div>
    );
}
