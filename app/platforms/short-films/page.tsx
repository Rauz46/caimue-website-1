"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const films = [
    {
        title: "The Last Conversation",
        director: "Priya Menon",
        year: "2024",
        duration: "18 min",
        poster: "/images/poster-1.png",
        synopsis: "A mother and daughter navigate unspoken words before a life-changing departure.",
        awards: ["Best Short Film - Chennai Film Festival", "Official Selection - IFFK"],
    },
    {
        title: "Signal",
        director: "Arjun Kumar",
        year: "2024",
        duration: "22 min",
        poster: "/images/poster-2.png",
        synopsis: "A traffic signal in Chennai becomes the backdrop for intersecting lives over 24 hours.",
        awards: ["Audience Choice - Bengaluru Shorts"],
    },
    {
        title: "Veedu",
        director: "Meera Krishnan",
        year: "2023",
        duration: "15 min",
        poster: "/images/poster-3.png",
        synopsis: "When forced to sell the ancestral home, a family confronts what it means to belong.",
        awards: ["Best Director - Kerala State Awards"],
    },
];

export default function ShortFilmsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--caimue-purple)]/5 to-transparent" />

                <div className="container text-center relative">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--caimue-purple)] mb-6 block"
                    >
                        Quarterly Releases
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-8">
                        <AnimatedText
                            text="Original stories. Professional execution."
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
                        We fund and produce short films from emerging filmmakers.
                        Each quarter, new stories find their way to audiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <MagneticButton href="/collaborate" variant="primary">
                            Submit Your Script
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Films Showcase */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">Our Films</span>
                        <h2 className="text-[var(--caimue-cream)]">Recent Releases</h2>
                    </motion.div>

                    <div className="space-y-24">
                        {films.map((film, index) => (
                            <motion.div
                                key={film.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Poster */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg max-w-md mx-auto shadow-2xl">
                                        <Image
                                            src={film.poster}
                                            alt={film.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--caimue-black)]/80 via-transparent to-transparent" />

                                        {/* Play button overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-20 h-20 rounded-full bg-[var(--caimue-purple)]/90 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                                            >
                                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="flex items-center gap-4 text-sm text-[var(--caimue-gray)] mb-4">
                                        <span>{film.year}</span>
                                        <span>•</span>
                                        <span>{film.duration}</span>
                                    </div>

                                    <h3 className="text-[var(--caimue-cream)] text-4xl font-serif mb-4">
                                        {film.title}
                                    </h3>

                                    <p className="text-[var(--caimue-purple)] mb-6">
                                        Directed by {film.director}
                                    </p>

                                    <p className="text-[var(--caimue-gray)] text-lg leading-relaxed mb-6">
                                        {film.synopsis}
                                    </p>

                                    {film.awards && film.awards.length > 0 && (
                                        <div className="space-y-2">
                                            {film.awards.map((award) => (
                                                <div key={award} className="flex items-center gap-2 text-sm text-[var(--caimue-cream)]">
                                                    <span className="text-yellow-500">🏆</span>
                                                    {award}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filmmaker Spotlight */}
            <section className="section border-t border-white/5">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">For Filmmakers</span>
                        <h2 className="text-[var(--caimue-cream)] mb-6">
                            Got a story to tell?
                        </h2>
                        <p className="text-[var(--caimue-gray)] max-w-xl mx-auto mb-8">
                            We provide funding, production support, and distribution for short films.
                            This isn't a one-off deal — we build long-term partnerships.
                        </p>
                        <MagneticButton href="/creators" variant="primary">
                            Learn About Our Program
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
