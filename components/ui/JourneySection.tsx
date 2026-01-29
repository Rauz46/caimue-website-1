"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Film, Briefcase, Users, ArrowDown, Camera, Clapperboard } from "lucide-react";

// --- Assets Configuration ---
// Using existing assets but ensuring they fit the landscape aspect ratio
const FILM_IMAGES = [
    "/images/poster-1.png",
    "/images/poster-2.png",
    "/images/poster-3.png",
    "/images/Hey! Sinamika Poster.jpg",
    "/images/Thiruchitrambalam.jpg",
    "/images/Odum Kuthira Chaadum Kuthira poster.jpg",
    "/images/poster-1.png",
];

const BRAND_ASSETS = [
    "/logos/caimue-logo.png",
    "/images/dashboard-preview.png",
    "/logos/teqthots-logo.png",
    "/images/poster-1.png",
    "/logos/funshortz-logo.png",
    "/vercel.svg",
    "/images/poster-2.png",
    "/logos/caimue-logo-v2.png",
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
];

// --- Sub-Components ---

const HandDrawnScribble = ({ type, className, color = "currentColor" }: { type: string, className?: string, color?: string }) => {
    // Simple SVG scribbles
    if (type === "wavy") {
        return (
            <svg viewBox="0 0 100 20" className={`absolute fill-none stroke-[2] ${className}`} style={{ stroke: color }}>
                <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" />
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
    if (type === "arrow") {
        return (
            <svg viewBox="0 0 50 50" className={`absolute fill-none stroke-[2] ${className}`} style={{ stroke: color }}>
                <path d="M10,10 Q25,5 40,10 M30,5 L40,10 L30,15" />
            </svg>
        );
    }
    return null;
};

// --- Main Component ---

export function JourneySection() {
    return (
        <FollowerPointerCard title="The Journey">
            <section className="relative py-[100px] bg-gradient-to-b from-[#F5F0FF] to-[#EDE7FF] overflow-hidden">
                {/* Background Grid Texture */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Scattered Scribbles */}
                <HandDrawnScribble type="wavy" className="w-32 h-8 text-pink-300 top-20 left-10 rotate-12 opacity-40" />
                <HandDrawnScribble type="star" className="w-8 h-8 text-purple-300 top-40 right-20 opacity-40" />
                <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full border-2 border-purple-200 opacity-40" />

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- TOP SECTION --- */}
                    <div className="flex flex-col items-center text-center mb-[60px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[48px] font-bold text-[#4C1D95] mb-6 leading-tight"
                        >
                            THE JOURNEY SO FAR
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-[800px] mx-auto font-sans text-[18px] text-[#6B21A8] space-y-2 mb-[40px]"
                        >
                            <p>We&apos;ve produced films, built brands, and discovered talent across Malayalam, Tamil, and English.</p>
                            <p>Here&apos;s what we&apos;ve done so far as we build toward feature cinema.</p>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[#8B5CF6]"
                        >
                            <ArrowDown size={32} />
                        </motion.div>
                    </div>

                    {/* --- CARDS GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">

                        {/* --- CARD 1: FILMS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[20px] p-[40px] shadow-[0_4px_20px_rgba(75,29,149,0.08)] flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                    12+ Films &<br />2M+ Views
                                </h3>
                                <Film className="w-[36px] h-[36px] text-[#8B5CF6] shrink-0" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8">
                                Short films and digital stories created in collaboration with independent creators. Our content has reached over 2 million views organically on YouTube, Instagram, and other platforms. Each film was a step toward building feature-length cinema.
                            </p>

                            {/* Gallery: Bento Grid */}
                            <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative">
                                {/* Doodles Overlay */}
                                <HandDrawnScribble type="wavy" className="w-16 h-4 text-[#8B5CF6] -top-6 right-10 rotate-12 z-20" />

                                {FILM_IMAGES.slice(0, 6).map((src, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 ${i === 0 || i === 5 ? 'col-span-2' : 'col-span-1'}`}
                                    >
                                        <Image
                                            src={src}
                                            alt="Film"
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* --- CARD 2: BRANDS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[20px] p-[40px] shadow-[0_4px_20px_rgba(75,29,149,0.08)] flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                    Brand<br />Collaborations
                                </h3>
                                <Briefcase className="w-[36px] h-[36px] text-[#F59E0B] shrink-0" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8">
                                From product placements in films to brand storytelling through TeqThots, we integrate brands naturally into stories people want to watch. We&apos;ve worked with multiple brands creating content that builds trust and drives engagement without feeling like ads.
                            </p>

                            {/* Gallery: Bento Grid */}
                            <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative">
                                <div className="absolute top-2 right-2 z-20 text-[#F59E0B] font-bold text-xs bg-white/90 px-2 py-1 rounded shadow-sm rotate-6">✓ Verified</div>

                                {BRAND_ASSETS.slice(0, 7).map((src, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100 flex items-center justify-center ${i === 3 ? 'col-span-2' : 'col-span-1'}`}
                                    >
                                        <Image
                                            src={src}
                                            alt="Brand"
                                            fill={!src.endsWith('.svg')}
                                            width={src.endsWith('.svg') ? 40 : undefined}
                                            height={src.endsWith('.svg') ? 40 : undefined}
                                            className={src.endsWith('.svg') ? "w-10 h-10 opacity-80" : "object-cover transition-transform duration-500 hover:scale-105"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* --- CARD 3: CREATORS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[20px] p-[40px] shadow-[0_4px_20px_rgba(75,29,149,0.08)] flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                    25+ Creators<br />Discovered
                                </h3>
                                <Users className="w-[36px] h-[36px] text-[#E91E8C] shrink-0" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8">
                                We&apos;ve worked with 25+ writers, directors, actors, and storytellers across Malayalam, Tamil, and English. We discover talent, provide production support, and help them bring their vision to screen. Some are now building successful careers in cinema.
                            </p>

                            {/* Gallery: Bento Grid */}
                            <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative">
                                <div className="absolute -bottom-2 -left-2 z-20 bg-pink-100 text-pink-700 font-handwriting px-3 py-1 text-sm -rotate-6 shadow-sm">On Set</div>
                                <Camera className="absolute bottom-4 right-4 text-pink-200 w-8 h-8 opacity-50 pointer-events-none" />

                                {CREATOR_IMAGES.slice(0, 7).map((src, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 ${i === 1 || i === 4 ? 'col-span-2' : 'col-span-1'}`}
                                    >
                                        <Image
                                            src={src}
                                            alt="Creator"
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105 grayscale hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
