"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Star } from "lucide-react";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { LivelyCard } from "@/components/ui/LivelyCard";

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
            className={`cm-decor-item ${className ?? ""}`}
            style={{ transform: `rotate(${rotate}deg)`, opacity: 0.6 }}
        >
            <motion.path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0 1"
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
    comingSoon?: boolean;
    from: string;   // brand gradient start (pulled from the logo)
    to: string;     // brand gradient end
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
        from: "#E11D74",
        to: "#0FB5A6",
        delay: 0.2,
    },
    {
        logo: "/ennamo%20new.png",
        logoClass: "h-16",
        name: "Ennamo",
        description:
            "Our Tamil short film channel by Caimue. We produce original Tamil shorts, discover Tamil talent, and build toward theatrical and OTT releases.",
        youtube: "https://www.youtube.com/channel/UCXWl6JIzlHIJCYbaCvV_VFg",
        from: "#6D5BF0",
        to: "#F0435A",
        delay: 0.3,
    },
    {
        logo: "/logos/teqdots-logo.png",
        logoClass: "h-[72px]",
        name: "TeqDots",
        description:
            "Documentary-style conversations that capture how companies are built. Deep dives into technology, strategy, and scale.",
        youtube: "https://www.youtube.com/@TeqThots",
        from: "#7C3AED",
        to: "#F59E0B",
        delay: 0.4,
    },
    {
        logo: "/startup%20musings%20final.png",
        logoClass: "h-20",
        name: "Startup Musings",
        description:
            "Candid conversations with founders and builders — the ideas, lessons, and journeys behind startups as they grow.",
        youtube: "#",
        comingSoon: true,
        from: "#1E3A8A",
        to: "#F97316",
        delay: 0.5,
    },
];

// Channel card — home "lively" card: solid colour, text, YouTube action, and
// the channel's logo on a white plate rising from the bottom with the disc pair
const CHANNEL_TONES = ["yellow", "purple", "pink", "orange"] as const;
function ChannelCard({ channel, index }: { channel: Channel; index: number }) {
    return (
        <LivelyCard
            tone={CHANNEL_TONES[index % 4]}
            icon={<Youtube size={22} />}
            text={channel.description}
            action={
                channel.comingSoon ? (
                    <span className="lc-btn lc-btn--muted">Coming soon</span>
                ) : (
                    <a href={channel.youtube} target="_blank" rel="noopener noreferrer" className="lc-btn">
                        <Youtube size={18} className="text-[#FF0000]" />
                        YouTube
                    </a>
                )
            }
            visualHeight={190}
            visual={
                <div className="lc-plate">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={channel.logo} alt={channel.name} loading="lazy" decoding="async" className={`${channel.logoClass} w-auto max-w-[80%] object-contain`} />
                </div>
            }
        />
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
            className="relative bg-white pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden scroll-mt-24"
        >
            <SectionDownArrow />

            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#4C1D95 1px, transparent 1px),
                                     linear-gradient(90deg, #4C1D95 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
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
                className="flex flex-col items-center text-center mb-12 px-6 md:px-4"
            >
                {/* Badge — same style as the Track Record section */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{ background: "#EAE0FB" }}
                >
                    <span className="text-[13px] font-semibold" style={{ color: "#5B299D" }}>
                        Now Streaming
                    </span>
                </div>

                <h2 className="cm-rise cm-h2 font-serif">
                    Our Channels
                </h2>
                <p className="mt-5 text-[#4A3F5C] text-base md:text-lg leading-relaxed max-w-2xl">
                    Original Tamil &amp; Malayalam short films and founder-led documentaries — homegrown channels
                    building an audience on the way to feature films.
                </p>
            </motion.div>

            {/* Four channels side by side */}
            <div className="home-wrap">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                    {channels.map((channel, i) => (
                        <ChannelCard key={channel.name} channel={channel} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
