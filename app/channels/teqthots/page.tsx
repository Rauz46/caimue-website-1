import { ChannelPage } from "@/components/ui/ChannelPage";

export default function TeqThotsChannelPage() {
    return (
        <ChannelPage
            logo="/teqthots%20updated%20logo%20png.png"
            name="TeqThots"
            titleLines={["Conversations that", "build companies."]}
            description="Documentary-style conversations that capture how companies are built — deep dives into technology, strategy, and scale."
            longDescription="TeqThots documents the founders and builders behind companies. Through long-form conversations and behind-the-scenes stories, we explore the technology, strategy, and culture that take an idea to scale."
            accentFrom="#FDE2E4"
            accentTo="#BE185D"
            aspect="16 / 9"
            gallery={[
                { src: "/logos/teqthots/thumbnail.jpg" },
                { src: "/logos/teqthots/Image%20(16).jpg" },
                { src: "/logos/teqthots/Image%20(17).jpg" },
                { src: "/logos/teqthots/NEVER.jpg" },
                { src: "/logos/teqthots/Untitled-2.jpg" },
                { src: "/logos/teqthots/shared%20image%20(6).jpg" },
            ]}
            cta={{ text: "Visit Website", href: "https://www.teqthots.com/", external: true }}
        />
    );
}
