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

// The creative "+ many more" final tile
function MoreTile({
    accent,
    accentSoft,
    label,
    delay,
    isInView,
    bgImages = [],
    bgVariant = "photo",
}: {
    accent: string;
    accentSoft: string;
    label: string;
    delay: number;
    isInView: boolean;
    bgImages?: GalleryImage[];
    bgVariant?: "photo" | "logo";
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, zIndex: 3 }}
            className="group relative h-full w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center cursor-default"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentSoft})` }}
        >
            {/* blurred mosaic of the remaining thumbnails */}
            {bgImages.length > 0 && (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
                    {Array.from({ length: 6 }).map((_, i) => {
                        const img = bgImages[i % bgImages.length];
                        return (
                            <div
                                key={i}
                                className="relative overflow-hidden"
                                style={{ background: bgVariant === "logo" ? "#ffffff" : "transparent" }}
                            >
                                <Image
                                    src={img.src}
                                    alt=""
                                    fill
                                    className={`${bgVariant === "logo" ? "object-contain p-1" : "object-cover"} scale-125 blur-[3px]`}
                                    style={{ objectPosition: img.position ?? "center" }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            {/* accent tint over the mosaic (semi-transparent so thumbnails peek through) */}
            <div
                className="absolute inset-0"
                style={{
                    background: bgImages.length > 0
                        ? `linear-gradient(135deg, ${accent}cc, ${accentSoft}e0)`
                        : `linear-gradient(135deg, ${accent}, ${accentSoft})`,
                }}
            />
            {/* shimmering glow */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 60%)",
                }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* floating orbs */}
            {[
                { top: "18%", left: "72%", size: 8, dur: 3.2 },
                { top: "68%", left: "22%", size: 6, dur: 2.6 },
                { top: "78%", left: "78%", size: 4, dur: 3.6 },
            ].map((o, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full bg-white/40"
                    style={{ top: o.top, left: o.left, width: o.size, height: o.size }}
                    animate={{ y: [0, -6, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            {/* the plus */}
            <motion.span
                className="relative font-serif font-bold text-white leading-none"
                style={{ fontSize: "38px", textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
                +
            </motion.span>
            <span className="relative mt-1 text-white/95 text-[10px] font-bold uppercase tracking-[0.12em]">
                {label}
            </span>
        </motion.div>
    );
}

// Compact gallery: fills 2 rows (columns × 2 tiles) with the last as a "many more" tile.
// Fixed row height keeps 2-column and 3-column cards the same overall height.
function CompactGallery({
    images,
    accent,
    accentSoft,
    isInView,
    variant = "photo",
    moreLabel = "many more",
    moreImages = [],
    baseDelay = 0.35,
    columns = 3,
    rowHeight = 106,
}: {
    images: GalleryImage[];
    accent: string;
    accentSoft: string;
    isInView: boolean;
    variant?: "photo" | "logo";
    moreLabel?: string;
    moreImages?: GalleryImage[];
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
            <MoreTile
                accent={accent}
                accentSoft={accentSoft}
                label={moreLabel}
                isInView={isInView}
                bgImages={moreImages}
                bgVariant={variant}
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
                accentSoft="#6D28D9"
                moreLabel="12+ films"
                images={[
                    { src: "/images/Movies/Welcome Home.jpg", alt: "Welcome Home" },
                    { src: "/images/Movies/Smile!.jpg", alt: "Smile!" },
                    { src: "/images/Movies/Malsya Mandooka Mahamaham.jpg", alt: "Malsya Mandooka Mahamaham" },
                ]}
                moreImages={[
                    { src: "/images/Movies/Harinarayana Kudu Charitham.jpg", alt: "" },
                    { src: "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg", alt: "" },
                    { src: "/images/Movies/Live a Little.jpg", alt: "" },
                    { src: "/images/Movies/Pazhampori.jpg", alt: "" },
                    { src: "/images/Movies/Vishudha Sakshi.jpg", alt: "" },
                    { src: "/images/Movies/ADS-369 Final Part.jpg", alt: "" },
                ]}
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
                accentSoft="#D97706"
                moreLabel="12+ brands"
                images={[
                    { src: "/logos/loglos/hael.png", alt: "Hael" },
                    { src: "/logos/loglos/Prodeify-logo-final-768x280-1.png", alt: "Prodeify" },
                    { src: "/logos/loglos/piqual.png", alt: "Piqual" },
                    { src: "/logos/loglos/cropped-Talentou-3.png", alt: "Talentou" },
                    { src: "/logos/loglos/aventei.png", alt: "Aventei" },
                ]}
                moreImages={[
                    { src: "/logos/loglos/Nuivio.png", alt: "" },
                    { src: "/logos/loglos/xime.png", alt: "" },
                    { src: "/logos/loglos/Ignitho-Updated-Logo.png", alt: "" },
                    { src: "/logos/loglos/upcraft.png", alt: "" },
                    { src: "/logos/loglos/shared%20image.png", alt: "" },
                    { src: "/logos/loglos/Best%20Engaging%20Storytelling%20Logo%20Design%20%F0%9F%94%BB.jpg", alt: "" },
                ]}
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
                accentSoft="#BE185D"
                moreLabel="25+ artists"
                images={[
                    { src: "/team/megha  2.jpg", alt: "Megha", position: "center 20%" },
                    { src: "/team/sajan 2.jpg", alt: "Sajan", position: "center 20%" },
                    { src: "/team/image.png", alt: "Artist" },
                    { src: "/team/image.jpg", alt: "Artist" },
                    { src: "/team/smile 1.png", alt: "Smile Team" },
                ]}
                moreImages={[
                    { src: "/team/anton.png", alt: "" },
                    { src: "/team/disha.png", alt: "" },
                    { src: "/team/joseph.png", alt: "" },
                    { src: "/team/purnima.png", alt: "" },
                    { src: "/team/sanjay.png", alt: "" },
                    { src: "/team/sri.png", alt: "" },
                ]}
            />
        </motion.div>
    );
}
