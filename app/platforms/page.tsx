"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { VideoCard } from "@/components/ui/VideoCard";

const platforms = [
    {
        title: "TeqThots",
        description: "Documentary-style conversations that capture how companies are built. Deep dives into technology, strategy, and scale.",
        thumbnail: "/images/poster-1.png",
        href: "/platforms/teqthots",
        logo: "/logos/teqthots-logo.png",
        tagline: "Conversations that document how companies are built.",
    },
    {
        title: "FunShortz",
        description: "Short-form entertainment in Tamil & Malayalam. Snackable content that resonates with regional audiences.",
        thumbnail: "/images/poster-2.png",
        href: "/platforms/funshortz",
        logo: "/logos/funshortz-logo.png",
        tagline: "Regional entertainment, reimagined.",
    },
    {
        title: "Short Films",
        description: "Quarterly film releases. Original stories from emerging filmmakers, funded and produced with professional support.",
        thumbnail: "/images/poster-3.png",
        href: "/platforms/short-films",
        tagline: "Original stories, professional execution.",
    },
];

export default function PlatformsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center pt-24">
                <div className="container text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--caimue-purple)] mb-6 block"
                    >
                        Our Platforms
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="Three verticals."
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="One philosophy."
                            delay={0.8}
                            className="text-[var(--caimue-purple)]"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-[var(--foreground-muted)] text-xl max-w-2xl mx-auto"
                    >
                        Each platform serves a different audience, but all share the same commitment
                        to quality, consistency, and creative sustainability.
                    </motion.p>
                </div>
            </section>

            {/* Platforms Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid gap-16">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Link href={platform.href} className="group block">
                                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                        {/* Image */}
                                        <div className={`relative aspect-video overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-full h-full"
                                            >
                                                <Image
                                                    src={platform.thumbnail}
                                                    alt={platform.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--caimue-black)] via-transparent to-transparent opacity-60" />

                                            {platform.logo && (
                                                <div className="absolute bottom-6 left-6">
                                                    <Image
                                                        src={platform.logo}
                                                        alt=""
                                                        width={120}
                                                        height={48}
                                                        className="h-10 w-auto object-contain"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <h2 className="text-[var(--foreground)] mb-4 group-hover:text-[var(--caimue-purple)] transition-colors">
                                                {platform.title}
                                            </h2>
                                            <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                                                {platform.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-[var(--caimue-purple)] font-medium group-hover:gap-4 transition-all">
                                                <span>Explore {platform.title}</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
