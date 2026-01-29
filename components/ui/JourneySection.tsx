"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
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

// --- Custom Doodles & Scribbles ---

const Scribble = ({ type, className, color = "currentColor" }: { type: string, className?: string, color?: string }) => {
    const commonProps = { className: `absolute fill-none stroke-[2] ${className}`, style: { stroke: color } };

    // Simple SVG paths for handwritten feel
    switch (type) {
        case "wavy":
            return <svg viewBox="0 0 100 20" {...commonProps}><path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" /></svg>;
        case "curl":
            return <svg viewBox="0 0 50 50" {...commonProps}><path d="M10,40 Q10,10 40,25 T40,40" /></svg>;
        case "arrow":
            return <svg viewBox="0 0 60 40" {...commonProps}><path d="M10,20 Q30,5 50,20 M40,15 L50,20 L40,25" /></svg>;
        case "star":
            return <svg viewBox="0 0 24 24" className={`absolute fill-current ${className}`} style={{ color: color }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
        case "cross":
            return <svg viewBox="0 0 20 20" {...commonProps}><path d="M5,5 L15,15 M15,5 L5,15" /></svg>;
        case "heart":
            return <svg viewBox="0 0 24 24" className={`absolute fill-current ${className}`} style={{ color: color }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>;
        default: return null;
    }
};

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
                {/* --- BACKGROUND LAYER (Z-0) --- */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* -- Scribbles: Top Section -- */}
                    <motion.div {...floatAnim} className="absolute top-10 left-10 opacity-30 text-purple-400"><Clapperboard size={48} /></motion.div>
                    <motion.div {...floatAnim} transition={{ delay: 1 }} className="absolute top-20 right-20 opacity-30 text-pink-400 rotate-12"><Film size={56} /></motion.div>
                    <Scribble type="wavy" className="w-40 h-10 text-pink-300 top-32 left-1/4 rotate-45 opacity-40 translate-x-[-50%]" />
                    <Scribble type="star" className="w-8 h-8 text-yellow-500 top-16 right-1/3 opacity-40" />

                    {/* -- Scribbles: Left Margin -- */}
                    <Scribble type="curl" className="w-20 h-20 text-purple-300 top-1/2 left-4 opacity-40" />
                    <motion.div {...wobbleAnim} className="absolute bottom-1/3 left-10 text-purple-300 opacity-30"><Camera size={40} /></motion.div>

                    {/* -- Scribbles: Right Margin -- */}
                    <Scribble type="arrow" className="w-24 h-16 text-pink-300 top-1/2 right-4 opacity-40 rotate-180" />
                    <div className="absolute bottom-1/4 right-8 font-handwriting text-2xl text-pink-400/40 rotate-6">Action!</div>

                    {/* -- Scribbles: Bottom Section -- */}
                    <Scribble type="wavy" className="w-64 h-12 text-purple-300 bottom-10 left-1/3 opacity-30" />
                    <motion.div {...floatAnim} className="absolute bottom-20 right-1/4 opacity-30 text-yellow-400"><Star size={40} /></motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* --- HEADER --- */}
                    <div className="flex flex-col items-center text-center mb-[60px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[48px] font-bold text-[#4C1D95] mb-6 leading-tight"
                            style={{ fontVariant: 'small-caps' }}
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
                        {/* Gutter Scribble */}
                        <div className="absolute -left-12 top-1/2 w-8 h-8 opacity-40 hidden xl:block"><Scribble type="cross" className="w-full h-full text-purple-400" /></div>

                        {/* --- CARD 1: FILMS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // Gradient Border Wrapper
                            className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#8B5CF6] via-[#E91E8C] to-[#F59E0B] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                        >
                            <div className="bg-white rounded-[20px] p-[40px] h-full flex flex-col relative overflow-hidden group">
                                {/* Doodles/Decor */}
                                <motion.div {...wobbleAnim} className="absolute -top-4 -right-4 opacity-10 rotate-12"><Film size={120} /></motion.div>
                                <Sparkles className="absolute top-10 left-4 text-yellow-400 w-6 h-6 animate-pulse" />
                                <div className="absolute top-14 left-24 font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20">2M+ organic views!</div>

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

                                {/* Gallery - REMOVED PADDING/MARGINS FOR TIGHT FIT */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    {FILM_IMAGES.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group/img ${i === 0 || i === 5 ? 'col-span-2' : ''}`}>
                                            <Image src={src} alt="Film" fill className="object-cover transition-transform duration-300 group-hover/img:scale-105" />
                                            {i === 1 && <div className="absolute inset-0 border-4 border-white/80 pointer-events-none" />}
                                        </div>
                                    ))}
                                    <Camera className="absolute -bottom-2 -right-2 text-gray-200 w-12 h-12 opacity-50" />
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
                                {/* Doodles */}
                                <motion.div {...wobbleAnim} className="absolute top-4 left-4 opacity-10"><Briefcase size={80} /></motion.div>
                                <div className="absolute top-12 right-12 flex gap-0.5 text-[#F59E0B] text-xs">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <div className="absolute top-8 right-20 font-handwriting text-sm text-[#F59E0B] rotate-3 font-bold z-20">Trusted Partner</div>

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

                                {/* Gallery */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    <div className="absolute bottom-10 right-0 font-handwriting text-sm text-gray-400 -rotate-12 z-20">Organic integrations</div>
                                    <Megaphone className="absolute top-1/2 left-0 text-yellow-100 w-10 h-10 -rotate-12" />

                                    {BRAND_ASSETS.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100 flex items-center justify-center group/img ${i === 3 ? 'col-span-2' : ''}`}>
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
                                {/* Doodles */}
                                <motion.div {...wobbleAnim} className="absolute -top-6 -right-6 opacity-10 rotate-12"><Clapperboard size={100} /></motion.div>
                                <Crown className="absolute top-12 left-20 text-[#E91E8C] w-5 h-5 -rotate-12" />
                                <div className="absolute bottom-20 left-4 font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20">Building careers</div>
                                <div className="absolute top-1/2 right-1/2 w-32 h-32 rounded-full border border-gray-100 opacity-20 pointer-events-none" />

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        25+ Creators<br />Discovered
                                    </h3>
                                    <Users className="w-[36px] h-[36px] text-[#E91E8C] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    We&apos;ve worked with 25+ writers, directors, actors, and storytellers across Malayalam, Tamil, and English. We discover talent, provide production support, and help them bring their vision to screen. Some are now building success careers in cinema.
                                </p>

                                {/* Gallery */}
                                <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-[80px] relative z-10 mt-auto">
                                    {CREATOR_IMAGES.map((src, i) => (
                                        <div key={i} className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 group/img ${i === 1 || i === 4 ? 'col-span-2' : ''}`}>
                                            <Image src={src} alt="Creator" fill className="object-cover transition-transform duration-300 group-hover/img:scale-105 grayscale group-hover/img:grayscale-0" />
                                        </div>
                                    ))}
                                    {/* On Set Badge */}
                                    <div className="absolute -bottom-2 right-4 bg-yellow-200 text-yellow-900 font-handwriting text-xs px-2 py-1 rotate-3 shadow-sm z-30">
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
