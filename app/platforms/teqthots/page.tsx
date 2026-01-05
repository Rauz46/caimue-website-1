"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const episodes = [
    {
        title: "Building in Public: The Startup Journey",
        description: "A deep dive into the challenges and triumphs of building a tech startup from the ground up.",
        thumbnail: "/images/poster-1.png",
        duration: "32 min",
    },
    {
        title: "Scaling Culture: Beyond the First 50",
        description: "How do you maintain company culture when you're growing rapidly? Leaders share their insights.",
        thumbnail: "/images/poster-2.png",
        duration: "28 min",
    },
    {
        title: "The Infrastructure Behind AI Products",
        description: "A technical look at what it takes to ship AI-powered products at scale.",
        thumbnail: "/images/poster-3.png",
        duration: "45 min",
    },
];

export default function TeqThotsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--caimue-purple)]/10 via-transparent to-transparent" />

                <div className="container text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Image
                            src="/logos/teqthots-logo.png"
                            alt="TeqThots"
                            width={250}
                            height={80}
                            className="mx-auto h-20 w-auto object-contain"
                        />
                    </motion.div>

                    <h1 className="max-w-4xl mx-auto mb-8">
                        <AnimatedText
                            text="Conversations that document how companies are built."
                            delay={0.4}
                            className="text-[var(--caimue-cream)] justify-center"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-[var(--caimue-gray)] text-xl max-w-2xl mx-auto mb-10"
                    >
                        Documentary-style B2B content. Deep dives into technology, strategy, and the realities of scaling.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <MagneticButton href="/collaborate" variant="primary">
                            Feature Your Company
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Episodes Grid */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">Latest Episodes</span>
                        <h2 className="text-[var(--caimue-cream)]">Featured Conversations</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {episodes.map((episode, index) => (
                            <motion.div
                                key={episode.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="card group cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={episode.thumbnail}
                                        alt={episode.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--caimue-black)] to-transparent" />
                                    <div className="absolute bottom-4 right-4 bg-[var(--caimue-black)]/80 px-3 py-1 rounded text-sm text-[var(--caimue-cream)]">
                                        {episode.duration}
                                    </div>

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 rounded-full bg-[var(--caimue-purple)] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-[var(--caimue-cream)] text-lg font-serif mb-2 group-hover:text-[var(--caimue-purple)] transition-colors">
                                        {episode.title}
                                    </h3>
                                    <p className="text-[var(--caimue-gray)] text-sm">
                                        {episode.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section border-t border-white/5">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[var(--caimue-cream)] mb-6">
                            Have a story worth documenting?
                        </h2>
                        <p className="text-[var(--caimue-gray)] max-w-xl mx-auto mb-8">
                            We partner with companies building interesting things. If your journey has lessons worth sharing, let's talk.
                        </p>
                        <MagneticButton href="/collaborate" variant="primary">
                            Get in Touch
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
