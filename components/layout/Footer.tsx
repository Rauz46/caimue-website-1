"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import WorldMap from "@/components/ui/world-map";

// Dot locations for the world map
const locations = [
    {
        start: { lat: 27.9506, lng: -82.4572, label: "Tampa(HQ)" },
        end: { lat: 51.5074, lng: -0.1278, label: "London" },
    },
    {
        start: { lat: 51.5074, lng: -0.1278, label: "London" },
        end: { lat: 13.0827, lng: 80.2707, label: "Chennai" },
    },
];

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
                                className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl !text-white"
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
                                        href="/contact"
                                        className="px-10 py-5 bg-white text-[#4C1D95] font-bold text-lg rounded-full hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
                                    >
                                        Start a Conversation <ArrowRight size={20} />
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </div>

                        {/* Dynamic World Map */}
                        <div className="hidden lg:block w-full">
                            <WorldMap dots={locations} lineColor="#FF0000" />
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
                                src="/caimue-logo.png"
                                alt="Caimue"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert"
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
                            <a href="https://www.instagram.com/caimue_inc/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[var(--caimue-purple)] hover:border-gray-200 transition-all bg-gray-50/50">
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
