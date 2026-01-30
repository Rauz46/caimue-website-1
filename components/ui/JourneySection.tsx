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
import { WobbleCard } from "@/components/ui/wobble-card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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
            content: <FilmSkeleton title="Arjun Menon" description="Visionary Director & Storyteller." />,
            className: "md:col-span-2",
            thumbnail: "/team/avatar-1.png",
        },
        {
            id: 22,
            content: <FilmSkeleton title="Priya Kumar" description="Award-winning Screenwriter." />,
            className: "col-span-1",
            thumbnail: "/team/avatar-2.png",
        },
        {
            id: 23,
            content: <FilmSkeleton title="Talent Alpha" description="Discovering the next breakout actor." />,
            className: "col-span-1",
            thumbnail: "/team/A.jpg",
        },
        {
            id: 24,
            content: <FilmSkeleton title="Production Duo" description="Actors turned creators." />,
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto relative z-10">

                        {/* --- CARD 1: FILMS --- */}
                        <CardContainer className="inter-var h-full w-full">
                            <CardBody className="relative h-full w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)]"
                                >
                                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

                                    <div className="relative z-10 h-full flex flex-col">
                                        <CardItem translateZ="60" className="absolute -top-10 -right-10 opacity-[0.08] rotate-12 z-0 pointer-events-none">
                                            <Film size={160} />
                                        </CardItem>

                                        <CardItem translateZ="40" className="absolute top-8 right-8 z-20">
                                            <Sparkles className="text-yellow-400 w-8 h-8 animate-pulse" />
                                        </CardItem>

                                        {/* Header */}
                                        <CardItem translateZ="50" className="flex items-start justify-between gap-4 mb-4 relative z-10 w-full">
                                            <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                                12+ Films &<br />2M+ Views
                                            </h3>
                                            <Film className="w-[36px] h-[36px] text-[#8B5CF6] shrink-0" strokeWidth={1.5} />
                                        </CardItem>

                                        {/* Content */}
                                        <CardItem translateZ="30" className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                            Short films and digital stories created in collaboration with independent creators. Our content has reached over 2 million views organically.
                                        </CardItem>

                                        {/* Annotation: Moved above gallery as requested */}
                                        <div className="font-handwriting text-sm text-[#E91E8C] mb-2 font-bold z-20 leading-tight">2M+ organic views!</div>

                                        {/* Interactive Gallery with Wobble */}
                                        <CardItem translateZ="100" className="w-full relative z-10 mt-auto">
                                            <WobbleCard containerClassName="h-[280px] w-full rounded-xl overflow-hidden border border-gray-100/50 bg-gray-50/50">
                                                <LayoutGrid cards={filmCards} />
                                            </WobbleCard>
                                        </CardItem>
                                    </div>
                                </motion.div>
                            </CardBody>
                        </CardContainer>

                        {/* --- CARD 2: BRANDS --- */}
                        <CardContainer className="inter-var h-full w-full">
                            <CardBody className="relative h-full w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)]"
                                >
                                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Icon moved to Top Right as requested */}
                                        <CardItem translateZ="60" className="absolute top-6 right-6 z-20 bg-white/50 p-2 rounded-full backdrop-blur-sm border border-purple-50">
                                            <Briefcase className="w-[28px] h-[28px] text-[#F59E0B]" strokeWidth={2} />
                                        </CardItem>

                                        <CardItem translateZ="40" className="absolute -top-10 -left-10 opacity-[0.05] z-0 pointer-events-none">
                                            <Briefcase size={160} />
                                        </CardItem>

                                        {/* Header */}
                                        <CardItem translateZ="50" className="flex items-start justify-between gap-4 mb-4 relative z-10 w-full">
                                            <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                                Brand<br />Collaborations
                                            </h3>
                                        </CardItem>

                                        {/* Content: Added movies and short films */}
                                        <CardItem translateZ="30" className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                            From product placements to brand storytelling, we integrate brands naturally into movies, short films, and digital content people want to watch.
                                        </CardItem>

                                        {/* Trusted Partner Stars: Moved above gallery */}
                                        <div className="flex flex-col gap-1 mb-2">
                                            <div className="flex gap-0.5 text-[#F59E0B]">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                            </div>
                                            <div className="font-handwriting text-sm text-[#F59E0B] font-bold">Trusted Partner</div>
                                        </div>

                                        {/* Interactive Gallery with Wobble */}
                                        <CardItem translateZ="100" className="w-full relative z-10 mt-auto">
                                            <WobbleCard containerClassName="h-[280px] w-full rounded-xl overflow-hidden border border-gray-100/50 bg-gray-50/50">
                                                <LayoutGrid cards={brandCards} />
                                            </WobbleCard>
                                        </CardItem>
                                    </div>
                                </motion.div>
                            </CardBody>
                        </CardContainer>

                        {/* --- CARD 3: CREATORS --- */}
                        <CardContainer className="inter-var h-full w-full">
                            <CardBody className="relative h-full w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-[24px] p-[40px] h-full flex flex-col relative overflow-hidden group shadow-[0_10px_30px_-15px_rgba(76,29,149,0.1)]"
                                >
                                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

                                    <div className="relative z-10 h-full flex flex-col">
                                        <CardItem translateZ="60" className="absolute -top-10 -right-10 opacity-[0.08] rotate-12 z-0 pointer-events-none">
                                            <Clapperboard size={160} />
                                        </CardItem>

                                        {/* Header */}
                                        <CardItem translateZ="50" className="flex items-start justify-between gap-4 mb-4 relative z-10 w-full">
                                            <h3 className="font-serif text-[32px] font-bold text-[#2D2D2D] leading-[1.1]">
                                                25+ Creators<br />Discovered
                                            </h3>
                                            <Users className="w-[36px] h-[36px] text-[#E91E8C] shrink-0" strokeWidth={1.5} />
                                        </CardItem>

                                        {/* Content: Added talents found, creators, actors etc */}
                                        <CardItem translateZ="30" className="font-sans text-[15px] leading-[1.7] text-[#5A5A5A] mb-8 relative z-10">
                                            We&apos;ve worked with talents found creators, actors, and filmmakers across Malayalam, Tamil, and English, helping them bring their vision to screen.
                                        </CardItem>

                                        {/* Crown: Moved above gallery */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Crown className="text-[#E91E8C] w-6 h-6 animate-bounce" />
                                            <div className="font-handwriting text-sm text-[#E91E8C] font-bold">Building careers</div>
                                        </div>

                                        {/* Interactive Gallery with Wobble */}
                                        <CardItem translateZ="100" className="w-full relative z-10 mt-auto">
                                            <WobbleCard containerClassName="h-[280px] w-full rounded-xl overflow-hidden border border-gray-100/50 bg-gray-50/50">
                                                <LayoutGrid cards={creatorCards} />
                                            </WobbleCard>
                                        </CardItem>
                                    </div>
                                </motion.div>
                            </CardBody>
                        </CardContainer>

                    </div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}


