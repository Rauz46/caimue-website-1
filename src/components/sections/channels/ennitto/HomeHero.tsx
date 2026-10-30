"use client";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// Ennitto hero — Caimue homepage look (animated gradient bg + Playfair/Inter),
// with a carousel of Ennitto shorts below the headline.
export default function HomeHero() {
  return (
    <section className="flex flex-col pt-24 md:pt-28 relative overflow-hidden pb-0">

      <HeroGrid className="opacity-40 z-10" />

      <FloatingScribbles />

      {/* Text content */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="w-full mx-auto mt-6 md:mt-12 mb-5 relative flex flex-col items-center overflow-visible">
          <span className="font-serif leading-[1.15] tracking-tight text-[#110a1f] text-center block font-bold max-w-5xl text-4xl md:text-5xl lg:text-[4.25rem] pb-2 overflow-visible">
            <span className="block">Original Malayalam Short Films</span>
            <span className="block text-[#672fb2]">
              Stories That Stay
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-[#110a1f]/70 max-w-4xl mx-auto leading-relaxed font-medium font-sans"
        >
          From shorts to OTT, Ennitto produces original Malayalam stories —
          discovering new talent
          <br className="hidden sm:block" /> across Kerala and building toward
          theatrical and streaming releases.
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
