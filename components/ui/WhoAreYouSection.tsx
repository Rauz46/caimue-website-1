"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// Card 1: Brand Owner
const BrandOwnerCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[24px] p-6 shadow-[0_10px_40px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_50px_rgba(219,39,119,0.4)] transition-all duration-500 group cursor-pointer overflow-hidden border border-pink-400/20"
            style={{ background: "linear-gradient(135deg, #DB2777 0%, #9D174D 100%)" }}
        >

            {/* ===== BOTTOM: Title + Separator + Description + Button ===== */}
            <div>
                <h3 className="font-serif text-[28px] font-bold !text-white mb-2 tracking-tight">
                    Are you a Brand Owner?
                </h3>
                {/* Separator line */}
                <div className="w-12 h-[3px] bg-pink-300/60 rounded-full mb-4" />
                <p className="!text-white/90 text-[14px] leading-relaxed mb-6">
                    Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally.
                </p>

                <Link href="/contact" className="inline-block">
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white px-7 py-3 rounded-full font-semibold text-[14px] shadow-md border border-pink-200 flex items-center gap-2 group/btn hover:shadow-lg transition-all"
                    >
                        <span className="bg-gradient-to-r from-[#BE185D] to-[#EC4899] bg-clip-text text-transparent">
                            Find Out More
                        </span>
                        <ArrowRight className="text-pink-500 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

// Card 2: Artist
const ArtistCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[24px] p-6 shadow-[0_10px_40px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_50px_rgba(219,39,119,0.4)] transition-all duration-500 group cursor-pointer overflow-hidden border border-pink-400/20"
            style={{ background: "linear-gradient(135deg, #DB2777 0%, #9D174D 100%)" }}
        >

            {/* ===== BOTTOM: Title + Separator + Description + Button ===== */}
            <div>
                <h3 className="font-serif text-[28px] font-bold !text-white mb-2 tracking-tight">
                    Are you an Aspiring Artist?
                </h3>
                {/* Separator line */}
                <div className="w-12 h-[3px] bg-pink-300/60 rounded-full mb-4" />
                <p className="!text-white/90 text-[14px] leading-relaxed mb-6">
                    Are you an upcoming artist? Do you have talent in acting, writing scripts, directing, or shooting? We discover individual artists and bring them together to create films under our production. Reach out.
                </p>

                <Link href="/contact" className="inline-block">
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white px-7 py-3 rounded-full font-semibold text-[14px] shadow-md border border-pink-200 flex items-center gap-2 group/btn hover:shadow-lg transition-all"
                    >
                        <span className="bg-gradient-to-r from-[#DB2777] to-[#EC4899] bg-clip-text text-transparent">
                            Find Out More
                        </span>
                        <ArrowRight className="text-pink-500 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default function WhoAreYouSection() {
    return (
        <section
            className="relative py-[100px] md:py-[140px] overflow-visible -mt-1"
            style={{
                background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)",
            }}
        >
            {/* Grid Texture Overlay (same as Journey section) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles (same as Journey section) */}
            <HandDrawnScribbles />

            <div className="container mx-auto px-4 relative z-10">
                {/* HEADING */}
                <div className="text-center mb-[60px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="font-serif text-[56px] font-bold text-[#4C1D95] tracking-tighter"
                    >
                        Come Work With Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-[18px] font-medium text-[#6B21A8] mt-2"
                    >
                        Pick your path below ↓
                    </motion.p>
                </div>

                {/* TWO CARD LAYOUT with scribble annotations */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                        <BrandOwnerCard />
                        <ArtistCard />
                    </div>

                    {/* ===== HANDWRITTEN SCRIBBLE ANNOTATIONS (outside cards) ===== */}

                    {/* Left scribble - "tell your story" with arrow pointing to Brand Owner */}
                    <motion.div
                        className="absolute -left-[80px] top-[35%] hidden xl:block pointer-events-none"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="flex items-center gap-2">
                            <p className="font-serif italic text-[14px] text-orange-500/80 -rotate-6 leading-tight">
                                tell your<br />story here
                            </p>
                            {/* Curved arrow */}
                            <svg width="40" height="30" viewBox="0 0 40 30" className="text-orange-400/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M2 25 C10 25, 20 5, 35 10" strokeLinecap="round" />
                                <path d="M30 6 L35 10 L29 13" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Right scribble - "join the crew" with arrow pointing to Artist */}
                    <motion.div
                        className="absolute -right-[80px] top-[35%] hidden xl:block pointer-events-none"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <div className="flex items-center gap-2">
                            {/* Curved arrow */}
                            <svg width="40" height="30" viewBox="0 0 40 30" className="text-orange-400/70 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M2 25 C10 25, 20 5, 35 10" strokeLinecap="round" />
                                <path d="M30 6 L35 10 L29 13" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="font-serif italic text-[14px] text-orange-500/80 rotate-6 leading-tight">
                                join the<br />crew
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom-left scribble */}
                    <motion.div
                        className="absolute -left-[60px] bottom-[5%] hidden xl:block pointer-events-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <div className="flex flex-col items-end">
                            <p className="font-serif italic text-[13px] text-orange-500/70 -rotate-3 leading-tight">
                                content that<br />connects
                            </p>
                            <svg width="30" height="25" viewBox="0 0 30 25" className="text-orange-400/60 mt-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 2 C10 15, 20 20, 28 18" strokeLinecap="round" />
                                <path d="M24 14 L28 18 L23 20" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Bottom-right scribble */}
                    <motion.div
                        className="absolute -right-[70px] bottom-[8%] hidden xl:block pointer-events-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <div className="flex flex-col items-start">
                            <p className="font-serif italic text-[13px] text-orange-500/70 rotate-3 leading-tight">
                                your talent<br />matters
                            </p>
                            <svg width="30" height="25" viewBox="0 0 30 25" className="text-orange-400/60 mt-1 scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 2 C10 15, 20 20, 28 18" strokeLinecap="round" />
                                <path d="M24 14 L28 18 L23 20" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
