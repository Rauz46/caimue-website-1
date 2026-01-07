"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroGrid } from "@/components/effects/HeroGrid";

type TrackType = "short-film" | "creator" | "brand";

const tracks = [
    {
        id: "short-film" as TrackType,
        title: "Short Film",
        description: "Submit a script or concept for our quarterly production cycle.",
        icon: "🎬",
    },
    {
        id: "creator" as TrackType,
        title: "Creator Collaboration",
        description: "Partner with us on content creation, distribution, or production support.",
        icon: "🎭",
    },
    {
        id: "brand" as TrackType,
        title: "Brand Partnership",
        description: "Explore documentary-style content, sponsorships, or series development.",
        icon: "🏢",
    },
];

export default function CollaboratePage() {
    const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section className="min-h-screen flex items-center justify-center pt-24">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-6xl mb-6">✓</div>
                        <h1 className="text-[var(--foreground)] mb-4">Submission Received</h1>
                        <p className="text-[var(--caimue-gray)] text-lg max-w-md mx-auto mb-8">
                            We've got your details. Our team will review your submission and get back to you within 5 business days.
                        </p>
                        <MagneticButton href="/" variant="secondary">
                            Back to Home
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center pt-24 relative overflow-hidden">
                <HeroGrid />
                <div className="container text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--caimue-purple)] mb-6 block"
                    >
                        Collaborate
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-6 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="Tell us"
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="what you want to build."
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
                        Why it matters. How you see it growing.
                    </motion.p>
                </div>
            </section>

            {/* Track Selection */}
            <section className="section pt-0">
                <div className="container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="label text-[var(--foreground-muted)] mb-4 block">Step 1</span>
                        <h2 className="text-[var(--foreground)] text-2xl">Choose your track</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {tracks.map((track, index) => (
                            <motion.button
                                key={track.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedTrack(track.id)}
                                className={`p-6 rounded-lg text-left transition-all ${selectedTrack === track.id
                                    ? "bg-[var(--caimue-purple)]/20 border-2 border-[var(--caimue-purple)]"
                                    : "bg-[var(--card-bg)] border-2 border-transparent hover:border-[var(--card-border)]"
                                    }`}
                            >
                                <div className="text-3xl mb-4">{track.icon}</div>
                                <h3 className="text-[var(--foreground)] font-serif text-lg mb-2">
                                    {track.title}
                                </h3>
                                <p className="text-[var(--foreground-muted)] text-sm">{track.description}</p>
                            </motion.button>
                        ))}
                    </div>

                    {/* Form */}
                    {selectedTrack && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="label text-[var(--foreground-muted)] mb-4 block">Step 2</span>
                            <h2 className="text-[var(--foreground)] text-2xl mb-8">Tell us about your project</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[var(--foreground)] text-sm mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[var(--foreground)] text-sm mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                {selectedTrack === "brand" && (
                                    <div>
                                        <label className="block text-[var(--foreground)] text-sm mb-2">
                                            Company / Brand Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                            placeholder="Company name"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[var(--foreground)] text-sm mb-2">
                                        Project Title *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                        placeholder="Give your project a name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[var(--foreground)] text-sm mb-2">
                                        Project Description *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project. What's the story? Why does it matter? How do you see it growing?"
                                    />
                                </div>

                                {selectedTrack === "short-film" && (
                                    <div>
                                        <label className="block text-[var(--foreground)] text-sm mb-2">
                                            Logline (one-sentence summary)
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                            placeholder="Your film in one sentence"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[var(--foreground)] text-sm mb-2">
                                        Upload Script / Deck (optional)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx,.pptx"
                                            className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground-muted)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[var(--caimue-purple)] file:text-white file:cursor-pointer cursor-pointer focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <p className="text-[var(--foreground-muted)] text-xs mt-2">
                                        PDF, DOC, or PPTX. Max 10MB.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-[var(--foreground)] text-sm mb-2">
                                        Portfolio / Links
                                    </label>
                                    <input
                                        type="url"
                                        className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:border-[var(--caimue-purple)] focus:outline-none transition-colors"
                                        placeholder="https://yourportfolio.com or social links"
                                    />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            "Submit Application"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 pt-12 border-t border-white/5 text-center"
                    >
                        <h3 className="text-[var(--foreground)] text-xl font-serif mb-4">
                            Prefer to email directly?
                        </h3>
                        <a
                            href="mailto:collaborate@caimue.com"
                            className="text-[var(--caimue-purple)] text-lg hover:underline"
                        >
                            collaborate@caimue.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
