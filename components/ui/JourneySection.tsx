"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";

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
            <SectionDownArrow />

            {/* Grid Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
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
                lineHeight: 1,
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
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden flex flex-col"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Intro — fixed height on lg so all three media grids align */}
            <div className="lg:min-h-[200px]">
                <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-3 leading-[1.65] break-words text-center relative" style={{ color: "#2D2D2D" }}>
                    <Stat>20+</Stat> Short Films,<br />
                    2M+ Views
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center max-w-[340px] mx-auto" style={{ color: "#5A5A5A" }}>
                    Original short films that have crossed 2 million organic views on YouTube.
                </p>
            </div>

            {/* Bento Grid Gallery - Films */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 flex-1 min-h-[380px]">
                {/* Row 1 */}
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Welcome Home.jpg"
                        alt="Welcome Home"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Smile!.jpg"
                        alt="Smile!"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Row 2 */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Malsya Mandooka Mahamaham.jpg"
                        alt="Malsya Mandooka Mahamaham"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Movies/Harinarayana Kudu Charitham.jpg"
                        alt="Harinarayana Kudu Charitham"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Row 3 - New Full Width Card */}
                <div className="col-span-3 row-span-1 relative rounded-xl overflow-hidden bg-gray-100/50">
                    <Image
                        src="/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg"
                        alt="Nadha Nee Varum Kaalocha Kelkuvaan"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 50%" }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

function CollabShot({
    src,
    alt,
    className = "",
    position,
}: {
    src: string;
    alt: string;
    className?: string;
    position?: string;
}) {
    return (
        <div className={`relative rounded-xl overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                style={position ? { objectPosition: position } : undefined}
            />
        </div>
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
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden flex flex-col"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Intro — fixed height on lg so all three media grids align */}
            <div className="lg:min-h-[200px]">
                <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-3 leading-[1.65] break-words text-center relative" style={{ color: "#2D2D2D" }}>
                    <Stat>15+</Stat> Brand <span style={{ color: "#2D2D2D" }}>Collaborations</span>
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center max-w-[340px] mx-auto" style={{ color: "#5A5A5A" }}>
                    Brand stories woven naturally into films and TeqDots — never feeling like ads.
                </p>
            </div>

            {/* Stills from brand collaboration videos: two portrait cells on the left, three landscape cells on the right */}
            <div className="flex gap-2 flex-1 min-h-[420px]">
                <div className="w-[40%] flex flex-col gap-2">
                    <CollabShot src="/collabs/heal%20brand.png" alt="Hael brand video" className="flex-1" position="55% center" />
                    <CollabShot src="/collabs/prodeia.png" alt="Prodeia brand video" className="flex-1" />
                </div>
                <div className="w-[60%] flex flex-col gap-2">
                    <CollabShot src="/collabs/piqual%20collab.png" alt="Piqual brand video" className="flex-1" />
                    <CollabShot src="/collabs/xime%20collab.png" alt="XIME brand video" className="flex-1" />
                    <CollabShot src="/collabs/nuivio%20collab.png" alt="Nuivio brand video" className="flex-1" />
                </div>
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
            className="bg-white rounded-[20px] p-6 sm:p-8 pt-9 transition-all duration-300 relative overflow-hidden flex flex-col"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "linear-gradient(90deg, #7C3AED, #E91E8C)" }} />
            {/* Soft corner glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#8B5CF6" }} />

            {/* Header */}
            {/* Intro — fixed height on lg so all three media grids align */}
            <div className="lg:min-h-[200px]">
                <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-3 leading-[1.65] break-words text-center relative" style={{ color: "#2D2D2D" }}>
                    <Stat>25+</Stat> Artists <span style={{ color: "#2D2D2D" }}>Discovered</span>
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] mb-6 text-center max-w-[340px] mx-auto" style={{ color: "#5A5A5A" }}>
                    Writers, directors, and actors creating under our production.
                </p>
            </div>

            {/* Grid Gallery - Artists (Custom Layout) */}
            <div className="flex flex-col gap-2 flex-1 min-h-[320px]">
                {/* Top Half - Large Image Left, Small Grid Right */}
                <div className="flex-1 flex gap-2">
                    <div className="w-1/2 relative rounded-xl overflow-hidden">
                        <Image
                            src="/team/megha  2.jpg"
                            alt="Megha"
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            style={{ objectPosition: "center 20%" }}
                        />
                    </div>
                    <div className="w-1/2 grid grid-cols-2 gap-2">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image.png"
                                alt="Artist"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image.jpg"
                                alt="Artist"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/smile 1.png"
                                alt="Smile Team 1"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/smile 2.png"
                                alt="Smile Team 2"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Half - Small Grid Left, Large Image Right */}
                <div className="flex-1 flex gap-2">
                    <div className="w-1/2 grid grid-cols-2 gap-2">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/image (1).jpg"
                                alt="Artist"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ghkl.jpg"
                                alt="Artist"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ads.png"
                                alt="Ads Team 1"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/team/ads 2.png"
                                alt="Ads Team 2"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 relative rounded-xl overflow-hidden">
                        <Image
                            src="/team/sajan 2.jpg"
                            alt="Sajan"
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            style={{ objectPosition: "center 20%" }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
