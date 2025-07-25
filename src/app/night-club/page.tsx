import Script from "next/script";
import ClubScene from "@/components/ClubScene";
import Layout from "@/components/Layout";
import SimpleSpotifyEmbed from "@/components/SpotifyPlayer";
export const metadata = {
    title: {
        default: "Peace & Love Nightclub",
        template: "%s | Peace & Love",
    },
    description:
        "Step into the virtual dance‑floor of Peace & Love: our cosmic cat‑led nightclub with animated beats, immersive visuals, and daily doses of feline wisdom.",
    viewport: "width=device-width, initial-scale=1",
    manifest: "/site.webmanifest",
    themeColor: "#000000",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    alternates: {
        canonical: "https://yourdomain.com/nightclub",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: "Peace & Love Nightclub",
        description:
            "Step into the virtual dance‑floor of Peace & Love: our cosmic cat‑led nightclub with animated beats, immersive visuals, and daily doses of feline wisdom.",
        url: "https://yourdomain.com/nightclub",
        siteName: "Peace & Love",
        images: [
            {
                url: "https://yourdomain.com/og-image-nightclub.png",
                width: 1200,
                height: 630,
                alt: "Peace & Love Nightclub – Cosmic Cat Dance Floor",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};
export default function Page() {
    return (
        <div>
            <Script id="ruffle-config" strategy="beforeInteractive">
                {`
                  window.RufflePlayer = window.RufflePlayer || {};
                  window.RufflePlayer.config = {
                    autoplay: "on",
                    splashScreen: false,
                    preloader: false,
                    unmuteOverlay: "hidden",
                    warnOnUnsupportedContent: false
                  };
                `}
            </Script>

            <Script
                src="https://unpkg.com/@ruffle-rs/ruffle"
                strategy="beforeInteractive"
            />
            <Layout>
                <SimpleSpotifyEmbed />
                <div className="overflow-hidden -left-44 absolute md:overflow-auto  md:relative md:left-0 pt-5">
                    <ClubScene/>
                </div>
            </Layout>
        </div>
    );
}