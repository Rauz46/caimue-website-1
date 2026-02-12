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
            className="relative bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-500 group cursor-pointer overflow-hidden"
        >
            {/* ===== TOP: Illustration / Icon Area ===== */}
            <div className="relative h-[200px] mb-6 flex items-center justify-center">
                {/* Subtle light background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-blue-50/50 rounded-2xl" />

                {/* Decorative thin orbit rings */}
                <svg className="absolute w-[180px] h-[180px] opacity-15 pointer-events-none" viewBox="0 0 180 180">
                    <circle cx="90" cy="90" r="50" fill="none" stroke="#9333EA" strokeWidth="0.8" />
                    <circle cx="90" cy="90" r="80" fill="none" stroke="#9333EA" strokeWidth="0.5" />
                </svg>

                {/* Briefcase / Brand icon - CENTER (LARGEST) */}
                <motion.div
                    className="relative z-10"
                    animate={{ y: [-3, 5, -3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-xl flex items-center justify-center relative">
                        <div className="w-10 h-2 bg-amber-300/80 rounded-sm absolute top-3.5" />
                        <div className="w-4 h-1.5 bg-amber-200 rounded-sm absolute top-1.5" />
                    </div>
                </motion.div>

                {/* X / Twitter - top-left */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '15px', left: '25%' }}
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100/60">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#000000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Facebook */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '20px', left: '45%' }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100/60">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </div>
                </motion.div>

                {/* YouTube - top-right */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '10px', right: '20%' }}
                    animate={{ y: [-5, 3, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100/60">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Instagram - bottom-left */}
                <motion.div
                    className="absolute z-10"
                    style={{ bottom: '20px', left: '30%' }}
                    animate={{ y: [-3, 5, -3] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100/60">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Telegram - bottom-right */}
                <motion.div
                    className="absolute z-10"
                    style={{ bottom: '15px', right: '25%' }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100/60">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#0088CC" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* ===== BOTTOM: Title + Separator + Description + Button ===== */}
            <div>
                <h3 className="font-serif text-[32px] font-bold text-[#7C3AED] mb-2 tracking-tight">
                    Brand Owner
                </h3>
                {/* Separator line */}
                <div className="w-12 h-[3px] bg-purple-300 rounded-full mb-4" />
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                    Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally.
                </p>

                <Link href="/contact" className="inline-block">
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white px-7 py-3 rounded-full font-semibold text-[14px] shadow-md border border-purple-200 flex items-center gap-2 group/btn hover:shadow-lg transition-all"
                    >
                        <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                            Find Out More
                        </span>
                        <ArrowRight className="text-purple-500 group-hover/btn:translate-x-1 transition-transform" size={18} />
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
            className="relative bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-500 group cursor-pointer overflow-hidden"
        >
            {/* ===== TOP: Illustration / Icon Area ===== */}
            <div className="relative h-[200px] mb-6 flex items-center justify-center">
                {/* Subtle light background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-purple-50/50 rounded-2xl" />

                {/* Center film icon */}
                <motion.div
                    className="relative z-10"
                    animate={{ y: [-3, 5, -3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Team member 1 - top-left */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '15px', left: '22%' }}
                    animate={{ y: [-3, 4, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                        <Image
                            src="/team/megha.jpg"
                            alt="Team member"
                            width={44}
                            height={44}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Team member 2 - top-right */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '10px', right: '22%' }}
                    animate={{ y: [-5, 3, -5] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                        <Image
                            src="/team/sajan.jpg"
                            alt="Team member"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Team member 3 - bottom-left */}
                <motion.div
                    className="absolute z-10"
                    style={{ bottom: '20px', left: '28%' }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                        <Image
                            src="/team/megha  2.jpg"
                            alt="Team member"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Team member 4 - bottom-right */}
                <motion.div
                    className="absolute z-10"
                    style={{ bottom: '15px', right: '25%' }}
                    animate={{ y: [-3, 5, -3] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                        <Image
                            src="/team/sajan 2.jpg"
                            alt="Team member"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Clapperboard accent - left */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '50%', left: '10%', transform: 'translateY(-50%)' }}
                    animate={{ y: [-4, 4, -4], rotate: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Star accent - right */}
                <motion.div
                    className="absolute z-10"
                    style={{ top: '45%', right: '10%' }}
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* ===== BOTTOM: Title + Separator + Description + Button ===== */}
            <div>
                <h3 className="font-serif text-[32px] font-bold text-[#DB2777] mb-2 tracking-tight">
                    Artist
                </h3>
                {/* Separator line */}
                <div className="w-12 h-[3px] bg-pink-300 rounded-full mb-4" />
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
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
                        Who Are You
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
