"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Clapperboard, Film, Video, Megaphone, Star, ArrowUpRight, TrendingUp, Users, Play, MonitorPlay, Award } from "lucide-react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
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

// --- Components ---

const BentoCard = ({
    children,
    className,
    colSpan = "col-span-1",
    rowSpan = "row-span-1",
    delay = 0
}: {
    children: React.ReactNode;
    className?: string;
    colSpan?: string;
    rowSpan?: string;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        className={cn(
            "relative rounded-[20px] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300",
            colSpan,
            rowSpan,
            className
        )}
    >
        {children}
    </motion.div>
);

export function PlatformsSection() {
    return (
        <FollowerPointerCard title="Our Platforms">
            <section className="relative py-16 bg-[#F9FAFB] overflow-hidden">
                {/* Background Texture - Subtle Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Scribbles All Over */}
                <div className="absolute top-10 left-10 w-32 h-32 opacity-10 pointer-events-none rotate-12">
                    <svg viewBox="0 0 100 100" className="text-purple-500 fill-current"><path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                </div>
                <div className="absolute bottom-20 right-20 w-40 h-40 opacity-10 pointer-events-none -rotate-12">
                    <svg viewBox="0 0 100 100" className="text-pink-500 fill-current"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" /></svg>
                </div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="text-blue-500 fill-current"><rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(15 50 50)" /></svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADING --- */}
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[48px] font-bold text-[#2D2D2D] mb-2"
                        >
                            Our Platforms
                        </motion.h2>
                        <p className="font-sans text-[18px] text-[#4B5563] max-w-xl mx-auto">
                            Three distinct verticals working together.
                        </p>
                    </div>

                    {/* ==================== BENTO 1: ENNITTO ==================== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] text-center">Shorts & Originals</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-200" />
                        </div>

                        {/* Reduced Height Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[420px]">

                            {/* Main Card (2x2) - Slightly Lighter Purple */}
                            <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] p-6 flex flex-col justify-between text-white">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Film size={24} className="text-white" />
                                        <h3 className="font-serif text-4xl font-bold">Ennitto</h3>
                                    </div>
                                    <p className="text-lg text-white/95 leading-relaxed mb-4 font-light">
                                        We produce original Malayalam, Tamil & English films. From shorts to features, we discover talent and build stories toward theatrical releases.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {['Short Films', 'Tamil', 'English', 'Malayalam'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <button className="flex-1 bg-white text-[#7C3AED] py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                                        <Play size={16} fill="currentColor" /> Watch
                                    </button>
                                    <button className="flex-1 border border-white/50 text-white py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                        Explore
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Middle Column - Tighter Layout */}
                            <div className="col-span-1 flex flex-col gap-3 h-full">
                                {/* 1. Metrics for 10K Subs */}
                                <BentoCard className="bg-white p-4 flex-none h-[100px] border border-purple-100 flex items-center justify-center" delay={0.1}>
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-[#2D2D2D] block leading-none mb-1">10K+</span>
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Subscribers</span>
                                    </div>
                                </BentoCard>

                                {/* 2. Thumbnail (Talent First replacement) - Stretches to fill */}
                                <BentoCard className="bg-purple-100 flex-1 border border-purple-100 relative group min-h-0" delay={0.2}>
                                    <Image src="/images/poster-1.png" alt="Talent First" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                        <span className="text-white text-sm font-bold">Talent First</span>
                                    </div>
                                </BentoCard>
                            </div>

                            {/* Right Column - 3 Adjusted Thumbnails */}
                            <div className="col-span-1 flex flex-col gap-2 h-full">
                                {ennittoFilms.slice(0, 3).map((film, i) => (
                                    <BentoCard key={film.id} className="flex-1 relative group bg-gray-900 overflow-hidden min-h-0" delay={0.2 + (i * 0.1)}>
                                        <Image src={film.image} alt={film.title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                    </BentoCard>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* ==================== BENTO 2: TEQTHOTS ==================== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#4B5563] text-center">Brand Content</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                        </div>

                        {/* Reduced Height Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[420px]">

                            {/* Visual Card 1 */}
                            <BentoCard className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-100 relative group overflow-hidden" delay={0.1}>
                                <Image
                                    src={teqthotsContent[2].image}
                                    alt="Brand Story"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <span className="text-white font-medium text-sm">Authentic Stories</span>
                                </div>
                            </BentoCard>

                            {/* Main Card (2x2) */}
                            <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white border border-gray-200 p-6 flex flex-col justify-between" delay={0.2}>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            <Users size={24} className="text-[#2D2D2D]" />
                                        </div>
                                        <h3 className="font-serif text-4xl font-bold text-[#2D2D2D]">TeqThots</h3>
                                    </div>
                                    <p className="text-lg text-[#5A5A5A] leading-relaxed mb-4">
                                        Not just ads. We create real storytelling content for brands—founder interviews, product stories, and formats that build trust.
                                    </p>
                                    <div className="flex gap-3 text-sm font-medium text-gray-600 mb-4">
                                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Cost-effective</span>
                                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Fast Turnaround</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <button className="flex-1 bg-white border-2 border-[#E91E8C] text-[#E91E8C] py-3 rounded-lg font-bold text-sm hover:bg-[#E91E8C] hover:text-white transition-colors flex items-center justify-center gap-2">
                                        <Play size={16} fill="currentColor" /> Watch
                                    </button>
                                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        Explore
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Right Column Split */}
                            <div className="col-span-1 flex flex-col gap-3 h-full">
                                {/* Metrics Reduced */}
                                <BentoCard className="bg-white p-4 flex-none h-[120px] flex flex-col justify-center border border-gray-200" delay={0.3}>
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="text-2xl font-bold text-[#2D2D2D]">10+</span>
                                        <span className="text-[10px] text-gray-400 uppercase font-bold text-right leading-tight">Brand<br />Videos</span>
                                    </div>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-2xl font-bold text-[#2D2D2D]">5+</span>
                                        <span className="text-[10px] text-gray-400 uppercase font-bold text-right leading-tight">Partner<br />Brands</span>
                                    </div>
                                </BentoCard>

                                {/* Partner Brand Box */}
                                <BentoCard className="bg-gray-50 flex-1 border border-gray-100 flex items-center justify-center p-4 relative" delay={0.4}>
                                    <div className="text-center opacity-50">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2" />
                                        <span className="text-xs font-bold uppercase text-gray-400">Partner<br />Logo</span>
                                    </div>
                                </BentoCard>
                            </div>

                        </div>
                    </div>


                    {/* ==================== BENTO 3: FEATURE FILMS ==================== */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-300" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#6D28D9] text-center">Cinema & Originals</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-300" />
                        </div>

                        {/* Reduced Height Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:h-[420px]">

                            {/* Main Card (2x2) - Slightly Lighter Purple */}
                            <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-[#7C3AED] p-6 flex flex-col justify-between text-white relative overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8B5CF6] rounded-full blur-[80px] opacity-50" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                            <Clapperboard size={24} className="text-white" />
                                        </div>
                                        <h3 className="font-serif text-4xl font-bold">Feature Films</h3>
                                    </div>
                                    <p className="text-lg text-white/95 leading-relaxed mb-6 font-light">
                                        We are building a slate of feature-length films. Stories that combine strong craft with smart production—made for theater.
                                    </p>
                                    <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-white/90 font-mono text-xs tracking-wide">In Development</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-6">
                                    <button className="w-full bg-white text-[#6D28D9] py-3.5 rounded-lg font-bold text-sm hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 shadow-md">
                                        Explore Projects <ArrowRight size={18} />
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Upcoming Card (2x1) */}
                            <BentoCard className="col-span-1 md:col-span-2 bg-[#6D28D9] p-0 flex flex-col justify-center items-center border border-purple-800 relative group overflow-hidden" delay={0.2}>
                                <Image src="/images/poster-3.png" alt="Feature" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="relative z-10 text-center p-4">
                                    <h4 className="font-serif text-3xl text-white font-bold mb-1 drop-shadow-md">Coming 2026</h4>
                                    <span className="inline-block px-3 py-1 border border-white/40 rounded-full text-purple-50 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md">Theatrical Release</span>
                                </div>
                            </BentoCard>

                            {/* Relevant Content (1x1) - Replaces Rights Available */}
                            <BentoCard className="bg-[#8B5CF6] p-5 flex flex-col items-center justify-center text-center border border-purple-400 relative overflow-hidden" delay={0.3}>
                                <Star className="w-8 h-8 text-yellow-300 mb-2" />
                                <h5 className="text-white font-serif text-xl font-bold leading-tight">Award<br />Winning</h5>
                                <p className="text-purple-200 text-xs mt-1">Teams & Crew</p>
                            </BentoCard>

                            {/* Casting Call (1x1) */}
                            <BentoCard className="bg-white p-5 flex flex-col items-center justify-center text-center relative overflow-hidden border border-purple-200 group cursor-pointer" delay={0.4}>
                                <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-600 transition-colors duration-300">
                                    <Megaphone className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-[#6D28D9] text-base leading-tight">Casting<br />Call</span>
                            </BentoCard>

                        </div>
                    </div>

                </div>
            </section>
        </FollowerPointerCard>
    );
}
