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

// 8 panels around the ring (repeat two stills to close the circle)
const ringPosters = [...stills, stills[1], stills[4]];

// White "Feature Films — Coming Soon" banner with a 3D rotating poster carousel
export function FeatureFilmsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative bg-white pt-20 md:pt-24 pb-14 overflow-hidden">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#4C1D95 1px, transparent 1px),
                                     linear-gradient(90deg, #4C1D95 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
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
                className="relative z-10 max-w-2xl mx-auto px-4 text-center mb-6"
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

            {/* ── 3D rotating film carousel ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative z-10"
            >
                <div className="ring-stage">
                    <div className="ring-tilt">
                        <div className="ring">
                            {ringPosters.map((src, i) => (
                                <div
                                    key={`${src}-${i}`}
                                    className="ring-poster"
                                    style={{ transform: `rotateY(${i * 45}deg) translateZ(var(--ring-radius))` }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={src.replace(/ /g, "%20")}
                                        alt="Upcoming feature film still"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Cinematic vignette */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0836]/50 via-transparent to-transparent" />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Floor shadow to ground the carousel */}
                <div
                    className="mx-auto -mt-6 w-[min(640px,80vw)] h-14 pointer-events-none"
                    style={{
                        background: "radial-gradient(50% 100% at 50% 50%, rgba(76,29,149,0.18) 0%, transparent 70%)",
                        filter: "blur(8px)",
                    }}
                />
            </motion.div>

            <style>{`
                .ring-stage {
                    --ring-poster-w: 300px;
                    --ring-radius: 400px;
                    perspective: 1600px;
                    height: 380px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ring-tilt {
                    transform: rotateX(-12deg);
                    transform-style: preserve-3d;
                }
                .ring {
                    position: relative;
                    width: var(--ring-poster-w);
                    height: calc(var(--ring-poster-w) * 9 / 16);
                    transform-style: preserve-3d;
                    animation: ringSpin 48s linear infinite;
                }
                .ring-stage:hover .ring {
                    animation-play-state: paused;
                }
                .ring-poster {
                    position: absolute;
                    inset: 0;
                    border-radius: 14px;
                    overflow: hidden;
                    background: #1b0836;
                    filter: drop-shadow(0 22px 24px rgba(27, 8, 54, 0.3));
                }
                @keyframes ringSpin {
                    from { transform: rotateY(0deg); }
                    to   { transform: rotateY(360deg); }
                }
                @media (max-width: 768px) {
                    .ring-stage {
                        --ring-poster-w: 190px;
                        --ring-radius: 255px;
                        height: 280px;
                        perspective: 1100px;
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .ring { animation: none !important; }
                }
            `}</style>
        </section>
    );
}
