"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroGrid } from "@/components/effects/HeroGrid";

const reels = [
    { id: 1, thumbnail: "/images/download.jpg", title: "Campus Chronicles", language: "tamil", views: "1.2M" },
    { id: 2, thumbnail: "/images/download (1).jpg", title: "Namma Bengaluru", language: "tamil", views: "890K" },
    { id: 3, thumbnail: "/images/download (2).jpg", title: "Muthalali Moments", language: "malayalam", views: "650K" },
    { id: 4, thumbnail: "/images/download (3).jpg", title: "Office Life", language: "tamil", views: "2.1M" },
    { id: 5, thumbnail: "/images/download (4).jpg", title: "Kerala Diaries", language: "malayalam", views: "780K" },
    { id: 6, thumbnail: "/images/F.jpg", title: "IT Crowd", language: "tamil", views: "1.5M" },
];

export default function FunShortzPage() {
    const [filter, setFilter] = useState<"all" | "tamil" | "malayalam">("all");

    const filteredReels = filter === "all"
        ? reels
        : reels.filter(reel => reel.language === filter);

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center pt-24 relative overflow-hidden">
                <HeroGrid />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-[var(--caimue-purple)]/10" />

                <div className="container text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Image
                            src="/logos/funshortz-logo.png"
                            alt="FunShortz"
                            width={250}
                            height={80}
                            className="mx-auto h-20 w-auto object-contain"
                        />
                    </motion.div>

                    <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="Regional entertainment,"
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="reimagined."
                            delay={0.8}
                            className="text-[var(--caimue-purple)]"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-[var(--caimue-gray)] text-xl max-w-2xl mx-auto mb-10"
                    >
                        Short-form entertainment in Tamil & Malayalam. Snackable content that resonates with regional audiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <MagneticButton href="/collaborate" variant="primary">
                            Collaborate With Us
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Reels Grid */}
            <section className="section">
                <div className="container">
                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-4 mb-12"
                    >
                        {["all", "tamil", "malayalam"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setFilter(lang as typeof filter)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === lang
                                    ? "bg-[var(--caimue-purple)] text-white"
                                    : "bg-white/5 text-[var(--caimue-gray)] hover:bg-white/10"
                                    }`}
                            >
                                {lang.charAt(0).toUpperCase() + lang.slice(1)}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {filteredReels.map((reel, index) => (
                            <motion.div
                                key={reel.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="card group cursor-pointer overflow-hidden"
                            >
                                <div className="relative aspect-[9/16] overflow-hidden">
                                    <Image
                                        src={reel.thumbnail}
                                        alt={reel.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--caimue-black)] via-transparent to-transparent" />

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-14 h-14 rounded-full bg-[var(--caimue-purple)] flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-[var(--caimue-cream)] font-medium mb-1">{reel.title}</h3>
                                        <div className="flex items-center gap-2 text-xs text-[var(--caimue-gray)]">
                                            <span className="uppercase">{reel.language}</span>
                                            <span>•</span>
                                            <span>{reel.views} views</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section border-t border-white/5">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {[
                            { number: "50+", label: "Reels Published" },
                            { number: "5M+", label: "Combined Views" },
                            { number: "2", label: "Languages" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-serif text-[var(--caimue-purple)] mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-[var(--caimue-gray)] text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
