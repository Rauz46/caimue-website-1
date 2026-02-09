"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Briefcase, Users, Star } from "lucide-react";
import Image from "next/image";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function JourneySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-[100px] overflow-hidden"
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
                        The Journey So Far
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
                            We've produced films, promoted brands, and discovered talent across English, Malayalam, and Tamil. Here's our journey as we build toward feature films.
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

// Card 1: Films & Views
function FilmsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(75, 29, 149, 0.15)" }}
            className="bg-white rounded-[20px] p-8 transition-all duration-300 relative"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Icon in TOP RIGHT */}
            <motion.div
                className="absolute top-6 right-6"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Film size={36} style={{ color: "#8B5CF6" }} strokeWidth={1.5} />
            </motion.div>

            {/* Header - 2 lines */}
            <h3 className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                12+ Short Films &<br />
                <span style={{ color: "#4C1D95" }}>2M+</span> Views
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                Our short films have reached over 2 million views organically on YouTube. We produce original content that connects with audiences who care about authentic storytelling.
            </p>

            {/* Bento Grid Gallery - Films */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[250px]">
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
            </div>
        </motion.div>
    );
}

// Card 2: Brand Collaborations
// Card 2: Brand Collaborations
function BrandCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(75, 29, 149, 0.15)" }}
            className="bg-white rounded-[20px] p-8 transition-all duration-300 relative"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Icon in TOP RIGHT */}
            <motion.div
                className="absolute top-6 right-6"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Briefcase size={36} style={{ color: "#F59E0B" }} strokeWidth={1.5} />
            </motion.div>

            {/* Header */}
            <h3 className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                Brand <span style={{ color: "#4C1D95" }}>Collaborations</span>
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                From product placements in films to brand storytelling through TeqThots, we integrate brands naturally into stories people want to watch. We've worked with multiple brands creating content that builds trust and drives engagement without feeling like ads.
            </p>

            {/* Bento Grid Gallery - Brands (matches Card 1 layout) */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[250px]">
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <Image
                        src="/logos/thumbnail.jpg"
                        alt="Piqual Collaboration"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <Image
                        src="/logos/brand collab.jpg"
                        alt="Brand Collaboration"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <Image
                        src="/logos/IMG_2967.jpg"
                        alt="Brand Content"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
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
            className="bg-white rounded-[20px] p-8 transition-all duration-300 relative"
            style={{
                boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
            }}
        >
            {/* Icon in TOP RIGHT */}
            <motion.div
                className="absolute top-6 right-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Users size={36} style={{ color: "#E91E8C" }} strokeWidth={1.5} />
            </motion.div>

            {/* Header */}
            <h3 className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                25+ Artists <span style={{ color: "#4C1D95" }}>Discovered</span>
            </h3>

            {/* Content */}
            <p className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                We've worked with 25+ writers, directors, actors, and storytellers across English, Malayalam, and Tamil. We discover artists and bring them together to create films under our creative direction. We are the producers - we build the vision, they bring their talent. Some are now building successful careers in cinema.
            </p>

            {/* Bento Grid Gallery - Artists (All 7 team images) */}
            <div className="grid grid-cols-4 grid-rows-3 gap-2 h-[300px]">
                {/* Row 1 */}
                <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/smile 1.png"
                        alt="Team collaboration"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 30%" }}
                    />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/megha.jpg"
                        alt="Artist Megha"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 20%" }}
                    />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/sajan.jpg"
                        alt="Artist Sajan"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 30%" }}
                    />
                </div>
                {/* Row 2 */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/megha  2.jpg"
                        alt="Artist Megha"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 20%" }}
                    />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/sajan 2.jpg"
                        alt="Artist Sajan"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 30%" }}
                    />
                </div>
                {/* Row 3 */}
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/smile 2.png"
                        alt="Team photo"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 40%" }}
                    />
                </div>
                <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                    <Image
                        src="/team/ads 2.png"
                        alt="Behind the scenes"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "center 40%" }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
