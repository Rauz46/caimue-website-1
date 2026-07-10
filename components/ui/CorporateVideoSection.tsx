"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Linkedin, Globe } from "lucide-react";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
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
        icon: Linkedin,
        label: "LinkedIn Media Campaigns",
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

// Standalone Digubi banner — airy white spotlight with floating service cards
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-[72px] overflow-hidden"
            style={{ background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)" }}
        >
            <SectionDownArrow />

            {/* Checked grid texture */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Soft color washes so the white stays alive */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(50% 45% at 50% 8%, rgba(139,92,246,0.10) 0%, transparent 70%),
                                 radial-gradient(35% 40% at 10% 85%, rgba(233,30,140,0.06) 0%, transparent 70%),
                                 radial-gradient(35% 40% at 90% 85%, rgba(245,158,11,0.07) 0%, transparent 70%)`,
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            {/* Floating sparkles */}
            <motion.span
                className="absolute top-24 left-[14%] text-amber-400/60 text-2xl pointer-events-none select-none hidden md:block"
                animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
            >
                ✦
            </motion.span>
            <motion.span
                className="absolute top-40 right-[12%] text-purple-400/50 text-xl pointer-events-none select-none hidden md:block"
                animate={{ y: [0, 8, 0], rotate: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                aria-hidden
            >
                ✧
            </motion.span>
            <motion.span
                className="absolute bottom-28 left-[9%] h-2.5 w-2.5 rounded-full bg-pink-400/50 pointer-events-none hidden md:block"
                animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                aria-hidden
            />
            <motion.span
                className="absolute bottom-36 right-[8%] h-2 w-2 rounded-full bg-amber-400/60 pointer-events-none hidden md:block"
                animate={{ y: [0, 10, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                aria-hidden
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Headline first */}
                    <h2 className="font-serif text-3xl! md:text-4xl! lg:text-[2.75rem]! leading-tight font-bold text-[#2D2D2D] mb-10">
                        Our Corporate{" "}
                        <span
                            className="italic bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-500"
                            style={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block",
                                lineHeight: 1.3,
                                paddingBottom: "0.08em",
                                paddingRight: "0.12em",
                            }}
                        >
                            Video Services
                        </span>
                    </h2>

                    {/* Digubi logo in a soft halo of rotating dashed ring */}
                    <motion.div
                        className="relative mb-8"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Halo glow */}
                        <div
                            className="absolute -inset-10 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(245,158,11,0.08) 45%, transparent 70%)",
                            }}
                        />
                        {/* Rotating dashed orbit */}
                        <div
                            className="absolute -inset-7 rounded-full border-2 border-dashed border-purple-300/50 animate-spin pointer-events-none"
                            style={{ animationDuration: "22s" }}
                        />
                        {/* Orbit accent dots pinned to the ring */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md pointer-events-none" />
                        <span className="absolute top-1/2 -right-8 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-md pointer-events-none" />
                        <span className="absolute -bottom-8 left-1/3 h-2 w-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-md pointer-events-none" />

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/digubi-logo.png"
                            alt="Digubi — Digital Ubiquity"
                            loading="lazy"
                            decoding="async"
                            className="relative h-24 md:h-28 w-auto object-contain drop-shadow-[0_12px_35px_rgba(76,29,149,0.22)]"
                        />
                    </motion.div>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
                        Under <span className="font-semibold text-[#4C1D95]">Digubi</span>, we help companies show up
                        online — corporate films, founder stories, social campaigns and marketing sites that make
                        brands impossible to scroll past.
                    </p>

                    {/* Service cards — white, centered, gradient accents */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
                        {services.map(({ icon: Icon, label, description, from, to }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                                whileHover={{ y: -8 }}
                                className="relative flex flex-col items-center text-center rounded-[20px] bg-white px-5 pt-5 pb-4 overflow-hidden transition-shadow duration-300"
                                style={{ boxShadow: "0 8px 30px rgba(75, 29, 149, 0.10)" }}
                            >
                                {/* Gradient accent bar along the top */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[5px]"
                                    style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
                                />
                                {/* Soft corner tint */}
                                <div
                                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-[0.09] pointer-events-none"
                                    style={{ background: from }}
                                />
                                {/* Icon inline with the title */}
                                <div className="relative flex items-center justify-center gap-2.5 mb-1.5">
                                    <span
                                        className="flex items-center justify-center rounded-xl shrink-0"
                                        style={{
                                            width: 34,
                                            height: 34,
                                            background: `linear-gradient(135deg, ${from}, ${to})`,
                                            boxShadow: `0 8px 18px -8px ${from}80`,
                                        }}
                                    >
                                        <Icon size={17} className="text-white" />
                                    </span>
                                    <h3 className="text-[#2D2D2D]! font-sans! font-bold text-[16px]! mb-0!">{label}</h3>
                                </div>
                                <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-[250px] md:max-w-none mx-auto [text-wrap:balance]">{description}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
