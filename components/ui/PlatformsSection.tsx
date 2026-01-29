"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Clapperboard, Film, Video, Megaphone, Star, ArrowUpRight, TrendingUp, Users, Play } from "lucide-react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { cn } from "@/lib/utils";

// --- Data & Assets ---

const ennittoFilms = [
    { id: 1, title: "Hey Sinamika", image: "/images/Hey! Sinamika Poster.jpg" },
    { id: 2, title: "Thiruchitrambalam", image: "/images/Thiruchitrambalam.jpg" },
];

const teqthotsContent = [
    { id: 1, title: "#Atharvaa", image: "/images/#Atharvaa.jpg" },
    { id: 2, title: "Blog Graphics", image: "/images/Blog Graphics.jpg" },
];

const featureFilms = [
    { id: 1, title: "Feature 2026", image: "/images/poster-3.png", label: "Pre-Production" },
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
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={cn(
            "relative rounded-[24px] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300",
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
            <section className="relative py-24 bg-gray-50/50 overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADING --- */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[48px] font-bold text-[#2D2D2D] mb-4"
                        >
                            Our Platforms
                        </motion.h2>
                        <p className="font-sans text-[18px] text-[#6B7280] max-w-xl mx-auto">
                            Three distinct verticals working together to tell stories that matter.
                        </p>
                    </div>

                    {/* ==================== BENTO 1: ENNITTO ==================== */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6]">Cinema & Originals</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-none lg:grid-rows-2 gap-4 h-auto lg:h-[500px]">

                            {/* Main Card (2x2) */}
                            <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-8 flex flex-col justify-between text-white">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Film className="text-white/80" />
                                        <h3 className="font-serif text-4xl font-bold">Ennitto</h3>
                                    </div>
                                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                                        We produce original Malayalam, Tamil & English films. From shorts to features, we discover talent and build stories toward theatrical releases.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">Short Films</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">Features</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">OTT</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-white text-[#7C3AED] py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        <Play size={16} fill="currentColor" /> Watch
                                    </button>
                                    <button className="flex-1 border border-white/30 text-white py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">
                                        Explore
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Stat Card (1x1) */}
                            <BentoCard className="bg-white p-6 flex flex-col justify-center items-center text-center border border-purple-100" delay={0.1}>
                                <TrendingUp className="w-10 h-10 text-[#E91E8C] mb-2" />
                                <span className="text-4xl font-bold text-[#2D2D2D]">2M+</span>
                                <span className="text-sm text-gray-500 font-medium">Organic Views</span>
                            </BentoCard>

                            {/* Poster Card (1x2) - Tall */}
                            <BentoCard className="row-span-2 relative group" delay={0.2}>
                                <Image
                                    src={ennittoFilms[0].image}
                                    alt="Poster"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-white text-xs font-bold uppercase tracking-wider mb-1">Latest Release</span>
                                    <span className="text-white font-serif text-xl">{ennittoFilms[0].title}</span>
                                </div>
                            </BentoCard>

                            {/* Visual/Text Card (1x1) */}
                            <BentoCard className="bg-[#FAF5FF] p-6 flex flex-col justify-center border border-purple-100 relative overflow-hidden" delay={0.3}>
                                {/* Decorative circle */}
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-200 rounded-full opacity-50" />

                                <h4 className="text-xl font-bold text-[#4C1D95] mb-2 relative z-10">Talent First</h4>
                                <p className="text-sm text-[#6D28D9] relative z-10">Giving a platform to new directors & actors.</p>
                            </BentoCard>

                        </div>
                    </div>


                    {/* ==================== BENTO 2: TEQTHOTS ==================== */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#4B5563]">Brand Content</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-none lg:grid-rows-2 gap-4 h-auto lg:h-[500px]">

                            {/* Visual Card (2x1) */}
                            <BentoCard className="col-span-1 md:col-span-3 lg:col-span-2 bg-gray-100 relative group overflow-hidden">
                                <Image
                                    src={teqthotsContent[1].image}
                                    alt="Brand Content"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </BentoCard>

                            {/* Main Card (2x2) */}
                            <BentoCard className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-white border border-gray-200 p-8 flex flex-col justify-between" delay={0.2}>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Users className="text-[#2D2D2D]" />
                                        <h3 className="font-serif text-4xl font-bold text-[#2D2D2D]">TeqThots</h3>
                                    </div>
                                    <p className="text-lg text-[#5A5A5A] leading-relaxed mb-6">
                                        Not just ads. We create real storytelling content for brands—founder interviews, product stories, and behind-the-scenes formats that build trust.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            Cost-effective Production
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            Fast Turnaround
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            Authentic Storytelling
                                        </li>
                                    </ul>
                                </div>
                                <button className="w-full bg-[#2D2D2D] text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
                                    Start a Project <ArrowUpRight size={16} />
                                </button>
                            </BentoCard>

                            {/* Stat/Icon Card (1x1) */}
                            <BentoCard className="bg-[#F3F4F6] p-6 flex flex-col justify-center items-center text-center" delay={0.3}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                                    <Video className="w-6 h-6 text-[#4B5563]" />
                                </div>
                                <span className="font-bold text-gray-800">50+</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Brand Videos</span>
                            </BentoCard>

                            {/* Decor Card (1x1) */}
                            <BentoCard className="bg-white border border-gray-200 p-6 flex items-center justify-center" delay={0.4}>
                                <div className="text-center">
                                    <p className="font-serif text-2xl italic text-gray-400">"Build Trust"</p>
                                </div>
                            </BentoCard>

                        </div>
                    </div>


                    {/* ==================== BENTO 3: FEATURE FILMS ==================== */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-800" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#6D28D9]">Original IP</span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-none lg:grid-rows-2 gap-4 h-auto lg:h-[500px]">

                            {/* Main Card (2x2) */}
                            <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-[#2E1065] p-8 flex flex-col justify-between text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-[#4C1D95] rounded-full blur-3xl opacity-50 translate-x-12 -translate-y-12" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Clapperboard className="text-purple-300" />
                                        <h3 className="font-serif text-4xl font-bold">Feature Films</h3>
                                    </div>
                                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                                        We are building a slate of feature-length films. Stories that combine strong craft with smart production—made for the big screen.
                                    </p>
                                    <div className="inline-block bg-[#4C1D95] px-4 py-2 rounded-lg border border-purple-500/30">
                                        <span className="text-purple-200 font-mono text-sm">Status: In Development</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-8">
                                    <button className="w-full bg-white text-[#2E1065] py-3 rounded-xl font-bold text-sm hover:bg-purple-50 transition-colors">
                                        View Slate
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Upcoming Card (2x1) */}
                            <BentoCard className="col-span-1 md:col-span-2 bg-[#4C1D95] p-6 flex flex-col justify-center items-center border border-purple-800 relative group overflow-hidden" delay={0.2}>
                                <div className="absolute inset-0 bg-[url('/images/poster-3.png')] bg-cover bg-center opacity-30 group-hover:opacity-20 transition-opacity" />
                                <h4 className="font-serif text-3xl text-white font-bold relative z-10 text-center">Coming 2026</h4>
                                <span className="text-purple-300 text-sm tracking-widest uppercase mt-2 relative z-10">Theatrical Release</span>
                            </BentoCard>

                            {/* Concept Card (1x1) */}
                            <BentoCard className="bg-[#3B0764] p-6 flex flex-col justify-center items-center text-center border border-purple-900" delay={0.3}>
                                <Star className="w-8 h-8 text-yellow-400 mb-3" />
                                <span className="text-white font-serif text-lg">New Voices</span>
                            </BentoCard>

                            {/* Date/Logo Card (1x1) */}
                            <BentoCard className="bg-white p-6 flex items-center justify-center relative overflow-hidden" delay={0.4}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <Film size={80} />
                                </div>
                                <span className="font-bold text-[#2E1065] text-xl">Caimue</span>
                            </BentoCard>

                        </div>
                    </div>

                </div>
            </section>
        </FollowerPointerCard>
    );
}
