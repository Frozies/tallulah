import Script from "next/script";
import ClubScene from "@/components/ClubScene";
import Layout from "@/components/Layout";
import SimpleSpotifyEmbed from "@/components/SpotifyPlayer";

export default function Page() {
    return (
        <div>
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