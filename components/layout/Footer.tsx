"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

// World Map with Dot Pattern - matching reference image style
const WorldMapDotted = () => (
    <div className="relative w-full h-[300px] flex items-center justify-center pointer-events-none">
        {/* SVG Dot Pattern World Map */}
        <svg viewBox="0 0 800 400" className="w-full h-auto max-w-[600px]">
            <defs>
                <pattern id="dot-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="white" fillOpacity="0.4" />
                </pattern>
                <clipPath id="world-clip">
                    {/* North America */}
                    <path d="M80 80 Q120 60, 180 70 T240 100 Q260 130, 250 170 T200 200 Q160 210, 120 190 T80 140 Z" />
                    {/* South America */}
                    <path d="M180 220 Q200 240, 210 300 T200 360 Q170 380, 150 350 T160 280 Q165 250, 180 220 Z" />
                    {/* Europe */}
                    <path d="M380 60 Q420 50, 460 60 T500 90 Q490 120, 450 130 T380 110 Q370 90, 380 60 Z" />
                    {/* Africa */}
                    <path d="M380 140 Q420 130, 460 150 T480 220 Q470 280, 440 320 T380 340 Q350 320, 360 260 T380 180 Z" />
                    {/* Asia */}
                    <path d="M480 50 Q560 40, 650 60 T740 100 Q750 150, 720 180 T620 200 Q550 210, 500 180 T480 120 Q475 80, 480 50 Z" />
                    {/* India */}
                    <path d="M560 180 Q580 200, 590 250 T570 300 Q540 310, 530 270 T550 210 Z" />
                    {/* Australia */}
                    <path d="M640 280 Q700 270, 740 300 T730 350 Q690 370, 650 350 T640 310 Z" />
                </clipPath>
            </defs>

            {/* Filled dot pattern using clip path */}
            <rect width="100%" height="100%" fill="url(#dot-pattern)" clipPath="url(#world-clip)" />
        </svg>

        {/* Location Pins with Blinking Animation */}
        {/* Tampa (HQ) */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute"
            style={{ top: "32%", left: "22%" }}
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <motion.div
                        className="absolute -inset-3 bg-red-500/50 rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[13px] font-bold text-white drop-shadow-lg whitespace-nowrap">Tampa(HQ)</span>
            </div>
        </motion.div>

        {/* London */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute"
            style={{ top: "20%", left: "52%" }}
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <motion.div
                        className="absolute -inset-3 bg-red-500/50 rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                    />
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[13px] font-bold text-white drop-shadow-lg">London</span>
            </div>
        </motion.div>

        {/* Chennai */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute"
            style={{ top: "42%", left: "68%" }}
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <motion.div
                        className="absolute -inset-3 bg-red-500/50 rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                    />
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[13px] font-bold text-white drop-shadow-lg">Chennai</span>
            </div>
        </motion.div>
    </div>
);

export function Footer() {
    return (
        <footer className="relative bg-white overflow-hidden">
            {/* FANCY A CHAT SECTION - HERO STYLE */}
            <section className="relative min-h-[400px] md:h-[450px] flex items-center overflow-hidden">
                <BackgroundGradientAnimation
                    containerClassName="absolute inset-0 z-0"
                    firstColor="139, 92, 246"
                    secondColor="147, 51, 234"
                    thirdColor="124, 58, 237"
                    fourthColor="168, 85, 247"
                    fifthColor="192, 132, 252"
                    pointerColor="139, 92, 246"
                    gradientBackgroundStart="rgb(76, 29, 149)"
                    gradientBackgroundEnd="rgb(88, 28, 135)"
                />

                <HeroGrid className="opacity-30 z-10" />
                <FloatingScribbles color="text-white/20" className="z-10" />

                <div className="container relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
                            >
                                Fancy a chat?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium drop-shadow-lg"
                            >
                                Discover how Caimue drives stories with impact. Teams in the US, UK, and India are ready to connect.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <MagneticButton>
                                    <Link
                                        href="/collaborate"
                                        className="px-10 py-5 bg-white text-[#4C1D95] font-bold text-lg rounded-full hover:scale-105 transition-all shadow-2xl flex items-center gap-3 border border-white/20"
                                    >
                                        Contact <ArrowRight size={20} />
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </div>

                        {/* World Map with Blinking Pins */}
                        <div className="hidden lg:block">
                            <WorldMapDotted />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHITE PLAIN BOTTOM FOOTER - NAVBAR STYLE */}
            <div className="bg-white py-10">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* LOGO */}
                        <Link href="/" className="transition-transform hover:scale-105">
                            <Image
                                src="/logos/caimue-logo-v2.png"
                                alt="Caimue"
                                width={160}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>

                        {/* NAV ITEMS */}
                        <nav className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
                            <Link href="/" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Home</Link>
                            <Link href="/brands" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Brands</Link>
                            <Link href="/creators" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Creators</Link>
                            <Link href="/platforms" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Platforms</Link>
                            <Link href="/about" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">About</Link>
                        </nav>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com/caimue" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-gray-200 transition-all bg-gray-50/50">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com/company/caimue" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-gray-200 transition-all bg-gray-50/50">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[13px] font-medium">
                        <p>© 2026 Caimue. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
