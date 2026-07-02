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

/* ---------- Shared gallery building blocks ---------- */

type GalleryImage = {
    src: string;
    alt: string;
    position?: string;
};

// A single square tile in the compact gallery grid
function GalleryTile({
    image,
    accent,
    delay,
    isInView,
    variant = "photo",
}: {
    image: GalleryImage;
    accent: string;
    delay: number;
    isInView: boolean;
    variant?: "photo" | "logo";
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, zIndex: 3 }}
            className="group relative h-full w-full rounded-2xl overflow-hidden border border-gray-100"
            style={{
                background: variant === "logo" ? "#ffffff" : "#F5F0FF",
                boxShadow: "0 2px 10px rgba(75,29,149,0.06)",
            }}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${
                    variant === "logo" ? "object-contain p-3" : "object-cover"
                } transition-transform duration-500 group-hover:scale-110`}
                style={{ objectPosition: image.position ?? "center" }}
            />
            {/* soft depth gradient for photos */}
            {variant === "photo" && (
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            {/* accent ring on hover */}
            <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: accent }}
            />
        </motion.div>
    );
}

// A real thumbnail whose bottom shows a "+more" bar
function MoreThumbTile({
    image,
    accent,
    label,
    delay,
    isInView,
    variant = "photo",
}: {
    image: GalleryImage;
    accent: string;
    label: string;
    delay: number;
    isInView: boolean;
    variant?: "photo" | "logo";
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, zIndex: 3 }}
            className="group relative h-full w-full rounded-2xl overflow-hidden border border-gray-100"
            style={{
                background: variant === "logo" ? "#ffffff" : "#F5F0FF",
                boxShadow: "0 2px 10px rgba(75,29,149,0.06)",
            }}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${
                    variant === "logo" ? "object-contain p-3" : "object-cover"
                } transition-transform duration-500 group-hover:scale-110`}
                style={{ objectPosition: image.position ?? "center" }}
            />
            {/* "+more" bar at the bottom */}
            <div
                className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-1.5 pt-5"
                style={{
                    background: `linear-gradient(to top, ${accent}f2 0%, ${accent}cc 45%, transparent 100%)`,
                }}
            >
                <span
                    className="flex items-center gap-0.5 text-white font-bold text-[11px] tracking-wide"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
                >
                    <span className="text-[15px] leading-none">+</span>
                    {label}
                </span>
            </div>
            {/* accent ring on hover */}
            <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: accent }}
            />
        </motion.div>
    );
}

// Compact gallery: fills 2 rows (columns × 2 tiles) with the last as a "many more" tile.
// Fixed row height keeps 2-column and 3-column cards the same overall height.
function CompactGallery({
    images,
    accent,
    isInView,
    variant = "photo",
    moreLabel = "more",
    moreImage,
    baseDelay = 0.35,
    columns = 3,
    rowHeight = 106,
}: {
    images: GalleryImage[];
    accent: string;
    isInView: boolean;
    variant?: "photo" | "logo";
    moreLabel?: string;
    moreImage: GalleryImage;
    baseDelay?: number;
    columns?: number;
    rowHeight?: number;
}) {
    return (
        <div
            className="grid gap-2.5"
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gridAutoRows: `${rowHeight}px`,
            }}
        >
            {images.map((img, i) => (
                <GalleryTile
                    key={img.src}
                    image={img}
                    accent={accent}
                    variant={variant}
                    isInView={isInView}
                    delay={baseDelay + i * 0.07}
                />
            ))}
            <MoreThumbTile
                image={moreImage}
                accent={accent}
                label={moreLabel}
                variant={variant}
                isInView={isInView}
                delay={baseDelay + images.length * 0.07}
            />
        </div>
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
            className="bg-white rounded-[20px] p-6 transition-all duration-300 relative"
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

            {/* Content - locked to 4 lines */}
            <p className="font-sans text-[15px] leading-[1.7] mb-5 min-h-[104px]" style={{ color: "#5A5A5A" }}>
                Our short films have reached over 2 million views organically on YouTube. We produce original content that connects with audiences who care about authentic storytelling.
            </p>

            {/* Compact gallery - 2 thumbnails per row */}
            <CompactGallery
                isInView={isInView}
                columns={2}
                accent="#8B5CF6"
                images={[
                    { src: "/images/Movies/Welcome Home.jpg", alt: "Welcome Home" },
                    { src: "/images/Movies/Smile!.jpg", alt: "Smile!" },
                    { src: "/images/Movies/Malsya Mandooka Mahamaham.jpg", alt: "Malsya Mandooka Mahamaham" },
                ]}
                moreImage={{ src: "/images/Movies/Harinarayana Kudu Charitham.jpg", alt: "Harinarayana Kudu Charitham" }}
            />
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
            className="bg-white rounded-[20px] p-6 transition-all duration-300 relative"
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
                12+ Brand <span style={{ color: "#4C1D95" }}>Collaborations</span>
            </h3>

            {/* Content - locked to 4 lines */}
            <p className="font-sans text-[15px] leading-[1.7] mb-5 min-h-[104px]" style={{ color: "#5A5A5A" }}>
                From product placements to brand storytelling through TeqThots, we weave brands naturally into stories people want to watch — building trust and engagement without ever feeling like ads.
            </p>

            {/* Compact logo gallery */}
            <CompactGallery
                isInView={isInView}
                variant="logo"
                accent="#F59E0B"
                images={[
                    { src: "/logos/loglos/hael.png", alt: "Hael" },
                    { src: "/logos/loglos/Prodeify-logo-final-768x280-1.png", alt: "Prodeify" },
                    { src: "/logos/loglos/piqual.png", alt: "Piqual" },
                    { src: "/logos/loglos/cropped-Talentou-3.png", alt: "Talentou" },
                    { src: "/logos/loglos/aventei.png", alt: "Aventei" },
                ]}
                moreImage={{ src: "/logos/loglos/Nuivio.png", alt: "Nuivio" }}
            />
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
            className="bg-white rounded-[20px] p-6 transition-all duration-300 relative"
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

            {/* Content - locked to 4 lines */}
            <p className="font-sans text-[15px] leading-[1.7] mb-5 min-h-[104px]" style={{ color: "#5A5A5A" }}>
                We've worked with 25+ writers, directors, and actors across Tamil, Malayalam, and English — discovering talent and bringing them together to build films under our own creative direction.
            </p>

            {/* Compact gallery */}
            <CompactGallery
                isInView={isInView}
                accent="#E91E8C"
                images={[
                    { src: "/team/megha  2.jpg", alt: "Megha", position: "center 20%" },
                    { src: "/team/sajan 2.jpg", alt: "Sajan", position: "center 20%" },
                    { src: "/team/image.png", alt: "Artist" },
                    { src: "/team/image.jpg", alt: "Artist" },
                    { src: "/team/smile 1.png", alt: "Smile Team" },
                ]}
                moreImage={{ src: "/team/anton.png", alt: "Anton", position: "center 20%" }}
            />
        </motion.div>
    );
}
