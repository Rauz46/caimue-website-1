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
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none">
        {/* Simple World Map Path - Simplified for artistic style */}
        <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-20 fill-white">
            <path d="M150 100 Q 180 80, 220 120 T 300 150 Q 320 180, 300 220 Q 250 250, 200 230 T 150 180 Z" /> {/* N America */}
            <path d="M350 250 Q 380 280, 400 350 T 380 450 Q 350 480, 320 450 T 280 350 Z" /> {/* S America */}
            <path d="M500 100 Q 550 50, 650 80 T 750 120 Q 800 150, 750 200 T 650 250 Q 600 280, 550 250 T 500 150 Z" /> {/* Eurasia */}
            <path d="M550 280 Q 600 300, 620 350 T 600 450 Q 550 480, 500 450 T 480 350 Z" /> {/* Africa */}
            <path d="M800 350 Q 850 350, 880 380 T 850 450 Q 800 450, 780 400 Z" /> {/* Australia */}
            <path d="M720 220 Q 750 240, 750 280 T 700 320" stroke="white" strokeWidth="2" fill="none" /> {/* SE Asia Islands */}
        </svg>

        {/* Office Pins */}
        {/* US Office */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute top-[35%] left-[22%] z-20 group"
        >
            <div className="relative">
                <div className="absolute -inset-4 bg-purple-500/30 rounded-full animate-ping" />
                <div className="bg-[#E91E8C] p-1.5 rounded-full relative z-10 shadow-[0_0_15px_rgba(233,30,140,0.5)]">
                    <MapPin size={14} className="text-white" fill="currentColor" />
                </div>
                <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 bg-white px-2 py-0.5 rounded text-[10px] font-bold text-black border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    US Office
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 bg-black/80 rounded backdrop-blur-sm border border-white/20 whitespace-nowrap">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">US</span>
                </div>
            </div>
        </motion.div>

        {/* India Office */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-[48%] left-[70%] z-20 group"
        >
            <div className="relative">
                <div className="absolute -inset-4 bg-pink-500/30 rounded-full animate-ping" />
                <div className="bg-[#8B5CF6] p-1.5 rounded-full relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <MapPin size={14} className="text-white" fill="currentColor" />
                </div>
                <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 bg-white px-2 py-0.5 rounded text-[10px] font-bold text-black border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    India Office
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 bg-black/80 rounded backdrop-blur-sm border border-white/20 whitespace-nowrap">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">India</span>
                </div>
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
            <section className="relative h-[700px] flex items-center overflow-hidden">
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
                    <div className="max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl"
                        >
                            Fancy a Chat?
                        </motion.h2>
                        <p className="text-white/90 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                            Whether you're looking to create content, collaborate on films, or just explore what we can build together—we'd love to hear from you.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            <MagneticButton>
                                <Link
                                    href="/collaborate"
                                    className="px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(168,85,247,0.4)] flex items-center gap-3 border border-white/20"
                                >
                                    Let's Collaborate <ArrowRight size={24} />
                                </Link>
                            </MagneticButton>

                            <a href="mailto:hello@caimue.com" className="group flex items-center gap-4 text-white hover:text-white/80 transition-all">
                                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white shadow-lg backdrop-blur-sm bg-white/5">
                                    <Mail size={24} />
                                </div>
                                <span className="text-xl font-semibold border-b-2 border-white/20 group-hover:border-white pb-1">hello@caimue.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHITE PLAIN BOTTOM FOOTER - NAVBAR STYLE */}
            <div className="bg-white py-16">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        {/* LOGO */}
                        <Link href="/" className="transition-transform hover:scale-105">
                            <Image
                                src="/logos/caimue-logo-v2.png"
                                alt="Caimue"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        {/* NAV ITEMS */}
                        <nav className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                            <Link href="/" className="text-[16px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Home</Link>
                            <Link href="/about" className="text-[16px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">About</Link>
                            <Link href="/platforms" className="text-[16px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Platforms</Link>
                            <Link href="/team" className="text-[16px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Team</Link>
                            <Link href="/collaborate" className="text-[16px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">Collaborate</Link>
                        </nav>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-6">
                            <a href="https://instagram.com/caimue" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-[var(--caimue-purple)] transition-all shadow-sm hover:shadow-md bg-white">
                                <Instagram size={22} />
                            </a>
                            <a href="https://youtube.com/@caimue" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-[var(--caimue-purple)] transition-all shadow-sm hover:shadow-md bg-white">
                                <Youtube size={22} />
                            </a>
                            <a href="https://linkedin.com/company/caimue" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-[var(--caimue-purple)] transition-all shadow-sm hover:shadow-md bg-white">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-[14px] font-medium">
                        <p>© 2026 Caimue. An AI-first production house.</p>
                        <div className="flex gap-10">
                            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
