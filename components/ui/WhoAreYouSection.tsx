"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Briefcase, Video, Sparkles, TrendingUp, Target, ShoppingBag, Clapperboard, Film, Star, ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingElement = ({ children, className, depth = 1 }: { children: React.ReactNode, className?: string, depth?: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Parallax logic would go here if we want mouse-global, 
    // but the user wants it per card. We'll handle it inside the card.
    return (
        <motion.div className={cn("absolute pointer-events-none", className)}>
            {children}
        </motion.div>
    );
};

const Card1Background = () => (
    <div className="absolute inset-0 overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#FCD34D] via-[#FB923C] to-[#F472B6]"
            animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
            style={{ filter: 'blur(60px)', opacity: 0.9 }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 15px)' }}
        />
        {/* Floating Symbols */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-white font-bold text-xl"
                    initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                    animate={{
                        y: ["-10%", "10%"],
                        rotate: [0, 180]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                >
                    {i % 2 === 0 ? "+" : "×"}
                </motion.div>
            ))}
        </div>
    </div>
);

const Card2Background = () => (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#111827] to-[#1E3A8A]">
        {/* Spotlight Effect */}
        <div className="absolute -inset-[100%] opacity-30 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(139,92,246,0.2)_10%,transparent_20%)] animate-[spin_20s_linear_infinite]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
        />

        {/* Neon Frames */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[30%] h-[20%] border border-purple-500/20 rounded-lg blur-[1px] rotate-12" />
            <div className="absolute bottom-[20%] right-[15%] w-[25%] h-[15%] border border-cyan-500/20 rounded-lg blur-[1px] -rotate-6" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.3),transparent_70%)]" />
    </div>
);

