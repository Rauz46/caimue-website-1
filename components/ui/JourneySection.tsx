"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Play, Users, Handshake } from "lucide-react";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { VideoScrollStrip } from "@/components/ui/VideoScrollStrip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

interface MetricCardProps {
    icon: React.ElementType;
    number: string;
    label: string;
    description: string;
    delay: number;
    gradientFrom: string;
    gradientTo: string;
    index: number;
}

const MetricCard = ({ icon: Icon, number, label, description, delay, gradientFrom, gradientTo, index }: MetricCardProps) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse number (e.g., "12+" -> 12, "2M+" -> 2)
    const numericValue = parseInt(number.replace(/[^0-9]/g, "")) || 0;
    const suffix = number.replace(/[0-9]/g, "");

    useEffect(() => {
        if (isInView && numericValue > 0) {
            let start = 0;
            const end = numericValue;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue]);

    // Alternating tilt angles for visual interest
    const baseTilt = index % 2 === 0 ? -2 : 2;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, rotateZ: 0 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: baseTilt }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            <motion.div
                animate={{
                    rotateZ: isHovered ? 0 : baseTilt,
                    y: isHovered ? -8 : 0,
                    scale: isHovered ? 1.03 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white p-8 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                    background: isHovered
                        ? `linear-gradient(135deg, ${gradientFrom}15, ${gradientTo}15)`
                        : '#FFFFFF'
                }}
            >
                {/* Icon with gradient background */}
                <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                    style={{
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                    }}
                    animate={{
                        rotate: isHovered ? [0, -8, 8, -8, 0] : 0,
                        scale: isHovered ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <Icon size={28} className="text-white" strokeWidth={2.5} />
                </motion.div>

                {/* Number */}
                <motion.div
                    className="text-5xl md:text-6xl font-serif font-bold text-[#2D2D2D] mb-3 tracking-tighter relative z-10"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {numericValue > 0 ? count : ""}
                    {suffix}
                </motion.div>

                {/* Label */}
                <p className="text-[#5A5A5A] font-semibold text-sm uppercase tracking-wider mb-4 relative z-10">
                    {label}
                </p>

                {/* Description - slides in on hover */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden relative z-10"
                >
                    <p className="text-[#5A5A5A] text-sm leading-relaxed pt-2 border-t border-gray-200">
                        {description}
                    </p>
                </motion.div>

                {/* Decorative corner accent */}
                <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full"
                    style={{
                        background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        </motion.div>
    );
};

export function JourneySection() {
    return (
        <FollowerPointerCard title="📊 Our Journey">
            <section className="relative pt-[60px] pb-[80px] bg-gradient-to-br from-[#FFE5ED] via-[#FFD6E5] to-[#FFC9DD] overflow-hidden">
                {/* Dark Grid Overlay - Increased opacity */}
                <HeroGrid className="opacity-50 z-0" style={{ filter: "brightness(0.3)" }} />

                {/* Dark Scribbles */}
                <FloatingScribbles color="text-[#2D2D2D]/20" />

                {/* Noise texture */}
                <div className="absolute inset-0 bg-noise opacity-5 z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Top Section */}
                    <div className="text-center mb-[50px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif font-bold text-[#2D2D2D] mb-6 tracking-tight"
                        >
                            The Journey So Far
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#5A5A5A] text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed"
                        >
                            We've produced short films and digital content that have reached millions. Each project was a step toward building something bigger.
                        </motion.p>
                    </div>

                    {/* Metric Cards Section with tilted layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[50px]">
                        <MetricCard
                            icon={Film}
                            number="12+"
                            label="Films Produced"
                            description="Short films created in collaboration with independent creators and storytellers"
                            delay={0}
                            gradientFrom="#E91E8C"
                            gradientTo="#FF6B9D"
                            index={0}
                        />
                        <MetricCard
                            icon={Play}
                            number="2M+"
                            label="Views Reached"
                            description="Organic reach across YouTube, Instagram, and digital platforms"
                            delay={0.2}
                            gradientFrom="#C026D3"
                            gradientTo="#A855F7"
                            index={1}
                        />
                        <MetricCard
                            icon={Users}
                            number="25+"
                            label="Creators Discovered"
                            description="Writers, directors, and talent across Malayalam, Tamil, and English"
                            delay={0.4}
                            gradientFrom="#EC4899"
                            gradientTo="#F472B6"
                            index={2}
                        />
                        <MetricCard
                            icon={Handshake}
                            number="Multiple"
                            label="Brand Collaborations"
                            description="Stories that integrated brands naturally without compromising narrative"
                            delay={0.6}
                            gradientFrom="#DB2777"
                            gradientTo="#E91E8C"
                            index={3}
                        />
                    </div>

                    {/* Video Scroll Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative z-10 mb-[40px]"
                    >
                        <VideoScrollStrip />
                    </motion.div>

                    {/* Scroll to Explore Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col items-center gap-2 text-[#2D2D2D]/40"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
