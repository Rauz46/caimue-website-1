"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Briefcase, Video, Sparkles, TrendingUp, Target, ShoppingBag, Clapperboard, Film, Star, ArrowRight, Megaphone, Camera, Lightbulb, Palette, Users, Zap } from "lucide-react";
import Link from "next/link";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// Floating Icon Component with animation
const FloatingIcon = ({
    Icon,
    className,
    size = 24,
    delay = 0,
    duration = 3,
    fill = false
}: {
    Icon: React.ElementType;
    className?: string;
    size?: number;
    delay?: number;
    duration?: number;
    fill?: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={className}
    >
        <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
            <Icon size={size} fill={fill ? "currentColor" : "none"} />
        </motion.div>
    </motion.div>
);

// Card 1: Brand Owner - Light lavender/pink gradient with glassmorphism
const BrandOwnerCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[550px] rounded-[32px] overflow-hidden group cursor-pointer"
            style={{
                background: "linear-gradient(145deg, #E9D5FF 0%, #DDD6FE 30%, #C7D2FE 70%, #E0E7FF 100%)",
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25), inset 0 1px 1px rgba(255,255,255,0.8)"
            }}
        >
            {/* Spotlight Glow Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(400px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(139, 92, 246, 0.15), transparent 60%)`
                }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: 'radial-gradient(#6B21A8 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main briefcase icon */}
                <motion.div
                    className="absolute top-[18%] left-1/2 -translate-x-1/2"
                    animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 shadow-2xl flex items-center justify-center">
                        <div className="w-16 h-4 bg-amber-500 rounded-sm absolute top-3" />
                        <div className="w-6 h-3 bg-amber-400 rounded-sm absolute top-1" />
                    </div>
                </motion.div>

                {/* Floating icons */}
                <FloatingIcon Icon={Sparkles} className="absolute top-[25%] left-[15%] text-purple-500/60" size={28} delay={0.2} duration={3.5} />
                <FloatingIcon Icon={Target} className="absolute top-[15%] right-[18%] text-purple-400/50" size={32} delay={0.4} duration={4} />
                <FloatingIcon Icon={TrendingUp} className="absolute top-[45%] left-[12%] text-violet-500/40" size={30} delay={0.6} duration={3.2} />
                <FloatingIcon Icon={Megaphone} className="absolute top-[35%] right-[15%] text-pink-400/50" size={28} delay={0.3} duration={3.8} />

                {/* Decorative circles */}
                <motion.div
                    className="absolute top-[30%] right-[25%] w-12 h-12 rounded-full border-2 border-purple-300/40"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[20%] left-[30%] w-8 h-8 rounded-full bg-purple-200/30"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Small square accent */}
                <motion.div
                    className="absolute top-[48%] right-[22%] w-6 h-6 rounded-md border border-violet-300/50 rotate-12"
                    animate={{ rotate: [12, 20, 12] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Bottom content area with glass effect */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-sm">
                {/* Decorative squiggle */}
                <svg className="absolute -top-8 left-8 w-8 h-8 text-purple-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
                </svg>

                <h3 className="font-serif text-[36px] font-bold text-[#4C1D95] mb-3 tracking-tight">
                    Brand Owner
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 max-w-[380px]">
                    Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally.
                </p>

                <Link href="/brands">
                    <motion.button
                        whileHover={{ scale: 1.03, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white px-8 py-4 rounded-full font-semibold text-[15px] shadow-lg border border-purple-100 flex items-center gap-3 group/btn hover:shadow-xl transition-shadow"
                    >
                        <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                            Find Out More
                        </span>
                        <ArrowRight className="text-purple-500 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                </Link>
            </div>

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-purple-300/50 transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
};

// Card 2: Creator - Dark cinematic with neon accents
const CreatorCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[550px] rounded-[32px] overflow-hidden group cursor-pointer"
            style={{
                background: "linear-gradient(145deg, #1E1B4B 0%, #312E81 40%, #3730A3 100%)",
                boxShadow: "0 25px 50px -12px rgba(30, 27, 75, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)"
            }}
        >
            {/* Spotlight Glow Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(450px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(168, 85, 247, 0.25), transparent 60%)`
                }}
            />

            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                    background: [
                        "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Subtle noise texture */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />

            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Film camera icon */}
                <motion.div
                    className="absolute top-[18%] left-1/2 -translate-x-1/2 text-purple-300/70"
                    animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="relative">
                        <Video size={80} strokeWidth={1.5} />
                        {/* Film reel accent */}
                        <motion.div
                            className="absolute -right-4 -top-2 text-pink-400/80"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Film size={28} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Floating icons with neon glow */}
                <motion.div
                    className="absolute top-[28%] left-[15%] text-pink-400"
                    animate={{ y: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))" }}
                >
                    <Clapperboard size={36} />
                </motion.div>

                <motion.div
                    className="absolute top-[12%] right-[15%] text-yellow-400"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 6px rgba(250, 204, 21, 0.6))" }}
                >
                    <Star size={24} fill="currentColor" />
                </motion.div>

                <motion.div
                    className="absolute top-[40%] right-[12%] text-cyan-400/70"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <Camera size={32} />
                </motion.div>

                <motion.div
                    className="absolute top-[35%] left-[20%] text-purple-400/60"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                >
                    <Lightbulb size={26} />
                </motion.div>

                {/* Neon border frames */}
                <div className="absolute top-[25%] left-[8%] w-16 h-12 border border-purple-500/30 rounded-lg rotate-12"
                    style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)" }} />
                <div className="absolute top-[45%] right-[10%] w-12 h-16 border border-pink-500/30 rounded-lg -rotate-6"
                    style={{ boxShadow: "0 0 10px rgba(236, 72, 153, 0.3)" }} />
            </div>

            {/* Bottom content area */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-[#1E1B4B]/98 via-[#1E1B4B]/80 to-transparent">
                {/* Decorative squiggle */}
                <svg className="absolute -top-8 left-8 w-8 h-8 text-purple-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
                </svg>

                <h3 className="font-serif text-[36px] font-bold text-white mb-3 tracking-tight">
                    Creator
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-[380px]">
                    Have a story that deserves to be told? We discover talent, provide full production support, and help bring your vision from script to screen.
                </p>

                <Link href="/creators">
                    <motion.button
                        whileHover={{ scale: 1.03, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative px-8 py-4 rounded-full font-semibold text-[15px] text-white flex items-center gap-3 group/btn overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)",
                            boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                        }}
                    >
                        <span>Find Out More</span>
                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                </Link>
            </div>

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-purple-500/40 transition-colors duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(139, 92, 246, 0)" }}
            />
        </motion.div>
    );
};

export default function WhoAreYouSection() {
    return (
        <section className="relative py-[100px] md:py-[140px] bg-[#FAFBFF] overflow-visible -mt-1">
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.06]"
                style={{
                    backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: 'center top'
                }}
            />
            <FloatingScribbles color="text-purple-600/30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* HEADING */}
                <div className="text-center mb-[60px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="font-serif text-[56px] font-bold text-[#4C1D95] tracking-tighter"
                    >
                        Who Are You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-[18px] font-medium text-[#6B21A8] mt-2"
                    >
                        Pick your path below ↓
                    </motion.p>
                </div>

                {/* TWO BOX LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-6xl mx-auto">
                    <BrandOwnerCard />
                    <CreatorCard />
                </div>
            </div>
        </section>
    );
}
