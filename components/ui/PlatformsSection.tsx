"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Clapperboard, Film, Video, Megaphone, Star, ArrowUpRight, TrendingUp, Users, Play, MonitorPlay, Award, Sparkles, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Data & Assets ---

const ennittoFilms = [
    { id: 1, title: "Hey Sinamika", image: "/images/Hey! Sinamika Poster.jpg" },
    { id: 2, title: "Thiruchitrambalam", image: "/images/Thiruchitrambalam.jpg" },
    { id: 3, title: "Short Film 1", image: "/images/poster-1.png" },
];

const teqthotsContent = [
    { id: 1, title: "#Atharvaa", image: "/images/#Atharvaa.jpg" },
    { id: 2, title: "Blog Graphics", image: "/images/Blog Graphics.jpg" },
    { id: 3, title: "Odum Kuthira", image: "/images/Odum Kuthira Chaadum Kuthira poster.jpg" },
];

import { GlowCard } from "@/components/ui/spotlight-card";

// --- Components ---

const BentoCard = ({
    children,
    className,
    colSpan = "col-span-1",
    rowSpan = "row-span-1",
    delay = 0,
    glowColor = "purple"
}: {
    children: React.ReactNode;
    className?: string;
    colSpan?: string;
    rowSpan?: string;
    delay?: number;
    glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className={cn(colSpan, rowSpan, "h-full")}
    >
        <GlowCard
            glowColor={glowColor}
            customSize={true}
            className={cn(
                "h-full w-full border-none shadow-none p-0 overflow-hidden group",
                className
            )}
        >
            {children}
        </GlowCard>
    </motion.div>
);

const Scribble = ({ className, d, color = "currentColor" }: { className?: string; d: string; color?: string }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={cn("absolute pointer-events-none opacity-10", className)}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    >
        <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
);

const CardGridEffect = () => (
    <div className="absolute inset-0 z-0 opacity-[0.1]"
        style={{
            backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '10px 10px'
        }}
    />
);

export function PlatformsSection() {
    return (
        <section className="relative py-12 bg-[#FAFBFF] overflow-hidden">
            {/* Background Texture - Refined Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.06]"
                style={{
                    backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Scribbles All Over */}
            <Scribble
                className="top-10 left-[5%] w-40 h-40 rotate-12 text-purple-400"
                d="M10,20 Q30,10 50,20 T90,20 M10,40 Q30,30 50,40 T90,40"
            />
            <Scribble
                className="bottom-20 right-[5%] w-48 h-48 -rotate-12 text-pink-400"
                d="M10,80 C30,70 40,90 50,80 S70,70 90,80"
            />
            <Scribble
                className="top-1/3 right-[15%] w-32 h-32 rotate-45 text-blue-400"
                d="M50,10 L50,90 M10,50 L90,50"
            />

            <div className="container mx-auto px-4 relative z-10">

                {/* --- HEADING --- */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-[44px] font-bold text-[#2D2D2D] mb-1"
                    >
                        Our Platforms
                    </motion.h2>
                    <p className="font-sans text-[16px] text-gray-500 max-w-lg mx-auto font-medium">
                        Three distinct verticals working together toward excellence.
                    </p>
                </div>

                {/* ==================== BENTO 1: ENNITTO ==================== */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-200" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-purple-500">Shorts & Originals</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[380px]">

                        {/* Main Card (2x2) - Soft Lighter Purple */}
                        <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#BBA7FF] to-[#9D7DFF] p-6 flex flex-col justify-between text-white border border-purple-200/20 shadow-lg">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Film size={22} className="text-white" />
                                    <h3 className="font-serif text-3xl font-bold tracking-tight">Ennitto</h3>
                                </div>
                                <p className="text-[15px] text-white/95 leading-relaxed mb-4 font-light max-w-[90%]">
                                    We produce original Malayalam, Tamil & English films. From shorts to features, we discover talent and build stories toward theatrical releases.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-2">
                                    {['Short Films', 'Tamil', 'English', 'Malayalam'].map(tag => (
                                        <span key={tag} className="px-2.5 py-0.5 bg-white/10 rounded-full text-[11px] font-semibold backdrop-blur-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2.5 mt-auto">
                                <button className="flex-1 bg-white text-[#8B5CF6] py-3 rounded-lg font-bold text-[13px] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
                                    <Play size={14} fill="currentColor" /> Watch
                                </button>
                                <button className="flex-1 border border-white/30 text-white py-3 rounded-lg font-bold text-[13px] hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95">
                                    Explore
                                </button>
                            </div>
                        </BentoCard>

                        {/* Side Column - Metrics (Side-by-Side) & Thumbs */}
                        <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-3 h-full">

                            {/* SERIF METRICS SIDE BY SIDE with Purple Shade & Grid */}
                            <BentoCard className="bg-purple-50/50 p-6 flex items-center justify-around border border-purple-100 shadow-sm relative overflow-hidden" delay={0.1}>
                                <CardGridEffect />
                                <div className="relative z-10 text-center">
                                    <span className="font-serif text-[38px] font-bold text-[#8B5CF6] block leading-none mb-1">10K+</span>
                                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.15em]">Subscribers</span>
                                </div>
                                <div className="h-12 w-[1px] bg-purple-200/50 relative z-10" />
                                <div className="relative z-10 text-center">
                                    <span className="font-serif text-[38px] font-bold text-[#2D2D2D] block leading-none mb-1">2M+</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">Views Reached</span>
                                </div>
                            </BentoCard>

                            {/* Triple Thumbnails (Side by Side) to fill row 2 */}
                            <div className="grid grid-cols-3 gap-3 h-full min-h-0">
                                {ennittoFilms.map((film, i) => (
                                    <BentoCard key={film.id} className="relative group bg-gray-900 border border-purple-100 overflow-hidden shadow-sm" delay={0.2 + (i * 0.1)}>
                                        <Image src={film.image} alt={film.title} fill className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-purple-500/10 opacity-40" />
                                    </BentoCard>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ==================== BENTO 2: TEQTHOTS ==================== */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 text-center">Brand Content</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[380px]">

                        {/* Visuals Left - Divided and Shaded */}
                        <div className="col-span-1 md:col-span-1 flex flex-col gap-3 h-full">
                            <BentoCard className="flex-1 bg-purple-50/30 relative group overflow-hidden border border-gray-100 shadow-sm" delay={0.1}>
                                <CardGridEffect />
                                <Image src={teqthotsContent[2].image} alt="Brand Story" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-purple-500/5" />
                            </BentoCard>
                            <BentoCard className="flex-1 bg-purple-50/30 relative group overflow-hidden border border-gray-100 shadow-sm" delay={0.15}>
                                <CardGridEffect />
                                <Image src={teqthotsContent[0].image} alt="Brand Product" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-purple-500/5" />
                            </BentoCard>
                        </div>

                        {/* Main Card (2x2) - Precision Aligned */}
                        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white border border-gray-200 p-6 flex flex-col justify-between shadow-md" delay={0.2}>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-gray-50 rounded-xl border border-gray-100">
                                        <Users size={22} className="text-[#2D2D2D]" />
                                    </div>
                                    <h3 className="font-serif text-3xl font-bold text-[#2D2D2D] tracking-tight">TeqThots</h3>
                                </div>
                                <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6 max-w-[95%] font-light">
                                    Not just ads. We create real storytelling content for brands—founder interviews, product stories, and formats that build trust.
                                </p>
                                <div className="flex gap-4 text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Cost-effective</span>
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Fast Turnaround</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <button className="flex-1 bg-white border-2 border-[#E91E8C] text-[#E91E8C] py-3 rounded-lg font-bold text-[13px] hover:bg-[#E91E8C] hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                                    <Play size={14} fill="currentColor" /> Watch
                                </button>
                                <button className="flex-1 border border-gray-200 text-gray-500 py-3 rounded-lg font-bold text-[13px] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95">
                                    Explore
                                </button>
                            </div>
                        </BentoCard>

                        {/* Right Column - Metrics & Partner Side by Side Area */}
                        <div className="col-span-1 flex flex-col gap-3 h-full">
                            <BentoCard className="bg-purple-50/40 p-5 flex flex-col justify-center border border-purple-100 shadow-sm relative overflow-hidden" delay={0.3}>
                                <CardGridEffect />
                                <div className="relative z-10 flex items-baseline justify-between mb-2">
                                    <span className="text-[26px] font-bold text-[#2D2D2D]">10+</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-extrabold text-right leading-tight">Brand<br />Videos</span>
                                </div>
                                <div className="relative z-10 flex items-baseline justify-between">
                                    <span className="text-[26px] font-bold text-[#8B5CF6]">5+</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-extrabold text-right leading-tight">Partner<br />Brands</span>
                                </div>
                            </BentoCard>

                            <BentoCard className="bg-white flex-1 border border-gray-100 flex flex-col items-center justify-center p-4 relative shadow-sm overflow-hidden" delay={0.4}>
                                <div className="absolute inset-0 bg-purple-50/10" />
                                <div className="grid grid-cols-2 gap-3 opacity-30 relative z-10">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                            <div className="w-5 h-5 bg-gray-200 rounded-sm" />
                                        </div>
                                    ))}
                                </div>
                                <span className="relative z-10 mt-3 text-[8px] font-bold uppercase text-gray-300 tracking-[0.2em]">Partner Logistics</span>
                            </BentoCard>
                        </div>

                    </div>
                </div>


                {/* ==================== BENTO 3: FEATURE FILMS ==================== */}
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-200" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-purple-400 text-center">Cinema & Originals</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[380px]">

                        {/* Main Card (2x2) - Soft Lighter Purple Tone */}
                        <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#8E7FE0] to-[#7C3AED] p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-lg border border-purple-300/20">
                            {/* Inner Soft Decor */}
                            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-[60px]" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clapperboard size={22} className="text-white" />
                                    <h3 className="font-serif text-3xl font-bold tracking-tight">Feature Films</h3>
                                </div>
                                <p className="text-[15px] text-white/95 leading-relaxed mb-6 font-light max-w-[95%]">
                                    We are building a slate of feature-length films. Stories that combine strong craft with smart production—made for theater.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-white/5">
                                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(110,231,183,0.5)]" />
                                    <span className="text-white/80 font-mono text-[10px] uppercase tracking-wider">In Development</span>
                                </div>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <button className="w-full bg-white text-[#6D28D9] py-3.5 rounded-lg font-bold text-[13px] hover:bg-purple-50 transition-all flex items-center justify-center gap-2 shadow-md active:scale-95">
                                    Explore Projects <ArrowRight size={16} />
                                </button>
                            </div>
                        </BentoCard>

                        {/* Top Right Visual Card */}
                        <BentoCard className="col-span-1 md:col-span-2 bg-purple-900 border border-purple-400/20 relative group overflow-hidden shadow-md" delay={0.2}>
                            <Image src="/images/poster-3.png" alt="Feature" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex flex-col justify-end p-5">
                                <h4 className="font-serif text-2xl text-white font-bold mb-1">Coming 2026</h4>
                                <span className="inline-block self-start px-3 py-0.5 border border-white/20 rounded-full text-purple-100 text-[10px] tracking-[0.1em] uppercase backdrop-blur-sm">Theatrical Release</span>
                            </div>
                        </BentoCard>

                        {/* Special IP Card */}
                        <BentoCard className="bg-purple-50/50 p-6 flex flex-col items-center justify-center text-center border border-purple-100 relative group overflow-hidden shadow-sm" delay={0.3}>
                            <CardGridEffect />
                            <div className="relative z-10 w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform">
                                <Sparkles className="w-6 h-6 text-purple-500" />
                            </div>
                            <h5 className="relative z-10 text-[#2D2D2D] font-serif text-xl font-bold leading-tight">Mastering<br />IP Originals</h5>
                            <p className="relative z-10 text-purple-400 text-[9px] mt-2 font-bold uppercase tracking-[0.2em]">Global Vision</p>
                        </BentoCard>

                        {/* Casting Call */}
                        <BentoCard className="bg-white p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-purple-50 group cursor-pointer shadow-sm" delay={0.4}>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-[#8B5CF6] transition-all duration-300">
                                <Megaphone className="w-5 h-5 text-[#8B5CF6] group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-bold text-[#6D28D9] text-[16px] leading-tight">Casting<br />Call</span>
                            <span className="text-[10px] text-gray-300 mt-2 uppercase font-bold tracking-widest">Available Now</span>
                        </BentoCard>

                    </div>
                </div>

            </div>
        </section>
    );
}
