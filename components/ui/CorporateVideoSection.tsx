"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Share2, Globe } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

const features = [
    { icon: Video, label: "Corporate Videos" },
    { icon: Share2, label: "Social Media Campaigns" },
    { icon: Globe, label: "Marketing Websites" },
];

// Standalone Digubi banner — light-purple background like the Track Record section
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-[88px] overflow-hidden"
            style={{ background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)" }}
        >
            {/* Grid Texture Overlay (same as Track Record section) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            <div className="relative z-10 max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-4"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 text-[#6D28D9] text-[13px] font-semibold tracking-wide mb-5">
                        Brand &amp; Corporate
                    </span>
                    <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3.25rem] leading-tight font-bold text-[#4C1D95] mb-4 md:whitespace-nowrap">
                        Our Corporate Video Services
                    </h2>
                    <p className="text-[#6B21A8] text-base md:text-lg leading-relaxed max-w-2xl">
                        Under <span className="font-semibold text-[#4C1D95]">Digubi</span>, we help companies show up
                        online — corporate films, founder stories, social campaigns and marketing sites that make brands
                        impossible to scroll past.
                    </p>
                </motion.div>

                {/* ── Digubi focal presentation (boxless) ── */}
                <div className="relative flex flex-col items-center text-center pt-6 pb-2">
                    {/* Spotlight glow behind the logo */}
                    <div
                        className="absolute top-2 left-1/2 -translate-x-1/2 w-[420px] max-w-[90vw] h-[300px] pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(124,58,237,0.22) 0%, rgba(245,158,11,0.12) 40%, transparent 70%)",
                        }}
                        aria-hidden
                    />

                    {/* Orbiting accent dots + sparkles */}
                    <motion.span
                        className="absolute left-1/2 top-16 h-2.5 w-2.5 rounded-full bg-amber-400/70 pointer-events-none"
                        style={{ marginLeft: "-150px" }}
                        animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden
                    />
                    <motion.span
                        className="absolute left-1/2 top-10 h-2 w-2 rounded-full bg-purple-500/60 pointer-events-none"
                        style={{ marginLeft: "160px" }}
                        animate={{ y: [0, 10, 0], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        aria-hidden
                    />
                    <motion.span
                        className="absolute left-1/2 top-24 text-purple-400/50 text-xl pointer-events-none select-none"
                        style={{ marginLeft: "200px" }}
                        animate={{ rotate: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden
                    >
                        ✦
                    </motion.span>

                    {/* Digubi logo — the hero, floating free */}
                    <motion.img
                        // eslint-disable-next-line @next/next/no-img-element
                        src="/logos/digubi-logo.png"
                        alt="Digubi — Digital Ubiquity"
                        className="relative z-10 h-24 md:h-28 w-auto object-contain mb-6 drop-shadow-[0_10px_30px_rgba(76,29,149,0.25)]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <p className="relative z-10 text-gray-600 text-[15px] md:text-base leading-relaxed max-w-xl mb-7">
                        We&apos;ve produced corporate videos for{" "}
                        <span className="font-semibold text-[#4C1D95]">Ignitho, Nuivio, Piqual</span> and more — and we
                        grow their online presence end to end.
                    </p>

                    {/* Feature pills */}
                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
                        {features.map(({ icon: Icon, label }) => (
                            <span
                                key={label}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-purple-200/60 text-[#6D28D9] text-[13px] font-semibold shadow-sm"
                            >
                                <Icon size={15} />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
