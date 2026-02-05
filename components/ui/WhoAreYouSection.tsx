"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, TrendingUp, Target, Megaphone, Clapperboard, Film, Star, ArrowRight, Camera, Lightbulb, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

// Social Media Icon Components
const SocialIcons = {
    youtube: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    instagram: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    twitter: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    telegram: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
    ),
};

// Card 1: Brand Owner - Light lavender/pink gradient with orbiting social icons
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

            {/* Orbiting Social Icons Container */}
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[280px] h-[280px] flex items-center justify-center">
                {/* Center briefcase icon */}
                <motion.div
                    className="absolute z-10"
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 shadow-2xl flex items-center justify-center relative">
                        <div className="w-12 h-3 bg-amber-500 rounded-sm absolute top-2" />
                        <div className="w-5 h-2 bg-amber-400 rounded-sm absolute top-0" />
                    </div>
                </motion.div>

                {/* Inner orbit - YouTube, Instagram, Facebook */}
                <OrbitingCircles
                    className="size-10 border-none bg-white shadow-lg"
                    duration={20}
                    delay={0}
                    radius={70}
                    path={true}
                >
                    <div className="w-5 h-5 text-red-600"><SocialIcons.youtube /></div>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-10 border-none bg-white shadow-lg"
                    duration={20}
                    delay={7}
                    radius={70}
                    path={false}
                >
                    <div className="w-5 h-5 text-pink-600"><SocialIcons.instagram /></div>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-10 border-none bg-white shadow-lg"
                    duration={20}
                    delay={14}
                    radius={70}
                    path={false}
                >
                    <div className="w-5 h-5 text-blue-600"><SocialIcons.facebook /></div>
                </OrbitingCircles>

                {/* Outer orbit (reverse) - X, Telegram */}
                <OrbitingCircles
                    className="size-12 border-none bg-white shadow-lg"
                    radius={120}
                    duration={25}
                    delay={0}
                    reverse
                    path={true}
                >
                    <div className="w-6 h-6 text-gray-900"><SocialIcons.twitter /></div>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-12 border-none bg-white shadow-lg"
                    radius={120}
                    duration={25}
                    delay={12}
                    reverse
                    path={false}
                >
                    <div className="w-6 h-6 text-blue-500"><SocialIcons.telegram /></div>
                </OrbitingCircles>
            </div>

            {/* Bottom content area with glass effect */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-sm">
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

// Card 2: Creator - Dark cinematic with orbiting team faces
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

    // Team member images
    const teamImages = [
        "/team/megha.jpg",
        "/team/sajan.jpg",
        "/team/megha  2.jpg",
        "/team/sajan 2.jpg",
    ];

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

            {/* Orbiting Team Faces Container */}
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[280px] h-[280px] flex items-center justify-center">
                {/* Center video icon */}
                <motion.div
                    className="absolute z-10 text-purple-300"
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Video size={56} strokeWidth={1.5} />
                </motion.div>

                {/* Inner orbit - Team faces */}
                <OrbitingCircles
                    className="size-12 border-2 border-purple-400/50 bg-transparent overflow-hidden"
                    duration={18}
                    delay={0}
                    radius={75}
                    path={true}
                >
                    <Image
                        src={teamImages[0]}
                        alt="Team member"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-full"
                    />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-12 border-2 border-pink-400/50 bg-transparent overflow-hidden"
                    duration={18}
                    delay={9}
                    radius={75}
                    path={false}
                >
                    <Image
                        src={teamImages[1]}
                        alt="Team member"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-full"
                    />
                </OrbitingCircles>

                {/* Outer orbit (reverse) - More team faces */}
                <OrbitingCircles
                    className="size-14 border-2 border-cyan-400/50 bg-transparent overflow-hidden"
                    radius={120}
                    duration={22}
                    delay={0}
                    reverse
                    path={true}
                >
                    <Image
                        src={teamImages[2]}
                        alt="Team member"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover rounded-full"
                    />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-14 border-2 border-yellow-400/50 bg-transparent overflow-hidden"
                    radius={120}
                    duration={22}
                    delay={11}
                    reverse
                    path={false}
                >
                    <Image
                        src={teamImages[3]}
                        alt="Team member"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover rounded-full"
                    />
                </OrbitingCircles>

                {/* Floating accent icons */}
                <motion.div
                    className="absolute top-0 right-0 text-yellow-400"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 6px rgba(250, 204, 21, 0.6))" }}
                >
                    <Star size={20} fill="currentColor" />
                </motion.div>
                <motion.div
                    className="absolute bottom-4 left-4 text-pink-400"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))" }}
                >
                    <Clapperboard size={24} />
                </motion.div>
            </div>

            {/* Bottom content area */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#1E1B4B]/98 via-[#1E1B4B]/80 to-transparent">
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
            <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-purple-500/40 transition-colors duration-500 pointer-events-none" />
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
