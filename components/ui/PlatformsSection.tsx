"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Clapperboard, Film, Video, Megaphone, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

// --- Data & Assets ---

const ennittoFilms = [
    { id: 1, title: "Hey Sinamika", image: "/images/Hey! Sinamika Poster.jpg" },
    { id: 2, title: "Thiruchitrambalam", image: "/images/Thiruchitrambalam.jpg" },
    { id: 3, title: "Short Film 1", image: "/images/poster-1.png" },
];

const teqthotsContent = [
    { id: 1, title: "Odum Kuthira", image: "/images/Odum Kuthira Chaadum Kuthira poster.jpg" },
    { id: 2, title: "#Atharvaa", image: "/images/#Atharvaa.jpg" },
    { id: 3, title: "Product Story", image: "/images/Blog Graphics.jpg" },
    { id: 4, title: "Founder Talk", image: "/images/poster-2.png" },
];

const featureFilms = [
    { id: 1, title: "Untitled Project A", image: "/images/poster-1.png", label: "In Development" },
    { id: 2, title: "Untitled Project B", image: "/images/poster-2.png", label: "Casting" },
    { id: 3, title: "Feature 2026", image: "/images/poster-3.png", label: "Pre-Production" },
];

// --- Components ---

const FloatingDoodles = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Film Reel near Ennitto */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[2%] opacity-20 text-[#8B5CF6] hidden xl:block"
        >
            <Film size={64} />
        </motion.div>

        {/* Megaphone near TeqThots */}
        <motion.div
            animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[25%] opacity-20 text-[#E91E8C] hidden xl:block"
        >
            <Megaphone size={56} />
        </motion.div>

        {/* Chair near Feature Films */}
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[2%] opacity-20 text-[#F59E0B] hidden xl:block"
        >
            <Clapperboard size={72} />
        </motion.div>

        {/* Wavy lines and stars */}
        <svg className="absolute top-[45%] left-[30%] w-32 h-12 opacity-30 text-[#8B5CF6] hidden xl:block" viewBox="0 0 100 20">
            <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        <div className="absolute top-[10%] right-[10%] text-[#F59E0B] opacity-40 rotate-12 text-sm font-handwriting">Action!</div>
        <div className="absolute bottom-[20%] left-[5%] text-[#E91E8C] opacity-40 -rotate-6 text-sm font-handwriting">Cinema</div>
    </div>
);

export function PlatformsSection() {
    return (
        <FollowerPointerCard title="Our Platforms">
            <section className="relative py-[100px] bg-white overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(#2D2D2D 1px, transparent 1px), linear-gradient(90deg, #2D2D2D 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                <FloatingDoodles />

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADING --- */}
                    <div className="text-center mb-[50px]">
                        <h2 className="font-serif text-[42px] font-bold text-[#2D2D2D] tracking-wide mb-4 uppercase" style={{ fontVariantCaps: 'small-caps' }}>
                            Our Platforms
                        </h2>
                        <p className="font-sans text-[16px] text-[#6B7280]">
                            Three ways we tell stories
                        </p>
                    </div>

                    {/* --- CARDS GRID --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto items-stretch">

                        {/* === CARD 1: ENNITTO === */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-[24px] p-9 shadow-[0_8px_24px_rgba(139,92,246,0.25)] flex flex-col h-full text-white relative overflow-hidden group"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <span className="inline-block bg-[#E9D5FF] text-[#4C1D95] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                    Cinema & Original Stories
                                </span>
                                <h3 className="font-serif text-[36px] font-bold leading-tight mb-2">Ennitto</h3>
                                <p className="font-sans text-[14px] text-white/80 italic">Where Stories Become Cinema</p>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-[15px] leading-[1.6] text-white/90 mb-8">
                                We produce original Malayalam, Tamil & English films—from shorts to features. We discover talent and build stories toward theatrical and OTT releases.
                            </p>

                            {/* Visual Showcase: Stacked Polaroids */}
                            <div className="relative h-[180px] mb-8 flex items-center justify-center">
                                {ennittoFilms.map((film, i) => (
                                    <motion.div
                                        key={film.id}
                                        className="absolute w-[140px] bg-white p-2 pb-6 shadow-lg rounded-sm origin-bottom"
                                        style={{
                                            rotate: i === 0 ? '-5deg' : i === 1 ? '2deg' : '8deg',
                                            zIndex: i,
                                            left: i === 0 ? '10%' : i === 1 ? '30%' : '50%'
                                        }}
                                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                                    >
                                        <div className="aspect-video relative overflow-hidden bg-gray-200 mb-2">
                                            <Image src={film.image} alt={film.title} fill className="object-cover" />
                                        </div>
                                        <div className="h-2 w-3/4 bg-gray-100 rounded-full mx-auto" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#E91E8C] hover:bg-gray-50 text-[14px] font-medium py-2.5 rounded-lg transition-colors">
                                    <Youtube size={18} />
                                    <span>Watch</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 text-[14px] font-medium py-2.5 rounded-lg transition-colors">
                                    <span>Explore</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>

                        {/* === CARD 2: TEQTHOTS === */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white border-2 border-[#E5E7EB] rounded-[24px] p-9 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col h-full text-[#2D2D2D] relative overflow-hidden"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <span className="inline-block bg-[#F3F4F6] text-[#1F2937] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                    Brand Content
                                </span>
                                <h3 className="font-serif text-[36px] font-bold leading-tight mb-2 text-[#2D2D2D]">TeqThots</h3>
                                <p className="font-sans text-[14px] text-[#6B7280] italic">Stories That Build Brands</p>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-[15px] leading-[1.6] text-[#4B5563] mb-8">
                                We create brand storytelling content—founder interviews, product explainers, and formats that build trust. Not ads. Real stories.
                            </p>

                            {/* Visual Showcase: Grid Collage */}
                            <div className="relative h-[180px] mb-8">
                                <div className="grid grid-cols-2 gap-2 h-full w-full rotate-2 scale-90">
                                    {teqthotsContent.slice(0, 4).map((content, i) => (
                                        <motion.div
                                            key={content.id}
                                            className={`relative rounded-xl overflow-hidden shadow-sm ${i < 2 ? 'opacity-80 scale-95' : 'opacity-100 z-10 shadow-md'}`}
                                            style={{ rotate: i % 2 === 0 ? '-2deg' : '2deg' }}
                                        >
                                            <Image src={content.image} alt={content.title} fill className="object-cover" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-[#FF0000] text-white hover:bg-[#CC0000] text-[14px] font-medium py-2.5 rounded-lg transition-colors">
                                    <Youtube size={18} />
                                    <span>Watch</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1F2937] text-white hover:bg-[#374151] text-[14px] font-medium py-2.5 rounded-lg transition-colors">
                                    <span>Explore</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>

                        {/* === CARD 3: FEATURE FILMS === */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[24px] p-9 shadow-[0_8px_24px_rgba(124,58,237,0.25)] flex flex-col h-full text-white relative overflow-hidden"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <span className="inline-block bg-[#E9D5FF] text-[#4C1D95] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                    Original Features
                                </span>
                                <h3 className="font-serif text-[36px] font-bold leading-tight mb-2">Feature Films</h3>
                                <p className="font-sans text-[14px] text-white/80 italic">Stories Built for the Big Screen</p>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-[15px] leading-[1.6] text-white/90 mb-8">
                                We're building a slate of feature-length films for theatrical and OTT releases. Stories that combine strong craft with smart production.
                            </p>

                            {/* Visual Showcase: Clapperboards */}
                            <div className="relative h-[180px] mb-8 flex items-center justify-center">
                                {featureFilms.map((film, i) => (
                                    <motion.div
                                        key={film.id}
                                        className="absolute w-[180px] shadow-xl origin-bottom-left"
                                        style={{
                                            rotate: i === 0 ? '-5deg' : i === 1 ? '5deg' : '0deg',
                                            zIndex: i,
                                            left: i === 0 ? '5%' : i === 1 ? '35%' : '20%',
                                            top: i * 10
                                        }}
                                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                                    >
                                        <div className="bg-[#2D2D2D] h-8 flex relative overflow-hidden rounded-t-lg">
                                            {/* Clapper stripes */}
                                            <div className="absolute inset-0 flex" style={{ transform: 'skewX(-20deg)', width: '120%' }}>
                                                {[...Array(6)].map((_, j) => (
                                                    <div key={j} className={`flex-1 ${j % 2 === 0 ? 'bg-white' : 'bg-[#2D2D2D]'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white p-1 rounded-b-lg">
                                            <div className="relative aspect-[16/8] bg-gray-900 rounded-sm overflow-hidden">
                                                <Image src={film.image} alt={film.title} fill className="object-cover opacity-80" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white text-[10px] uppercase font-bold tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/20">
                                                        {film.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                                <button className="w-full flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-gray-50 text-[14px] font-bold py-3 rounded-lg transition-colors shadow-sm">
                                    <span>Explore Projects</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
