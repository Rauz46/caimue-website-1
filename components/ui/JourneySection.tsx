"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { VideoScrollStrip } from "@/components/ui/VideoScrollStrip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Film, Eye, Briefcase, Users, Star, Clapperboard, Video, Megaphone, Camera } from "lucide-react";

// --- Assets Configuration ---
// Duplicating assets to ensure "full" look as requested
const FILM_IMAGES = [
    "/images/poster-1.png",
    "/images/poster-2.png",
    "/images/poster-3.png",
    "/images/Hey! Sinamika Poster.jpg",
    "/images/Thiruchitrambalam.jpg",
    "/images/Odum Kuthira Chaadum Kuthira poster.jpg",
    // Duplicates for density
    "/images/poster-1.png",
    "/images/poster-2.png",
];

const BRAND_LOGOS = [
    "/logos/caimue-logo.png",
    "/logos/teqthots-logo.png",
    "/logos/funshortz-logo.png",
    "/logos/caimue-logo-v2.png",
    "/vercel.svg",
    "/globe.svg",
    "/window.svg",
    // Duplicates for density
    "/logos/caimue-logo.png",
    "/logos/teqthots-logo.png",
    "/logos/funshortz-logo.png",
    "/vercel.svg",
    "/globe.svg",
];

const CREATOR_IMAGES = [
    "/team/avatar-1.png",
    "/team/avatar-2.png",
    "/team/#Atharvaa.jpg",
    "/team/A.jpg",
    "/team/H.jpg",
    "/team/F.jpg",
    // Duplicates for density
    "/team/avatar-1.png",
    "/team/avatar-2.png",
    "/team/A.jpg",
    "/team/H.jpg",
];

// --- Decorative Components ---

const OrganicBlob = ({ color, className }: { color: string; className?: string }) => (
    <div
        className={`absolute rounded-full filter blur-3xl opacity-30 ${className}`}
        style={{ backgroundColor: color }}
    />
);

