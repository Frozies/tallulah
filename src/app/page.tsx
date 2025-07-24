// app/page.tsx
import Hero from "../components/Hero";

export const metadata = {
    title: "Peace Paws",
    description: "Enter the groove with our animated cosmic cat and daily wisdom.",
    openGraph: {
        title: "Peace & Paws",
        description: "Enter the groove with our animated cosmic cat and daily wisdom.",
        url: "https://yourdomain.com",
        siteName: "Peace & Paws",
        images: [
            {
                url: "https://yourdomain.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Peace & Paws – Cosmic Cat Wisdom",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function HomePage() {
    return <Hero />;
}
