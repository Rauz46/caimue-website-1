import { ChannelPage } from "@/components/ui/ChannelPage";

export default function EnnamoChannelPage() {
    return (
        <ChannelPage
            logo="/ennamo%20final.png"
            name="Ennamo"
            titleLines={["Original Tamil", "short films."]}
            description="Our Tamil short film channel by Caimue — original stories, fresh talent, and a build toward theatrical and OTT releases."
            longDescription="Ennamo is the Tamil counterpart to Ennitto. We produce original Tamil short films, discover Tamil talent, and tell stories that resonate with regional audiences while reaching for theatrical and streaming releases."
            accentFrom="#CCFBF1"
            accentTo="#0F766E"
            aspect="16 / 9"
            gallery={[
                { src: "/logos/ennamo/maxresdefault.jpg" },
                { src: "/logos/ennamo/Live%20a%20Little.jpg" },
                { src: "/logos/ennamo/kadhal%20gpt.webp" },
            ]}
            cta={{ text: "Visit Channel", href: "#", external: false }}
        />
    );
}
