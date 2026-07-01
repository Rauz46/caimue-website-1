"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clapperboard } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// Stills used as a cinematic teaser reel for the upcoming feature films
const stills = [
    "/images/Movies/Vishudha Sakshi.jpg",
    "/images/Movies/Welcome Home.jpg",
    "/images/Movies/Harinarayana Kudu Charitham.jpg",
    "/images/Movies/Malsya Mandooka Mahamaham.jpg",
    "/images/Movies/Smile!.jpg",
    "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg",
];

function FilmFrame({ src }: { src: string }) {
    return (
        <div className="film-frame relative shrink-0 mx-2 rounded-md overflow-hidden aspect-video w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src.replace(/ /g, "%20")}
                alt="Upcoming feature film still"
                className="w-full h-full object-cover"
            />
            {/* Cinematic dim + purple tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b0836]/80 via-[#1b0836]/25 to-transparent" />
            {/* Coming-soon shimmer sweep */}
            <div className="film-shimmer absolute inset-0" />
        </div>
    );
}

// White "Feature Films — Coming Soon" banner (boxless, cinematic reel)
export function FeatureFilmsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const reel = [...stills, ...stills];

    return (
        <section ref={sectionRef} className="relative bg-white py-20 md:py-24 overflow-hidden">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px),
                                     linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Hand-drawn scribbles */}
            <HandDrawnScribbles />

            {/* Soft glow accents */}
            <div className="absolute -top-20 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-pink-300/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Header — boxless, centered */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl mx-auto px-4 text-center mb-12"
            >
                {/* Animated Coming Soon badge */}
                <motion.span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#4C1D95] text-[13px] font-semibold tracking-wide mb-6"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Clapperboard size={15} />
                    Coming Soon
                    <span className="flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="h-1 w-1 rounded-full bg-[#7C3AED]"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </span>
                </motion.span>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                    <span className="text-[#2D2D2D]">Feature </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#DB2777]">
                        Films
                    </span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Everything we&apos;ve built so far — short films, talent, and craft — leads here. Our first feature
                    films are in the works across Tamil, Malayalam, and English.
                    <span className="font-semibold text-[#4C1D95]"> The reel is just getting started.</span>
                </p>
            </motion.div>

            {/* Cinematic film-strip reel (full-bleed) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="film-reel relative z-10 -rotate-1"
            >
                {/* Top sprocket row */}
                <div className="sprockets" />

                <div className="film-body overflow-hidden">
                    <div className="film-track flex w-max items-center py-4">
                        {reel.map((src, i) => (
                            <FilmFrame key={`${src}-${i}`} src={src} />
                        ))}
                    </div>
                </div>

                {/* Bottom sprocket row */}
                <div className="sprockets" />
            </motion.div>

            <style>{`
                .film-reel {
                    background: linear-gradient(180deg, #1b0836, #2a0f52);
                    box-shadow: 0 20px 60px rgba(27, 8, 54, 0.35);
                }
                .sprockets {
                    height: 16px;
                    background-image: repeating-linear-gradient(
                        to right,
                        #e9d5ff 0 12px,
                        transparent 12px 34px
                    );
                    background-position: center;
                    opacity: 0.85;
                    margin: 0 6px;
                    border-radius: 2px;
                }
                .film-track {
                    animation: reelScroll 45s linear infinite;
                }
                .film-reel:hover .film-track {
                    animation-play-state: paused;
                }
                .film-frame {
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease;
                }
                .film-frame:hover {
                    transform: scale(1.04);
                    z-index: 2;
                }
                .film-shimmer {
                    background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
                    background-size: 250% 100%;
                    animation: shimmerSweep 4.5s ease-in-out infinite;
                }
                @keyframes shimmerSweep {
                    0% { background-position: 150% 0; }
                    60%, 100% { background-position: -150% 0; }
                }
                @keyframes reelScroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .film-track, .film-shimmer { animation: none; }
                }
            `}</style>
        </section>
    );
}
