// app/wisdom/page.tsx

import WisdomClient from "@/components/wisdom-client";

export const metadata = {
  title: 'Cosmic Cat Wisdom – Peace & Love',
  description: 'Hear daily cosmic cat wisdom spoken in authentic Animalese style.',
  openGraph: {
    title: 'Cosmic Cat Wisdom – Peace & Love',
    description: 'Hear daily cosmic cat wisdom spoken in authentic Animalese style.',
    url: 'https://tallulah.vercel.app/wisdom',
    siteName: 'Peace & Love',
    images: [
      {
        url: 'https://tallulah.vercel.app/og-wisdom.png',
        width: 1200,
        height: 630,
        alt: 'Cosmic Cat Wisdom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function WisdomPage() {
  return <WisdomClient />;
}
