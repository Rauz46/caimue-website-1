"use client";

import { FeatureFilmsSection } from "@/components/ui/FeatureFilmsSection";
import { CorporateVideoSection } from "@/components/ui/CorporateVideoSection";
import { JourneySection } from "@/components/ui/JourneySection";
import { FormatsSection } from "@/components/ui/FormatsSection";
import WhoAreYouSection from "@/components/ui/WhoAreYouSection";
import { ReelHero } from "@/components/ui/ReelHero";

export default function Home() {
  return (
    <>
      {/* Don't paint until the whole hero is parsed, so the first frame is the finished hero
          (no half-built hero that then grows). Chromium; other browsers ignore it. React hoists it to <head>. */}
      <link rel="expect" href="#hero-end" blocking="render" />
      <ReelHero />

      {/* ==================== TRACK RECORD ==================== */}
      <JourneySection />

      {/* ==================== WHAT WE MAKE + OUR CHANNELS (merged 25 Nov 2026) ==================== */}
      <FormatsSection />

      {/* ==================== FOR BRANDS ==================== */}
      <CorporateVideoSection />

      {/* ==================== THE BIG SCREEN ==================== */}
      <FeatureFilmsSection />

      {/* ==================== WORK WITH US ==================== */}
      <WhoAreYouSection />

    </>
  );
}
