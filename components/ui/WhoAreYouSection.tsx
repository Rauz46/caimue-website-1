"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Sparkles } from "lucide-react";
import Link from "next/link";
import { LivelyCard } from "@/components/ui/LivelyCard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import Image from "next/image";

// Shared card for the "Come Work With Us" paths: soft solid tint + corner disc pair
type PathCardProps = {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    description: string;
    icon: React.ReactNode;
    accent: string;      // solid accent colour (hex)
    accentSoft: string;  // tinted icon-badge background (hex)
    buttonBg: string;    // button fill
    buttonText: string;  // button label colour
    tone: "purple" | "pink";
    delay?: number;
};

const PathCard = ({
    eyebrow,
    titlePrefix,
    titleAccent,
    description,
    icon,
    accent,
    tone,
}: PathCardProps) => {
    const brand = tone === "purple";
    return (
        <LivelyCard
            tone={brand ? "purple" : "pink"}
            eyebrow={<>{icon}{eyebrow}</>}
            title={<>{titlePrefix} <span style={{ color: accent }}>{titleAccent}</span></>}
            icon={brand ? <Megaphone size={22} /> : <Sparkles size={22} />}
            text={description}
            action={
                <Link href="/contact" className="lc-btn">
                    Get In Touch
                    <ArrowRight className="lc-arrow" size={18} />
                </Link>
            }
        />
    );
};

// Card 1: Brand Owner
const BrandOwnerCard = () => (
    <PathCard
        eyebrow="For Brands"
        titlePrefix="Are you a"
        titleAccent="Brand Owner?"
        description="Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally."
        icon={<Megaphone size={14} strokeWidth={2.5} />}
        accent="#FFC633"
        accentSoft="#FFFFFF"
        tone="purple"
        buttonBg="#FFFFFF"
        buttonText="#5B299D"
    />
);

// Card 2: Artist
const ArtistCard = () => (
    <PathCard
        eyebrow="For Artists"
        titlePrefix="Are you an"
        titleAccent="Aspiring Artist?"
        description="Are you an upcoming artist? Do you have talent in acting, writing scripts, directing, or shooting? We discover individual artists and bring them together to create films under our production. Reach out."
        icon={<Sparkles size={14} strokeWidth={2.5} />}
        accent="#FFE89A"
        accentSoft="#FFFFFF"
        tone="pink"
        buttonBg="#5B299D"
        buttonText="#FFFFFF"
        delay={0.2}
    />
);

export default function WhoAreYouSection() {
    return (
        <section
            className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-visible -mt-1"
            style={{ background: "#F1E6FF" }}
        >
            {/* Grid Texture Overlay (same as Journey section) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles (same as Journey section) */}
            <HandDrawnScribbles />

            <div className="relative z-10">
                {/* HEADING */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="cm-rise cm-h2 font-serif"
                    >
                        Come Work With Us
                    </motion.h2>
                    <motion.p
                        className="font-sans text-[18px] font-medium text-[#4A3F5C] mt-1"
                    >
                        Pick your path below ↓
                    </motion.p>
                </div>

                {/* TWO CARD LAYOUT with scribble annotations */}
                <div className="relative home-wrap">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch">
                        <BrandOwnerCard />
                        <ArtistCard />
                    </div>

                    {/* ===== HANDWRITTEN SCRIBBLE ANNOTATIONS (outside cards) ===== */}

                    {/* Left scribble - "tell your story" with arrow pointing to Brand Owner */}
                    <motion.div
                        className="cm-decor-item absolute -left-[80px] top-[35%] hidden min-[1600px]:block pointer-events-none"
                    >
                        <div className="flex items-center gap-2">
                            <p className="font-serif italic text-[14px] text-orange-500/80 -rotate-6 leading-tight">
                                tell your<br />story here
                            </p>
                            {/* Curved arrow */}
                            <svg width="40" height="30" viewBox="0 0 40 30" className="text-orange-400/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M2 25 C10 25, 20 5, 35 10" strokeLinecap="round" />
                                <path d="M30 6 L35 10 L29 13" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Right scribble - "join the crew" with arrow pointing to Artist */}
                    <motion.div
                        className="cm-decor-item absolute -right-[80px] top-[35%] hidden min-[1600px]:block pointer-events-none"
                    >
                        <div className="flex items-center gap-2">
                            {/* Curved arrow */}
                            <svg width="40" height="30" viewBox="0 0 40 30" className="text-orange-400/70 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M2 25 C10 25, 20 5, 35 10" strokeLinecap="round" />
                                <path d="M30 6 L35 10 L29 13" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="font-serif italic text-[14px] text-orange-500/80 rotate-6 leading-tight">
                                join the<br />crew
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom-left scribble */}
                    <motion.div
                        className="cm-decor-item absolute -left-[60px] bottom-[5%] hidden min-[1600px]:block pointer-events-none"
                    >
                        <div className="flex flex-col items-end">
                            <p className="font-serif italic text-[13px] text-orange-500/70 -rotate-3 leading-tight">
                                content that<br />connects
                            </p>
                            <svg width="30" height="25" viewBox="0 0 30 25" className="text-orange-400/60 mt-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 2 C10 15, 20 20, 28 18" strokeLinecap="round" />
                                <path d="M24 14 L28 18 L23 20" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Bottom-right scribble */}
                    <motion.div
                        className="cm-decor-item absolute -right-[70px] bottom-[8%] hidden min-[1600px]:block pointer-events-none"
                    >
                        <div className="flex flex-col items-start">
                            <p className="font-serif italic text-[13px] text-orange-500/70 rotate-3 leading-tight">
                                your talent<br />matters
                            </p>
                            <svg width="30" height="25" viewBox="0 0 30 25" className="text-orange-400/60 mt-1 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 2 C10 15, 20 20, 28 18" strokeLinecap="round" />
                                <path d="M24 14 L28 18 L23 20" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
