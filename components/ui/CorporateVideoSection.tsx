"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Smartphone, Handshake } from "lucide-react";
import Link from "next/link";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { BrandStoryboard, type StoryOffer } from "@/components/home/BrandStoryboard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

const services: (StoryOffer & { cut: string; alt: string })[] = [
    {
        icon: Smartphone,
        label: "Brand Micro-Series",
        description: "A vertical series built around your brand's world. Five to ten episodes, written, shot and released for Reels and Shorts.",
        cut: "/cutouts/k-reach.webp",
        alt: "A man reacting to an episode on his phone",
        tone: "orange",
    },
    {
        icon: Handshake,
        label: "Brand Films And Integrations",
        description: "Your brand written into one of our originals, or a short film of its own. It never feels like an ad.",
        cut: "/cutouts/k-prove.webp",
        alt: "Two people shaking hands on a partnership",
        tone: "purple",
    },
    {
        icon: Video,
        label: "Corporate And Founder Films",
        description: "Founder stories, company films and launch videos with cinematic craft, for companies in India and the US.",
        cut: "/cutouts/k-define.webp",
        alt: "A team planning a film together",
        tone: "pink",
    },
];

// Brands we have worked with: the eight named brands from the site's earlier brand row (logos on file)
const brandLogos = [
    { src: "/logos/loglos/Ignitho-Updated-Logo.png", alt: "Ignitho" },
    { src: "/logos/loglos/aventei.png", alt: "Aventei" },
    { src: "/logos/loglos/piqual.png", alt: "Piqual" },
    { src: "/logos/loglos/hael.png", alt: "Hael" },
    { src: "/logos/loglos/xime.png", alt: "XIME" },
    { src: "/logos/loglos/Prodeify-logo-final-768x280-1.png", alt: "Prodeify" },
    { src: "/logos/loglos/cropped-Talentou-3.png", alt: "Talentou" },
    { src: "/logos/loglos/Nuivio.png", alt: "Nuivio" },
];

// Home banner 5 "For brands": three ways brands work with us, the brands we have worked with, and the way in
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="cv-auto relative bg-[#F1E6FF] pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
            style={{ containIntrinsicSize: "auto 1160px" }}
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

                    {/* The three offers as a storyboard: three frames in a row, each playing its story, title and line below */}
                    <BrandStoryboard offers={services} />

                    {/* Brands we have worked with */}
                    <div className="mt-12 w-full flex flex-col items-center gap-5">
                        <p className="text-[#4A3F5C] text-sm md:text-base font-medium">Brands we have worked with</p>
                        {/* one logo per cell on a hairline grid, Clueso-style */}
                        <ul className="logo-grid" role="list">
                            {brandLogos.map((l) => (
                                <li key={l.alt} className="logo-grid-cell">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={l.src} alt={l.alt} loading="lazy" decoding="async" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/for-brands" className="btn-primary mt-10">Start A Brand Story</Link>
                </div>
            </div>
        </section>
    );
}
