import { Heart, type LucideIcon } from "lucide-react";
import "./brand-storyboard.css";

/**
 * "Put your brand in a story people follow" (18 Nov 2026): the three offers as a storyboard. Three frames side by
 * side, each in its offer's card colour and playing one motion graphic on a constant loop; under each, on the page,
 * the offer's title and line (always visible: no list, no accordion). Styles: brand-storyboard.css (.sb-*).
 */
export type StoryOffer = { icon: LucideIcon; label: string; description: string; tone: "purple" | "pink" | "orange" | "yellow" };

// every image appears once in this section
const EPISODES = ["/images/Movies/Smile!.jpg", "/images/Movies/Kadhal GPT.webp", "/images/Movies/ADS-369 Part 1.jpg"];
const FILMS = ["/images/Movies/Live a Little.jpg", "/images/Movies/Welcome Home.jpg"];
const FOUNDER = "/brands/founder-film.webp";

/* eslint-disable @next/next/no-img-element */
// Brand Micro-Series: a vertical series built around "your brand"; episodes swipe, a like pops
function FrameSeries() {
    return (
        <>
            <span className="sb-disc" />
            <div className="sb-phone">
                <div className="sb-phone__track">{[...EPISODES, EPISODES[0]].map((s, i) => <img key={i} src={s} alt="" loading="lazy" decoding="async" />)}</div>
                <span className="sb-like"><Heart fill="currentColor" strokeWidth={0} /></span>
            </div>
            <span className="sb-yours sb-yours--series">Your brand</span>
        </>
    );
}
// Brand Films And Integrations: a film plays and "your brand" settles into the scene itself
function FrameIntegration() {
    return (
        <>
            <span className="sb-disc" />
            <div className="sb-film">
                {FILMS.map((s, i) => <img key={s} className="sb-film__img" src={s} alt="" loading="lazy" decoding="async" style={{ ["--n" as string]: i } as React.CSSProperties} />)}
                <span className="sb-film__track"><i /></span>
                <span className="sb-yours sb-yours--film">Your brand<b className="sb-corners" /></span>
            </div>
        </>
    );
}
// Corporate And Founder Films: a founder on camera, framed with cinematic craft: the letterbox bars close in, the
// camera pushes in slowly, focus brackets find the face, a lower third slides in
function FrameFounder() {
    return (
        <>
            <span className="sb-disc" />
            <div className="sb-shot">
                <img className="sb-shot__img" src={FOUNDER} alt="" loading="lazy" decoding="async" />
                <span className="sb-bars sb-bars--top" />
                <span className="sb-bars sb-bars--bottom" />
                <span className="sb-focus" />
                <span className="sb-third"><i /><i /></span>
            </div>
        </>
    );
}
/* eslint-enable @next/next/no-img-element */
const FRAMES = [FrameSeries, FrameIntegration, FrameFounder];

export function BrandStoryboard({ offers }: { offers: StoryOffer[] }) {
    return (
        <ul className="sb" role="list">
            {offers.map((o, i) => {
                const Frame = FRAMES[i];
                const Icon = o.icon;
                return (
                    <li key={o.label} className={`sb-item sb--${o.tone}`}>
                        <div className="sb-frame" aria-hidden><Frame /></div>
                        <h3 className="sb-title font-serif">
                            <span className="sb-icon" aria-hidden><Icon size={18} /></span>
                            {o.label}
                        </h3>
                        <p className="sb-text">{o.description}</p>
                    </li>
                );
            })}
        </ul>
    );
}
