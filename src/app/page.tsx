// app/page.tsx
import Hero from "../components/Hero";

export const metadata = {
    title: "Peace Paws",
    description: "Enter the groove with our animated cosmic cat and daily wisdom.",
    openGraph: {
        title: "Peace & Love",
        description: "Enter the groove with our animated cosmic cat and daily wisdom.",
        url: "https://tallulah.vercel.app",
        siteName: "Peace & Love",
        images: [
            {
                url: "https://tallulah.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Peace & Love – Cosmic Cat Wisdom",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function HomePage() {
    return <Hero />;
}
