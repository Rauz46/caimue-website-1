"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, Instagram, Youtube, Linkedin, Film, Video, Star, Camera, Clapperboard } from "lucide-react";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

const footerLinks = {
    platforms: [
        { href: "/platforms/ennitto", label: "Ennitto" },
        { href: "/platforms/teqthots", label: "TeqThots" },
        { href: "/platforms/feature-films", label: "Feature Films" },
    ],
    company: [
        { href: "/about", label: "About" },
        { href: "/brands", label: "For Brands" },
        { href: "/creators", label: "For Creators" },
        { href: "/team", label: "Team" },
    ],
    connect: [
        { href: "https://linkedin.com/company/caimue", label: "LinkedIn" },
        { href: "https://instagram.com/caimue", label: "Instagram" },
        { href: "https://youtube.com/@caimue", label: "YouTube" },
        { href: "mailto:hello@caimue.com", label: "Email" },
    ],
};

const WorldMap = () => (
    <div className="relative w-full h-[400px] flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-40">
            <defs>
                <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="white" fillOpacity="0.8" />
                </pattern>
            </defs>
            {/* Continental Paths with Dot Pattern */}
            <g fill="url(#dot-grid)">
                {/* Simplified World Map Paths */}
                <path d="M150 120 Q 200 80, 280 100 T 350 150 Q 320 220, 250 230 T 150 180 Z" /> {/* N America */}
                <path d="M320 250 Q 350 300, 380 400 T 350 480 Q 300 480, 280 400 T 300 300 Z" /> {/* S America */}
                <path d="M500 120 Q 600 60, 800 100 T 900 200 Q 850 280, 700 250 T 500 180 Z" /> {/* Eurasia */}
                <path d="M550 220 Q 650 250, 680 350 T 600 460 Q 500 460, 520 350 T 550 250 Z" /> {/* Africa */}
                <path d="M820 380 Q 880 380, 920 420 T 880 480 Q 820 480, 800 420 Z" /> {/* Australia */}
            </g>
        </svg>

        {/* Office Pins - Precise positions */}
        {/* Tampa, US */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute top-[32%] left-[24%] z-20"
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="absolute -inset-2 bg-red-500/40 rounded-full animate-ping" />
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow-md">Tampa</span>
            </div>
        </motion.div>

        {/* London, UK */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-[21%] left-[49%] z-20"
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="absolute -inset-2 bg-red-500/40 rounded-full animate-ping" />
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow-md">London</span>
            </div>
        </motion.div>

        {/* Chennai, India */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-[42%] left-[71%] z-20"
        >
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="absolute -inset-2 bg-red-500/40 rounded-full animate-ping" />
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow-md">Chennai</span>
            </div>
        </motion.div>
    </div>
);

import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function Footer() {
    return (
        <footer className="relative bg-white overflow-hidden">
            {/* FANCY A CHAT SECTION - HERO STYLE */}
            <section className="relative min-h-[450px] md:h-[500px] flex items-center overflow-hidden">
                <BackgroundGradientAnimation
                    containerClassName="absolute inset-0 z-0"
                    firstColor="139, 92, 246"  // Violet-500
                    secondColor="147, 51, 234" // Purple-600
                    thirdColor="124, 58, 237"  // Violet-600
                    fourthColor="168, 85, 247" // Purple-500
                    fifthColor="192, 132, 252" // Purple-400
                    pointerColor="139, 92, 246" // Violet-500
                    gradientBackgroundStart="rgb(76, 29, 149)" // Violet-900
                    gradientBackgroundEnd="rgb(88, 28, 135)"   // Purple-900
                />

                <HeroGrid className="opacity-30 z-10" />
                <FloatingScribbles color="text-white/20" className="z-10" />

                <div className="container relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
                            >
                                Fancy a chat?
                            </motion.h2>
                            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-medium drop-shadow-lg">
                                Discover how Caimue drives stories with impact. Teams in the US, UK, and India are ready to connect.
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <MagneticButton>
                                    <Link
                                        href="/collaborate"
                                        className="px-10 py-5 bg-white text-[#4C1D95] font-bold text-lg rounded-full hover:scale-105 transition-all shadow-2xl flex items-center gap-3 border border-white/20"
                                    >
                                        Book Your Demo <ArrowRight size={20} />
                                    </Link>
                                </MagneticButton>

                                <a href="mailto:hello@caimue.com" className="group flex items-center gap-4 text-white hover:text-white/80 transition-all">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white shadow-lg backdrop-blur-sm bg-white/5">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-lg font-semibold border-b-2 border-white/20 group-hover:border-white pb-1">hello@caimue.com</span>
                                </a>
                            </div>
                        </div>

                        {/* World Map with Pins */}
                        <div className="hidden lg:block">
                            <WorldMap />
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
                            <Link href="/about" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">About</Link>
                            <Link href="/platforms" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Platforms</Link>
                            <Link href="/team" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Team</Link>
                            <Link href="/collaborate" className="text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Collaborate</Link>
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
