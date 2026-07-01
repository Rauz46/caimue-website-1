"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

const brands = [
    { name: "Ignitho", src: "/logos/loglos/Ignitho-Updated-Logo.png" },
    { name: "Nuivio", src: "/logos/loglos/Nuivio.png" },
    { name: "Piqual", src: "/logos/loglos/piqual.png" },
];

// Standalone Digubi banner — light-purple background like the Track Record section
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-[80px] overflow-hidden"
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

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto flex flex-col items-center text-center"
                >
                    {/* Heading */}
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4C1D95] mb-6">
                        Our Corporate Video Services
                    </h2>

                    {/* Digubi logo on a white chip */}
                    <div className="inline-flex items-center bg-white rounded-xl px-5 py-2.5 mb-5 shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logos/digubi-logo.png" alt="Digubi" className="h-8 w-auto object-contain" />
                    </div>

                    {/* Description */}
                    <p className="text-[#6B21A8] text-base md:text-lg leading-relaxed max-w-2xl mb-7">
                        We&apos;ve created corporate videos for{" "}
                        <span className="font-semibold text-[#4C1D95]">Ignitho, Nuivio, Piqual</span> and more — and we
                        help brands grow their online presence through social media campaigns and marketing websites.
                    </p>

                    {/* Brand logos on white chips */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        {brands.map((b) => (
                            <div
                                key={b.name}
                                className="bg-white rounded-lg px-4 py-2.5 flex items-center justify-center shadow-sm"
                                style={{ height: "52px" }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={b.src} alt={b.name} className="max-h-8 w-auto object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
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
        </section>
    );
}
