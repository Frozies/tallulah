// src/components/SimpleSpotifyEmbed.tsx
"use client";

export default function SimpleSpotifyEmbed({
                                               playlistId = "3H6NcsAmauZND2yCH3Ubmm", // default playlist
                                               width = "100%",
                                               height = 152,
                                               testId = "embed-iframe",
                                           }: {
    playlistId?: string;
    width?: string | number;
    height?: number;
    testId?: string;
}) {
    return (
        <iframe
            data-testid={testId}
            style={{ borderRadius: 12 }}
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
            width={width}
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
        />
    );
}
