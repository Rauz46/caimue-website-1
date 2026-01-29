"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Clapperboard, Film, Video, Megaphone, Star, ArrowUpRight, TrendingUp, Users, Play, MonitorPlay } from "lucide-react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { cn } from "@/lib/utils";

// --- Data & Assets ---

const ennittoFilms = [
    { id: 1, title: "Hey Sinamika", image: "/images/Hey! Sinamika Poster.jpg" },
    { id: 2, title: "Thiruchitrambalam", image: "/images/Thiruchitrambalam.jpg" },
    { id: 3, title: "Short Film 1", image: "/images/poster-1.png" }, // Added for 3rd slot
];

const teqthotsContent = [
    { id: 1, title: "#Atharvaa", image: "/images/#Atharvaa.jpg" },
    { id: 2, title: "Blog Graphics", image: "/images/Blog Graphics.jpg" },
    { id: 3, title: "Odum Kuthira", image: "/images/Odum Kuthira Chaadum Kuthira poster.jpg" },
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
            <section className="relative py-24 bg-gray-50 overflow-hidden">
                {/* Background Texture - Darker Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'radial-gradient(#2D2D2D 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* Darker Scribble Effect */}
                <div className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8B5CF6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.5C59.4,45.9,47.9,55,35.4,63.4C22.9,71.8,9.4,79.5,-3.1,84.9C-15.6,90.3,-27.1,93.4,-38.1,87.8C-49.1,82.2,-59.6,67.9,-69.3,53.8C-79,39.7,-87.9,25.8,-88.4,11.3C-88.9,-3.2,-81,-18.3,-71.2,-31.6C-61.4,-44.9,-49.7,-56.4,-37.1,-64.5C-24.5,-72.6,-11,-77.3,1.8,-80.4C14.6,-83.5,29.2,-85,42,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADING --- */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[56px] font-bold text-[#2D2D2D] mb-4"
                        >
                            Our Platforms
                        </motion.h2>
                        <p className="font-sans text-[20px] text-[#4B5563] max-w-xl mx-auto font-medium">
                            Three distinct verticals working together to tell stories that matter.
                        </p>
                    </div>

                    {/* ==================== BENTO 1: ENNITTO ==================== */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-purple-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] bg-white px-4 py-1 rounded-full shadow-sm">Shorts & Originals</span>
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-purple-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:h-[500px]">

                            {/* Main Card (2x2) */}
                            <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] p-8 flex flex-col justify-between text-white">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                                            <Film size={28} className="text-white" />
                                        </div>
                                        <h3 className="font-serif text-5xl font-bold">Ennitto</h3>
                                    </div>
                                    <p className="text-xl text-white/90 leading-relaxed mb-8 font-light">
                                        We produce original Malayalam, Tamil & English films. From shorts to features, we discover talent and build stories toward theatrical releases.
                                    </p>
                                    <div className="flex gap-2">
                                        {['Short Films', 'Features', 'OTT'].map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <button className="flex-1 bg-white text-[#6D28D9] py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        <Play size={20} fill="currentColor" /> Watch
                                    </button>
                                    <button className="flex-1 border border-white/40 text-white py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                        Explore
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Middle Column - Metrics & Thumbs */}
                            <div className="col-span-1 flex flex-col gap-4 h-full">
                                {/* Metrics (Split into mini-grid) */}
                                <BentoCard className="bg-white p-5 flex-1 border border-purple-100 flex flex-col justify-center" delay={0.1}>
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        <div className="flex flex-col justify-center items-center text-center p-2 bg-purple-50 rounded-xl">
                                            <TrendingUp className="w-6 h-6 text-[#E91E8C] mb-1" />
                                            <span className="text-2xl font-bold text-[#2D2D2D]">2M+</span>
                                            <span className="text-[10px] text-gray-500 font-bold uppercase">Views</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-center p-2 bg-purple-50 rounded-xl">
                                            <Users className="w-6 h-6 text-[#8B5CF6] mb-1" />
                                            <span className="text-2xl font-bold text-[#2D2D2D]">15k</span>
                                            <span className="text-[10px] text-gray-500 font-bold uppercase">Subs</span>
                                        </div>
                                        <div className="col-span-2 flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl">
                                            <span className="text-xs font-bold text-gray-500 uppercase">Growth</span>
                                            <span className="text-emerald-500 font-bold text-sm">+124%</span>
                                        </div>
                                    </div>
                                </BentoCard>

                                {/* Image Thumbnail (Replaces Talent First Text) */}
                                <BentoCard className="bg-purple-100 flex-1 border border-purple-100 relative group" delay={0.2}>
                                    <div className="absolute inset-0 bg-gray-200">
                                        <Image src="/images/poster-1.png" alt="Talent First" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-4">
                                            <span className="text-white font-bold">Talent First</span>
                                        </div>
                                    </div>
                                </BentoCard>
                            </div>

                            {/* Right Column - 3 Stacked Images */}
                            <div className="col-span-1 flex flex-col gap-2 h-full">
                                {ennittoFilms.slice(0, 3).map((film, i) => (
                                    <BentoCard key={film.id} className="flex-1 relative group bg-gray-900 overflow-hidden" delay={0.2 + (i * 0.1)}>
                                        <Image src={film.image} alt={film.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </BentoCard>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* ==================== BENTO 2: TEQTHOTS ==================== */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#4B5563] bg-white px-4 py-1 rounded-full shadow-sm">Brand Content</span>
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:h-[500px]">

                            {/* Visual Card 1 (Replaces Build Trust Text) */}
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
                            <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white border border-gray-200 p-8 flex flex-col justify-between" delay={0.2}>
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gray-100 rounded-xl">
                                            <Users size={28} className="text-[#2D2D2D]" />
                                        </div>
                                        <h3 className="font-serif text-5xl font-bold text-[#2D2D2D]">TeqThots</h3>
                                    </div>
                                    <p className="text-xl text-[#5A5A5A] leading-relaxed mb-8">
                                        Not just ads. We create real storytelling content for brands—founder interviews, product stories, and formats that build trust.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <span className="w-2 h-2 rounded-full bg-green-500" /> Cost-effective
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" /> Fast Turnaround
                                        </div>
                                    </div>
                                </div>

                                {/* Updated CTAs to match Ennitto */}
                                <div className="flex gap-4 mt-auto">
                                    <button className="flex-1 bg-[#E91E8C] text-white py-4 rounded-xl font-bold text-base hover:bg-[#D81B60] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        <Play size={20} fill="currentColor" /> Watch
                                    </button>
                                    <button className="flex-1 border border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        Explore
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Metrics (Updated content) */}
                            <BentoCard className="bg-white p-6 flex flex-col justify-center border border-gray-200" delay={0.3}>
                                <div className="space-y-4">
                                    <div className="flex items-end justify-between border-b border-gray-100 pb-2">
                                        <span className="text-3xl font-bold text-[#2D2D2D] leading-none">10+</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold text-right">Brand<br />Videos</span>
                                    </div>
                                    <div className="flex items-end justify-between border-b border-gray-100 pb-2">
                                        <span className="text-3xl font-bold text-[#2D2D2D] leading-none">5+</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold text-right">Partner<br />Brands</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#E91E8C] text-sm font-bold pt-1">
                                        <TrendingUp size={16} /> <span>High Engagement</span>
                                    </div>
                                </div>
                            </BentoCard>

                            {/* Visual Card 2 */}
                            <BentoCard className="bg-gray-100 relative group overflow-hidden" delay={0.4}>
                                <Image
                                    src={teqthotsContent[0].image}
                                    alt="Brand Content"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </BentoCard>

                        </div>
                    </div>


                    {/* ==================== BENTO 3: FEATURE FILMS ==================== */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-purple-800" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[#5B21B6] bg-purple-50 px-4 py-1 rounded-full border border-purple-200">Cinema & Originals</span>
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-purple-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:h-[500px]">

                            {/* Main Card (2x2) - Lighter Purple */}
                            <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-[#5B21B6] p-8 flex flex-col justify-between text-white relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#7C3AED] rounded-full blur-[100px] opacity-40" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                            <Clapperboard size={28} className="text-white" />
                                        </div>
                                        <h3 className="font-serif text-5xl font-bold">Feature Films</h3>
                                    </div>
                                    <p className="text-xl text-white/90 leading-relaxed mb-8 font-light">
                                        We are building a slate of feature-length films. Stories that combine strong craft with smart production—made for the big screen.
                                    </p>
                                    <div className="inline-flex items-center gap-2 bg-[#4C1D95] px-4 py-2 rounded-lg border border-purple-400/30">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-purple-100 font-mono text-sm tracking-wide">Status: In Development</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-8">
                                    <button className="w-full bg-white text-[#4C1D95] py-4 rounded-xl font-bold text-base hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                                        Explore Projects <ArrowRight size={20} />
                                    </button>
                                </div>
                            </BentoCard>

                            {/* Upcoming Card (2x1) */}
                            <BentoCard className="col-span-1 md:col-span-2 bg-[#4C1D95] p-0 flex flex-col justify-center items-center border border-purple-800 relative group overflow-hidden" delay={0.2}>
                                <Image src="/images/poster-3.png" alt="Feature" fill className="object-cover opacity-50 group-hover:opacity-30 transition-opacity" />
                                <div className="relative z-10 text-center p-6">
                                    <h4 className="font-serif text-4xl text-white font-bold mb-2 drop-shadow-lg">Coming 2026</h4>
                                    <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-purple-100 text-sm tracking-[0.2em] uppercase backdrop-blur-md">Theatrical Release</span>
                                </div>
                            </BentoCard>

                            {/* Info Card (1x1) - Replaces 'New Voices' */}
                            <BentoCard className="bg-[#6D28D9] p-6 flex flex-col justify-center relative overflow-hidden border border-purple-700" delay={0.3}>
                                <div className="absolute top-0 right-0 p-8 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <h5 className="text-white/80 text-sm font-bold uppercase mb-2">Rights Available</h5>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-white font-medium"><MonitorPlay size={16} /> OTT & Digital</li>
                                    <li className="flex items-center gap-2 text-white font-medium"><Film size={16} /> Theatrical</li>
                                    <li className="flex items-center gap-2 text-white font-medium"><Clapperboard size={16} /> Satellite</li>
                                </ul>
                            </BentoCard>

                            {/* Visual/Call Card (1x1) */}
                            <BentoCard className="bg-white p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-purple-200 group cursor-pointer" delay={0.4}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-600 transition-colors duration-300">
                                    <Megaphone className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-[#4C1D95] text-lg leading-tight group-hover:translate-y-1 transition-transform">Casting<br />Call</span>
                                <span className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</span>
                            </BentoCard>

                        </div>
                    </div>

                </div>
            </section>
        </FollowerPointerCard>
    );
}
