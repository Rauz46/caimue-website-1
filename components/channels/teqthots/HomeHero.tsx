"use client";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// TeqThots hero — Caimue homepage look (animated gradient bg + Playfair/Inter),
// keeping the auto-scrolling video carousel below the headline.
export default function HomeHero() {
    return (
        <section className="flex flex-col pt-24 md:pt-28 relative overflow-hidden pb-0">
            {/* Caimue animated gradient background */}
            <BackgroundGradientAnimation
                autoMove
                maskCenter
                containerClassName="absolute inset-0 z-0 h-full"
                firstColor="124, 58, 237"
                secondColor="109, 40, 217"
                thirdColor="91, 33, 182"
                fourthColor="126, 34, 206"
                fifthColor="107, 33, 168"
                pointerColor="124, 58, 237"
                gradientBackgroundStart="rgb(46, 16, 101)"
                gradientBackgroundEnd="rgb(59, 7, 100)"
            />

            <HeroGrid className="opacity-40 z-10" />
            <div className="bg-noise opacity-10 z-10" />

            {/* Decorative stars */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                <div className="absolute top-20 right-1/4 text-purple-400/30 text-4xl">✦</div>
                <div className="absolute top-40 left-1/3 text-purple-300/30 text-2xl">★</div>
                <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
                <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
            </div>

            <FloatingScribbles />

            {/* Text content */}
            <div className="container relative z-10 flex flex-col items-center text-center">
                {/* Headline */}
                <h1 className="w-full mx-auto mb-5 relative flex flex-col items-center overflow-visible">
                    <span className="font-serif leading-[1.15] tracking-tight text-white text-center block font-bold drop-shadow-2xl max-w-5xl text-4xl md:text-5xl lg:text-[4.25rem] pb-2 overflow-visible">
                        <span className="block">Big Ideas. Small Attention Spans.</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308]">
                            We Bridge the Gap.
                        </span>
                    </span>
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-lg text-white/90 max-w-5xl mx-auto leading-relaxed font-medium drop-shadow font-sans"
                >
                    SaaS demos. AI explainers. Corporate storytelling. Product launches. Knowledge drops.
                    Trend breakdowns. If it&apos;s tech — we film it, package it, and make people actually want to watch it.
                </motion.p>
            </div>

            {/* Video carousel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-10 w-full mt-6"
            >
                <HeroCarousel />
            </motion.div>
        </section>
    );
}
