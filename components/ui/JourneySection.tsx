"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function JourneySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative pt-12 pb-[100px] overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)",
            }}
        >
            {/* Grid Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-[60px]">
                    {/* Loved by Audiences Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{ background: "#E9D5FF" }}
                    >
                        <span
                            className="text-xs font-bold"
                            style={{ color: "#4C1D95", letterSpacing: "1px" }}
                        >
                            Loved by Audiences
                        </span>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                >
                                    <Star size={14} fill="#F59E0B" stroke="#F59E0B" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Heading with Small Caps */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-5xl font-bold mb-5"
                        style={{
                            color: "#000000",
                            letterSpacing: "0.02em",
                        }}
                    >
                        Our Track Record
                    </motion.h2>

                    {/* Sub-heading - Exactly 2 lines */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-[750px] mx-auto font-sans text-lg leading-relaxed"
                        style={{ color: "#6B21A8" }}
                    >
                        <p>
                            We've produced films, promoted brands, and discovered talent across Tamil, Malayalam, and English. Here's our journey as we build toward feature films.
                        </p>
                    </motion.div>
                </div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative" style={{ zIndex: 10 }}>
                    {/* Card 1: Films & Views */}
                    <FilmsCard isInView={isInView} />

                    {/* Card 2: Brand Collaborations */}
                    <BrandCard isInView={isInView} />

                    {/* Card 3: Artists Discovered */}
                    <ArtistsCard isInView={isInView} />
                </div>
            </div>

            {/* Animation Line from Badge to Card 3 */}
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: 5 }}
            >
                <motion.path
                    d="M 50% 120 Q 75% 300 70% 500"
                    stroke="#E9D5FF"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                    transition={{ duration: 2, delay: 1 }}
                />
            </svg>
        </section>
    );
}

// Highlighted stat number — oversized vibrant gradient so the figures pop
function Stat({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="bg-clip-text text-transparent font-extrabold inline-block align-baseline"
            style={{
                backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #E91E8C 100%)",
                WebkitBackgroundClip: "text",
                fontSize: "1.6em",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                paddingBottom: "0.08em",
                overflow: "visible",
            }}
        >
            {children}
        </span>
    );
}

// Card 1: Films & Views
function FilmsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(75, 29, 149, 0.15)" }}
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Header - 2 lines */}
            <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-4 leading-tight break-words text-center relative" style={{ color: "#2D2D2D" }}>
                <Stat>12+</Stat> Short Films &<br />
                <Stat>2M+</Stat> Views
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center" style={{ color: "#5A5A5A" }}>
                Our short films have reached over 2 million views organically on YouTube. We produce original content that connects with audiences who care about authentic storytelling.
            </p>

            {/* Bento Grid Gallery - Films */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[380px]">
                {/* Row 1 */}
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Welcome Home.jpg"
                        alt="Welcome Home"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Smile!.jpg"
                        alt="Smile!"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Row 2 */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Malsya Mandooka Mahamaham.jpg"
                        alt="Malsya Mandooka Mahamaham"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Harinarayana Kudu Charitham.jpg"
                        alt="Harinarayana Kudu Charitham"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Row 3 - New Full Width Card */}
                <div className="col-span-3 row-span-1 relative rounded-xl overflow-hidden bg-gray-100/50">
                    <Image
                        src="/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg"
                        alt="Nadha Nee Varum Kaalocha Kelkuvaan"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 50%" }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

function BrandLogoCell({
    src,
    alt,
    bg,
    className = "",
}: {
    src: string;
    alt: string;
    bg: string;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(75,29,149,0.13)" }}
            className={`relative rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center ${className}`}
            style={{ background: bg, boxShadow: "0 2px 10px rgba(75,29,149,0.06)" }}
        >
            <Image src={src} alt={alt} fill className="object-contain p-3" />
        </motion.div>
    );
}

// Card 2: Brand Collaborations
function BrandCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(75, 29, 149, 0.15)" }}
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Header */}
            <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-4 leading-tight break-words text-center relative" style={{ color: "#2D2D2D" }}>
                <Stat>12+</Stat> Brand <span style={{ color: "#2D2D2D" }}>Collaborations</span>
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center" style={{ color: "#5A5A5A" }}>
                From product placements in films to brand storytelling through TeqThots, we integrate brands naturally into stories people want to watch. We've worked with multiple brands creating content that builds trust and drives engagement without feeling like ads.
            </p>

            {/* 3×4 uniform brand logo grid */}
            <div className="grid grid-cols-3 gap-2" style={{ gridAutoRows: "72px" }}>
                <BrandLogoCell src="/logos/loglos/hael.png" alt="Hael" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/Prodeify-logo-final-768x280-1.png" alt="Prodeify" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/piqual.png" alt="Piqual" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/cropped-Talentou-3.png" alt="Talentou" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/aventei.png" alt="Aventei" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/Nuivio.png" alt="Nuivio" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/xime.png" alt="XIME" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/Ignitho-Updated-Logo.png" alt="Ignitho" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/upcraft.png" alt="Upcraft" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/shared%20image.png" alt="Spark Agency" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/Best%20Engaging%20Storytelling%20Logo%20Design%20%F0%9F%94%BB.jpg" alt="What's The Story" bg="#ffffff" />
                <BrandLogoCell src="/logos/loglos/Creative%20Branding%20Logo%20_%20Minimal%20Modern%20Design%20_%20Business%20Logo%20Inspiration.jpg" alt="Idea Creative Agency" bg="#ffffff" />
            </div>
        </motion.div>
    );
}

// Card 3: Artists Discovered
function ArtistsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(75, 29, 149, 0.15)" }}
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Header */}
            <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-4 leading-tight break-words text-center relative" style={{ color: "#2D2D2D" }}>
                <Stat>25+</Stat> Artists <span style={{ color: "#2D2D2D" }}>Discovered</span>
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center" style={{ color: "#5A5A5A" }}>
                We've worked with 25+ writers, directors, actors, and storytellers across Tamil, Malayalam, and English. We discover artists and bring them together to create films under our creative direction. We are the producers - we build the vision, they bring their talent. Some are now building successful careers in cinema.
            </p>

            {/* Grid Gallery - Artists (Custom Layout) */}
            <div className="flex gap-2 h-[320px]">
                {/* Left Column - Large Images */}
                <div className="w-1/2 flex flex-col gap-2">
                    <div className="relative flex-1 rounded-xl overflow-hidden">
                        <Image
                            src="/team/megha  2.jpg"
                            alt="Megha"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            style={{ objectPosition: "center 20%" }}
                        />
                    </div>
                    <div className="relative flex-1 rounded-xl overflow-hidden">
                        <Image
                            src="/team/sajan 2.jpg"
                            alt="Sajan"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            style={{ objectPosition: "center 20%" }}
                        />
                    </div>
                </div>

                {/* Right Column - Small Images Grid */}
                <div className="w-1/2 flex flex-col gap-2">
                    {/* Top Row - 4 Images */}
                    <div className="flex-1 grid grid-cols-2 gap-2">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image.png"
                                alt="Artist"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image.jpg"
                                alt="Artist"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/smile 1.png"
                                alt="Smile Team 1"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/smile 2.png"
                                alt="Smile Team 2"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Bottom Row - 4 Images */}
                    <div className="flex-1 grid grid-cols-2 gap-2">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image (1).jpg"
                                alt="Artist"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ghkl.jpg"
                                alt="Artist"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ads.png"
                                alt="Ads Team 1"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ads 2.png"
                                alt="Ads Team 2"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
