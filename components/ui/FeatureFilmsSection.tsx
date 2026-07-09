"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clapperboard, Film } from "lucide-react";

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

// Film-grain noise (inline SVG so no network request)
const GRAIN =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

// Dark OTT-style "theater" band: ambient backdrop, 3D coverflow, ticker, progress
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
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#08010f] pt-16 md:pt-20 pb-0"
        >
            {/* Ambient backdrop — the active still, blown up and blurred (OTT hero style) */}
            <AnimatePresence>
                <motion.div
                    key={activeStill.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.32 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${activeStill.src.replace(/ /g, "%20")})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 30%",
                        filter: "blur(60px) saturate(1.4)",
                        transform: "scale(1.25)",
                    }}
                />
            </AnimatePresence>
            {/* Darken the backdrop so posters pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#08010f]/80 via-[#12042a]/60 to-[#08010f]/90 pointer-events-none" />

            {/* Spotlight beams from the top */}
            <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] h-[420px] pointer-events-none opacity-60"
                style={{
                    background:
                        "conic-gradient(from 178deg at 50% 0%, transparent 0deg, rgba(147,51,234,0.14) 2deg, transparent 6deg, transparent 12deg, rgba(219,39,119,0.10) 15deg, transparent 19deg, transparent 340deg, rgba(124,58,237,0.12) 344deg, transparent 348deg)",
                }}
            />

            {/* Film grain */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{ backgroundImage: GRAIN }}
            />

            {/* Blend the dark band into the light sections above/below */}
            <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl mx-auto px-4 text-center mb-4"
            >
                {/* Glowing Coming Soon badge with a "live" pulse */}
                <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-purple-400/30 bg-purple-950/50 backdrop-blur-sm text-purple-100 text-[13px] font-semibold tracking-[0.18em] uppercase mb-6 shadow-[0_0_30px_rgba(147,51,234,0.35)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                    </span>
                    Coming Soon
                    <Clapperboard size={14} className="text-purple-300" />
                </span>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    <span className="text-white">Feature </span>
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6]"
                        style={{ textShadow: "0 0 60px rgba(168,85,247,0.45)" }}
                    >
                        Films
                    </span>
                </h2>
                <p className="text-purple-100/70 text-base md:text-lg leading-relaxed">
                    Everything we&apos;ve built so far — short films, talent, and craft — leads here. Our first feature
                    films are in the works across Tamil, Malayalam, and English.
                    <span className="font-semibold text-purple-200"> The reel is just getting started.</span>
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
                                    filter: isCenter
                                        ? "brightness(1)"
                                        : `brightness(${0.45 - Math.abs(pos) * 0.08}) saturate(0.85)`,
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.src.replace(/ /g, "%20")}
                                    alt={`${item.title} — film still`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b0836]/55 via-transparent to-transparent" />
                            </button>
                        );
                    })}
                </div>

                {/* Active title + segmented progress (OTT story-style) */}
                <div className="relative z-10 flex flex-col items-center gap-3 mt-2 md:mt-3 px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStill.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="text-center"
                        >
                            <div className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
                                {activeStill.title}
                            </div>
                            <div className="text-[12px] uppercase tracking-[0.2em] text-purple-300/80 mt-1 flex items-center justify-center gap-1.5">
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
                                className="h-[3px] w-8 md:w-10 rounded-full bg-white/15 overflow-hidden"
                            >
                                {i === active && (
                                    <span
                                        key={`fill-${active}`}
                                        className="block h-full bg-gradient-to-r from-[#a855f7] to-[#f472b6] cf-progress"
                                        style={{ animationPlayState: paused ? "paused" : "running" }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── Scrolling ticker ── */}
            <div className="relative z-10 mt-8 md:mt-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden py-3 mb-0">
                <div className="cf-ticker whitespace-nowrap text-[12px] md:text-[13px] font-semibold tracking-[0.3em] uppercase text-purple-200/60">
                    {[0, 1].map((copy) => (
                        <span key={copy} aria-hidden={copy === 1}>
                            {Array.from({ length: 4 }).map((_, i) => (
                                <span key={i}>
                                    Feature Films <span className="text-pink-400/80 mx-3">✦</span>
                                    Coming Soon <span className="text-purple-400/80 mx-3">✦</span>
                                    Tamil <span className="text-pink-400/80 mx-3">✦</span>
                                    Malayalam <span className="text-purple-400/80 mx-3">✦</span>
                                    English <span className="text-pink-400/80 mx-3">✦</span>
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                .cf-stage {
                    --cf-w: 460px;
                    --cf-gap: 260px;
                    --cf-depth: 210px;
                    position: relative;
                    height: calc(var(--cf-w) * 9 / 16 + 90px);
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
                    background: #1b0836;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    cursor: pointer;
                    transition:
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.8s ease,
                        filter 0.8s ease,
                        box-shadow 0.8s ease;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
                    -webkit-box-reflect: below 6px linear-gradient(transparent 62%, rgba(255, 255, 255, 0.14));
                }
                .cf-card--center {
                    border-color: rgba(216, 180, 254, 0.35);
                    box-shadow:
                        0 0 0 1px rgba(216, 180, 254, 0.2),
                        0 0 80px rgba(147, 51, 234, 0.45),
                        0 40px 80px rgba(0, 0, 0, 0.6);
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
                        height: calc(var(--cf-w) * 9 / 16 + 70px);
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
