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
const FILM_IMAGES = [
    "/images/poster-1.png",
    "/images/poster-2.png",
    "/images/poster-3.png",
    "/images/Hey! Sinamika Poster.jpg",
    "/images/Thiruchitrambalam.jpg",
    "/images/Odum Kuthira Chaadum Kuthira poster.jpg",
    "/images/poster-1.png",
    "/images/poster-2.png",
];

// Added some thumbnail-like placeholders for the Brands card mix
const BRAND_ASSETS = [
    { type: 'logo', src: "/logos/caimue-logo.png" },
    { type: 'thumb', src: "/images/dashboard-preview.png" }, // Thumbnail
    { type: 'logo', src: "/logos/teqthots-logo.png" },
    { type: 'thumb', src: "/images/poster-1.png" }, // Thumbnail
    { type: 'logo', src: "/logos/funshortz-logo.png" },
    { type: 'logo', src: "/vercel.svg" },
    { type: 'thumb', src: "/images/poster-2.png" }, // Thumbnail
    { type: 'logo', src: "/globe.svg" },
    { type: 'logo', src: "/window.svg" },
    { type: 'thumb', src: "/images/poster-3.png" }, // Thumbnail
    { type: 'logo', src: "/logos/caimue-logo-v2.png" },
];

const CREATOR_IMAGES = [
    "/team/avatar-1.png",
    "/team/avatar-2.png",
    "/team/#Atharvaa.jpg",
    "/team/A.jpg",
    "/team/H.jpg",
    "/team/F.jpg",
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

// --- Cards (Standardized Height: h-[600px]) ---

// CARD 1: FILMS & VIEWS
const FilmsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full bg-white rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-pink-100 group flex flex-col"
        >
            <OrganicBlob color="#FFF0F3" className="w-[120%] h-[120%] -top-20 -left-20" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

            {/* Film Strip Left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/5 flex flex-col items-center justify-around py-4 z-0">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-6 bg-white/40 rounded-sm" />
                ))}
            </div>

            <div className="relative z-10 p-8 pl-12 h-full flex flex-col">
                {/* Top Stats - SIDE BY SIDE */}
                <div className="flex flex-row items-start justify-between gap-4 mb-6">
                    {/* Stat 1 */}
                    <div className="flex flex-col relative group/stat">
                        <div className="flex items-center gap-2">
                            <span className="text-[56px] lg:text-[64px] font-bold text-[#2D2D2D] leading-none tracking-tighter">12+</span>
                            <Film className="w-8 h-8 text-[#E91E8C] mb-4" strokeWidth={2} />
                        </div>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Films Produced</span>
                        <HandDrawnScribble type="circle" className="w-20 h-20 -top-3 -left-3 text-[#E91E8C]/20" />
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] h-16 bg-gray-200 mt-2" />

                    {/* Stat 2 */}
                    <div className="flex flex-col relative">
                        <div className="flex items-center gap-2">
                            <span className="text-[56px] lg:text-[64px] font-bold text-[#2D2D2D] leading-none tracking-tighter">2M+</span>
                            <Eye className="w-8 h-8 text-[#E91E8C] mb-4" strokeWidth={2} />
                        </div>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Views Reached</span>
                    </div>
                </div>

                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-6 max-w-[95%]">
                    Short films and digital stories that reached audiences organically across platforms.
                </p>

                {/* Gallery */}
                <div className="relative flex-1 w-full mt-2">
                    <div className="absolute -top-4 right-2 rotate-12 z-20">
                        <span className="font-handwriting text-xl text-[#E91E8C] font-bold">Action!</span>
                    </div>

                    {FILM_IMAGES.map((src, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-lg shadow-md overflow-hidden border-2 border-white bg-gray-100"
                            style={{
                                width: i % 3 === 0 ? '120px' : '100px',
                                aspectRatio: '2/3',
                                left: `${(i % 3) * 35 - 5}%`, // Adjusted for coverage
                                top: `${Math.floor(i / 3) * 40}%`,
                                rotate: `${Math.random() * 10 - 5}deg`,
                                zIndex: i,
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                        >
                            <Image src={src} alt="Film Poster" width={150} height={225} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// CARD 2: BRAND COLLABS
const BrandsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full bg-[#FEFBF6] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-yellow-100 group flex flex-col"
        >
            <OrganicBlob color="#FFF9E6" className="w-[120%] h-[120%] top-0 left-0" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/10 rotate-45 transform" />

            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header - Fixed Alignment */}
                <div className="flex flex-col gap-2 mb-4">
                    <Briefcase className="w-10 h-10 text-[#F59E0B] mb-2" strokeWidth={1.5} />
                    <h3 className="font-serif text-[36px] font-bold text-[#2D2D2D] leading-[1.1]">
                        Brand<br />Collaborations
                    </h3>
                </div>

                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-8 max-w-[95%]">
                    From product placements to brand storytelling—we integrate brands naturally.
                </p>

                {/* Gallery - Mixed Logos & Thumbnails */}
                <div className="relative flex-1 w-full">
                    {BRAND_ASSETS.map((asset, i) => (
                        <motion.div
                            key={i}
                            className={`absolute bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer ${asset.type === 'thumb' ? 'overflow-hidden p-0' : ''}`}
                            style={{
                                width: i % 2 === 0 ? '70px' : '90px',
                                height: i % 2 === 0 ? '70px' : '90px',
                                left: `${(i % 3) * 32 + Math.random() * 5}%`,
                                top: `${Math.floor(i / 3) * 30 + Math.random() * 10}%`,
                                rotate: `${Math.random() * 20 - 10}deg`,
                            }}
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
                            whileHover={{ scale: 1.15, rotate: 0, zIndex: 50, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        >
                            <Image src={asset.src} alt="Brand Asset" width={90} height={90} className={`w-full h-full ${asset.type === 'thumb' ? 'object-cover' : 'object-contain'}`} />
                        </motion.div>
                    ))}
                    <HandDrawnScribble type="star" className="w-8 h-8 text-[#F59E0B] top-2 right-2" />
                </div>
            </div>
        </motion.div>
    );
};

// CARD 3: CREATORS
const CreatorsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full bg-[#F5F0FF] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-purple-100 group flex flex-col"
        >
            <OrganicBlob color="#FAF5FF" className="w-[120%] h-[120%] -top-10 -right-10" />
            <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

            <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Consolidated Header Area */}
                <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[64px] font-bold text-[#8B5CF6] leading-none tracking-tighter">25+</span>
                        <Users className="w-10 h-10 text-[#8B5CF6]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-gray-400 font-bold uppercase tracking-widest block">Creators Discovered</span>
                </div>

                <p className="font-sans text-[15px] leading-[1.6] text-gray-600 mb-6">
                    Writers, directors, and storytellers building their own careers.
                </p>

                {/* Gallery */}
                <div className="relative flex-1 w-full">
                    {CREATOR_IMAGES.map((src, i) => (
                        <motion.div
                            key={i}
                            className={`absolute overflow-hidden border-4 border-white shadow-md ${i % 3 === 0 ? 'rounded-full' : 'rounded-lg'}`}
                            style={{
                                width: i % 2 === 0 ? '80px' : '90px',
                                height: i % 2 === 0 ? '80px' : '110px',
                                // Better distribution
                                left: `${(i % 3) * 33 + Math.random() * 5}%`,
                                top: `${Math.floor(i / 3) * 35 + Math.random() * 5}%`,
                                rotate: `${Math.random() * 14 - 7}deg`,
                                zIndex: i
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                        >
                            <Image src={src} alt="Creator" width={100} height={120} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}

                    <div className="absolute bottom-20 left-0 text-purple-300 transform -rotate-12 z-0">
                        <Camera size={40} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


export function JourneySection() {
    return (
        <FollowerPointerCard title="📊 Our Journey">
            <section className="relative pt-[80px] pb-[100px] bg-gradient-to-br from-[#F3E8FF] via-[#E9D5FF] to-[#D8B4FE] overflow-hidden">
                <HeroGrid className="opacity-40 z-0" style={{ filter: "brightness(0.3)" }} />
                <FloatingScribbles color="text-[#2D2D2D]/20" />
                <div className="absolute inset-0 bg-noise opacity-5 z-0" />

                <div className="container mx-auto px-4 relative z-10">
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
                            We've produced short films and digital content that have reached millions.
                        </motion.p>
                    </div>

                    {/* EQUAL GRID LAYOUT (3 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[100px] max-w-[1400px] mx-auto">
                        <FilmsCard />
                        <BrandsCard />
                        {/* On Tablet (md), Card 3 will naturally move to next row and take half width by default, or we can make it span full */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <CreatorsCard />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative z-10 mb-[60px]"
                    >
                        <VideoScrollStrip />
                    </motion.div>

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
