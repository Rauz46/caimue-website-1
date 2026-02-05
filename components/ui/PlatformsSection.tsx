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
}: {
    text: string;
    variant?: "youtube" | "primary" | "outline" | "dark";
    icon?: React.ReactNode;
    href?: string;
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors ${styles[variant]}`}
        >
            {icon}
            {text}
        </motion.a>
    );
}

// Card 1: Ennitto (Dark Cinematic)
function EnnittoCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#1A1A1A] rounded-3xl p-8 md:p-12 min-h-[500px] overflow-hidden"
            style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left Column (60%) */}
                <div className="lg:w-[60%] flex flex-col">
                    {/* Tag */}
                    <span className="inline-block w-fit px-3 py-1 bg-[#E9D5FF] text-[#4C1D95] rounded-full text-xs uppercase tracking-wider font-medium mb-4">
                        Cinema & Original Stories
                    </span>

                    {/* Heading */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                        Ennitto
                    </h3>

                    {/* Tagline */}
                    <p className="text-white/80 italic text-base mb-5">
                        Where Stories Become Cinema
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We produce original Malayalam, Tamil & English films—from shorts to features to OTT content. We discover talent, back stories that matter, and build toward theatrical and streaming releases.
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        <MetricCard number="12+" label="Films Produced" dark />
                        <MetricCard number="2M+" label="Views on YouTube" dark />
                        <MetricCard number="3000+" label="Watch Hours" dark />
                        <MetricCard number="25+" label="Creators Discovered" dark />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Watch on YouTube"
                            variant="youtube"
                            icon={<Youtube size={18} />}
                            href="https://youtube.com"
                        />
                        <CTAButton
                            text="Explore More"
                            variant="outline"
                            icon={<ArrowRight size={18} />}
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
                    {/* Heading (No tag) */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2">
                        TeqThots
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        Stories That Build Brands
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We create brand storytelling content—founder interviews, product explainers, and formats that build trust. Not ads. Real stories that integrate brands naturally into narratives people want to watch.
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <MetricCard number="1M+" label="Audience Reached" />
                        <MetricCard number="Multiple" label="Brand Collaborations" />
                        <MetricCard number="50+" label="Videos Created" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Watch on YouTube"
                            variant="youtube"
                            icon={<Youtube size={18} />}
                            href="https://youtube.com"
                        />
                        <CTAButton
                            text="Explore More"
                            variant="dark"
                            icon={<ArrowRight size={18} />}
                        />
                    </div>
                </div>

                {/* Right Column (40%) - Logo Gallery */}
                <div className="lg:w-[40%]">
                    <div className="grid grid-cols-2 gap-2 h-full min-h-[350px]">
                        <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 group">
                            <Image
                                src="/logos/thumbnail.jpg"
                                alt="Brand Thumbnail"
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 group">
                            <Image
                                src="/logos/brand collab.jpg"
                                alt="Brand Collaboration"
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-300"
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

// Card 3: Feature Films (Light Lavender)
function FeatureFilmsCard({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-3xl p-8 md:p-12 min-h-[500px] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 100%)",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.15)",
            }}
        >
            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left Column (60%) */}
                <div className="lg:w-[60%] flex flex-col">
                    {/* Tag */}
                    <span className="inline-block w-fit px-3 py-1 bg-white text-[#4C1D95] rounded-full text-xs uppercase tracking-wider font-medium mb-4">
                        Full-Length Cinema
                    </span>

                    {/* Heading */}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#4C1D95] mb-2">
                        Feature Films
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic text-base mb-5">
                        Stories Built for the Big Screen
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px] mb-6">
                        We're building a slate of feature-length films for theatrical and OTT releases. Stories that combine strong craft with smart production—made to reach audiences and built for commercial success.
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <MetricCard number="5+" label="Projects in Pipeline" />
                        <MetricCard number="3" label="Languages" />
                        <MetricCard number="2026" label="Coming Soon" />
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-3">
                        <CTAButton
                            text="Explore More"
                            variant="primary"
                            icon={<ArrowRight size={18} />}
                        />
                    </div>
                </div>

                {/* Right Column (40%) - Gallery */}
                <div className="lg:w-[40%]">
                    <div className="grid grid-cols-2 gap-2 h-full min-h-[350px]">
                        <div className="row-span-2 relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Live a Little.jpg"
                                alt="Live a Little"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-300"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden group">
                            <Image
                                src="/images/Movies/Malsya Mandooka Mahamaham.jpg"
                                alt="Malsya Mandooka Mahamaham"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-300"
                            />
                        </div>
                        {/* Coming Soon Placeholder */}
                        <div className="relative rounded-xl overflow-hidden bg-white/60 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center">
                            <Clapperboard size={32} className="text-gray-400 mb-2" />
                            <span className="text-gray-500 text-sm font-medium">Coming Soon</span>
                        </div>
                        {/* Coming Soon Placeholder */}
                        <div className="col-span-2 relative rounded-xl overflow-hidden bg-white/60 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center py-8">
                            <Sparkles size={32} className="text-gray-400 mb-2" />
                            <span className="text-gray-500 text-sm font-medium">More Projects Launching 2026</span>
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
                    Our Platforms
                </h2>
            </motion.div>

            {/* Cards container */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-10">
                <EnnittoCard isInView={isInView} />
                <TeqThotsCard isInView={isInView} />
                <FeatureFilmsCard isInView={isInView} />
            </div>
        </section>
    );
}
