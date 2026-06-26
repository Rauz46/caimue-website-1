"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Youtube, Globe, Briefcase, Video } from "lucide-react";

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

// Metric Card component (compact variant for narrow 3-column cards)
function MetricCard({
    number,
    label,
    icon: Icon,
    dark = false,
}: {
    number: string;
    label: string;
    icon?: React.ElementType;
    dark?: boolean;
}) {
    return (
        <div
            className={`p-3 rounded-2xl transition-all duration-300 group ${dark
                ? "bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30"
                : "bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_rgba(139,92,246,0.1)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] hover:bg-white/60"
                }`}
        >
            <div className="flex items-start justify-between mb-1">
                <div
                    className={`font-serif text-2xl md:text-3xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-105 ${dark
                        ? "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]"
                        : "bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(124,58,237,0.2)]"
                        }`}
                >
                    {number}
                </div>
                {Icon && (
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${dark
                        ? "bg-white/10 group-hover:bg-white/20"
                        : "bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-pink-100 shadow-sm"
                        }`}>
                        <Icon size={16} className={dark ? "text-purple-300" : "text-purple-600"} strokeWidth={2.5} />
                    </div>
                )}
            </div>
            <div
                className={`text-[11px] font-medium tracking-wide uppercase opacity-70 leading-tight ${dark ? "text-gray-300" : "text-[#4C1D95]"
                    }`}
            >
                {label}
            </div>
        </div>
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
                        src="/logos/ennitto-film-studios-logo.png"
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
                    <PhotoTile src="/images/Movies/Vishudha%20Sakshi.jpg" alt="Vishudha Sakshi" label="Vishudha Sakshi" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/images/Movies/ADS-369%20Part%201.jpg" alt="ADS-369 Part 1" label="ADS-369" height="100px" />
                        <PhotoTile src="/images/Movies/Pazhampori.jpg" alt="Pazhampori" label="Pazhampori" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Visit Website"
                        variant="primary"
                        icon={<Globe size={18} />}
                        href="https://www.ennitto.com/"
                        target="_blank"
                        rel="noopener noreferrer"
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

                {/* Photo collage — placeholder stills, swap for Ennamo titles */}
                <div className="flex flex-col gap-2 mb-4">
                    <PhotoTile src="/images/Movies/ADS-369%20Final%20Part.jpg" alt="Tamil short film" label="Coming soon" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/images/Movies/Live%20a%20Little.jpg" alt="Tamil short film" height="100px" />
                        <PhotoTile src="/images/Movies/Smile%21.jpg" alt="Tamil short film" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Visit Channel"
                        variant="primary"
                        icon={<Globe size={18} />}
                        href="#"
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
                    <PhotoTile src="/images/Eye-Catching%20YouTube%20Thumbnail%20Designs.jpg" alt="TeqThots episode" label="Building in Public" height="130px" />
                    <div className="grid grid-cols-2 gap-2">
                        <PhotoTile src="/images/A%20Man%20Holding%20His%20Hands%20To%20His%20Head%20With%20The%20Words%20Dark%20Reality%20Of%20Growth.jpg" alt="TeqThots episode" height="100px" />
                        <PhotoTile src="/images/Blog%20Graphics.jpg" alt="TeqThots episode" height="100px" />
                    </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                    <CTAButton
                        text="Visit Website"
                        variant="primary"
                        icon={<Globe size={18} />}
                        href="https://www.teqthots.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Wide banner: Digubi - corporate videos & brand marketing
// TODO: confirm Digubi copy and replace the "#" link with the real destination URL once provided.
function DigubiBanner({ isInView }: { isInView: boolean }) {
    const brandLogos = [
        { src: "/logos/loglos/hael.png", alt: "Hxeal" },
        { src: "/logos/loglos/Prodeify-logo-final-768x280-1.png", alt: "Prodeify" },
        { src: "/logos/loglos/piqual.png", alt: "Piqual" },
        { src: "/logos/loglos/cropped-Talentou-3.png", alt: "Talentou" },
        { src: "/logos/aventei.png", alt: "Aventei Capital" },
        { src: "/logos/loglos/Nuivio.png", alt: "Nuvio" },
        { src: "/logos/loglos/xime.png", alt: "XIME" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0f0225 0%, #1a0533 30%, #2d1059 60%, #1a0533 100%)",
                boxShadow: "0 8px 40px rgba(76, 29, 149, 0.4)",
            }}
        >
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)" }}
                    animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)" }}
                    animate={{ scale: [1, 1.3, 1], x: [0, -15, 0], y: [0, 15, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            {/* Dot grid texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0.08,
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left: brand + copy */}
                <div className="lg:w-[55%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logos/digubi-logo.png"
                        alt="Digubi"
                        className="h-10 w-auto object-contain mb-5"
                    />
                    <h3
                        className="text-white font-black tracking-tight mb-3"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                    >
                        We also do corporate videos.
                    </h3>
                    <p className="text-purple-200/70 text-[15px] leading-relaxed max-w-xl mb-6">
                        Digubi is our corporate arm — brand storytelling, founder interviews, product explainers, and marketing films. Not ads. Real stories that integrate brands naturally into narratives people want to watch.
                    </p>

                    {/* Metrics row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mb-6">
                        <MetricCard number="1M+" label="Audience" icon={Globe} dark />
                        <MetricCard number="5+" label="Brand Collabs" icon={Briefcase} dark />
                        <MetricCard number="10+" label="Videos" icon={Video} dark />
                        <MetricCard number="500K+" label="Total Views" icon={Youtube} dark />
                    </div>

                    <CTAButton
                        text="Visit Website"
                        variant="primary"
                        icon={<ArrowRight size={18} />}
                        href="#"
                    />
                </div>

                {/* Right: brand logos panel */}
                <div className="lg:w-[45%]">
                    <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-purple-200/60 mb-4">Brands we&apos;ve worked with</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-5 items-center">
                            {brandLogos.map((logo) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-5 w-full object-contain opacity-80 brightness-0 invert" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Main Section Component
export function PlatformsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative bg-white py-20 md:py-24 overflow-hidden"
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

            {/* Three channels side by side + Digubi banner below */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    <EnnittoCard isInView={isInView} />
                    <EnnamoCard isInView={isInView} />
                    <TeqThotsCard isInView={isInView} />
                </div>
                <DigubiBanner isInView={isInView} />
            </div>
        </section>
    );
}
