"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Youtube, Instagram, Facebook, Twitter, Send, Clapperboard, Star, ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

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
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[280px] h-[180px] flex items-center justify-center">
                {/* Center briefcase icon */}
                <motion.div
                    className="absolute z-10"
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 shadow-2xl flex items-center justify-center relative">
                        <div className="w-10 h-2.5 bg-amber-400 rounded-sm absolute top-2" />
                        <div className="w-4 h-1.5 bg-amber-300 rounded-sm absolute top-0" />
                    </div>
                </motion.div>

                {/* Inner orbit - YouTube, Instagram, Facebook */}
                <OrbitingCircles
                    className="size-11 border-none bg-red-500 shadow-lg"
                    duration={20}
                    delay={0}
                    radius={65}
                    path={true}
                >
                    <Youtube className="w-5 h-5 text-white" />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-11 border-none bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-lg"
                    duration={20}
                    delay={7}
                    radius={65}
                    path={false}
                >
                    <Instagram className="w-5 h-5 text-white" />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-11 border-none bg-blue-600 shadow-lg"
                    duration={20}
                    delay={14}
                    radius={65}
                    path={false}
                >
                    <Facebook className="w-5 h-5 text-white" />
                </OrbitingCircles>

                {/* Outer orbit (reverse) - X, Telegram */}
                <OrbitingCircles
                    className="size-12 border-none bg-black shadow-lg"
                    radius={105}
                    duration={25}
                    delay={0}
                    reverse
                    path={true}
                >
                    <Twitter className="w-5 h-5 text-white" />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-12 border-none bg-sky-500 shadow-lg"
                    radius={105}
                    duration={25}
                    delay={12}
                    reverse
                    path={false}
                >
                    <Send className="w-5 h-5 text-white" />
                </OrbitingCircles>
            </div>

            {/* Bottom content area - no blur */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-16 bg-gradient-to-t from-white via-white/90 to-transparent">
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

            {/* Orbiting Team Faces Container - positioned higher */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[260px] h-[260px] flex items-center justify-center">
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

                <h3 className="font-serif text-[36px] font-bold mb-3 tracking-tight" style={{ color: '#FFFFFF' }}>
                    Creator
                </h3>
                <p className="text-[15px] leading-relaxed mb-6 max-w-[380px]" style={{ color: '#E5E7EB' }}>
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
