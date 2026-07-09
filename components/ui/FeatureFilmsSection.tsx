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

// Rotate the array so each wall row starts on a different poster
const rotate = (arr: string[], by: number) => [...arr.slice(by), ...arr.slice(0, by)];

function Poster({ src }: { src: string }) {
    return (
        <div className="poster relative shrink-0 rounded-xl overflow-hidden aspect-video w-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src.replace(/ /g, "%20")}
                alt="Upcoming feature film still"
                className="w-full h-full object-cover"
            />
            {/* Soft cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b0836]/45 via-transparent to-transparent" />
            {/* Glass edge */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/40 ring-inset pointer-events-none" />
            {/* Shimmer sweep */}
            <div className="poster-shimmer absolute inset-0" />
        </div>
    );
}

function WallRow({ posters, direction, duration }: { posters: string[]; direction: "left" | "right"; duration: number }) {
    const loop = [...posters, ...posters];
    return (
        <div className="flex w-max gap-5" style={{ animation: `${direction === "left" ? "wallLeft" : "wallRight"} ${duration}s linear infinite` }}>
            {loop.map((src, i) => (
                <Poster key={`${src}-${i}`} src={src} />
            ))}
        </div>
    );
}

// White "Feature Films — Coming Soon" banner with a 3D scrolling poster wall
export function FeatureFilmsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative bg-white pt-20 md:pt-24 pb-10 overflow-hidden">
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
                className="relative z-10 max-w-2xl mx-auto px-4 text-center mb-10"
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

            {/* ── 3D scrolling poster wall ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="poster-stage relative z-10"
            >
                {/* Fade the wall edges into the white page */}
                <div className="wall-fade">
                    <div className="wall-clip">
                        <div className="wall-plane flex flex-col gap-5">
                            <WallRow posters={rotate(stills, 0)} direction="left" duration={55} />
                            <WallRow posters={rotate(stills, 2)} direction="right" duration={70} />
                            <WallRow posters={rotate(stills, 4)} direction="left" duration={62} />
                        </div>
                    </div>
                </div>

                {/* Soft floor shadow to ground the wall */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-16 pointer-events-none"
                    style={{ background: "radial-gradient(50% 100% at 50% 50%, rgba(76,29,149,0.14) 0%, transparent 70%)", filter: "blur(10px)" }}
                />
            </motion.div>

            <style>{`
                .poster-stage {
                    perspective: 1500px;
                }
                .wall-fade {
                    -webkit-mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
                    mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
                }
                .wall-clip {
                    overflow: hidden;
                    padding: 28px 0 36px;
                    -webkit-mask-image: linear-gradient(180deg, transparent, #000 12%, #000 90%, transparent);
                    mask-image: linear-gradient(180deg, transparent, #000 12%, #000 90%, transparent);
                }
                .wall-plane {
                    transform: rotateX(24deg) rotateZ(-8deg) scale(1.12);
                    transform-style: preserve-3d;
                }
                .poster {
                    box-shadow: 0 18px 40px -12px rgba(27, 8, 54, 0.35), 0 6px 16px -8px rgba(27, 8, 54, 0.25);
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                }
                .poster:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 28px 55px -12px rgba(27, 8, 54, 0.45), 0 10px 24px -8px rgba(27, 8, 54, 0.3);
                    z-index: 2;
                }
                .poster-stage:hover .wall-plane > div {
                    animation-play-state: paused;
                }
                .poster-shimmer {
                    background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.16) 50%, transparent 70%);
                    background-size: 250% 100%;
                    animation: shimmerSweep 5s ease-in-out infinite;
                }
                @keyframes shimmerSweep {
                    0% { background-position: 150% 0; }
                    60%, 100% { background-position: -150% 0; }
                }
                @keyframes wallLeft {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes wallRight {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .wall-plane > div, .poster-shimmer { animation: none !important; }
                }
            `}</style>
        </section>
    );
}
