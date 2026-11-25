"use client";

import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { FormatFlip, type FfFormat } from "@/components/home/FormatFlip";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { channels } from "@/components/ui/PlatformsSection";

// Home section three: formats and channels as one section (25 Nov 2026), on white with the site's grid texture and
// scribbles. Flip cards ported from YouTube for Creators, then the channel line-up: components/home/FormatFlip.tsx
const formats: FfFormat[] = [
    {
        title: "Micro-Series",
        text: "Vertical, made for the phone. One to two minute episodes that end on a hook, released as a season you can binge on Reels and Shorts.",
        object: "/formats/micro-series-v2.webp",
        tag: "1–2 min",
    },
    {
        title: "Short Films",
        text: "Five to twenty minute originals in Tamil and Malayalam. This is where we try new stories, new directors and new faces.",
        object: "/formats/short-films-v2.webp",
        tag: "5–20 min",
    },
    {
        title: "Feature Films",
        text: "Our first Malayalam feature. Everything we make on the small screen is leading here.",
        object: "/formats/feature-films-v2.webp",
        tag: "In development",
    },
    {
        title: "Founder Stories",
        text: "TeqDots and Startup Musings. Documentary-style conversations on how companies get built, in English.",
        object: "/formats/founder-stories-v3.webp",
        tag: "In English",
    },
];

export function FormatsSection() {
    return (
        <section id="channels" className="cv-auto relative bg-white overflow-hidden scroll-mt-24 pt-16 md:pt-20 pb-16 md:pb-20" style={{ containIntrinsicSize: "auto 1100px" }}>
            <SectionDownArrow />

            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hand-Drawn Scribbles */}
            <div className="frx-scrib"><HandDrawnScribbles /></div>

            <div className="relative z-10 home-wrap">
                <FormatFlip
                    formats={formats}
                    channels={channels}
                    title={["From Our Channels", "To The Big Screen"]}
                    text="Four formats from one studio, on homegrown channels that each have their own audience."
                />
            </div>
        </section>
    );
}
