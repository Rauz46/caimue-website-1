"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Hand-drawn scribble paths for margins
const scribblePaths = {
    filmReel: "M10 15 Q 20 5, 30 15 T 50 15 M15 12 L15 18 M25 12 L25 18 M35 12 L35 18 M45 12 L45 18",
    star: "M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 Z",
    arrow: "M5 15 Q 25 5, 45 15 L40 10 M45 15 L40 20",
    camera: "M3 8 L3 20 L21 20 L21 8 L18 8 L16 5 L8 5 L6 8 Z M12 9 A4 4 0 1 1 12 17 A4 4 0 1 1 12 9",
};

// Scribble component
function Scribble({ className, d, color = "currentColor", rotate = 0 }: { className?: string; d: string; color?: string; rotate?: number }) {
    return (
        <motion.svg
            viewBox="0 0 50 25"
            className={className}
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.6, pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <motion.path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0 1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </motion.svg>
    );
}

// CTA Button component
function CTAButton({
    text,
    variant = "primary",
    icon,
    href = "#",
    target,
    rel,
}: {
    text: string;
    variant?: "youtube" | "primary" | "outline" | "dark";
    icon?: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}) {
    const styles = {
        youtube: "bg-[#FF0000] hover:bg-[#CC0000] text-white",
        primary: "bg-[#7C3AED] hover:bg-[#6D28D9] text-white",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
        dark: "bg-[#1F2937] hover:bg-[#374151] text-white",
    };

    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${styles[variant]}`}
        >
            {icon}
            {text}
        </motion.a>
    );
}

// Small photo tile used inside the vertical card collages
function PhotoTile({ src, alt, label, height = "120px" }: { src: string; alt: string; label?: string; height?: string }) {
    return (
        <div className="relative rounded-2xl overflow-hidden" style={{ height }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full h-full object-cover" />
            {label && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold drop-shadow leading-tight">{label}</span>
                </>
            )}
        </div>
    );
}

// Card 1: Ennitto - Malayalam short films
function EnnittoCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl p-6 h-full flex flex-col overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)",
                boxShadow: "0 8px 30px rgba(139, 92, 246, 0.25)",
            }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className="mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/ennitto%20final.png"
                        alt="Ennitto"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                    We produce original Malayalam short films — from shorts to OTT content. We discover talent and build toward theatrical and streaming releases.
                </p>

                {/* Photo collage */}
                <div className="flex flex-col gap-2 mb-4">
                    <PhotoTile src="/logos/ennitto/Vishudha%20Sakshi.jpg" alt="Vishudha Sakshi" label="Vishudha Sakshi" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/logos/ennitto/ADS-369%20Part%201.jpg" alt="ADS-369 Part 1" label="ADS-369" height="100px" />
                        <PhotoTile src="/logos/ennitto/Pazhampori.jpg" alt="Pazhampori" label="Pazhampori" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Know More"
                        variant="primary"
                        icon={<ArrowRight size={18} />}
                        href="/channels/ennitto"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Card 2: Ennamo - Tamil short films (By Caimue Film Studios)
// TODO: replace placeholder ("—") metrics and the "#" website link with real Ennamo data once provided.
function EnnamoCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl p-6 h-full flex flex-col overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #CFFAFE 0%, #CCFBF1 100%)",
                boxShadow: "0 8px 30px rgba(20, 184, 166, 0.25)",
            }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className="mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/ennamo%20final.png"
                        alt="Ennamo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                    Our Tamil short film channel by Caimue Film Studios. We produce original Tamil shorts, discover Tamil talent, and build toward theatrical and OTT releases.
                </p>

                {/* Photo collage */}
                <div className="flex flex-col gap-2 mb-4">
                    <PhotoTile src="/logos/ennamo/maxresdefault.jpg" alt="Ennamo Tamil short film" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/logos/ennamo/Live%20a%20Little.jpg" alt="Ennamo Tamil short film" height="100px" />
                        <PhotoTile src="/logos/ennamo/kadhal%20gpt.webp" alt="Ennamo Tamil short film" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Know More"
                        variant="primary"
                        icon={<ArrowRight size={18} />}
                        href="/channels/ennamo"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Card 3: TeqThots - documentary-style founder conversations
function TeqThotsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl p-6 h-full flex flex-col overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #FCE7F3 0%, #FDE2E4 100%)",
                boxShadow: "0 4px 20px rgba(236, 72, 153, 0.18)",
            }}
        >
            <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className="mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/teqthots%20updated%20logo%20png.png"
                        alt="TeqThots"
                        className="h-14 w-auto object-contain"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                    Documentary-style conversations that capture how companies are built. Deep dives into technology, strategy, and scale.
                </p>

                {/* Photo collage */}
                <div className="flex flex-col gap-2 mb-4">
                    <PhotoTile src="/logos/teqthots/thumbnail.jpg" alt="TeqThots episode" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/logos/teqthots/Image%20(16).jpg" alt="TeqThots episode" height="100px" />
                        <PhotoTile src="/logos/teqthots/Image%20(17).jpg" alt="TeqThots episode" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Know More"
                        variant="primary"
                        icon={<ArrowRight size={18} />}
                        href="/channels/teqthots"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Slim secondary bar: Digubi - corporate videos (intentionally low-key)
function DigubiBar({ isInView }: { isInView: boolean }) {
    return (
        <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.005 }}
            className="group relative rounded-2xl overflow-hidden px-6 md:px-8 py-4 flex items-center justify-between gap-4"
            style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #FCE7F3 100%)",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.12)",
            }}
        >
            <div className="flex items-center gap-4 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/logos/digubi-logo.png"
                    alt="Digubi"
                    className="h-7 w-auto object-contain shrink-0"
                />
                <span className="hidden sm:block w-px h-6 bg-gray-400/30" />
                <span className="text-[15px] md:text-base font-semibold text-[#4C1D95] truncate">
                    Corporate Videos
                </span>
            </div>
            <span className="flex items-center gap-1.5 text-sm font-medium text-[#7C3AED] shrink-0">
                <span className="hidden sm:inline">Know More</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
        </motion.a>
    );
}

// Main Section Component
export function PlatformsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            id="channels"
            className="relative bg-white py-20 md:py-24 overflow-hidden scroll-mt-24"
            style={{ paddingTop: "100px", paddingBottom: "80px" }}
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px),
                                     linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Hand-drawn scribbles in margins */}
            <Scribble
                d={scribblePaths.star}
                color="#8B5CF6"
                className="absolute top-32 left-8 w-12 h-12 hidden lg:block"
            />
            <Scribble
                d={scribblePaths.filmReel}
                color="#E91E8C"
                className="absolute top-1/4 right-12 w-16 h-8 hidden lg:block"
                rotate={15}
            />
            <Scribble
                d={scribblePaths.arrow}
                color="#F59E0B"
                className="absolute top-1/2 left-6 w-14 h-8 hidden lg:block"
                rotate={-10}
            />
            <Scribble
                d={scribblePaths.camera}
                color="#8B5CF6"
                className="absolute bottom-1/4 right-8 w-12 h-12 hidden lg:block"
            />
            <Scribble
                d={scribblePaths.star}
                color="#E91E8C"
                className="absolute bottom-32 left-12 w-10 h-10 hidden lg:block"
            />

            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2D2D] tracking-wide">
                    Our Channels
                </h2>
            </motion.div>

            {/* Three channels side by side + slim Digubi bar below */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    <EnnittoCard isInView={isInView} />
                    <EnnamoCard isInView={isInView} />
                    <TeqThotsCard isInView={isInView} />
                </div>
                <DigubiBar isInView={isInView} />
            </div>
        </section>
    );
}
