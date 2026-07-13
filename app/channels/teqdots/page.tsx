import type { Metadata } from "next";
import HomeHero from "@/components/channels/teqdots/HomeHero";
import WhatWeMake from "@/components/channels/teqdots/WhatWeMake";
import FeaturedWork from "@/components/channels/teqdots/FeaturedWork";

export const metadata: Metadata = {
    title: "TeqDots — by Caimue Film Studios",
    description:
        "Documentary-style conversations that capture how companies are built — deep dives into technology, strategy, and scale.",
};

// Ported from the standalone TeqDots (formerly TeqThots) site, reskinned to Caimue's palette.
// Uses each section's built-in static fallback content (no YouTube API needed).
export default function TeqDotsChannelPage() {
    return (
        <>
            <HomeHero />
            <WhatWeMake />
            <FeaturedWork />
        </>
    );
}
