import Image from "next/image";
import Link from "next/link";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HeroGrid } from "@/components/effects/HeroGrid";
import "./reel-hero.css";

/**
 * Homepage hero (chosen 23 Nov 2026 in /hero-lab): "streaming title page". A looping reel of our own films fills
 * the hero; the title block sits on the left on the logo purple, with the posters as a row under it.
 * The reel (17.65 s, 15 cuts) is cut in HyperFrames from the Ennitto teasers and trailers on
 * youtube.com/@ennitto. Muted, plays inline, loops on a hard cut; reduced-motion visitors get the poster frame.
 */

const POSTERS = [
    "/images/Movies/Vishudha Sakshi.jpg",
    "/images/Movies/ADS-369 Part 1.jpg",
    "/images/Movies/Malsya Mandooka Mahamaham.jpg",
    "/images/Movies/Welcome Home.jpg",
    "/images/Movies/Smile!.jpg",
    "/images/Movies/Live a Little.jpg",
    "/images/Movies/Harinarayana Kudu Charitham.jpg",
];
const title = (s: string) => s.split("/").pop()!.replace(/\.[a-z]+$/i, "");

export function ReelHero() {
    return (
        <section className="hlb">
            <video className="hlb-reel" autoPlay muted loop playsInline preload="auto" poster="/videos/hero-reel-poster.jpg" aria-hidden>
                {/* full-size reel for desktop screens, the 1280px one for phones and small laptops */}
                <source src="/videos/hero-reel-1920.webm" type="video/webm" media="(min-width: 1280px)" />
                <source src="/videos/hero-reel-1920.mp4" type="video/mp4" media="(min-width: 1280px)" />
                <source src="/videos/hero-reel.webm" type="video/webm" />
                <source src="/videos/hero-reel.mp4" type="video/mp4" />
            </video>
            <div className="hlb-tint" aria-hidden />
            <div className="hlb-shade" aria-hidden />

            {/* the live hero's decoration: grain, the Bauhaus corner piece (disc, ring and a yellow dot riding the ring)
                and the small stars. Nothing but the shapes sits over the reel. */}
            <div className="hlb-decor" aria-hidden>
                <div className="bg-noise opacity-10" />
                {/* the grid stays on the purple text side and fades out before the reel */}
                <HeroGrid className="hlb-grid opacity-40" />
                <span className="cm-hs cm-hs--big" />
                <span className="cm-hs cm-hs--ring" />
                <span className="cm-hs cm-hs--dot-y hlb-dot-y" />
                <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 right-1/4 text-purple-200/30 text-4xl">✦</div>
                    <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
                    <div className="absolute top-1/3 right-1/4 text-purple-200/30 text-xl">●</div>
                </div>
            </div>

            <div className="container hlb-inner">
                <div className="hlb-copy">
                    {/* the live hero's set doodles, kept to the open space beside the text (desktop only) */}
                    <div className="hlb-doodles" aria-hidden>
                        <FloatingScribbles />
                    </div>
                    <p className="cm-in hlb-kicker">Digital entertainment · Tamil · Malayalam</p>
                    <h1 className="hlb-h">
                        <span className="cm-line block">Stories Worth</span>
                        <span className="cm-line cm-line--2 block hlb-pink">The Scroll</span>
                    </h1>
                    <p className="cm-in cm-in--2 hlb-sub">
                        Caimue is a digital entertainment company. We make micro-series, short films and feature films in Tamil and Malayalam, with new artists in front of the camera and brands that want to be part of the story.
                    </p>
                    <div className="cm-in cm-in--2 hlb-ctas">
                        <Link href="/originals" className="hero-btn">Watch Our Originals</Link>
                        <Link href="/contact" className="hero-btn hero-btn--ghost">Work With Us</Link>
                    </div>
                </div>
                {/* id="hero-end": the homepage holds its first paint until the hero is parsed */}
                <ul id="hero-end" className="cm-in cm-in--3 hlb-strip" aria-label="Our films">
                    {POSTERS.map((p, i) => (
                        <li key={p} className="hlb-card">
                            <Image src={p} alt={`${title(p)} poster`} fill sizes="(max-width: 767px) 40vw, 14vw" className="object-cover" priority={i < 4} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
