"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const workflowSteps = [
    { id: 1, title: "Strategy", description: "Deep dive into brand DNA and audience psyche." },
    { id: 2, title: "Production", description: "High-octane filming with AI-enhanced workflows." },
    { id: 3, title: "Post", description: "Precision editing where the story truly comes alive." },
    { id: 4, title: "Scale", description: "Strategic deployment to ensure maximum reach." },
];

const platforms = [
    {
        id: "teqthots",
        title: "TeqThots",
        tagline: "Product & Startup",
        description: "Product, startup, and brand storytelling through interviews, formats, and documentaries.",
        features: ["Founder Interviews", "Brand Documentaries", "Startup Showcases"],
        bgColor: "bg-[#E8F5E9]",
        image: "/images/Eye-Catching YouTube Thumbnail Designs.jpg",
    },
    {
        id: "short-films-tamil",
        title: "Short Films - Tamil",
        tagline: "Digital Narratives",
        description: "Original short films and digital narratives built with independent creators.",
        features: ["Independent Cinema", "Tamil Narratives", "Creative Partnerships"],
        bgColor: "bg-[#FFE5CC]",
        image: "/images/%23Atharvaa.jpg",
    },
    {
        id: "short-films-malayalam",
        title: "Short Films - Malayalam",
        tagline: "Regional Stories",
        description: "Regional storytelling with a long-term vision toward cinema and OTT content.",
        features: ["OTT Ready Scripts", "Regional Talent Hub", "Cultural Context"],
        bgColor: "bg-[#E1D5F0]",
        image: "/images/Meiyazhagan _ illustration poster - Vishnu Narayanan.jpg",
    },
];

export function PlatformsSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#FDFcF8] via-[#FFE5CC] to-[#E1D5F0]">
            {/* Grid Lines Overlay */}
            <div className="absolute inset-0 bg-grid-pink opacity-[0.05] pointer-events-none" />

            <div className="container relative z-10">
                {/* Top Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D2D2D]/40 mb-4 block"
                    >
                        Our Platforms
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif mb-8 text-[#2D2D2D] leading-tight"
                    >
                        Here's How We Actually <br /> Make This Happen
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#2D2D2D]/80 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto"
                    >
                        <p>
                            We don't just "make videos." we build content engines. Our process merges the precision of AI with the soul of traditional filmmaking to create something that doesn't just look good—it performs.
                        </p>
                    </motion.div>
                </div>

                {/* Workflow Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 relative">
                    {/* Hand-drawn arrow decoration hint */}
                    <div className="absolute -top-10 right-0 hidden lg:block opacity-20 rotate-12">
                        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" stroke="#2D2D2D" strokeWidth="2">
                            <path d="M10 50 Q 50 10, 90 40" strokeDasharray="5 5" />
                            <path d="M82 35 L 90 40 L 85 48" />
                        </svg>
                    </div>

                    {workflowSteps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm relative group hover:bg-white/60 transition-colors"
                        >
                            <span className="font-handwriting text-[#E91E8C] text-2xl mb-2 block">Step 0{step.id}</span>
                            <h4 className="text-xl font-bold mb-2 text-[#2D2D2D]">{step.title}</h4>
                            <p className="text-sm text-[#2D2D2D]/70">{step.description}</p>

                            {idx < workflowSteps.length - 1 && (
                                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 opacity-30">
                                    <span className="text-2xl">→</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Platform Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {platforms.map((platform, idx) => (
                        <motion.div
                            key={platform.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={`${platform.bgColor} p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col group`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2D2D2D]">
                                    {platform.tagline}
                                </span>
                                <span className="w-8 h-8 rounded-full bg-[#2D2D2D]/5 flex items-center justify-center group-hover:bg-[#E91E8C] group-hover:text-white transition-colors duration-300">
                                    →
                                </span>
                            </div>

                            <h3 className="text-3xl font-serif mb-3 text-[#2D2D2D]">{platform.title}</h3>
                            <p className="text-sm text-[#2D2D2D]/70 mb-6 min-h-[60px]">{platform.description}</p>

                            <ul className="space-y-2 mb-8 flex-grow">
                                {platform.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-[#2D2D2D]/80">
                                        <span className="text-[#E91E8C]">✦</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-inner">
                                <Image
                                    src={platform.image}
                                    alt={platform.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-sm font-bold text-[#E91E8C] group-hover:translate-x-2 transition-transform"
                            >
                                Explore <span className="text-lg">→</span>
                            </motion.button>

                            {/* Scribble decoration only for first card as anchor */}
                            {idx === 0 && (
                                <div className="absolute -left-12 top-1/2 -rotate-90 hidden xl:block">
                                    <span className="font-handwriting text-2xl text-[#E91E8C]/40">Action!</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Scattered Annotations & Scribbles */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden text-[#E91E8C]/20">
                {/* Action! */}
                <div className="absolute top-[10%] left-[5%] rotate-[-10deg] font-handwriting text-4xl hidden xl:block">
                    Action!
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="block mt-1">
                        <path d="M2 2 Q 20 18, 38 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Rolling... */}
                <div className="absolute top-[15%] right-[10%] rotate-[15deg] font-handwriting text-3xl hidden lg:block">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
                        Rolling...
                    </div>
                </div>

                {/* Sound On! */}
                <div className="absolute bottom-[20%] left-[8%] -rotate-[5deg] font-handwriting text-3xl hidden xl:block">
                    Sound On!
                    <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-[2px] bg-currentColor" style={{ height: 10 + Math.random() * 15 }} />
                        ))}
                    </div>
                </div>

                {/* Focus */}
                <div className="absolute top-[45%] left-[2%] opacity-30 hidden 2xl:block">
                    <svg width="60" height="60" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <circle cx="20" cy="20" r="15" strokeDasharray="4 4" />
                        <path d="M10 20 H30 M20 10 V30" />
                    </svg>
                    <span className="text-[10px] uppercase font-bold tracking-widest block text-center mt-1">Focus</span>
                </div>

                {/* Handdrawn Arrows */}
                <svg className="absolute top-1/2 right-[5%] w-32 h-32 rotate-[-45deg] hidden 2xl:block" viewBox="0 0 100 100">
                    <path d="M20 20 Q 80 50, 20 80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M25 70 L 20 80 L 30 78" />
                </svg>
            </div>

        </section>
    );
}
