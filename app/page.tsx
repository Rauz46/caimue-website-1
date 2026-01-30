"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WaveDivider, WaveDividerAlt } from "@/components/effects/WaveDivider";
import { CinematicBackground } from "@/components/effects/CinematicBackground";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { VideoScrollStrip } from "@/components/ui/VideoScrollStrip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { SocialProofStrip } from "@/components/ui/SocialProofStrip";
import { HeroVisualFrame } from "@/components/ui/HeroVisualFrame";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { PlatformsSection } from "@/components/ui/PlatformsSection";
import { MorphingWord } from "@/components/ui/MorphingWord";
import { JourneySection } from "@/components/ui/JourneySection";
import WhoAreYouSection from "@/components/ui/WhoAreYouSection";

// Video/Poster cards for the auto-scrolling marquee
const showcaseItems = [
  { id: 1, src: "/images/Hey!%20Sinamika%20Poster.jpg", title: "Hey Sinamika", type: "Short Film" },
  { id: 2, src: "/images/Hi%20papa.jpg", title: "Hi Papa", type: "Short Film" },
  { id: 3, src: "/images/Thiruchitrambalam.jpg", title: "Thiruchitrambalam", type: "FunShortz" },
  { id: 4, src: "/images/Meiyazhagan%20_%20illustration%20poster%20-%20Vishnu%20Narayanan.jpg", title: "Meiyazhagan", type: "TeqThots" },
  { id: 5, src: "/images/Odum%20Kuthira%20Chaadum%20Kuthira%20poster.jpg", title: "Odum Kuthira", type: "Short Film" },
  { id: 6, src: "/images/%23Atharvaa.jpg", title: "Atharvaa", type: "FunShortz" },
  { id: 7, src: "/images/A.jpg", title: "A", type: "TeqThots" },
  { id: 8, src: "/images/D.jpg", title: "D", type: "Short Film" },
];

// stats (keeping for now if used elsewhere)

// stats (keeping for now if used elsewhere)

export default function Home() {
  return (
    <>
      <FollowerPointerCard title="🎬 Stories That Matter">
        <section className="min-h-[75vh] flex flex-col pt-24 md:pt-32 relative overflow-visible">
          {/* Background Animation */}
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

          {/* Background Elements */}
          <HeroGrid className="opacity-40 z-10" />
          <div className="bg-noise opacity-10 z-10" />

          {/* Decorative Stars and Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <div className="absolute top-20 right-1/4 text-purple-400/30 text-4xl">✦</div>
            <div className="absolute top-40 left-1/3 text-purple-300/30 text-2xl">★</div>
            <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
            <div className="absolute top-1/2 left-1/4 text-purple-400/20 text-xl">●</div>
            <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
            <div className="absolute top-1/3 right-1/4 text-purple-200/30 text-xl">●</div>
          </div>

          {/* Editorial Scribbles */}
          <FloatingScribbles />

          <div className="container relative z-10 flex flex-col items-center text-center mt-12 md:mt-32 flex-1">

            {/* Social Proof Strip - Removed */}

            <h1 className="w-full mx-auto mb-4 relative flex flex-col items-center">
              <span className="leading-[1.05] tracking-tight text-white text-center block font-bold drop-shadow-2xl max-w-6xl text-5xl md:text-6xl lg:text-8xl pb-2">
                <span className="block">Stories Worth Telling.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] flex flex-wrap items-center justify-center gap-x-4">
                  <span>Movies Worth Making.</span>
                </span>
              </span>
            </h1>

            {/* Subtext - Close to headline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-snug font-medium drop-shadow"
            >
              Caimue is an AI-first production house creating cinema across Malayalam, Tamil, and English. We discover talent, back stories that matter, and produce films that reach audiences who care.
            </motion.p>

            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center gap-2 text-white/40 mb-12 mt-auto"
            >
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </FollowerPointerCard>

      {/* ==================== JOURNEY SECTION (MOVED UP) ==================== */}
      <JourneySection />

      {/* ==================== PLATFORMS SECTION (CENTERED) ==================== */}
      <PlatformsSection />

      {/* ==================== WHO ARE YOU SECTION ==================== */}
      <WhoAreYouSection />

    </>
  );
}
