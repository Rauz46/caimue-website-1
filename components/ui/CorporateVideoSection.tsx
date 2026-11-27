"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { BrandReel, type ReelClient } from "@/components/home/BrandReel";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// The brands we have worked with, as logo bubbles over their videos. Each brand leads with the videos that are about
// it, checked 27 Nov against the YouTube titles, descriptions and thumbnails:
//   Piqual, Talentou, Prodeia: their own TeqDots videos; Hael: ADS-369 ("in association with Hael" on every part);
//   Nuivio: the Sapphire office dance (Nuivio Ventures banner). The Talentou recruiter Short (Nuivio and Ignitho
//   TAs, dCnnjCj-FYo) is left out: each brand's set is all wide or all vertical so every tab has the same layout.
// Brands with fewer than three are filled with our own short films (regular YouTube videos, not Shorts), spread
// evenly, until their own work is picked. Brands with real work come first. `short` = a vertical YouTube Short;
// `pillar` = vertical footage in a wide upload. Each video links out to YouTube.
const L = "/logos/loglos/";
const clients: ReelClient[] = [
    { name: "Piqual", logo: L + "piqual.png", videos: [
        { id: "zwhRON7SIPU", time: "14:42", title: "Inside Piqual — Episode 1" },
        { id: "PRvikFx6kU4", time: "6:59", title: "Piqual in Action — A Real Day Inside a Startup", sd: true },
        { id: "mAyqZp_StIA", time: "1:13", title: "Inside Piqual — Official Trailer", bars: true },
    ] },
    { name: "Talentou", logo: L + "cropped-Talentou-3.png", videos: [
        { id: "dBTFAIZDnAw", time: "3:13", title: "Talentou — 3 Hiring Mistakes HR Teams Must Avoid", pillar: true },
        { id: "b6XyubMUoV0", time: "0:54", title: "Talentou — AI Hiring Platform That Actually Works", short: true },
        { id: "qxEgzqbbUtc", time: "0:59", title: "Talentou AI Hiring — Office Chain Game", short: true },
    ] },
    { name: "Prodeia", logo: L + "Prodeify-logo-final-768x280-1.png", videos: [
        { id: "spNgdn3qKSU", time: "1:32", title: "Prodeia — AI for IT Services Engagements", short: true },
        { id: "MxqQ08neZ6M", time: "1:24", title: "Prodeia — Right-Sized Teams with AI Agents", short: true },
        { id: "L8ib0Y4VKYU", time: "2:23", title: "Corporate Confessions — Prodeia Team", short: true },
    ] },
    { name: "Hael", logo: L + "hael.png", videos: [
        { id: "npYOlQ4QhKE", time: "12:22", title: "ADS-369 Part 1 — Avarude Ravu, in association with Hael" },
        { id: "RtS4E0HRe80", time: "14:10", title: "ADS-369 Part 2 — Thaskkar" },
        { id: "j0WM64KuHKg", time: "16:00", title: "ADS-369 Final Part — Game Over" },
    ] },
    { name: "Nuivio", logo: L + "Nuivio.png", videos: [
        { id: "kszHFu3Wim4", time: "2:10", title: "Sapphire — Office Dance with the Nuivio Team" },
        { id: "UbEN3ahOKcI", time: "6:14", title: "Live a Little — Tamil Short Film" },
        { id: "ox-2YjzdJyQ", time: "2:48", title: "Vishudha Sakshi — Dance Promo" },
    ] },
    { name: "Ignitho", logo: L + "Ignitho-Updated-Logo.png", videos: [
        { id: "Pe8biXXpr-E", time: "2:04", title: "Bon Voyage — 2 Minute Short Film" },
        { id: "2GWPbwlp6Zg", time: "19:48", title: "Harinarayana Kudu Charitham — Malayalam Short Film" },
        { id: "HNuzC1NWkJM", time: "0:41", title: "Malsya Mandooka Mahamaham — Teaser" },
    ] },
    { name: "Aventei", logo: L + "aventei.png", videos: [
        { id: "fTufgPiERdA", time: "21:44", title: "Smile! — Malayalam Short Film" },
        { id: "4TqM80r_UsQ", time: "2:06", title: "Inside Out — 2 Minute Short Film" },
        { id: "kUKakLYvcDQ", time: "32:55", title: "Nadha Nee Varum Kaalocha Kelkuvaan" },
    ] },
    { name: "XIME", logo: L + "xime.png", videos: [
        { id: "gReRs-8_evY", time: "15:13", title: "Vishudha Sakshi — Malayalam Short Film" },
        { id: "8oB4Golm4wQ", time: "11:28", title: "Welcome Home — Malayalam Short Film" },
        { id: "iZSvDugISwQ", time: "28:13", title: "Malsya Mandooka Mahamaham" },
    ] },
];

// Home banner 5 "For brands": three ways brands work with us, the brands we have worked with, and the way in
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="cv-auto relative bg-[#F1E6FF] pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
            style={{ containIntrinsicSize: "auto 900px" }}
                    >
            <SectionDownArrow />

            {/* Checked grid texture */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
 

            {/* Hand-Drawn Scribbles */}
            <HandDrawnScribbles />

            {/* Floating sparkles */}
            <motion.span
                className="cm-decor-item absolute top-24 left-[14%] text-amber-400/60 text-2xl pointer-events-none select-none hidden md:block"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px)", "translateY(-10px)", "translateY(0px)"], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: 0, ease: "easeInOut" }}
                aria-hidden
            >
                ✦
            </motion.span>
            <motion.span
                className="cm-decor-item absolute top-40 right-[12%] text-purple-400/50 text-xl pointer-events-none select-none hidden md:block"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px) rotate(0deg)", "translateY(8px) rotate(15deg)", "translateY(0px) rotate(0deg)"], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: 0, ease: "easeInOut", delay: 0.8 }}
                aria-hidden
            >
                ✧
            </motion.span>
            <motion.span
                className="cm-decor-item absolute bottom-28 left-[9%] h-2.5 w-2.5 rounded-full bg-pink-400/50 pointer-events-none hidden md:block"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px)", "translateY(-12px)", "translateY(0px)"], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.6, repeat: 0, ease: "easeInOut", delay: 0.4 }}
                aria-hidden
            />
            <motion.span
                className="cm-decor-item absolute bottom-36 right-[8%] h-2 w-2 rounded-full bg-amber-400/60 pointer-events-none hidden md:block"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px)", "translateY(10px)", "translateY(0px)"], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4.4, repeat: 0, ease: "easeInOut", delay: 1.1 }}
                aria-hidden
            />

            <div className="relative z-10 home-wrap">
                <div className="flex flex-col items-center text-center">
                    {/* Headline first */}
                    <h2 className="cm-rise cm-h2 font-serif mb-5 [text-wrap:balance]">
                        Put Your Brand In A Story People Follow
                    </h2>

                    <p className="text-[#4A3F5C] text-base md:text-lg leading-relaxed max-w-3xl mb-10 md:mb-12 [text-wrap:balance]">
                        People skip ads. They wait for the next episode. We write your brand into series and films that audiences choose to watch.
                    </p>

                    {/* The brands we have worked with as logo tabs; the selected one shows its videos, each in its own shape (27 Nov) */}
                    <BrandReel clients={clients} />

                    <Link href="/for-brands" className="btn-primary mt-10">Start A Brand Story</Link>
                </div>
            </div>
        </section>
    );
}
