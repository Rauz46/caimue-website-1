"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BrandGround } from "@/components/ui/BrandGround";
import { PlatformsSection } from "@/components/ui/PlatformsSection";
import { FeatureFilmsSection } from "@/components/ui/FeatureFilmsSection";
import { CorporateVideoSection } from "@/components/ui/CorporateVideoSection";
import { JourneySection } from "@/components/ui/JourneySection";
import { FormatsSection } from "@/components/ui/FormatsSection";
import WhoAreYouSection from "@/components/ui/WhoAreYouSection";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import MovieCardsFan from "@/components/ui/MovieCardsFan";

export default function Home() {
  return (
    <>
      {/* Don't paint until the whole hero is parsed, so the first frame is the finished hero
          (no half-built hero that then grows). Chromium; other browsers ignore it. React hoists it to <head>. */}
      <link rel="expect" href="#hero-end" blocking="render" />
      <section className="flex flex-col pt-28 md:pt-32 relative overflow-hidden pb-4">
        {/* Background Animation */}
        <BrandGround className="z-0" />

        {/* Background Elements */}
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />

        {/* Decorative Stars and Sparkles */}
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-20 right-1/4 text-purple-400/30 text-4xl">✦</div>
          <div className="absolute top-40 left-1/3 text-purple-300/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
          <div className="absolute top-1/2 left-1/4 text-purple-400/20 text-xl">●</div>
          <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
          <div className="absolute top-1/3 right-1/4 text-purple-200/30 text-xl">●</div>
        </div>

        {/* Editorial Scribbles */}
        <FloatingScribbles className="top-16" />

        {/* Text content — top-aligned, centered horizontally */}
        <div className="container relative z-10 flex flex-col items-center text-center">

          {/* Badge */}
          <span className="cm-in hero-badge mb-5">Digital entertainment · Tamil · Malayalam</span>

          {/* the global h1 rule adds a 0.5em bottom margin (48px here); the hero sets its own gap: the 12px under the second line */}
          <h1 className="w-full mx-auto relative flex flex-col items-center overflow-visible" style={{ marginBottom: 0 }}>
            <span className="leading-[1.2] tracking-tight text-white text-center block font-bold max-w-6xl text-5xl md:text-6xl lg:text-8xl pb-3 overflow-visible">
              <span className="cm-line block overflow-visible">Stories Worth</span>
              <span className="cm-line cm-line--2 text-[#FFC4DD] flex flex-wrap items-center justify-center gap-x-4 overflow-visible">
                <span className="overflow-visible">The Scroll.</span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="cm-in cm-in--2 text-lg md:text-xl text-white/90 max-w-5xl mx-auto mb-0 leading-snug font-medium [text-wrap:balance]"
          >
            Caimue is a digital entertainment company. We make micro-series, short films and feature films in Tamil and Malayalam, with new artists in front of the camera and brands that want to be part of the story.
          </motion.p>

          {/* Buttons */}
          <div className="cm-in cm-in--2 mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/originals" className="hero-btn">Watch Our Originals</Link>
            <Link href="/contact" className="hero-btn hero-btn--ghost">Work With Us</Link>
          </div>
        </div>

        {/* Movie Cards Fan – full width, below the text */}
        <motion.div
          className="cm-in cm-in--3 relative z-10 w-full"
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
          id="hero-end"
          className="cm-in cm-in--4 relative z-10 flex justify-center mt-6 mb-2"
        >
          <ScrollIndicator />
        </motion.div>
      </section>

      {/* ==================== TRACK RECORD ==================== */}
      <JourneySection />

      {/* ==================== WHAT WE MAKE ==================== */}
      <FormatsSection />

      {/* ==================== OUR CHANNELS ==================== */}
      <PlatformsSection />

      {/* ==================== FOR BRANDS ==================== */}
      <CorporateVideoSection />

      {/* ==================== THE BIG SCREEN ==================== */}
      <FeatureFilmsSection />

      {/* ==================== WORK WITH US ==================== */}
      <WhoAreYouSection />

    </>
  );
}
