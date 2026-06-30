"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clapperboard } from "lucide-react";

// Stills used as a teaser film-strip for the upcoming feature films
const stills = [
    "/images/Movies/Vishudha Sakshi.jpg",
    "/images/Movies/Welcome Home.jpg",
    "/images/Movies/Harinarayana Kudu Charitham.jpg",
    "/images/Movies/Malsya Mandooka Mahamaham.jpg",
    "/images/Movies/Smile!.jpg",
];

// White "Feature Films — Coming Soon" banner
export function FeatureFilmsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative bg-white py-16 md:py-20 overflow-hidden">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px),
                                     linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[2rem] overflow-hidden border border-purple-100 bg-white px-7 md:px-12 py-10 md:py-14"
                    style={{ boxShadow: "0 12px 50px rgba(124, 58, 237, 0.12)" }}
                >
                    {/* Soft glow accents */}
                    <div className="absolute -top-20 -right-16 w-72 h-72 bg-purple-300/20 rounded-full blur-[110px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-pink-300/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 text-center mb-9">
                        {/* Coming Soon badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#4C1D95] text-xs font-bold tracking-[0.18em] uppercase mb-5">
                            <Clapperboard size={14} />
                            Coming Soon
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
                            Feature Films
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Everything we&apos;ve built so far — short films, talent, and craft — leads here. Our first
                            feature films are in the works across Tamil, Malayalam, and English. Stay tuned.
                        </p>
                    </div>

                    {/* Teaser film-strip of dimmed stills */}
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {stills.map((src, i) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                                className={`relative rounded-xl overflow-hidden aspect-video ${i === 4 ? "hidden lg:block" : ""}`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src.replace(/ /g, "%20")}
                                    alt="Upcoming feature film still"
                                    className="w-full h-full object-cover grayscale-[35%] brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/50 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
