"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Play, ArrowRight, Youtube, Clapperboard, Sparkles, Users, Clock, Globe, Briefcase, Video } from "lucide-react";

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

// Metric Card component
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
            className={`p-5 rounded-2xl transition-all duration-300 group ${dark
                ? "bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30"
                : "bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_rgba(139,92,246,0.1)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] hover:bg-white/60"
                }`}
        >
            <div className="flex items-start justify-between mb-2">
                <div
                    className={`font-serif text-4xl md:text-5xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-105 ${dark
                        ? "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]"
                        : "bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(124,58,237,0.2)]"
                        }`}
                >
                    {number}
                </div>
                {Icon && (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${dark
                        ? "bg-white/10 group-hover:bg-white/20"
                        : "bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-pink-100 shadow-sm"
                        }`}>
                        <Icon size={20} className={dark ? "text-purple-300" : "text-purple-600"} strokeWidth={2.5} />
                    </div>
                )}
            </div>
            <div
                className={`text-[13px] font-medium tracking-wide uppercase opacity-70 ${dark ? "text-gray-300" : "text-[#4C1D95]"
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
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors ${styles[variant]}`}
        >
            {icon}
            {text}
        </motion.a>
    );
}

// Card 1: Ennitto Malayalam
function EnnittoMalayalamCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl p-8 md:p-12 min-h-[500px] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 100%)",
                boxShadow: "0 8px 30px rgba(139, 92, 246, 0.25)"
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

            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left Column (60%) */}
                <div className="lg:w-[60%] flex flex-col">
                    {/* Logo */}
                    <div className="mb-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/ennitto logo.png"
                            alt="Ennitto"
                            className="w-full max-w-[260px] h-auto object-contain"
                        />
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        Original Short Films in Malayalam & Tamil
                    </p>

                    {/* Metrics Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <MetricCard number="2.5M+" label="Views on YouTube" icon={Youtube} />
                        <MetricCard number="17+" label="Short Films" icon={Film} />
                        <MetricCard number="40+" label="Artists Discovered" icon={Users} />
                        <MetricCard number="4000+" label="Watch Hours" icon={Clock} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We produce original Malayalam and Tamil films, from shorts to features to OTT content. We discover talent across both languages and build toward theatrical and streaming releases.
                    </p>

                    {/* CTA Button - Only YouTube */}
                    <div className="flex flex-wrap gap-3">
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

                {/* Right Column (40%) - Film Photo Collage */}
                <div className="lg:w-[40%] flex flex-col gap-2">
                    {/* Top: full-width hero film */}
                    <div className="relative rounded-2xl overflow-hidden" style={{ height: "160px" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/Movies/Vishudha%20Sakshi.jpg"
                            alt="Vishudha Sakshi"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-3 text-white text-[11px] font-bold drop-shadow">Vishudha Sakshi</span>
                    </div>

                    {/* Middle: two side-by-side */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "110px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/Movies/ADS-369%20Part%202.jpg"
                                alt="ADS-369 Part 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold drop-shadow leading-tight">ADS-369<br/>Part 2</span>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "110px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/Movies/Pazhampori.jpg"
                                alt="Pazhampori"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold drop-shadow">Pazhampori</span>
                        </div>
                    </div>

                    {/* Bottom: feature film with views overlay */}
                    <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: "120px" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/Movies/ADS-369%20Part%201.jpg"
                            alt="ADS-369 Part 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                            <span className="text-white text-[10px] font-bold drop-shadow leading-tight">ADS-369 Part 1</span>
                            <span className="text-white text-lg font-black drop-shadow leading-none">2.5M+<br/><span className="text-[9px] font-medium opacity-80">Views</span></span>
                        </div>
                    </div>

                    {/* Language badges */}
                    <div className="rounded-2xl px-4 py-3 bg-white/40 border border-white/60 flex items-center gap-2 flex-wrap">
                        {["Malayalam", "Tamil", "English"].map((lang) => (
                            <span key={lang} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#E9D5FF", color: "#6D28D9" }}>
                                {lang}
                            </span>
                        ))}
                        <span className="text-[11px] text-gray-500 ml-auto">OTT & Theatrical</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Card 2: TeqThots (Light Purplish Pink)
function TeqThotsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl p-8 md:p-12 min-h-[500px] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #FCE7F3 0%, #FDE2E4 100%)",
                boxShadow: "0 4px 20px rgba(236, 72, 153, 0.15)",
            }}
        >
            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left Column (60%) */}
                <div className="lg:w-[60%] flex flex-col">
                    {/* Logo - using plain img to avoid Next.js caching */}
                    <div className="mb-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/teqthots updated logo final lasttt.png"
                            alt="TeqThots"
                            className="w-full max-w-[280px] h-auto object-contain"
                        />
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        TeqThots, Stories That Build Brands (English)
                    </p>

                    {/* Metrics Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <MetricCard number="1M+" label="Audience Reached" icon={Globe} />
                        <MetricCard number="5+" label="Brand Collaborations" icon={Briefcase} />
                        <MetricCard number="10+" label="Videos Created" icon={Video} />
                        <MetricCard number="500K+" label="Total Views" icon={Youtube} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We create brand storytelling content - founder interviews, product explainers, and formats that build trust. Not ads. Real stories that integrate brands naturally into narratives people want to watch.
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-3">
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

                {/* Right Column (40%) - Photo Collage */}
                <div className="lg:w-[40%] flex flex-col gap-2">
                    {/* 3×2 photo grid */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Row 1 */}
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/NEVER.jpg" alt="Never Have I Ever" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold drop-shadow leading-tight">Never Have I Ever</span>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/1/Image%20(16).jpg" alt="Team Session" className="w-full h-full object-cover" />
                        </div>

                        {/* Row 2 */}
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/1/shared%20image%20(6).jpg" alt="Piqual Collab" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold drop-shadow leading-tight">Inside Piqual</span>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/1/Image%20(17).jpg" alt="Team Outdoor" className="w-full h-full object-cover" />
                        </div>

                        {/* Row 3 */}
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/1/Untitled-2.jpg" alt="Team Indoor" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden" style={{ height: "155px" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/1/thumbnail.jpg" alt="Content Creation" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Brand logos panel */}
                    <div className="rounded-2xl p-4 bg-white/60 border border-white/80 backdrop-blur-sm">
                        <div className="grid grid-cols-4 gap-x-4 gap-y-3 items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/loglos/hael.png" alt="Hxeal" className="h-5 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/loglos/Prodeify-logo-final-768x280-1.png" alt="Prodeia" className="h-5 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/teqthots%20updated%20logo%20final%20lasttt.png" alt="TeqThots" className="h-4 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/loglos/piqual.png" alt="Piqual" className="h-5 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/loglos/cropped-Talentou-3.png" alt="Talentou" className="h-5 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/aventei.png" alt="Aventei Capital" className="h-5 w-full object-contain" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logos/loglos/Nuivio.png" alt="Nuvio" className="h-5 w-full object-contain" />
                            <span className="text-[11px] font-black text-gray-600 text-center tracking-tight">XIME</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Card 3: Feature Films - Coming Soon
function FeatureFilmsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0f0225 0%, #1a0533 30%, #2d1059 60%, #1a0533 100%)",
                boxShadow: "0 8px 40px rgba(76, 29, 149, 0.5)",
            }}
        >
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden">
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
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(251,191,36,0.1), transparent 70%)" }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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

            {/* Film strip borders */}
            <div className="absolute top-0 left-0 right-0 h-10 flex overflow-hidden opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`top-${i}`} className="flex-shrink-0 w-12 h-10 border border-white/30 mx-0.5 rounded-sm" />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 flex overflow-hidden opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bot-${i}`} className="flex-shrink-0 w-12 h-10 border border-white/30 mx-0.5 rounded-sm" />
                ))}
            </div>

            {/* Floating sparkles */}
            {[
                { top: "15%", left: "10%", delay: 0, size: 16 },
                { top: "20%", right: "15%", delay: 1, size: 20 },
                { bottom: "25%", left: "20%", delay: 0.5, size: 14 },
                { bottom: "20%", right: "10%", delay: 1.5, size: 18 },
                { top: "40%", left: "5%", delay: 2, size: 12 },
                { top: "35%", right: "8%", delay: 0.8, size: 16 },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
                    animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.8, 0.3], rotate: [0, 180, 360] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: pos.delay }}
                >
                    <Sparkles size={pos.size} className="text-yellow-400/60" />
                </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center flex flex-col items-center">
                {/* "Coming Soon" label on top */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-yellow-400/30"
                    style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1))" }}
                >
                    <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Clapperboard size={16} className="text-yellow-400" />
                    </motion.div>
                    <span className="text-sm font-bold text-yellow-300 tracking-wider uppercase">Coming Soon</span>
                </motion.div>

                {/* Main heading: "Feature Films" */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mb-6 tracking-tight leading-[1.05] pb-2"
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(3.5rem, 8vw, 7rem)",
                        fontWeight: 900,
                        background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 25%, #FB923C 50%, #FACC15 75%, #FDE68A 100%)",
                        backgroundSize: "200% 200%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        overflow: "visible",
                    }}
                >
                    Feature Films
                </motion.h3>

                {/* Decorative line */}
                <motion.div
                    className="mb-8 flex items-center gap-3"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-purple-400" />
                    <Film size={20} className="text-purple-400" />
                    <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-purple-400" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-purple-200/70 text-lg leading-relaxed max-w-lg mx-auto mb-10 font-sans"
                >
                    We are building a slate of feature-length films for theatrical and OTT releases. From regional stories to global screens.
                </motion.p>

                {/* Animated countdown-style badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {["Tamil", "Malayalam", "English"].map((lang, i) => (
                        <motion.span
                            key={lang}
                            className="px-5 py-2 rounded-full border border-white/15 bg-white/5 text-white/70 text-sm font-medium font-sans backdrop-blur-sm"
                            whileHover={{ scale: 1.05, borderColor: "rgba(251,191,36,0.4)" }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.2 + i * 0.1 }}
                        >
                            {lang}
                        </motion.span>
                    ))}
                </motion.div>
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
                    Our Platforms
                </h2>
            </motion.div>

            {/* Cards container - Now 4 cards */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-10">
                <EnnittoMalayalamCard isInView={isInView} />
                <TeqThotsCard isInView={isInView} />
                <FeatureFilmsCard isInView={isInView} />
            </div>
        </section>
    );
}

