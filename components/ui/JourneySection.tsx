"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Handshake, Sparkles, Star } from "lucide-react";
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
                            Loved by Audiences
                        </span>
                    </motion.div>

                    {/* Main Heading with Small Caps */}
                    <motion.h2
                        className="cm-rise cm-h2 font-serif mb-5"
                    >
                        Our Track Record
                    </motion.h2>

                    {/* Sub-heading - Exactly 2 lines */}
                    <motion.div
                        className="max-w-[750px] mx-auto font-sans text-lg leading-relaxed"
                        style={{ color: "#4A3F5C" }}
                    >
                        <p>
                            We've produced films, promoted brands, and discovered talent across Tamil, Malayalam, and English. Here's our journey as we build toward feature films.
                        </p>
                    </motion.div>
                </div>

                {/* Three Cards */}
                <div className="home-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 relative" style={{ zIndex: 10 }}>
                    {/* Card 1: Films & Views */}
                    <FilmsCard isInView={isInView} />

                    {/* Card 2: Brand Collaborations */}
                    <BrandCard isInView={isInView} />

                    {/* Card 3: Artists Discovered */}
                    <ArtistsCard isInView={isInView} />
                </div>
            </div>

        </section>
    );
}

// Rotates the front image only while the card is hovered (mouse/pen), every
// 2.4s. Two guards keep quick in-and-out movement calm:
//  - hover intent: the first swap only fires if the pointer stays 400ms, so
//    brushing across the card does nothing;
//  - cooldown: a swap never starts within 2.4s of the previous one (the 1s
//    glide plus a rest), so re-entering mid-glide never stacks swaps.
// Leaving stops further swaps; a glide already running finishes smoothly.
// Touch and reduced motion stay static.
const SWAP_EVERY = 2400;
const HOVER_INTENT = 400;
function useHoverRotation(ref: React.RefObject<HTMLElement | null>) {
    const [step, setStep] = useState(0);
    useEffect(() => {
        const card = ref.current?.closest(".lc");
        if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let first: number | undefined;
        let interval: number | undefined;
        let lastSwap = -Infinity;
        const swap = () => { lastSwap = performance.now(); setStep((v) => v + 1); };
        const stop = () => { window.clearTimeout(first); window.clearInterval(interval); first = interval = undefined; };
        const enter = (e: Event) => {
            if ((e as PointerEvent).pointerType === "touch" || interval !== undefined || first !== undefined) return;
            const wait = Math.max(HOVER_INTENT, lastSwap + SWAP_EVERY - performance.now());
            first = window.setTimeout(() => {
                first = undefined;
                swap();
                interval = window.setInterval(swap, SWAP_EVERY);
            }, wait);
        };
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", stop);
        return () => { stop(); card.removeEventListener("pointerenter", enter); card.removeEventListener("pointerleave", stop); };
    }, [ref]);
    return step;
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
function Group({ l, c, r }: { l: [string, string]; c: [string, string]; r: [string, string] }) {
    const ref = useRef<HTMLDivElement>(null);
    const step = useHoverRotation(ref);
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

// Card 1: Films & Views — a 3D stacked deck of posters
function FilmsCard(_: { isInView: boolean }) {
    // in slot order: left, centre, right
    const deck: [string, string][] = [
        ["/images/Movies/Smile!.jpg", "Smile!"],
        ["/images/Movies/Welcome Home.jpg", "Welcome Home"],
        ["/images/Movies/Malsya Mandooka Mahamaham.jpg", "Malsya Mandooka Mahamaham"],
    ];
    const ref = useRef<HTMLDivElement>(null);
    const step = useHoverRotation(ref);
    return (
        <LivelyCard
            tone="purple"
            stat="20+"
            title="Short Films, 2M+ Views"
            icon={<Film size={22} />}
            text="Original short films that have crossed 2 million organic views on YouTube."
            visualHeight={240}
            visual={
                <div className="lc-flow" ref={ref}>
                    {deck.map(([src, alt], i) => (
                        <div key={src} className={`lc-flow-card lc-flow-card--${slotFor(i, step)}`}>
                            <Image src={src} alt={alt} fill sizes="240px" />
                        </div>
                    ))}
                </div>
            }
        />
    );
}

// Card 2: Brand Collaborations — three people from the brand films
function BrandCard(_: { isInView: boolean }) {
    return (
        <LivelyCard
            tone="pink"
            stat="15+"
            title="Brand Collaborations"
            icon={<Handshake size={22} />}
            text="Brand stories woven naturally into films and TeqDots — never feeling like ads."
            visualHeight={260}
            visual={<Group l={["/cutouts/c-piqual.webp", "Piqual brand film"]} c={["/cutouts/c-hael.webp", "Hael brand film"]} r={["/cutouts/c-xime.webp", "XIME brand film"]} />}
        />
    );
}

// Card 3: Artists Discovered — three of the artists
function ArtistsCard(_: { isInView: boolean }) {
    return (
        <LivelyCard
            tone="orange"
            stat="25+"
            title="Artists Discovered"
            icon={<Sparkles size={22} />}
            text="Writers, directors, and actors creating under our production."
            visualHeight={260}
            visual={<Group l={["/cutouts/c-artist2.webp", "An artist discovered by Caimue"]} c={["/cutouts/c-megha.webp", "Megha, an artist discovered by Caimue"]} r={["/cutouts/c-sajan.webp", "An artist discovered by Caimue"]} />}
        />
    );
}
