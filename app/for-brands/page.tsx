import type { Metadata } from "next";
import { Smartphone, Languages, Eye, Clapperboard, Film, Briefcase, MessageCircle, PenLine, Video, Send, ChartColumn } from "lucide-react";
import { AudienceHero, AudienceSection, SectionHead, Steps, AudienceCard, Faq, LogoStrip } from "@/components/audience/AudienceParts";

// Copy: reference/content/v7-content/Caimue_Film_Website_Copy.docx, "For Brands page" (word for word; headings in Title Case).
// Left out until confirmed (yellow in the doc): the case cards under Proof and the starting-price note in the FAQ.
export const metadata: Metadata = {
    title: "Brand Micro-Series, Brand Films and Corporate Video | Caimue",
    description:
        "Caimue writes brands into micro-series and films that audiences choose to watch. Brand vertical series, brand films, integrations and corporate video in Tamil, Malayalam and English.",
};

const ICON = { size: 22, strokeWidth: 2 };

const LOGOS = [
    { src: "/logos/loglos/Ignitho-Updated-Logo.png", name: "Ignitho" },
    { src: "/logos/loglos/aventei.png", name: "Aventei" },
    { src: "/logos/loglos/piqual.png", name: "Piqual" },
    { src: "/logos/loglos/hael.png", name: "Hael" },
    { src: "/logos/loglos/xime.png", name: "XIME" },
    { src: "/logos/loglos/Prodeify-logo-final-768x280-1.png", name: "Prodeify" },
    { src: "/logos/loglos/cropped-Talentou-3.png", name: "Talentou" },
    { src: "/logos/loglos/Nuivio.png", name: "Nuivio" },
];

export default function ForBrandsPage() {
    return (
        <div className="min-h-screen">
            <AudienceHero
                title={<>Your Brand, <em>As A Series People Follow.</em></>}
            />

            {/* Why story */}
            <AudienceSection tone="tint">
                <SectionHead title="Attention Is Earned, One Episode At A Time." />
                <div className="au-cards au-cards--3">
                    <AudienceCard tone="purple" icon={<Smartphone {...ICON} />} title="Made For The Phone"
                        text="Vertical, one to two minutes, a hook at the end of every episode. Built for how people watch now." />
                    <AudienceCard tone="yellow" icon={<Languages {...ICON} />} title="In Their Language"
                        text="Tamil and Malayalam, written by people who live in the culture, not translated into it." />
                    <AudienceCard tone="orange" icon={<Eye {...ICON} />} title="Watched, Not Skipped"
                        text="The brand is part of the plot. Viewers follow the story and take the brand with them." />
                </div>
            </AudienceSection>

            {/* What we make for brands */}
            <AudienceSection tone="white">
                <SectionHead title="Three Ways To Work With Us." />
                <div className="au-cards au-cards--3">
                    <AudienceCard tone="purple" icon={<Clapperboard {...ICON} />} title="Brand Micro-Series"
                        text="An original vertical series set in your brand's world." listLabel="What you get"
                        list={["Concept and scripts", "5 to 10 episodes of 1 to 2 minutes", "Cast and shoot", "Edit, subtitles, thumbnails", "Release on your handles and ours", "Performance report"]} />
                    <AudienceCard tone="pink" icon={<Film {...ICON} />} title="Brand Films And Integrations"
                        text="Your brand written into one of our originals, or a short film of its own." listLabel="What you get"
                        list={["Story placement or a 3 to 8 minute film", "Release on Ennitto or Ennamo", "Cut-downs for Reels and Shorts"]} />
                    <AudienceCard tone="orange" icon={<Briefcase {...ICON} />} title="Corporate And Founder Films"
                        text="Company films, founder stories and launch videos for India and the US." listLabel="What you get"
                        list={["Script", "Shoot or remote capture", "Edit and motion graphics", "Versions for website, LinkedIn and events"]} />
                </div>
            </AudienceSection>

            {/* How it works */}
            <AudienceSection tone="tint">
                <SectionHead title="From Brief To Release In Weeks." />
                <Steps steps={[
                    { icon: <MessageCircle {...ICON} />, title: "Brief", text: "One call. Your brand, your audience, what you want people to feel." },
                    { icon: <PenLine {...ICON} />, title: "Story", text: "We come back with a concept, characters and an episode plan." },
                    { icon: <Video {...ICON} />, title: "Shoot", text: "Our cast and crew, or yours. AI-first production keeps it fast and lean." },
                    { icon: <Send {...ICON} />, title: "Release", text: "On your channels and ours, planned episode by episode." },
                    { icon: <ChartColumn {...ICON} />, title: "Report", text: "Views, watch time, shares and what the audience said." },
                ]} />
            </AudienceSection>

            {/* Proof */}
            <AudienceSection tone="white">
                <SectionHead title="15+ Brand Collaborations And Counting." />
                <LogoStrip logos={LOGOS} />
            </AudienceSection>

            {/* FAQ */}
            <AudienceSection tone="tint">
                <SectionHead title="Questions Brands Ask." />
                <Faq items={[
                    { q: "What does it cost?", a: "It depends on format, episodes and cast. Tell us your budget and we will shape the series to fit it." },
                    { q: "Which languages?", a: "Tamil and Malayalam are our home. We also make English content for founder stories and for US companies." },
                    { q: "Where does it release?", a: "On your handles, on our channels, or both. We plan the release with you." },
                    { q: "Who owns the content?", a: "Work made for your brand is yours. Our originals with your brand inside stay on our channels." },
                    { q: "How long does it take?", a: "A brand micro-series usually takes three to five weeks from brief to first episode. A brand film takes two to three weeks." },
                ]} />
            </AudienceSection>
        </div>
    );
}