const HandDrawnScribble = ({ type, className, color = "currentColor" }: { type: string, className?: string, color?: string }) => {
    // Simple inline SVG doodles
    if (type === "circle") {
        return (
            <svg viewBox="0 0 100 100" className={`absolute fill-none stroke-[3] ${className}`} style={{ stroke: color }}>
                <path d="M10,50 Q10,10 50,10 T90,50 T50,90 T10,50" />
            </svg>
        );
    }
    if (type === "arrow") {
        return (
            <svg viewBox="0 0 100 50" className={`absolute fill-none stroke-[3] ${className}`} style={{ stroke: color }}>
                <path d="M10,25 Q40,10 80,25 M70,10 L80,25 L70,40" />
            </svg>
        );
    }
    if (type === "star") {
        return (
            <svg viewBox="0 0 24 24" className={`absolute fill-current ${className}`} style={{ color: color }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        );
    }
    if (type === "underline") {
        return (
            <svg viewBox="0 0 100 20" className={`absolute fill-none stroke-[3] ${className}`} style={{ stroke: color }}>
                <path d="M5,10 Q20,15 35,10 T65,10 T95,10" />
            </svg>
        );
    }
    return null;
};

// --- Cards ---

// CARD 1: FILMS & VIEWS (Tallest, 40% width)
const FilmsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[650px] bg-white rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-pink-100 group flex flex-col"
        >
            {/* Background Textures */}
            <OrganicBlob color="#FFF0F3" className="w-[120%] h-[120%] -top-20 -left-20" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

            {/* Film Strip Decoration (Left Edge) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/5 flex flex-col items-center justify-around py-4 z-0">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-6 bg-white/40 rounded-sm" />
                ))}
            </div>

            <div className="relative z-10 p-8 pl-12 h-full flex flex-col">
                {/* Top Stats */}
                <div className="flex flex-col gap-8 mb-8">
                    {/* Stat 1 */}
                    <div className="relative group/stat">
                        <div className="flex items-center gap-4">
                            <span className="text-[72px] font-bold text-[#2D2D2D] leading-none tracking-tighter">12+</span>
                            <Film className="w-10 h-10 text-[#E91E8C]" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm text-gray-400 font-bold uppercase tracking-widest ml-1">Films Produced</span>
                        <HandDrawnScribble type="circle" className="w-24 h-24 -top-4 -left-4 text-[#E91E8C]/20" />
                    </div>

                    {/* Stat 2 */}
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <span className="text-[72px] font-bold text-[#2D2D2D] leading-none tracking-tighter">2M+</span>
                            <Eye className="w-10 h-10 text-[#E91E8C]" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm text-gray-400 font-bold uppercase tracking-widest ml-1">Views Reached</span>
                    </div>
                </div>

                {/* Text */}
                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-8 max-w-[95%]">
                    Short films and digital stories that reached audiences organically across platforms.
                    Each film was a step toward something bigger.
                </p>

                {/* Gallery: Scattered/Masonry - ALL VISIBLE */}
                <div className="relative flex-1 w-full mt-2">
                    {/* "Action!" Doodle */}
                    <div className="absolute -top-6 right-4 rotate-12 z-20">
                        <span className="font-handwriting text-2xl text-[#E91E8C] font-bold">Action!</span>
                        <HandDrawnScribble type="underline" className="w-16 h-4 text-[#E91E8C] top-8 right-0" />
                    </div>

                    {FILM_IMAGES.map((src, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-lg shadow-md overflow-hidden border-2 border-white bg-gray-100"
                            style={{
                                width: i % 3 === 0 ? '140px' : '110px',
                                aspectRatio: '2/3',
                                // Explicit positioning to ensure visibility without overlap blocking
                                left: `${(i % 3) * 33}%`, // 3 columns
                                top: `${Math.floor(i / 3) * 45}%`, // Rows
                                rotate: `${Math.random() * 8 - 4}deg`,
                                zIndex: i,
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                        >
                            <Image src={src} alt="Film Poster" width={150} height={225} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Corner Decor */}
            <Clapperboard className="absolute bottom-4 right-4 w-12 h-12 text-[#E91E8C]/10 rotate-12" />
        </motion.div>
    );
};

// CARD 2: BRAND COLLABS (Medium, 35% width)
const BrandsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[550px] bg-[#FEFBF6] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-yellow-100 group flex flex-col"
        >
            {/* Background Textures */}
            <OrganicBlob color="#FFF9E6" className="w-[120%] h-[120%] top-0 left-0" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

            {/* Decor: Diagonal Stripe (CSS approx) */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/10 rotate-45 transform" />


            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                    <Briefcase className="w-12 h-12 text-[#F59E0B]" strokeWidth={1.5} />
                    <div>
                        <h3 className="font-serif text-[36px] font-bold text-[#2D2D2D] leading-none mb-1">
                            Brand <br /> Collaborations
                        </h3>
                    </div>
                </div>

                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-8 max-w-[95%]">
                    From product placements in films to brand storytelling through TeqThots—we integrate brands naturally.
                </p>

                {/* Gallery: Sticker Bomb */}
                <div className="relative flex-1 w-full">
                    {BRAND_LOGOS.map((src, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer"
                            style={{
                                width: i % 2 === 0 ? '70px' : '90px',
                                height: i % 2 === 0 ? '70px' : '90px',
                                // Randomized but somewhat grid-like placement
                                left: `${(i % 3) * 30 + Math.random() * 10}%`,
                                top: `${Math.floor(i / 3) * 28 + Math.random() * 10}%`,
                                rotate: `${Math.random() * 20 - 10}deg`,
                            }}
                            animate={{
                                y: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 3 + Math.random(),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random()
                            }}
                            whileHover={{ scale: 1.15, rotate: 0, zIndex: 50, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        >
                            <Image src={src} alt="Brand Logo" width={80} height={80} className="w-full h-full object-contain" />
                        </motion.div>
                    ))}
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 right-4 text-[#F59E0B] text-4xl font-bold animate-pulse">+</div>
                    <div className="absolute bottom-10 left-4 text-gray-300 text-2xl font-bold">×</div>
                    <HandDrawnScribble type="star" className="w-8 h-8 text-[#F59E0B] top-10 right-10" />
                    <div className="absolute bottom-4 right-8 bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-[#F59E0B] shadow-sm transform -rotate-6">
                        Trusted
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// CARD 3: CREATORS (Shortest, 25% width)
const CreatorsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[530px] bg-[#F5F0FF] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-purple-100 group flex flex-col"
        >
            {/* Background Textures */}
            <OrganicBlob color="#FAF5FF" className="w-[120%] h-[120%] -top-10 -right-10" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

            {/* Decor: Dotted pattern (CSS approx) */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Stats */}
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-[72px] font-bold text-[#8B5CF6] leading-none tracking-tighter block">25+</span>
                    <Users className="w-10 h-10 text-[#8B5CF6]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4 block">Creators Discovered</span>

                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-6">
                    Writers, directors, actors, and storytellers we've worked with. Some are now building their own careers.
                </p>

                {/* Gallery: Scrapbook */}
                <div className="relative flex-1 w-full">
                    {CREATOR_IMAGES.map((src, i) => (
                        <motion.div
                            key={i}
                            className={`absolute overflow-hidden border-4 border-white shadow-md ${i % 3 === 0 ? 'rounded-full' : 'rounded-lg'}`}
                            style={{
                                width: i % 2 === 0 ? '80px' : '90px',
                                height: i % 2 === 0 ? '80px' : '110px',
                                // Concentrated scatter
                                left: `${(i % 2) * 50 + Math.random() * 10}%`,
                                top: `${Math.floor(i / 2) * 40 + Math.random() * 10}%`,
                                rotate: `${Math.random() * 14 - 7}deg`,
                                zIndex: i
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                        >
                            <Image src={src} alt="Creator" width={100} height={120} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}

                    {/* Scrapbook Elements */}
                    <div className="absolute top-4 right-0 bg-yellow-200/90 px-3 py-1 transform rotate-6 font-handwriting text-sm text-gray-800 shadow-sm z-20 border-l-4 border-l-transparent border-r-4 border-r-transparent">
                        On Set
                    </div>
                    <div className="absolute bottom-8 left-4 text-purple-300 transform -rotate-12">
                        <Camera size={32} />
                    </div>
                    <HandDrawnScribble type="arrow" className="w-12 h-12 text-[#8B5CF6] bottom-4 right-4 rotate-45" />
                </div>
            </div>
        </motion.div>
    );
};


export function JourneySection() {
    return (
        <FollowerPointerCard title="📊 Our Journey">
            <section className="relative pt-[80px] pb-[100px] bg-gradient-to-br from-[#F3E8FF] via-[#E9D5FF] to-[#D8B4FE] overflow-hidden">
                {/* Dark Grid Overlay */}
                <HeroGrid className="opacity-40 z-0" style={{ filter: "brightness(0.3)" }} />

                {/* Dark Scribbles */}
                <FloatingScribbles color="text-[#2D2D2D]/20" />

                {/* Noise texture */}
                <div className="absolute inset-0 bg-noise opacity-5 z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Top Section */}
                    <div className="text-center mb-[80px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold text-[#2D2D2D] mb-6 tracking-tight"
                        >
                            The Journey So Far
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#5A5A5A] text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed"
                        >
                            We've produced short films and digital content that have reached millions. Each project was a step toward building something bigger.
                        </motion.p>
                    </div>

                    {/* 
                      BENTO GRID LAYOUT - MAXIMALIST FIXES 
                      
                      Desktop (lg):
                      - Row 1: FilmsCard (40%), BrandsCard (35%), CreatorsCard (25%)
                      - Using Flexbox for proportional widths as Grid is harder for exact %
                      
                      Tablet (md):
                      - Row 1: FilmsCard (50%), BrandsCard (50%)
                      - Row 2: CreatorsCard (100%)
                      
                      Mobile:
                      - Stacked vertical
                    */}

                    <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-6 md:gap-8 items-stretch justify-center mb-[100px]">

                        {/* CARD 1: FILMS - lg:40%, md:50% */}
                        <div className="w-full md:w-[calc(50%-16px)] lg:w-[40%] min-w-[300px]">
                            <FilmsCard />
                        </div>

                        {/* CARD 2: BRANDS - lg:35%, md:50% */}
                        <div className="w-full md:w-[calc(50%-16px)] lg:w-[35%] min-w-[300px]">
                            <BrandsCard />
                        </div>

                        {/* CARD 3: CREATORS - lg:25%, md:100% */}
                        <div className="w-full md:w-full lg:w-[25%] min-w-[300px]">
                            <CreatorsCard />
                        </div>

                    </div>


                    {/* Video Scroll Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative z-10 mb-[60px]"
                    >
                        <VideoScrollStrip />
                    </motion.div>

                    {/* Scroll to Explore Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col items-center gap-2 text-[#2D2D2D]/40"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-[1px] h-12 bg-current" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
