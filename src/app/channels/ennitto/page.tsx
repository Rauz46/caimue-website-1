import type { Metadata } from "next";
import HomeHero from "@/components/sections/channels/ennitto/HomeHero";
import { WhatWeDo } from "@/components/sections/channels/ennitto/WhatWeDo";
import { FeaturedFilms } from "@/components/sections/channels/ennitto/FeaturedFilms";

export const metadata: Metadata = {
  title: "Ennitto — by Caimue",
  description:
    "Original Malayalam short films by Caimue — discovering talent and building toward theatrical and OTT releases.",
};

// Caimue-reskinned rebuild of the Ennitto site (light look, Playfair/Inter),
// mirroring the TeqDots channel page structure.
export default function EnnittoChannelPage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <FeaturedFilms />
    </>
  );
}
