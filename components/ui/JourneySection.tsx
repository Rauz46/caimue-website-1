"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Handshake, Play, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { LivelyCard } from "@/components/ui/LivelyCard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";

export function JourneySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
            style={{ background: "#F1E6FF" }}
        >
            <SectionDownArrow />

            {/* Grid Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            <div className="relative" style={{ zIndex: 10 }}>
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Loved by Audiences Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{ background: "#EAE0FB" }}
                    >
                        <span
                            className="text-[13px] font-semibold"
                            style={{ color: "#5B299D" }}
                        >
                            Loved by audiences
                        </span>
                    </motion.div>

                    {/* Main Heading with Small Caps */}
                    <motion.h2
                        className="cm-rise cm-h2 font-serif mb-5"
                    >
                        2 Million Views, Zero Ad Spend
                    </motion.h2>

                    <motion.div
                        className="max-w-[750px] mx-auto font-sans text-lg leading-relaxed [text-wrap:balance]"
                        style={{ color: "#4A3F5C" }}
                    >
                        <p>
                            Every view earned by the story, not bought.
                        </p>
                    </motion.div>
                </div>

                {/* Four stats, one card each */}
                <div className="home-wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative" style={{ zIndex: 10 }}>
                    <FilmsCard isInView={isInView} />
                    <ViewsCard />
                    <BrandCard isInView={isInView} />
                    <ArtistsCard isInView={isInView} />
                </div>
            </div>

        </section>
    );
}

// ── Track Record cards: home "lively" cards (solid colour, title + badge,
//    a visual rising from the bottom edge with the disc pair behind it)
// Shared by all three Track Record cards: three slots (left, centre, right)
// on one real 3D stage. Each step the left item glides to the front, the front
// one to the right, the right one round the back to the left. Layering comes
// from 3D depth, so items pass in front of / behind each other smoothly.
const SLOTS = ["l", "c", "r"] as const;
// item i (in initial slot order l, c, r) sits in slot (i + step) mod 3
const slotFor = (i: number, step: number) => SLOTS[(i + step) % 3];

// People group: the pushed layout (front person centred and tallest, the two
// flanking a step back at the card edges). Slot styles: .lc-p[data-slot].
function Group({ l, c, r, offsetMs = 0 }: { l: [string, string]; c: [string, string]; r: [string, string]; offsetMs?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    // automatic, like cards 1 and 2; each card has its own offset so no two switch together
    const step = useAutoRotation(ref, offsetMs);
    return (
        <div className="lc-group" ref={ref}>
            {/* eslint-disable @next/next/no-img-element */}
            {[l, c, r].map((p, i) => (
                <img key={p[0]} className="lc-p" data-slot={slotFor(i, step)} src={p[0]} alt={p[1]} loading="lazy" decoding="async" />
            ))}
            {/* eslint-enable @next/next/no-img-element */}
        </div>
    );
}

// Cards 1 and 2: the same three-slot rotation as cards 3 and 4 (one item in focus, two behind),
// but on the vertical axis and automatic: every 3.9s the top item comes forward to the centre, the
// centre one steps back to the bottom, and the bottom one goes round the back to the top.
// Runs only while the card is on screen and the tab is visible; reduced motion stays still.
const VSLOTS = ["t", "c", "b"] as const;
const vslotFor = (i: number, step: number) => VSLOTS[(i + step) % 3];
const AUTO_EVERY = 3900;
// offsetMs staggers each card so the two never switch at the same moment
function useAutoRotation(ref: React.RefObject<HTMLElement | null>, offsetMs = 0) {
    const [step, setStep] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let timer: number | undefined;
        let lead: number | undefined;
        const tick = () => { if (!document.hidden) setStep((v) => v + 1); };
        const start = () => {
            if (timer !== undefined || lead !== undefined) return;
            lead = window.setTimeout(() => { lead = undefined; tick(); timer = window.setInterval(tick, AUTO_EVERY); }, AUTO_EVERY + offsetMs);
        };
        const stop = () => { window.clearTimeout(lead); window.clearInterval(timer); lead = timer = undefined; };
        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.25 });
        io.observe(el);
        return () => { stop(); io.disconnect(); };
    }, [ref, offsetMs]);
    return step;
}

function VerticalFlow({ items, kind, offsetMs = 0 }: { items: [string, string][]; kind: "poster" | "plate"; offsetMs?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const step = useAutoRotation(ref, offsetMs);
    return (
        <div className={`lc-vflow lc-vflow--${kind}`} ref={ref}>
            {items.map(([src, alt], i) => (
                <div key={src} className="lc-vflow-item" data-slot={vslotFor(i, step)}>
                    {kind === "poster" ? (
                        <Image src={src} alt={alt} fill sizes="220px" />
                    ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={alt} loading="lazy" decoding="async" />
                    )}
                </div>
            ))}
        </div>
    );
}

// Card 1: Original short films — three posters
function FilmsCard(_: { isInView: boolean }) {
    return (
        <LivelyCard
            tone="purple"
            stat="20+"
            icon={<Film size={22} />}
            text="Original short films in Tamil and Malayalam."
            visualHeight={250}
            visual={
                <VerticalFlow
                    kind="poster"
                    items={[
                        ["/images/Movies/Smile!.jpg", "Smile!"],
                        ["/images/Movies/Welcome Home.jpg", "Welcome Home"],
                        ["/images/Movies/Malsya Mandooka Mahamaham.jpg", "Malsya Mandooka Mahamaham"],
                    ]}
                />
            }
        />
    );
}

// Card 2: Organic views — the three channels' logo plates (same white plate as the channel cards)
function ViewsCard() {
    return (
        <LivelyCard
            tone="yellow"
            stat="2M+"
            icon={<Play size={22} />}
            text="Organic views across our channels."
            visualHeight={250}
            visual={
                <VerticalFlow
                    kind="plate"
                    offsetMs={1950}
                    items={[
                        ["/ennitto%20final.png", "Ennitto"],
                        ["/ennamo%20new.png", "Ennamo"],
                        ["/logos/teqdots-logo.png", "TeqDots"],
                    ]}
                />
            }
        />
    );
}

// Card 3: Brand Collaborations — three people from the brand films
function BrandCard(_: { isInView: boolean }) {
    return (
        <LivelyCard
            tone="pink"
            stat="15+"
            icon={<Handshake size={22} />}
            text="Brand collaborations, written into the story."
            visualHeight={260}
            visual={<Group offsetMs={975} l={["/cutouts/c-piqual.webp", "Piqual brand film"]} c={["/cutouts/c-hael.webp", "Hael brand film"]} r={["/cutouts/c-xime.webp", "XIME brand film"]} />}
        />
    );
}

// Card 4: Artists Discovered — three of the artists
function ArtistsCard(_: { isInView: boolean }) {
    return (
        <LivelyCard
            tone="orange"
            stat="25+"
            icon={<Sparkles size={22} />}
            text="Artists discovered: writers, directors and actors."
            visualHeight={260}
            visual={<Group offsetMs={2925} l={["/cutouts/c-artist2.webp", "An artist discovered by Caimue"]} c={["/cutouts/c-megha.webp", "Megha, an artist discovered by Caimue"]} r={["/cutouts/c-sajan.webp", "An artist discovered by Caimue"]} />}
        />
    );
}
