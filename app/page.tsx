"use client";

import { motion } from "framer-motion";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { PlatformsSection } from "@/components/ui/PlatformsSection";
import { FeatureFilmsSection } from "@/components/ui/FeatureFilmsSection";
import { CorporateVideoSection } from "@/components/ui/CorporateVideoSection";
import { JourneySection } from "@/components/ui/JourneySection";
import WhoAreYouSection from "@/components/ui/WhoAreYouSection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import MovieCardsFan from "@/components/ui/MovieCardsFan";

export default function Home() {
  return (
    <>
      <section className="flex flex-col pt-28 md:pt-40 relative overflow-hidden pb-6">
        {/* Background Animation */}
        <BackgroundGradientAnimation
          autoMove
          maskCenter
          containerClassName="absolute inset-0 z-0 h-full"
          firstColor="124, 58, 237"  // Violet-600
          secondColor="109, 40, 217" // Violet-700
          thirdColor="91, 33, 182"   // Violet-800
          fourthColor="126, 34, 206" // Purple-700
          fifthColor="107, 33, 168"  // Purple-800
          pointerColor="124, 58, 237" // Violet-600
          gradientBackgroundStart="rgb(46, 16, 101)" // Deep violet
          gradientBackgroundEnd="rgb(59, 7, 100)"    // Deep purple
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

        {/* Text content — top-aligned, centered horizontally */}
        <div className="container relative z-10 flex flex-col items-center text-center">

          <h1 className="w-full mx-auto mb-4 relative flex flex-col items-center overflow-visible">
            <span className="leading-[1.2] tracking-tight text-white text-center block font-bold drop-shadow-2xl max-w-6xl text-5xl md:text-6xl lg:text-8xl pb-3 overflow-visible">
              <span className="block overflow-visible">Video Worth Watching.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] flex flex-wrap items-center justify-center gap-x-4 overflow-visible">
                <span className="overflow-visible">Brands Worth Building.</span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-0 leading-snug font-medium drop-shadow [text-wrap:balance]"
          >
            Caimue creates video content for B2B brands worth remembering — corporate films, LinkedIn campaigns, and the craft to make them land.
          </motion.p>
        </div>

        {/* Movie Cards Fan – full width, below the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative z-10 w-full"
        >
          <MovieCardsFan
            images={[
              "/images/Movies/Vishudha Sakshi.jpg",
              "/images/Movies/ADS-369 Part 1.jpg",
              "/images/Movies/Malsya Mandooka Mahamaham.jpg",
              "/images/Movies/Welcome Home.jpg",
              "/images/Movies/Smile!.jpg",
              "/images/Movies/Live a Little.jpg",
              "/images/Movies/Harinarayana Kudu Charitham.jpg",
            ]}
          />
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="relative z-10 flex justify-center mt-8 mb-4"
        >
          <ScrollIndicator />
        </motion.div>
      </section>

      {/* ==================== JOURNEY SECTION (MOVED UP) ==================== */}
      <JourneySection />

      {/* ==================== PLATFORMS SECTION (CENTERED) ==================== */}
      <PlatformsSection />

      {/* ==================== CORPORATE VIDEO SERVICES ==================== */}
      <CorporateVideoSection />

      {/* ==================== FEATURE FILMS (COMING SOON) ==================== */}
      <FeatureFilmsSection />

      {/* ==================== WHO ARE YOU SECTION ==================== */}
      <WhoAreYouSection />

    </>
  );
}
