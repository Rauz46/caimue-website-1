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

export function Footer() {
    return (
        <footer className="relative bg-[#0F0F0F] text-white pt-[100px] pb-[40px] overflow-hidden">
            {/* Background Effects matching Hero */}
            <HeroGrid className="opacity-[0.05] z-0" />
            <FloatingScribbles color="text-white/20" />

            {/* Hand-drawn annotations (Overlaying scribbles more specifically for footer) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
                <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[15%] left-[10%] font-handwriting text-2xl rotate-[-12deg]">Let's talk!</motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[40%] left-[45%] font-handwriting text-3xl">Hello! 👋</motion.div>
                <div className="absolute bottom-[20%] right-[25%] font-handwriting text-2xl rotate-[8deg]">Collaborate</div>

                {/* Visual Icons */}
                <div className="absolute top-[10%] right-[15%] opacity-40"><Star size={24} /></div>
                <div className="absolute bottom-[30%] left-[15%] opacity-40 rotate-[15deg]"><Clapperboard size={32} /></div>
                <div className="absolute top-[60%] right-[40%] opacity-40 -rotate-[20deg]"><Video size={28} /></div>
                <div className="absolute top-[20%] left-[30%] opacity-40"><ArrowRight size={40} className="rotate-45" /></div>
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-[60px] items-center mb-[80px]">

                    {/* LEFT COLUMN: Content */}
                    <div className="max-w-[550px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-serif text-[56px] leading-[1.1] font-bold text-white mb-6"
                        >
                            Fancy a Chat?
                        </motion.h2>
                        <p className="text-[#CCCCCC] text-[18px] leading-[1.7] mb-10">
                            Whether you're looking to create content, collaborate on films, or just explore what we can build together—we'd love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                                className="bg-[#E91E8C] px-[48px] py-[18px] rounded-full font-bold text-[16px] shadow-[0_0_30px_rgba(233,30,140,0.3)] flex items-center gap-3 group transition-all"
                            >
                                Let's Collaborate <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} />
                            </motion.button>

                            <a href="mailto:hello@caimue.com" className="group flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                                    <Mail size={18} className="text-[#999999] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[14px] text-[#999999] group-hover:text-white transition-colors">hello@caimue.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Map */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-[32px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-[#1A1A1A] border border-white/[0.08] rounded-[24px] p-4 shadow-2xl backdrop-blur-xl overflow-hidden min-h-[350px]">
                            <WorldMap />
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="h-[1px] w-full bg-white/[0.08] mb-[60px]" />

                {/* BOTTOM LINKS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-[60px]">
                    <div className="col-span-1">
                        <Link href="/">
                            <Image
                                src="/logos/caimue-logo-v2.png"
                                alt="Caimue"
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain mb-6 grayscale brightness-200"
                            />
                        </Link>
                        <p className="text-[13px] text-[#666666] leading-relaxed italic">
                            Building stories that matter
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold text-[#CCCCCC] uppercase tracking-wider mb-6">Platforms</h4>
                        <ul className="space-y-3">
                            {footerLinks.platforms.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[14px] text-[#999999] hover:text-white hover:underline transition-all underline-offset-4 decoration-pink-500">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold text-[#CCCCCC] uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[14px] text-[#999999] hover:text-white hover:underline transition-all underline-offset-4 decoration-purple-500">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold text-[#CCCCCC] uppercase tracking-wider mb-6">Connect</h4>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#999999] hover:text-white hover:underline transition-all underline-offset-4 decoration-cyan-500">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="text-center pt-8 border-t border-white/[0.05]">
                    <p className="text-[13px] text-[#666666]">
                        © 2026 Caimue. An AI-first production house. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
