"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { VideoScrollStrip } from "@/components/ui/VideoScrollStrip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

// --- Assets Configuration ---
const FILM_IMAGES = [
    "/images/poster-1.png",
    "/images/poster-2.png",
    "/images/poster-3.png",
    "/images/Hey! Sinamika Poster.jpg",
    "/images/Thiruchitrambalam.jpg",
    "/images/Odum Kuthira Chaadum Kuthira poster.jpg",
];

const BRAND_LOGOS = [
    "/logos/caimue-logo.png",
    "/logos/teqthots-logo.png",
    "/logos/funshortz-logo.png",
    "/vercel.svg", // Using as placeholder
    "/globe.svg",   // Using as placeholder
    "/window.svg",  // Using as placeholder
];

const CREATOR_IMAGES = [
    "/team/avatar-1.png",
    "/team/avatar-2.png",
    "/team/#Atharvaa.jpg",
    "/team/A.jpg",
    "/team/H.jpg",
    "/team/F.jpg",
];

// --- Decorative Components ---
const OrganicBlob = ({ color, className }: { color: string; className?: string }) => (
    <div
        className={`absolute rounded-full filter blur-3xl opacity-20 ${className}`}
        style={{ backgroundColor: color }}
    />
);

const WavyBorder = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`relative overflow-hidden ${className}`}
        style={{
            borderRadius: "24px", // Fallback
            clipPath: "path('M 0 24 Q 0 0 24 0 L 95% 0 Q 100% 0 100% 24 L 100% 95% Q 100% 100% 95% 100% L 24 100% Q 0 100% 0 95% Z')", // Simplistic rounded rect equivalent for now, can be more organic if needed
        }}
    >
        {children}
    </div>
);


// --- Cards ---

const FilmsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative col-span-1 h-[600px] bg-white rounded-[30px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-pink-100/50 group"
        >
            {/* Background Texture */}
            <OrganicBlob color="#FFF0F3" className="w-64 h-64 -top-10 -right-10" />
            <OrganicBlob color="#FFF0F3" className="w-48 h-48 bottom-20 -left-10" />

            <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Top Stats */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex flex-col">
                        <span className="text-[64px] font-bold text-[#2D2D2D] leading-none tracking-tighter">12+</span>
                        <span className="text-sm text-gray-400 font-medium mt-1">Films Produced</span>
                    </div>
                    <div className="w-[1px] h-16 bg-gray-100 mx-4" />
                    <div className="flex flex-col">
                        <span className="text-[64px] font-bold text-[#2D2D2D] leading-none tracking-tighter">2M+</span>
                        <span className="text-sm text-gray-400 font-medium mt-1">Views Reached</span>
                    </div>
                </div>

                {/* Text */}
                <p className="font-sans text-[14px] leading-[1.6] text-gray-600 mb-8 max-w-[90%]">
                    Short films and digital stories that reached audiences organically across platforms. Each film was a step toward something bigger.
                </p>

                {/* Collage */}
                <div className="relative flex-1 w-full mt-4 perspective-[1000px]">
                    {FILM_IMAGES.slice(0, 5).map((src, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-lg shadow-lg overflow-hidden border-2 border-white"
                            style={{
                                width: i % 2 === 0 ? '140px' : '160px',
                                height: 'auto',
                                left: `${(i * 20) + Math.random() * 10}%`,
                                top: `${(i * 15) + Math.random() * 20}px`,
                                rotate: `${Math.random() * 10 - 5}deg`,
                                zIndex: i,
                            }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        >
                            <Image src={src} alt="Film Poster" width={200} height={300} className="w-full h-auto object-cover" />
                            {i === 2 && (
                                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-handwriting transform -rotate-2">
                                    Award Winner!
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const BrandsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative col-span-1 h-[550px] bg-[#FEFBF6] rounded-[30px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-yellow-100/50"
        >
            {/* Background Texture */}
            <OrganicBlob color="#FFF9E6" className="w-56 h-56 top-0 left-0" />
            <OrganicBlob color="#FFF9E6" className="w-40 h-40 bottom-0 right-0" />

            <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Header */}
                <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] mb-3 leading-tight">
                    Brand Collaborations
                </h3>
                <p className="font-sans text-[14px] leading-[1.6] text-gray-600 mb-8">
                    From product placements in films to brand storytelling through TeqThots—we integrate brands naturally.
                </p>

                {/* Collage */}
                <div className="relative flex-1 w-full">
                    {BRAND_LOGOS.map((src, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white p-3 rounded-xl shadow-md border border-gray-50 flex items-center justify-center cursor-pointer"
                            style={{
                                width: '80px',
                                height: '80px',
                                left: `${(i % 3) * 30 + Math.random() * 10}%`,
                                top: `${Math.floor(i / 3) * 35 + Math.random() * 20}%`,
                                rotate: `${Math.random() * 20 - 10}deg`,
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
                        >
                            <Image src={src} alt="Brand Logo" width={60} height={60} className="w-full h-full object-contain" />
                        </motion.div>
                    ))}
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 right-10 text-yellow-400 text-4xl font-bold animate-pulse">+</div>
                    <div className="absolute bottom-10 left-10 text-gray-300 text-2xl font-bold">×</div>
                </div>
            </div>
        </motion.div>
    );
};

const CreatorsCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative col-span-1 h-[520px] bg-[#F5F0FF] rounded-[30px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-purple-100/50"
        >
            {/* Background Texture */}
            <OrganicBlob color="#FAF5FF" className="w-64 h-64 -top-10 -right-10" />

            <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Detail */}
                <div className="mb-4">
                    <span className="text-[64px] font-bold text-[#8B5CF6] leading-none tracking-tighter block">25+</span>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Creators Discovered</span>
                </div>

                <p className="font-sans text-[14px] leading-[1.6] text-gray-600 mb-6">
                    Writers, directors, actors, and storytellers we've worked with. Some are now building their own careers.
                </p>

                {/* Collage */}
                <div className="relative flex-1 w-full">
                    {CREATOR_IMAGES.slice(0, 5).map((src, i) => (
                        <motion.div
                            key={i}
                            className={`absolute overflow-hidden border-4 border-white shadow-md ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`}
                            style={{
                                width: i % 2 === 0 ? '90px' : '100px',
                                height: i % 2 === 0 ? '90px' : '120px',
                                left: `${(i % 2) * 40 + Math.random() * 20}%`,
                                top: `${Math.floor(i / 2) * 30 + Math.random() * 10}%`,
                                rotate: `${Math.random() * 14 - 7}deg`,
                                zIndex: i
                            }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
                        >
                            <Image src={src} alt="Creator" width={120} height={150} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                    {/* Scrapbook Elements */}
                    <div className="absolute top-10 right-0 bg-yellow-200/80 px-2 py-1 transform rotate-12 font-handwriting text-xs text-gray-800 shadow-sm z-20">
                        On Set
                    </div>
                    <div className="absolute bottom-5 left-10 text-purple-300 text-3xl">✦</div>
                </div>
            </div>
        </motion.div>
    );
};


export function JourneySection() {
    return (
        <FollowerPointerCard title="📊 Our Journey">
            <section className="relative pt-[60px] pb-[80px] bg-gradient-to-br from-[#F3E8FF] via-[#E9D5FF] to-[#D8B4FE] overflow-hidden">
                {/* Dark Grid Overlay - Increased opacity */}
                <HeroGrid className="opacity-50 z-0" style={{ filter: "brightness(0.3)" }} />

                {/* Dark Scribbles */}
                <FloatingScribbles color="text-[#2D2D2D]/20" />

                {/* Noise texture */}
                <div className="absolute inset-0 bg-noise opacity-5 z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Top Section */}
                    <div className="text-center mb-[60px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif font-bold text-[#2D2D2D] mb-6 tracking-tight"
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

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-[80px] w-full max-w-[1200px] mx-auto">
                        <FilmsCard />
                        <div className="flex flex-col gap-6 w-full lg:col-span-1 md:col-span-1">
                            <BrandsCard />
                        </div>
                        <div className="flex flex-col gap-6 w-full lg:col-span-1 md:col-span-2 lg:mt-[30px]"> {/* Offset for visual interest if needed, or keeping aligned */}
                            <CreatorsCard />
                        </div>
                    </div>
                    {/* 
                        Layout Adjustment for Tablet/Desktop:
                        The user asked for: 
                        Desktop: 3 cards side by side.
                        Tablet: Card 1 & 2 top, Card 3 bottom.
                        Mobile: Stacked.
                        
                        Current Grid:
                        lg:grid-cols-3 -> 3 columns.
                        md:grid-cols-2 -> 2 columns.
                        grid-cols-1 -> 1 column.

                        Let's refine the grid classes to match strictly.
                        
                        Desktop (lg):
                        Card 1 (Col 1), Card 2 (Col 2), Card 3 (Col 3).
                        
                        Tablet (md):
                        Card 1 (Col 1), Card 2 (Col 2)
                        Card 3 (Col 1 span 2?) -> To make it full width below.
                     */}

                    {/* Refined Grid Logic Implementation */}
                    <div className="hidden">
                        {/* 
                            Replacing the above simple grid with a more controlled one to match "Card 3 full width below on tablet" requirement.
                        */}
                    </div>

                </div>

                {/* Absolute Grid Container for precise control */}
                <div className="container mx-auto px-4 relative z-10 mb-[80px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1: Films */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <FilmsCard />
                        </div>

                        {/* Card 2: Brands */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <BrandsCard />
                        </div>

                        {/* Card 3: Creators */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <CreatorsCard />
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-4 relative z-10">
                    {/* Video Scroll Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative z-10 mb-[40px]"
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
                        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
