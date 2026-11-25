"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Handshake, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { LivelyCard } from "@/components/ui/LivelyCard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import "./track-record.css";

export function JourneySection() {
    const sectionRef = useRef(null);

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

                {/* Three stats on three purple cards; each card has its own disc colours */}
                <div className="home-wrap tr-cards grid grid-cols-1 md:grid-cols-3 gap-6 relative" style={{ zIndex: 10 }}>
                    <ReachCard />
                    <BrandCard />
                    <ArtistsCard />
                </div>
            </div>

        </section>
    );
}

// ── Track Record cards: one purple "lively" card per stat (title + badge, a visual rising from the bottom edge
//    with a disc pair behind it). Since 25 Nov the visuals are still: no rotation, no blur, nothing moves inside on
//    hover (the card itself lifts). Disc colours per card: .tr-d--yellow / --red / --orange in globals.css.

// People group: front person centred and tallest, the two flanking a step back at the card edges, all sharp
function Group({ l, c, r }: { l: [string, string]; c: [string, string]; r: [string, string] }) {
    return (
        <div className="lc-group">
            {/* eslint-disable @next/next/no-img-element */}
            <img className="lc-p" data-slot="l" src={l[0]} alt={l[1]} loading="lazy" decoding="async" />
            <img className="lc-p" data-slot="r" src={r[0]} alt={r[1]} loading="lazy" decoding="async" />
            <img className="lc-p" data-slot="c" src={c[0]} alt={c[1]} loading="lazy" decoding="async" />
            {/* eslint-enable @next/next/no-img-element */}
        </div>
    );
}

// Card 1 (cards 1 and 2 merged): 2M+ as the stat like the other cards, the 20+ films in its line; three films as a still poster fan
function ReachCard() {
    return (
        <LivelyCard
            tone="purple"
            className="tr-card tr-d--yellow"
            icon={<Play size={22} />}
            stat="2M+"
            text="Organic views across our channels, and 20+ original short films in Tamil and Malayalam."
            visualHeight={250}
            visual={
                <>
                    <div className="lc-poster lc-poster--l"><Image src="/images/Movies/Welcome Home.jpg" alt="Welcome Home" fill sizes="200px" /></div>
                    <div className="lc-poster lc-poster--r"><Image src="/images/Movies/Malsya Mandooka Mahamaham.jpg" alt="Malsya Mandooka Mahamaham" fill sizes="200px" /></div>
                    <div className="lc-poster lc-poster--c"><Image src="/images/Movies/Smile!.jpg" alt="Smile!" fill sizes="200px" /></div>
                </>
            }
        />
    );
}

// Card 2: Brand Collaborations — three people from the brand films
function BrandCard() {
    return (
        <LivelyCard
            tone="purple"
            className="tr-card tr-d--red"
            stat="15+"
            icon={<Handshake size={22} />}
            text="Brand collaborations, written into the story."
            visualHeight={260}
            visual={<Group l={["/cutouts/c-piqual.webp", "Piqual brand film"]} c={["/cutouts/c-hael.webp", "Hael brand film"]} r={["/cutouts/c-xime.webp", "XIME brand film"]} />}
        />
    );
}

// Card 3: Artists Discovered — three of the artists
function ArtistsCard() {
    return (
        <LivelyCard
            tone="purple"
            className="tr-card tr-d--orange"
            stat="25+"
            icon={<Sparkles size={22} />}
            text="Artists discovered: writers, directors and actors."
            visualHeight={260}
            visual={<Group l={["/cutouts/c-artist2.webp", "An artist discovered by Caimue"]} c={["/cutouts/c-megha.webp", "Megha, an artist discovered by Caimue"]} r={["/cutouts/c-sajan.webp", "An artist discovered by Caimue"]} />}
        />
    );
}