export default function WhoAreYouSection() {
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);

    // Mouse positions for parallax
    const card1X = useMotionValue(0);
    const card1Y = useMotionValue(0);
    const card2X = useMotionValue(0);
    const card2Y = useMotionValue(0);

    const handleMouseMoveCard1 = (e: React.MouseEvent) => {
        if (!card1Ref.current) return;
        const rect = card1Ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        card1X.set((e.clientX - centerX) / 15);
        card1Y.set((e.clientY - centerY) / 15);
    };

    const handleMouseMoveCard2 = (e: React.MouseEvent) => {
        if (!card2Ref.current) return;
        const rect = card2Ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        card2X.set((e.clientX - centerX) / 20);
        card2Y.set((e.clientY - centerY) / 20);
    };

    const handleMouseLeave = () => {
        card1X.set(0); card1Y.set(0);
        card2X.set(0); card2Y.set(0);
    };

    return (
        <section className="relative py-[120px] bg-gradient-to-b from-[#F5F0FF] to-[#EDE7FF] overflow-hidden">
            <div className="container mx-auto px-4">

                {/* HEADING */}
                <div className="text-center mb-[60px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-[48px] font-bold text-[#4C1D95] uppercase tracking-tighter"
                        style={{ fontVariant: 'small-caps' }}
                    >
                        Who Are You?
                    </motion.h2>
                    <p className="font-sans text-[18px] font-medium text-[#6B21A8] mt-4">
                        Pick your path below ↓
                    </p>
                </div>

                {/* TWO BOX LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-6xl mx-auto">

                    {/* BOX 1: BRAND OWNER */}
                    <motion.div
                        ref={card1Ref}
                        onMouseMove={handleMouseMoveCard1}
                        onMouseLeave={handleMouseLeave}
                        className="relative h-[600px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl"
                        style={{ borderRadius: "40px" }}
                    >
                        <Card1Background />

                        {/* Floating Elements */}
                        <motion.div style={{ x: card1X, y: card1Y }} className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 scale-[2.8] text-white/50 opacity-40 group-hover:opacity-80 transition-all duration-500">
                                <Briefcase size={80} strokeWidth={1} />
                            </div>

                            {/* Brand Tokens */}
                            <div className="absolute top-[30%] left-[25%] w-10 h-10 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm" />
                            <div className="absolute top-[15%] right-[20%] w-12 h-12 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm" />

                            {/* Floating Badges */}
                            <div className="absolute top-[40%] right-[25%] px-3 py-1 bg-white/20 rounded-md border border-white/30 text-[10px] text-white font-bold tracking-widest uppercase">Trusted</div>
                            <div className="absolute bottom-[45%] left-[20%] px-3 py-1 bg-white/20 rounded-md border border-white/30 text-[10px] text-white font-bold tracking-widest uppercase">Growth</div>

                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[25%] left-[12%] text-white/70"><Sparkles size={28} /></motion.div>
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[12%] right-[18%] text-white/40"><Target size={36} /></motion.div>
                            <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-[42%] right-[12%] text-white/50"><ShoppingBag size={30} /></motion.div>
                            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[45%] left-[18%] text-white/60"><TrendingUp size={34} /></motion.div>
                        </motion.div>

                        {/* Content Area */}
                        <div className="absolute inset-x-0 bottom-0 p-10 pt-24 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[4px]">
                            <div className="text-[80px] mb-4 drop-shadow-2xl">💼</div>
                            <h3 className="font-serif text-[42px] font-bold text-white mb-4 drop-shadow-lg">Brand Owner</h3>
                            <p className="text-white/90 text-[16px] leading-[1.7] mb-8 font-inter max-w-sm font-medium">
                                Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="bg-white px-[48px] py-[16px] rounded-full font-bold text-[16px] shadow-2xl flex items-center gap-2 group/btn"
                            >
                                <span className="bg-gradient-to-r from-[#FCD34D] via-[#FB923C] to-[#F472B6] bg-clip-text text-transparent">
                                    Find Out More
                                </span>
                                <ArrowRight className="text-[#FB923C] group-hover/btn:translate-x-2 transition-transform duration-300" size={20} />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* BOX 2: CREATOR */}
                    <motion.div
                        ref={card2Ref}
                        onMouseMove={handleMouseMoveCard2}
                        onMouseLeave={handleMouseLeave}
                        className="relative h-[600px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl"
                        style={{ borderRadius: "40px" }}
                    >
                        <Card2Background />

                        {/* Visual Elements */}
                        <motion.div
                            style={{
                                x: card2X,
                                y: card2Y,
                                rotateX: useTransform(card2Y, [-20, 20], [8, -8]),
                                rotateY: useTransform(card2X, [-20, 20], [-8, 8])
                            }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 scale-[3] text-purple-400 opacity-20 group-hover:opacity-50 transition-all duration-700 blur-[2px] group-hover:blur-0">
                                <Video size={84} strokeWidth={1} />
                            </div>

                            {/* Neon Elements */}
                            <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                className="absolute top-[15%] left-[15%] w-40 h-40 border-2 border-cyan-500/20 rounded-full blur-2xl"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-[25%] right-[20%] text-pink-500 [filter:drop-shadow(0_0_10px_rgba(236,72,153,0.6))]"
                            >
                                <Film size={40} />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: [0, -10, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
                                className="absolute top-1/2 left-[15%] text-purple-400 [filter:drop-shadow(0_0_8px_rgba(168,85,247,0.5))]"
                            >
                                <Clapperboard size={44} />
                            </motion.div>
                            <div className="absolute top-[8%] right-[10%] text-yellow-400 blur-[1px] group-hover:blur-0 transition-all">
                                <Star size={28} fill="currentColor" />
                            </div>

                            {/* Film Reels */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-[40%] right-[15%] text-white/10"
                            >
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="7" r="1" /><circle cx="12" cy="17" r="1" /><circle cx="7" cy="12" r="1" /><circle cx="17" cy="12" r="1" /></svg>
                            </motion.div>
                        </motion.div>

                        {/* Content Area */}
                        <div className="absolute inset-x-0 bottom-0 p-10 pt-24 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent">
                            <div className="text-[80px] mb-4 [filter:drop-shadow(0_0_15px_rgba(168,85,247,0.4))]">🎬</div>
                            <h3 className="font-serif text-[42px] font-bold text-white mb-4 [text-shadow:_0_0_30px_rgb(168_85_247_/_60%)]">
                                Creator
                            </h3>
                            <p className="text-white/80 text-[16px] leading-[1.7] mb-8 font-inter max-w-sm font-medium">
                                Have a story that deserves to be told? We discover talent, provide full production support, and help bring your vision from script to screen.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-[48px] py-[16px] rounded-full font-bold text-[16px] text-white relative group/btn2 overflow-hidden"
                            >
                                {/* Gradient Border via inset trick */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-[2px] rounded-full">
                                    <div className="absolute inset-0 bg-[#111827] rounded-full transition-opacity group-hover/btn2:opacity-90" />
                                </div>
                                <div className="flex items-center gap-2 relative z-10">
                                    Find Out More <ArrowRight className="group-hover/btn2:translate-x-2 transition-transform duration-300" size={20} />
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
