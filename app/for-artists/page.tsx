import type { Metadata } from "next";
import { Drama, PenLine, Clapperboard, Scissors, Send, Handshake, Video, TrendingUp, Award, MonitorPlay, Film } from "lucide-react";
import { AudienceHero, AudienceSection, SectionHead, Steps, AudienceCard } from "@/components/audience/AudienceParts";
import { AudienceForm } from "@/components/audience/AudienceForm";

// Copy: reference/content/v7-content/Caimue_Film_Website_Copy.docx, "For Artists page" (word for word; headings in Title Case).
// Banners 2-4 have no heading in the doc, so each uses its banner name; the form uses the hero button's words.
// Left out until confirmed (yellow in the doc): the payment-terms line under What You Get.
export const metadata: Metadata = {
    title: "For Actors, Writers and Directors | Caimue",
};

const ICON = { size: 22, strokeWidth: 2 };

export default function ForArtistsPage() {
    return (
        <div className="min-h-screen">
            <AudienceHero
                badge="For artists"
                title={<>Your First Break Could Be <em>A One-Minute Episode.</em></>}
                sub="We make micro-series and short films in Tamil and Malayalam with new talent. 25+ artists have started with us. You could be next."
                cta={{ label: "Show Us Your Work", href: "#apply" }}
            />

            {/* Who we are looking for */}
            <AudienceSection tone="tint">
                <SectionHead title="Who We Are Looking For" />
                <div className="au-cards au-cards--4">
                    <AudienceCard tone="purple" icon={<Drama {...ICON} />} title="Actors"
                        text="Fresh faces and trained ones. Tamil or Malayalam. Send a reel or a one-minute self-tape." />
                    <AudienceCard tone="pink" icon={<PenLine {...ICON} />} title="Writers"
                        text="People who can tell a story in sixty seconds, and people with a feature script in the drawer." />
                    <AudienceCard tone="orange" icon={<Clapperboard {...ICON} />} title="Directors And DOPs"
                        text="Show us something you shot. A short, a reel, a music video." />
                    <AudienceCard tone="yellow" icon={<Scissors {...ICON} />} title="Editors And Musicians"
                        text="Fast hands and a feel for rhythm. Vertical editing is a plus." />
                </div>
            </AudienceSection>

            {/* How it works */}
            <AudienceSection tone="white">
                <SectionHead title="How It Works" />
                <Steps steps={[
                    { icon: <Send {...ICON} />, title: "Send Your Work", text: "Fill the form with links. No agents needed." },
                    { icon: <Handshake {...ICON} />, title: "We Meet", text: "If it fits a story on our slate, we call you." },
                    { icon: <Video {...ICON} />, title: "We Make Something Small", text: "A micro-series or a short. Real set, real release." },
                    { icon: <TrendingUp {...ICON} />, title: "You Grow With Us", text: "The people who do well on the small screen are the ones we take to the feature." },
                ]} />
            </AudienceSection>

            {/* What you get */}
            <AudienceSection tone="tint">
                <SectionHead title="What You Get" />
                <ul className="au-perks">
                    <li className="au-perk"><span className="au-step-icon" aria-hidden="true"><Award {...ICON} /></span><span>Credit on every release</span></li>
                    <li className="au-perk"><span className="au-step-icon" aria-hidden="true"><MonitorPlay {...ICON} /></span><span>Work published on Ennitto and Ennamo</span></li>
                    <li className="au-perk"><span className="au-step-icon" aria-hidden="true"><Film {...ICON} /></span><span>A path from micro-series to short film to feature</span></li>
                </ul>
            </AudienceSection>

            {/* Form */}
            <AudienceSection tone="white" id="apply">
                <SectionHead title="Show Us Your Work" />
                <AudienceForm
                    subject="Artist submission (For Artists page)"
                    submitLabel="Send"
                    rows={[
                        [{ name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
                         { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2" }],
                        [{ name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
                         { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" }],
                        [{ name: "role", label: "I am a", type: "select", required: true, options: ["Actor", "Writer", "Director", "DOP", "Editor", "Musician"] },
                         { name: "languages", label: "Languages", type: "text", required: true }],
                        [{ name: "links", label: "Links to your work", type: "textarea", required: true }],
                        [{ name: "message", label: "Message", type: "textarea" }],
                    ]}
                />
            </AudienceSection>
        </div>
    );
}
