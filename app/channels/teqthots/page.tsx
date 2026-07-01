import type { Metadata } from "next";
import HomeHero from "@/components/channels/teqthots/HomeHero";
import WhatWeMake from "@/components/channels/teqthots/WhatWeMake";
import FeaturedWork from "@/components/channels/teqthots/FeaturedWork";
import AIProcess from "@/components/channels/teqthots/AIProcess";
import CTASection from "@/components/channels/teqthots/CTASection";

export const metadata: Metadata = {
    title: "TeqThots — by Caimue Film Studios",
    description:
        "Documentary-style conversations that capture how companies are built — deep dives into technology, strategy, and scale.",
};

// Ported from the standalone TeqThots site, reskinned to Caimue's palette.
// Uses each section's built-in static fallback content (no YouTube API needed).
export default function TeqThotsChannelPage() {
    return (
        <>
            <HomeHero />
            <WhatWeMake />
            <FeaturedWork />
            <AIProcess />
            <CTASection />
        </>
    );
}
