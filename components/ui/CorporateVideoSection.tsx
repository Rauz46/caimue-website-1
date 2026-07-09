"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Share2, Globe } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

const services = [
    {
        icon: Video,
        label: "Corporate Videos",
        description: "Founder stories and brand films with cinematic polish.",
        from: "#F59E0B",
        to: "#F97316",
    },
    {
        icon: Share2,
        label: "Social Media Campaigns",
        description: "Content engines that keep your brand in every feed.",
        from: "#E91E8C",
        to: "#F43F5E",
    },
    {
        icon: Globe,
        label: "Marketing Websites",
        description: "Sites built to turn visitors into believers.",
        from: "#8B5CF6",
        to: "#6366F1",
    },
];

// Standalone Digubi banner — dark spotlight stage on the light page
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
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                {/* ── Dark stage panel ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[32px] overflow-hidden px-6 py-14 md:px-14 md:py-16"
                    style={{
                        background: "linear-gradient(150deg, #2E1065 0%, #3B1683 45%, #4C1D95 100%)",
                        boxShadow:
                            "0 40px 90px -30px rgba(46,16,101,0.55), 0 16px 40px -20px rgba(76,29,149,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                >
                    {/* Inner grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage:
                                "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
                            backgroundSize: "44px 44px",
                        }}
                    />
                    {/* Spotlight + corner glows */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(55% 60% at 50% 0%, rgba(167,139,250,0.28) 0%, transparent 65%),
                                         radial-gradient(35% 45% at 8% 100%, rgba(233,30,140,0.16) 0%, transparent 70%),
                                         radial-gradient(35% 45% at 92% 100%, rgba(245,158,11,0.14) 0%, transparent 70%)`,
                        }}
                    />

                    {/* Floating sparkles */}
                    <motion.span
                        className="absolute top-10 left-[12%] text-amber-300/60 text-xl pointer-events-none select-none hidden md:block"
                        animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden
                    >
                        ✦
                    </motion.span>
                    <motion.span
                        className="absolute top-20 right-[10%] text-purple-300/60 text-2xl pointer-events-none select-none hidden md:block"
                        animate={{ y: [0, 8, 0], rotate: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        aria-hidden
                    >
                        ✧
                    </motion.span>
                    <motion.span
                        className="absolute bottom-16 left-[7%] h-2.5 w-2.5 rounded-full bg-pink-400/60 pointer-events-none hidden md:block"
                        animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        aria-hidden
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-purple-100 text-[12px] font-bold tracking-[0.18em] uppercase mb-7">
                            Brand &amp; Corporate
                        </span>

                        {/* Digubi logo on a soft light disc so it reads on dark */}
                        <motion.div
                            className="relative mb-7"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div
                                className="absolute -inset-6 rounded-full pointer-events-none"
                                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)" }}
                            />
                            <div className="relative rounded-3xl bg-white/95 px-8 py-4 shadow-[0_18px_50px_-15px_rgba(0,0,0,0.45)]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/logos/digubi-logo.png"
                                    alt="Digubi — Digital Ubiquity"
                                    className="h-16 md:h-20 w-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <h2 className="font-serif text-3xl! md:text-4xl! lg:text-[2.75rem]! leading-tight font-bold text-white! mb-4">
                            Our Corporate{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#F59E0B]">
                                Video Services
                            </span>
                        </h2>
                        <p className="text-purple-100/90 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                            Under <span className="font-semibold text-white">Digubi</span>, we help companies show up
                            online — corporate films, founder stories, social campaigns and marketing sites that make
                            brands impossible to scroll past.
                        </p>

                        {/* Service cards — centered */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-9">
                            {services.map(({ icon: Icon, label, description, from, to }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                                    whileHover={{ y: -6 }}
                                    className="flex flex-col items-center text-center rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm px-5 py-7 transition-colors duration-300 hover:bg-white/[0.12]"
                                >
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-lg"
                                        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                                    >
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h3 className="text-white! font-sans font-bold text-[15px]! mb-1.5">{label}</h3>
                                    <p className="text-purple-100/75 text-[13px] leading-relaxed">{description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Client proof line */}
                        <p className="text-purple-200/80 text-sm">
                            Trusted by{" "}
                            <span className="font-semibold text-white">Ignitho, Nuivio, Piqual</span> and more — we grow
                            their online presence end to end.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
