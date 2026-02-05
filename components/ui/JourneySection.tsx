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
                    {/* Trusted by Creators Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{ background: "#E9D5FF" }}
                    >
                        <span
                            className="text-xs font-bold uppercase"
                            style={{ color: "#4C1D95", letterSpacing: "1px" }}
                        >
                            Trusted by Creators and Brands
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
                            We've produced films, built brands, and discovered talent across Malayalam, Tamil, and English. Here's our journey as we build toward feature cinema.
                        </p>
                    </motion.div>
                </div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative" style={{ zIndex: 10 }}>
                    {/* Card 1: Films & Views */}
                    <FilmsCard isInView={isInView} />

                    {/* Card 2: Brand Collaborations */}
                    <BrandCard isInView={isInView} />

                    {/* Card 3: Creators Discovered */}
                    <CreatorsCard isInView={isInView} />
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
        >
            <CardContainer className="inter-var h-full w-full">
                <CardBody className="h-full w-full">
                    <div
                        className="bg-white rounded-[20px] p-10 transition-all duration-300 relative h-full flex flex-col"
                        style={{
                            boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
                        }}
                    >
                        {/* Icon in TOP RIGHT */}
                        <CardItem translateZ="60" className="absolute top-6 right-6">
                            <motion.div
                                animate={{ rotate: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Film size={36} style={{ color: "#8B5CF6" }} strokeWidth={1.5} />
                            </motion.div>
                        </CardItem>

                        {/* Header - 2 lines */}
                        <CardItem translateZ="50" as="h3" className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                            12+ Films &<br />
                            <span style={{ color: "#4C1D95" }}>2M+</span> Views
                        </CardItem>

                        {/* Content */}
                        <CardItem translateZ="30" as="p" className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                            Short films and digital stories created in collaboration with independent creators. Our content has reached over 2 million views organically on YouTube, Instagram, and other platforms. Each film was a step toward building feature-length cinema.
                        </CardItem>

                        {/* Bento Grid Gallery */}
                        <CardItem translateZ="100" className="flex-1 grid grid-cols-3 gap-1.5 relative">
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/Movies/Welcome Home.jpg"
                                    alt="Welcome Home"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/Movies/Smile!.jpg"
                                    alt="Smile!"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/Movies/Malsya Mandooka Mahamaham.jpg"
                                    alt="Malsya Mandooka Mahamaham"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/Movies/Harinarayana Kudu Charitham.jpg"
                                    alt="Harinarayana Kudu Charitham"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
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
        >
            <CardContainer className="inter-var h-full w-full">
                <CardBody className="h-full w-full">
                    <div
                        className="bg-white rounded-[20px] p-10 transition-all duration-300 relative h-full flex flex-col"
                        style={{
                            boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
                        }}
                    >
                        {/* Icon in TOP RIGHT */}
                        <CardItem translateZ="60" className="absolute top-6 right-6">
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Briefcase size={36} style={{ color: "#F59E0B" }} strokeWidth={1.5} />
                            </motion.div>
                        </CardItem>

                        {/* Header */}
                        <CardItem translateZ="50" as="h3" className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                            Brand <span style={{ color: "#4C1D95" }}>Collaborations</span>
                        </CardItem>

                        {/* Content */}
                        <CardItem translateZ="30" as="p" className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                            From product placements in films to brand storytelling through TeqThots, we integrate brands naturally into stories people want to watch. We've worked with multiple brands creating content that builds trust and drives engagement without feeling like ads.
                        </CardItem>

                        {/* Bento Grid Gallery */}
                        <CardItem translateZ="100" className="flex-1 grid grid-cols-3 gap-1.5">
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/logos/piqual thumbnail.jpg"
                                    alt="Piqual"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
                                <Image
                                    src="/logos/teqthots-logo.png"
                                    alt="TeqThots"
                                    width={80}
                                    height={80}
                                    className="object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
                                <Image
                                    src="/logos/caimue-logo.png"
                                    alt="Caimue"
                                    width={80}
                                    height={80}
                                    className="object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/logos/brand collab.jpg"
                                    alt="Brand Collaboration"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div >
    );
}

// Card 3: Creators Discovered
function CreatorsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
        >
            <CardContainer className="inter-var h-full w-full">
                <CardBody className="h-full w-full">
                    <div
                        className="bg-white rounded-[20px] p-10 transition-all duration-300 relative h-full flex flex-col"
                        style={{
                            boxShadow: "0 4px 20px rgba(75, 29, 149, 0.08)",
                        }}
                    >
                        {/* Icon in TOP RIGHT */}
                        <CardItem translateZ="60" className="absolute top-6 right-6">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Users size={36} style={{ color: "#E91E8C" }} strokeWidth={1.5} />
                            </motion.div>
                        </CardItem>

                        {/* Header */}
                        <CardItem translateZ="50" as="h3" className="font-serif text-[32px] font-bold mb-4" style={{ color: "#2D2D2D" }}>
                            25+ Creators <span style={{ color: "#4C1D95" }}>Discovered</span>
                        </CardItem>

                        {/* Content */}
                        <CardItem translateZ="30" as="p" className="font-sans text-[15px] leading-[1.7] mb-6" style={{ color: "#5A5A5A" }}>
                            We've worked with 25+ writers, directors, actors, and storytellers across Malayalam, Tamil, and English. We discover talent, provide production support, and help them bring their vision to screen. Some are now building successful careers in cinema.
                        </CardItem>

                        {/* Bento Grid Gallery */}
                        <CardItem translateZ="100" className="flex-1 grid grid-cols-3 gap-1.5">
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/team/megha  2.jpg"
                                    alt="Creator Megha"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "center 20%" }}
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src="/team/sajan.jpg"
                                    alt="Creator Sajan"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "center 30%" }}
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src="/team/megha.jpg"
                                    alt="Creator Megha"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "center 25%" }}
                                />
                            </div>
                            <div className="col-span-2 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/team/sajan 2.jpg"
                                    alt="Creator Sajan"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "center 20%" }}
                                />
                            </div>
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
}
