"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import {
    Film, Briefcase, Users, Clapperboard, Sparkles,
    Trophy, Crown, Camera, Megaphone, Star
} from "lucide-react";

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

// --- Animations ---
const floatAnim = {
    animate: { y: [-5, 5, -5] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
};

const wobbleAnim = {
    animate: { rotate: [-3, 3, -3] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
};

export function JourneySection() {
    return (
        <FollowerPointerCard title="The Journey">
            <section className="relative py-[100px] bg-gradient-to-b from-[#F5F0FF] to-[#EDE7FF] overflow-hidden">
                {/* --- BACKGROUND LAYER --- */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* Replaced Custom Scribbles with Hero Section FloatingScribbles */}
                    <FloatingScribbles color="text-purple-300/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADER --- */}
                    <div className="flex flex-col items-center text-center mb-[60px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // Fixed: Standard "The Journey So Far" - No Small Caps
                            className="font-serif text-[48px] font-bold text-[#4C1D95] mb-6 leading-tight"
                        >
                            The Journey So Far
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-[750px] mx-auto font-sans text-[18px] text-[#6B21A8] leading-[1.6]"
                        >
                            <p>We&apos;ve produced films, built brands, and discovered talent across Malayalam, Tamil, and English. Here&apos;s our journey as we build toward feature cinema.</p>
                        </motion.div>
                    </div>

                    {/* --- CARDS GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto relative z-10">

                        {/* --- CARD 1: FILMS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#8B5CF6] via-[#E91E8C] to-[#F59E0B] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                        >
                            <div className="bg-white rounded-[20px] p-[40px] h-full flex flex-col relative overflow-hidden group">
                                {/* Doodles: Safe corners placement */}
                                <motion.div {...wobbleAnim} className="absolute -top-6 -right-6 opacity-10 rotate-12 z-0"><Film size={120} /></motion.div>
                                <Sparkles className="absolute top-6 right-6 text-yellow-400 w-6 h-6 animate-pulse z-20" />
                                {/* Annotation moved closer to text */}
                                <div className="absolute top-[55px] right-[50px] font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20 w-24 text-center leading-tight">2M+ organic views!</div>

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        12+ Films &<br />2M+ Views
                                    </h3>
                                    <Film className="w-[36px] h-[36px] text-[#8B5CF6] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    Short films and digital stories created in collaboration with independent creators. Our content has reached over 2 million views organically on YouTube, Instagram, and other platforms. Each film was a step toward building feature-length cinema.
                                </p>

                                {/* Gallery - Matches Card 1 Logic */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    {FILM_IMAGES.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group/img ${i === 0 || i === 5 ? 'col-span-2' : ''}`}>
                                            <Image src={src} alt="Film" fill className="object-cover transition-transform duration-300 group-hover/img:scale-105" />
                                            {i === 1 && <div className="absolute inset-0 border-4 border-white/80 pointer-events-none" />}
                                        </div>
                                    ))}
                                    <Camera className="absolute -bottom-2 -right-2 text-gray-200 w-12 h-12 opacity-50 pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>

                        {/* --- CARD 2: BRANDS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#8B5CF6] via-[#E91E8C] to-[#F59E0B] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                        >
                            <div className="bg-white rounded-[20px] p-[40px] h-full flex flex-col relative overflow-hidden">
                                {/* Doodles: Safe corners placement */}
                                <motion.div {...wobbleAnim} className="absolute top-4 left-4 opacity-10 z-0"><Briefcase size={80} /></motion.div>
                                {/* Adjusted Trusted Partner to be BELOW the icon */}
                                <div className="absolute top-[68px] right-6 flex gap-0.5 text-[#F59E0B] text-xs z-20">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <div className="absolute top-[82px] right-6 font-handwriting text-sm text-[#F59E0B] rotate-3 font-bold z-20">Trusted Partner</div>

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        Brand<br />Collaborations
                                    </h3>
                                    <Briefcase className="w-[36px] h-[36px] text-[#F59E0B] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    From product placements in films to brand storytelling through TeqThots, we integrate brands naturally into stories people want to watch. We&apos;ve worked with multiple brands creating content that builds trust and drives engagement without feeling like ads.
                                </p>

                                {/* Gallery - Matches Card 1 Logic EXACTLY */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    <div className="absolute -bottom-4 right-0 font-handwriting text-sm text-gray-400 -rotate-12 z-20 w-24 text-right pointer-events-none">Organic integrations</div>
                                    <Megaphone className="absolute top-1/2 -left-4 text-yellow-100 w-16 h-16 -rotate-12 pointer-events-none z-0" />

                                    {BRAND_ASSETS.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100 flex items-center justify-center group/img ${i === 0 || i === 5 ? 'col-span-2' : ''}`}>
                                            <Image
                                                src={src}
                                                alt="Brand"
                                                fill={!src.endsWith('.svg')}
                                                width={src.endsWith('.svg') ? 40 : undefined}
                                                height={src.endsWith('.svg') ? 40 : undefined}
                                                className={src.endsWith('.svg') ? "w-10 h-10 opacity-80" : "object-cover transition-transform duration-300 group-hover/img:scale-105"}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* --- CARD 3: CREATORS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#8B5CF6] via-[#E91E8C] to-[#F59E0B] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                        >
                            <div className="bg-white rounded-[20px] p-[40px] h-full flex flex-col relative overflow-hidden">
                                {/* Doodles: Safe placement */}
                                <motion.div {...wobbleAnim} className="absolute -top-6 -right-6 opacity-10 rotate-12 z-0"><Clapperboard size={100} /></motion.div>
                                <Crown className="absolute top-4 left-6 text-[#E91E8C] w-5 h-5 -rotate-12 z-20" />
                                <div className="absolute bottom-6 left-4 font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20">Building careers</div>
                                <div className="absolute top-1/2 right-1/2 w-32 h-32 rounded-full border border-gray-100 opacity-20 pointer-events-none z-0" />

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        25+ Creators<br />Discovered
                                    </h3>
                                    <Users className="w-[36px] h-[36px] text-[#E91E8C] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    We&apos;ve worked with 25+ writers, directors, actors, and storytellers across Malayalam, Tamil, and English. We discover talent, provide production support, and help them bring their vision to screen. Some are now building successful careers in cinema.
                                </p>

                                {/* Gallery - Matches Card 1 Logic EXACTLY */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    {CREATOR_IMAGES.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group/img ${i === 0 || i === 5 ? 'col-span-2' : ''}`}>
                                            <Image src={src} alt="Creator" fill className="object-cover transition-transform duration-300 group-hover/img:scale-105 grayscale group-hover/img:grayscale-0" />
                                        </div>
                                    ))}
                                    {/* On Set Badge */}
                                    <div className="absolute -bottom-2 right-4 bg-yellow-200 text-yellow-900 font-handwriting text-xs px-2 py-1 rotate-3 shadow-sm z-30 pointer-events-none">
                                        On Set
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
