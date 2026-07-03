"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Star } from "lucide-react";

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

// ── Channel data ──────────────────────────────────────────────
// TODO: paste the Ennamo & Startup Musings YouTube channel URLs when available (currently "#").
type Channel = {
    logo: string;
    logoClass: string;
    name: string;
    description: string;
    youtube: string;
    background: string;
    shadow: string;
    delay: number;
};

const channels: Channel[] = [
    {
        logo: "/ennitto%20final.png",
        logoClass: "h-16",
        name: "Ennitto",
        description:
            "We produce original Malayalam short films — from shorts to OTT content. We discover talent and build toward theatrical and streaming releases.",
        youtube: "https://www.youtube.com/@ennitto",
        background: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)",
        shadow: "0 8px 30px rgba(139, 92, 246, 0.25)",
        delay: 0.2,
    },
    {
        logo: "/ennamo%20new.png",
        logoClass: "h-16",
        name: "Ennamo",
        description:
            "Our Tamil short film channel by Caimue Film Studios. We produce original Tamil shorts, discover Tamil talent, and build toward theatrical and OTT releases.",
        youtube: "#",
        background: "linear-gradient(135deg, #CFFAFE 0%, #CCFBF1 100%)",
        shadow: "0 8px 30px rgba(20, 184, 166, 0.25)",
        delay: 0.3,
    },
    {
        logo: "/teqthots%20updated%20logo%20png.png",
        logoClass: "h-[72px]",
        name: "TeqThots",
        description:
            "Documentary-style conversations that capture how companies are built. Deep dives into technology, strategy, and scale.",
        youtube: "https://www.youtube.com/@TeqThots",
        background: "linear-gradient(135deg, #FCE7F3 0%, #FDE2E4 100%)",
        shadow: "0 4px 20px rgba(236, 72, 153, 0.18)",
        delay: 0.4,
    },
    {
        logo: "/startup%20logo.png",
        logoClass: "h-16",
        name: "Startup Musings",
        description:
            "Candid conversations with founders and builders — the ideas, lessons, and journeys behind startups as they grow.",
        youtube: "#",
        background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
        shadow: "0 8px 30px rgba(245, 158, 11, 0.25)",
        delay: 0.5,
    },
];

// Channel card — logo, description, YouTube button (all center-aligned)
function ChannelCard({ channel, isInView }: { channel: Channel; isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: channel.delay }}
            className="relative rounded-3xl p-6 h-full flex flex-col overflow-hidden"
            style={{ background: channel.background, boxShadow: channel.shadow }}
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

            <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* Logo */}
                <div className="mb-5 flex items-center justify-center" style={{ minHeight: "72px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={channel.logo} alt={channel.name} className={`${channel.logoClass} w-auto object-contain`} />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-[14px] leading-relaxed mb-5">
                    {channel.description}
                </p>

                {/* YouTube button pinned to bottom */}
                <div className="mt-auto flex justify-center w-full">
                    <motion.a
                        href={channel.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-lg font-medium text-sm bg-[#FF0000] hover:bg-[#CC0000] text-white transition-colors"
                    >
                        <Youtube size={18} />
                        YouTube
                    </motion.a>
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
                className="flex flex-col items-center text-center mb-12"
            >
                {/* Badge — same style as the Track Record section */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{ background: "#E9D5FF" }}
                >
                    <span className="text-xs font-bold" style={{ color: "#4C1D95", letterSpacing: "1px" }}>
                        Now Streaming
                    </span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" />
                        ))}
                    </div>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D2D2D] tracking-wide">
                    Our Channels
                </h2>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                    Original Tamil &amp; Malayalam short films and founder-led documentaries — homegrown channels
                    building an audience on the way to feature films.
                </p>
            </motion.div>

            {/* Four channels side by side */}
            <div className="max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                    {channels.map((channel) => (
                        <ChannelCard key={channel.name} channel={channel} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
