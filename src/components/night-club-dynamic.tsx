"use client"
import dynamic from 'next/dynamic';

const NightClub = dynamic(
    () => import('./night-club'),
    { ssr: false,
        loading: () => (
            <div
                style={{
                    width: 910,
                    height: 575,
                    background: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Loading…
            </div>
        )
    }
);

export default function NightClubDynamic() {
    return <NightClub />;
}