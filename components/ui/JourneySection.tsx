"use client";

import React from "react";
import { motion } from "framer-motion";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import {
    Film, Briefcase, Users, Clapperboard, Sparkles,
    Crown, Star
} from "lucide-react";
import { LayoutGrid } from "@/components/ui/layout-grid";

// --- Skeleton Components for LayoutGrid ---
const FilmSkeleton = ({ title, description }: { title: string; description: string }) => (
    <div className="text-white">
        <p className="font-bold text-2xl mb-2">{title}</p>
        <p className="font-normal text-sm opacity-90">{description}</p>
    </div>
);

export function JourneySection() {
    // --- LayoutGrid Card Configurations ---
    const filmCards = [
        {
            id: 1,
            content: <FilmSkeleton title="Hey Sinamika" description="A beautiful tale of love and friendship." />,
            className: "md:col-span-2",
            thumbnail: "/images/Hey! Sinamika Poster.jpg",
        },
        {
            id: 2,
            content: <FilmSkeleton title="Thiruchitrambalam" description="Exploring the nuances of family bonds." />,
            className: "col-span-1",
            thumbnail: "/images/Thiruchitrambalam.jpg",
        },
        {
            id: 3,
            content: <FilmSkeleton title="Odum Kuthira" description="A journey of discovery and resilience." />,
            className: "col-span-1",
            thumbnail: "/images/Odum Kuthira Chaadum Kuthira poster.jpg",
        },
        {
            id: 4,
            content: <FilmSkeleton title="Short Film Showcase" description="Celebrating independent storytellers." />,
            className: "md:col-span-2",
            thumbnail: "/images/poster-1.png",
        },
    ];

    const brandCards = [
        {
            id: 11,
            content: <FilmSkeleton title="Caimue Platform" description="Our AI-first production ecosystem." />,
            className: "md:col-span-2",
            thumbnail: "/images/dashboard-preview.png",
        },
        {
            id: 12,
            content: <FilmSkeleton title="TeqThots" description="Innovative brand integrations." />,
            className: "col-span-1",
            thumbnail: "/logos/teqthots-logo.png",
        },
        {
            id: 13,
            content: <FilmSkeleton title="FunShortz" description="Engaging micro-content for brands." />,
            className: "col-span-1",
            thumbnail: "/logos/funshortz-logo.png",
        },
        {
            id: 14,
            content: <FilmSkeleton title="Brand Storytelling" description="Creating impact through narrative." />,
            className: "md:col-span-2",
            thumbnail: "/images/poster-2.png",
        },
    ];

    const creatorCards = [
        {
            id: 21,
            content: <FilmSkeleton title="Arjun Menon" description="Director & Visionary storyteller." />,
            className: "md:col-span-2",
            thumbnail: "/team/avatar-1.png",
        },
        {
            id: 22,
            content: <FilmSkeleton title="Priya Kumar" description="Acclaimed Screenwriter." />,
            className: "col-span-1",
            thumbnail: "/team/avatar-2.png",
        },
        {
            id: 23,
            content: <FilmSkeleton title="Talent Discovery" description="Nurturing the next generation of cinema." />,
            className: "col-span-1",
            thumbnail: "/team/A.jpg",
        },
        {
            id: 24,
            content: <FilmSkeleton title="Collaborative Spirit" description="Building careers in cinema together." />,
            className: "md:col-span-2",
            thumbnail: "/team/H.jpg",
        },
    ];

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto relative z-10">

                        {/* --- CARD 1: FILMS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(76,29,149,0.2)] hover:border-purple-300/50 transition-colors"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Doodles: Safe corners placement */}
                                <motion.div
                                    animate={{ rotate: [-3, 3, -3] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 opacity-[0.07] rotate-12 z-0"
                                >
                                    <Film size={120} />
                                </motion.div>
                                <Sparkles className="absolute top-6 right-6 text-yellow-400 w-6 h-6 animate-pulse z-20" />
                                <div className="absolute top-[28px] right-[60px] font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20 w-24 text-center leading-tight">2M+ organic views!</div>

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        12+ Films &<br />2M+ Views
                                    </h3>
                                    <Film className="w-[36px] h-[36px] text-[#8B5CF6] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    Short films and digital stories created in collaboration with independent creators. Our content has reached over 2 million views organically.
                                </p>

                                {/* Interactive Gallery */}
                                <div className="h-[280px] w-full relative z-10 mt-auto rounded-xl overflow-hidden border border-gray-100/50">
                                    <LayoutGrid cards={filmCards} />
                                </div>
                            </div>
                        </motion.div>

                        {/* --- CARD 2: BRANDS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(76,29,149,0.2)] hover:border-purple-300/50 transition-colors"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Doodles: Safe corners placement */}
                                <motion.div
                                    animate={{ rotate: [-3, 3, -3] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 left-4 opacity-[0.07] z-0"
                                >
                                    <Briefcase size={80} />
                                </motion.div>
                                <div className="absolute top-[75px] right-6 flex gap-0.5 text-[#F59E0B] text-xs z-20">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <div className="absolute top-[90px] right-6 font-handwriting text-sm text-[#F59E0B] rotate-3 font-bold z-20">Trusted Partner</div>

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        Brand<br />Collaborations
                                    </h3>
                                    <Briefcase className="w-[36px] h-[36px] text-[#F59E0B] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    From product placements to brand storytelling, we integrate brands naturally into stories people want to watch.
                                </p>

                                {/* Interactive Gallery */}
                                <div className="h-[280px] w-full relative z-10 mt-auto rounded-xl overflow-hidden border border-gray-100/50">
                                    <LayoutGrid cards={brandCards} />
                                </div>
                            </div>
                        </motion.div>

                        {/* --- CARD 3: CREATORS --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                            className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(76,29,149,0.2)] hover:border-purple-300/50 transition-colors"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Doodles: Safe placement */}
                                <motion.div
                                    animate={{ rotate: [-3, 3, -3] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 opacity-[0.07] rotate-12 z-0"
                                >
                                    <Clapperboard size={100} />
                                </motion.div>
                                <Crown className="absolute top-4 left-6 text-[#E91E8C] w-5 h-5 -rotate-12 z-20" />
                                <div className="absolute bottom-6 left-4 font-handwriting text-sm text-[#E91E8C] -rotate-6 font-bold z-20">Building careers</div>

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                                    <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                        25+ Creators<br />Discovered
                                    </h3>
                                    <Users className="w-[36px] h-[36px] text-[#E91E8C] shrink-0" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <p className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                    We&apos;ve worked with storytellers across Malayalam, Tamil, and English, helping them bring their vision to screen.
                                </p>

                                {/* Interactive Gallery */}
                                <div className="h-[280px] w-full relative z-10 mt-auto rounded-xl overflow-hidden border border-gray-100/50">
                                    <LayoutGrid cards={creatorCards} />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}

