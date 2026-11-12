"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Linkedin, Globe } from "lucide-react";
import { SectionDownArrow } from "@/components/ui/SectionDownArrow";
import { LivelyCard } from "@/components/ui/LivelyCard";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";

const services = [
    {
        icon: Video,
        label: "Corporate Videos",
        description: "Founder stories and brand films with cinematic polish.",
        from: "#F59E0B",
        to: "#F97316",
    },
    {
        icon: Linkedin,
        label: "LinkedIn Media Campaigns",
        description: "Content engines that keep your brand in every feed.",
        from: "#E91E8C",
        to: "#F43F5E",
    },
    {
        icon: Globe,
        label: "Marketing Websites",
        description: "Sites built to turn visitors into believers.",
        from: "#8B5CF6",
        to: "#6366F1",
    },
];

// Standalone corporate video services banner — airy white spotlight with floating service cards
export function CorporateVideoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
            style={{ background: "#F1E6FF" }}
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
                    <h2 className="cm-rise cm-h2 font-serif mb-5">
                        Our Corporate{" "}
                        <span className="text-[#5B299D]">Video Services</span>
                    </h2>

                    <p className="text-[#4A3F5C] text-base md:text-lg leading-relaxed max-w-3xl mb-10 md:mb-12">
                        We help companies show up
                        online — corporate films, founder stories, social campaigns and marketing sites that make
                        brands impossible to scroll past.
                    </p>

                    {/* Service cards — home "lively" cards with an action cut-out rising from the bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center md:justify-items-stretch">
                        {services.map(({ icon: Icon, label, description }, i) => {
                            const tone = (["orange", "purple", "pink"] as const)[i % 3];
                            const cut = ["/cutouts/k-define.webp", "/cutouts/k-reach.webp", "/cutouts/k-convert.webp"][i % 3];
                            const alt = ["A team planning a video together", "A client reacting to a campaign on his phone", "Two people reviewing a website on a laptop"][i % 3];
                            return (
                                <LivelyCard
                                    key={label}
                                    tone={tone}
                                    title={label}
                                    icon={<Icon size={22} />}
                                    text={description}
                                    visualHeight={250}
                                    visual={
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img className={`lc-cut ${i === 1 ? "lc-cut--even" : "lc-cut--fill"}`} src={cut} alt={alt} loading="lazy" decoding="async" />
                                    }
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
