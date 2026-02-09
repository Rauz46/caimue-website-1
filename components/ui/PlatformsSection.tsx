"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Film, Play, ArrowRight, Youtube, Clapperboard, Sparkles } from "lucide-react";

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
    dark = false,
}: {
    number: string;
    label: string;
    dark?: boolean;
}) {
    return (
        <div
            className={`p-4 rounded-xl ${dark
                ? "bg-white/5 border border-white/10"
                : "bg-white border border-black/5 shadow-sm"
                }`}
        >
            <div
                className={`font-serif text-2xl md:text-3xl font-bold ${dark ? "text-white" : "text-[#4C1D95]"
                    }`}
            >
                {number}
            </div>
            <div
                className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"
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
                    {/* Heading */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#4C1D95] mb-2">
                        Ennitto
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        A Malayalam Short Film Channel
                    </p>

                    {/* Metrics Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <MetricCard number="2M+" label="Views on YouTube" />
                        <MetricCard number="12+" label="Short Films" />
                        <MetricCard number="25+" label="Artists Discovered" />
                        <MetricCard number="3000+" label="Watch Hours" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We produce original Malayalam films, from shorts to features to OTT content. We discover talent and build toward theatrical and streaming releases.
                    </p>

                    {/* CTA Button - Only YouTube */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Watch on YouTube"
                            variant="youtube"
                            icon={<Youtube size={18} />}
                            href="https://www.youtube.com/@ennitto"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>

                {/* Right Column (40%) - Gallery */}
                <div className="lg:w-[40%]">
                    <div className="grid grid-cols-2 gap-2 h-full min-h-[350px]">
                        <div className="col-span-2 relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/ADS-369 Part 1.jpg"
                                alt="ADS-369 Part 1"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg"
                                alt="Nadha Nee Varum Kaalocha Kelkuvaan"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Welcome Home.jpg"
                                alt="Welcome Home"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                        <div className="col-span-2 relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/ADS-369 Part 2.jpg"
                                alt="ADS-369 Part 2"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Card 2: Ennitto Tamil (NEW)
function EnnittoTamilCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl p-8 md:p-12 min-h-[500px] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
                boxShadow: "0 8px 30px rgba(167, 139, 250, 0.2)"
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
                    {/* Heading */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#6B21A8] mb-2">
                        Ennitto Tamil
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        A Tamil Short Film Channel
                    </p>

                    {/* Metrics Grid - 2x2 - NOTE: Update these with actual metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <MetricCard number="500K+" label="Views on YouTube" />
                        <MetricCard number="5+" label="Short Films" />
                        <MetricCard number="15+" label="Artists Discovered" />
                        <MetricCard number="1000+" label="Watch Hours" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We produce original Tamil films and digital narratives. We discover talent and create stories that connect with Tamil-speaking audiences.
                    </p>

                    {/* CTA Button - Only YouTube */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Watch on YouTube"
                            variant="youtube"
                            icon={<Youtube size={18} />}
                            href="https://www.youtube.com/@EnnittoTamil"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>

                {/* Right Column (40%) - Gallery - NOTE: Update with actual Tamil film images */}
                <div className="lg:w-[40%]">
                    <div className="grid grid-cols-2 gap-2 h-full min-h-[350px]">
                        <div className="col-span-2 relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Smile!.jpg"
                                alt="Tamil Film 1"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                        <div className="col-span-2 relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Malsya Mandooka Mahamaham.jpg"
                                alt="Tamil Film 2"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Card 3: TeqThots (Light Purplish Pink)
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
                    {/* Heading (No tag) */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2">
                        TeqThots
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        Stories That Build Brands
                    </p>

                    {/* Metrics Grid - 2x2 (4 metrics) */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <MetricCard number="1M+" label="Audience Reached" />
                        <MetricCard number="5+" label="Brand Collaborations" />
                        <MetricCard number="10+" label="Videos Created" />
                        <MetricCard number="500K+" label="Total Views" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We create brand storytelling content—founder interviews, product explainers, and formats that build trust. Not ads. Real stories that integrate brands naturally into narratives people want to watch.
                    </p>

                    {/* CTA Button - Only YouTube */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Watch on YouTube"
                            variant="youtube"
                            icon={<Youtube size={18} />}
                            href="https://www.youtube.com/@TeqThots"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>

                {/* Right Column (40%) - Logo Gallery */}
                <div className="lg:w-[40%]">
                    <div className="grid grid-cols-2 gap-2 h-full min-h-[350px]">
                        <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 group p-2">
                            <Image
                                src="/logos/thumbnail.jpg"
                                alt="Brand Thumbnail"
                                fill
                                className="object-contain group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 group p-2">
                            <Image
                                src="/logos/brand collab.jpg"
                                alt="Brand Collaboration"
                                fill
                                className="object-contain group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="col-span-2 relative rounded-xl overflow-hidden bg-white border border-gray-100 group">
                            <Image
                                src="/logos/IMG_2967.jpg"
                                alt="Brand Content"
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Card 4: Feature Films - Coming Soon (Minimal Design)
function FeatureFilmsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-3xl p-8 md:p-16 min-h-[400px] overflow-hidden flex flex-col items-center justify-center text-center"
            style={{
                background: "linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 100%)",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.15)",
            }}
        >
            {/* Decorative elements */}
            <motion.div
                className="absolute top-10 left-10 text-purple-300/30"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Film size={48} strokeWidth={1.5} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-10 text-purple-300/30"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
                <Clapperboard size={48} strokeWidth={1.5} />
            </motion.div>

            <div className="relative z-10 max-w-2xl">
                {/* Heading */}
                <h3 className="font-serif text-5xl md:text-6xl font-bold text-[#4C1D95] mb-6">
                    Feature Films
                </h3>

                {/* Coming Soon - Large */}
                <motion.p
                    className="text-6xl md:text-7xl font-bold mb-8"
                    style={{
                        background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Coming Soon
                </motion.p>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                    As we make a success of our short films and video formats, we are building a slate of feature-length films for theatrical and OTT releases.
                </p>
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
                <EnnittoTamilCard isInView={isInView} />
                <TeqThotsCard isInView={isInView} />
                <FeatureFilmsCard isInView={isInView} />
            </div>
        </section>
    );
}

