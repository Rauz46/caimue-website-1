"use client";

import type { ReactNode } from "react";
import { Clapperboard, Film, Mic, Smartphone } from "lucide-react";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { LivelyCard, type LcTone } from "@/components/ui/LivelyCard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

// Home banner 3 "What we make": the four formats, in the home lively-card system (plain cards, disc pair in the corner)
const formats: { title: string; text: string; icon: ReactNode; tone: LcTone; chip?: string }[] = [
    {
        title: "Micro-Series",
        text: "Vertical, made for the phone. One to two minute episodes that end on a hook, released as a season you can binge on Reels and Shorts.",
        icon: <Smartphone size={22} />,
        tone: "purple",
    },
    {
        title: "Short Films",
        text: "Five to twenty minute originals in Tamil and Malayalam. This is where we try new stories, new directors and new faces.",
        icon: <Film size={22} />,
        tone: "pink",
    },
    {
        title: "Feature Films",
        chip: "In development",
        text: "Our first Malayalam feature. Everything we make on the small screen is leading here.",
        icon: <Clapperboard size={22} />,
        tone: "orange",
    },
    {
        title: "Founder Stories",
        text: "TeqDots and Startup Musings. Documentary-style conversations on how companies get built, in English.",
        icon: <Mic size={22} />,
        tone: "yellow",
    },
];

export function FormatsSection() {
    return (
        <section className="cv-auto relative bg-white pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden" style={{ containIntrinsicSize: "auto 620px" }}>
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
            <HandDrawnScribbles />

            <div className="relative z-10 home-wrap">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="cm-rise cm-h2 font-serif mb-5 [text-wrap:balance]">
                        From One-Minute Episodes To The Big Screen.
                    </h2>
                    <p className="text-[#4A3F5C] text-base md:text-lg leading-relaxed">
                        Four formats. One studio.
                    </p>
                </div>

                <div className="fmt-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                    {formats.map((f) => (
                        <LivelyCard
                            key={f.title}
                            tone={f.tone}
                            title={f.title}
                            icon={f.icon}
                            text={f.text}
                            action={f.chip ? <span className="lc-eyebrow lc-eyebrow--foot">{f.chip}</span> : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
