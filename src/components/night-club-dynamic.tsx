"use client"
import dynamic from 'next/dynamic';

const NightClub = dynamic(
    () => import('./night-club'),
    { ssr: false }  // only run in the browser
);

export default function NightClubDynamic() {
    return <NightClub />;
}