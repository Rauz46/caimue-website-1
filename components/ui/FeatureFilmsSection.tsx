"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clapperboard, Film } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// Stills used as a cinematic teaser reel for the upcoming feature films
const reel = [
    { src: "/images/Movies/Vishudha Sakshi.jpg", title: "Vishudha Sakshi", meta: "1 Lakh+ views" },
    { src: "/images/Movies/Welcome Home.jpg", title: "Welcome Home", meta: "100K views & counting" },
    { src: "/images/Movies/Harinarayana Kudu Charitham.jpg", title: "Harinarayana Kudu Charitham", meta: "3 Lakhs+ views" },
    { src: "/images/Movies/Malsya Mandooka Mahamaham.jpg", title: "Malsya Mandooka Mahamaham", meta: "From the CAIMUE reel" },
    { src: "/images/Movies/Smile!.jpg", title: "Smile!", meta: "From the CAIMUE reel" },
    { src: "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg", title: "Nadha Nee Varum Kaalocha Kelkuvaan", meta: "1 Lakh+ views" },
];

const AUTOPLAY_MS = 4200;

// Light "Feature Films — Coming Soon" banner: checked bg, doodles, 3D coverflow
export function FeatureFilmsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const n = reel.length;

    // Auto-advance; timer restarts whenever the active card changes
    useEffect(() => {
        if (!isInView || paused) return;
        const t = setTimeout(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
        return () => clearTimeout(t);
    }, [active, paused, isInView, n]);

    const activeStill = reel[active];

    return (
        <section ref={sectionRef} className="relative bg-white pt-20 md:pt-24 pb-0 overflow-hidden">
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

            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl mx-auto px-4 text-center mb-6"
            >
                {/* Coming Soon badge with a "live" pulse */}
                <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-purple-100 text-[#4C1D95] text-[13px] font-semibold tracking-[0.15em] uppercase mb-6 shadow-[0_4px_20px_rgba(147,51,234,0.18)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                    </span>
                    Coming Soon
                    <Clapperboard size={14} className="text-[#7C3AED]" />
                </span>

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

            {/* ── 3D coverflow carousel ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative z-10"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Doodles hugging the carousel */}
                <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
                    {/* Curved arrow + handwritten note pointing at the reel */}
                    <motion.div
                        className="absolute left-[8%] top-[-14px] flex items-start gap-1"
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="font-handwriting text-lg text-[#7C3AED] rotate-[-8deg]">our reel so far!</span>
                        <svg className="w-14 h-14 text-[#7C3AED] mt-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <path d="M15,20 Q60,15 70,55" />
                            <path d="M58,48 L71,58 L78,44" />
                        </svg>
                    </motion.div>

                    {/* Twinkling sparkles */}
                    {[
                        { left: "22%", top: "8%", delay: 0, size: "w-5 h-5", color: "text-yellow-400" },
                        { left: "76%", top: "4%", delay: 0.7, size: "w-6 h-6", color: "text-pink-500" },
                        { left: "84%", top: "52%", delay: 1.4, size: "w-4 h-4", color: "text-purple-500" },
                        { left: "14%", top: "58%", delay: 2.1, size: "w-4 h-4", color: "text-yellow-400" },
                    ].map((s, i) => (
                        <motion.svg
                            key={i}
                            className={`absolute ${s.size} ${s.color}`}
                            style={{ left: s.left, top: s.top }}
                            animate={{ scale: [0.6, 1.15, 0.6], rotate: [0, 20, 0], opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                        </motion.svg>
                    ))}

                    {/* Film-strip doodle, right side */}
                    <motion.svg
                        className="absolute right-[7%] top-[10%] w-16 h-16 text-pink-500 opacity-70"
                        animate={{ rotate: [8, -4, 8] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path d="M15,35 Q50,25 85,35 L85,70 Q50,80 15,70 Z" />
                        <line x1="15" y1="44" x2="85" y2="44" />
                        <line x1="15" y1="61" x2="85" y2="61" />
                        <line x1="38" y1="42" x2="38" y2="63" />
                        <line x1="62" y1="42" x2="62" y2="63" />
                        <circle cx="26" cy="39" r="1.5" fill="currentColor" />
                        <circle cx="50" cy="37" r="1.5" fill="currentColor" />
                        <circle cx="74" cy="39" r="1.5" fill="currentColor" />
                    </motion.svg>

                    {/* Popcorn doodle, bottom left */}
                    <motion.svg
                        className="absolute left-[6%] bottom-[6%] w-14 h-14 text-purple-500 opacity-70"
                        animate={{ y: [0, -6, 0], rotate: [-6, 4, -6] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    >
                        <path d="M30,45 L36,85 L64,85 L70,45" />
                        <line x1="42" y1="45" x2="45" y2="85" />
                        <line x1="58" y1="45" x2="55" y2="85" />
                        <circle cx="35" cy="38" r="8" />
                        <circle cx="50" cy="32" r="9" />
                        <circle cx="65" cy="38" r="8" />
                        <circle cx="50" cy="20" r="6" />
                    </motion.svg>
                </div>

                <div className="cf-stage">
                    {reel.map((item, i) => {
                        const offset = (((i - active) % n) + n) % n; // 0..5
                        const pos = offset > n / 2 ? offset - n : offset; // -2..3
                        const isCenter = pos === 0;
                        const hidden = Math.abs(pos) > 2;
                        return (
                            <button
                                key={item.src}
                                type="button"
                                aria-label={isCenter ? item.title : `Show ${item.title}`}
                                onClick={() => setActive(i)}
                                className={`cf-card ${isCenter ? "cf-card--center" : ""}`}
                                style={{
                                    transform: `translate(-50%, -50%) translateX(calc(${pos} * var(--cf-gap))) translateZ(calc(${-Math.abs(pos)} * var(--cf-depth))) rotateY(${pos * -30}deg)`,
                                    zIndex: 10 - Math.abs(pos),
                                    opacity: hidden ? 0 : 1,
                                    pointerEvents: hidden ? "none" : "auto",
                                    filter: isCenter ? "brightness(1)" : "brightness(0.92) saturate(0.8)",
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.src.replace(/ /g, "%20")}
                                    alt={`${item.title} — film still`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b0836]/40 via-transparent to-transparent" />
                            </button>
                        );
                    })}
                </div>

                {/* Floor shadow to ground the carousel */}
                <div
                    className="mx-auto -mt-16 w-[min(720px,85vw)] h-16 pointer-events-none"
                    style={{
                        background: "radial-gradient(50% 100% at 50% 50%, rgba(76,29,149,0.20) 0%, transparent 70%)",
                        filter: "blur(10px)",
                    }}
                />

                {/* Active title + segmented progress (story-style) */}
                <div className="relative z-10 flex flex-col items-center gap-3 mt-2 px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStill.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="text-center"
                        >
                            <div className="font-serif text-lg md:text-xl font-bold text-[#2D2D2D] tracking-wide">
                                {activeStill.title}
                            </div>
                            <div className="text-[12px] uppercase tracking-[0.2em] text-[#7C3AED] mt-1 flex items-center justify-center gap-1.5">
                                <Film size={11} />
                                {activeStill.meta}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-1.5">
                        {reel.map((item, i) => (
                            <button
                                key={item.src}
                                type="button"
                                aria-label={`Go to ${item.title}`}
                                onClick={() => setActive(i)}
                                className="h-[3px] w-8 md:w-10 rounded-full bg-purple-200/70 overflow-hidden"
                            >
                                {i === active && (
                                    <span
                                        key={`fill-${active}`}
                                        className="block h-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777] cf-progress"
                                        style={{ animationPlayState: paused ? "paused" : "running" }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            <style>{`
                .cf-stage {
                    --cf-w: 460px;
                    --cf-gap: 260px;
                    --cf-depth: 210px;
                    position: relative;
                    height: calc(var(--cf-w) * 9 / 16 + 60px);
                    perspective: 1500px;
                    transform-style: preserve-3d;
                }
                .cf-card {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    width: var(--cf-w);
                    aspect-ratio: 16 / 9;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #f3e8ff;
                    border: 1px solid rgba(124, 58, 237, 0.12);
                    cursor: pointer;
                    transition:
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.8s ease,
                        filter 0.8s ease;
                    box-shadow: 0 24px 48px rgba(76, 29, 149, 0.22);
                    will-change: transform;
                }
                .cf-card--center {
                    border-color: rgba(147, 51, 234, 0.35);
                    box-shadow:
                        0 0 0 1px rgba(147, 51, 234, 0.15),
                        0 0 60px rgba(147, 51, 234, 0.28),
                        0 32px 64px rgba(76, 29, 149, 0.3);
                }
                .cf-progress {
                    animation: cfFill ${AUTOPLAY_MS}ms linear forwards;
                    transform-origin: left;
                }
                @keyframes cfFill {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
                .cf-ticker {
                    display: inline-flex;
                    animation: cfTicker 40s linear infinite;
                }
                @keyframes cfTicker {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @media (max-width: 768px) {
                    .cf-stage {
                        --cf-w: 260px;
                        --cf-gap: 150px;
                        --cf-depth: 140px;
                        perspective: 1000px;
                        height: calc(var(--cf-w) * 9 / 16 + 50px);
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .cf-ticker { animation: none; }
                    .cf-card { transition-duration: 0.01s; }
                }
            `}</style>
        </section>
    );
}
