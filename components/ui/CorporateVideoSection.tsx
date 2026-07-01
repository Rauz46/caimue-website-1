"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// Real clients we've produced corporate / brand work for
const brands = [
    { name: "Ignitho", src: "/logos/loglos/Ignitho-Updated-Logo.png" },
    { name: "Nuivio", src: "/logos/loglos/Nuivio.png" },
    { name: "Piqual", src: "/logos/loglos/piqual.png" },
    { name: "Hael", src: "/logos/loglos/hael.png" },
    { name: "Prodeify", src: "/logos/loglos/Prodeify-logo-final-768x280-1.png" },
    { name: "Talentou", src: "/logos/loglos/cropped-Talentou-3.png" },
    { name: "Aventei", src: "/logos/loglos/aventei.png" },
    { name: "XIME", src: "/logos/loglos/xime.png" },
    { name: "Upcraft", src: "/logos/loglos/upcraft.png" },
];

function LogoCard({ src, name }: { src: string; name: string }) {
    return (
        <div className="brand-chip shrink-0 mx-3 flex items-center justify-center rounded-2xl bg-white px-7 h-[76px] w-[190px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={name} className="max-h-9 max-w-[130px] w-auto object-contain" />
        </div>
    );
}

// Standalone Digubi banner — light-purple background like the Track Record section
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Duplicate the list so the marquee loops seamlessly
    const marquee = [...brands, ...brands];

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

            {/* Soft glow accents */}
            <div className="absolute -top-24 left-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-[130px] pointer-events-none" />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            <div className="relative z-10">
                {/* Header block — centered, constrained */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center"
                >
                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 text-[#6D28D9] text-[11px] font-bold tracking-[0.18em] uppercase mb-5">
                        Brand & Corporate
                    </span>

                    {/* Heading — one line on desktop */}
                    <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3.25rem] leading-tight font-bold text-[#4C1D95] mb-6 md:whitespace-nowrap">
                        Our Corporate Video Services
                    </h2>

                    {/* Digubi logo — no box */}
                    <img
                        // eslint-disable-next-line @next/next/no-img-element
                        src="/logos/digubi-logo.png"
                        alt="Digubi — Digital Ubiquity"
                        className="h-12 md:h-14 w-auto object-contain mb-6 drop-shadow-sm"
                    />

                    {/* Description */}
                    <p className="text-[#6B21A8] text-base md:text-lg leading-relaxed max-w-2xl mb-2">
                        We&apos;ve created corporate videos for{" "}
                        <span className="font-semibold text-[#4C1D95]">Ignitho, Nuivio, Piqual</span> and more — and we
                        help brands grow their online presence through social media campaigns and marketing websites.
                    </p>
                </motion.div>

                {/* Infinite grayscale logo marquee (full-bleed) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="marquee relative mt-9 mb-10"
                >
                    <div className="marquee-track flex w-max items-center">
                        {marquee.map((b, i) => (
                            <LogoCard key={`${b.name}-${i}`} src={b.src} name={b.name} />
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center px-4"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors shadow-lg"
                    >
                        Know More
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>

            <style>{`
                .marquee {
                    /* Fade the strip out toward both edges */
                    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                    overflow: hidden;
                }
                .marquee-track {
                    animation: brandScroll 34s linear infinite;
                }
                .marquee:hover .marquee-track {
                    animation-play-state: paused;
                }
                .brand-chip {
                    filter: grayscale(1);
                    opacity: 0.72;
                    box-shadow: 0 4px 18px rgba(76, 29, 149, 0.08);
                    transition: filter 0.35s ease, opacity 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
                }
                .brand-chip:hover {
                    filter: grayscale(0);
                    opacity: 1;
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px rgba(76, 29, 149, 0.18);
                }
                @keyframes brandScroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track { animation: none; }
                }
            `}</style>
        </section>
    );
}
