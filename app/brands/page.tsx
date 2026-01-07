"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const idealBrands = [
    {
        icon: "🎯",
        title: "Purpose-Driven",
        description: "Brands that stand for something beyond their product.",
    },
    {
        icon: "🌏",
        title: "Regional Focus",
        description: "Looking to connect authentically with Tamil & Malayalam audiences.",
    },
    {
        icon: "📖",
        title: "Story-First",
        description: "Willing to invest in narratives, not just advertisements.",
    },
    {
        icon: "🤝",
        title: "Long-term Partners",
        description: "Interested in building ongoing relationships, not one-off campaigns.",
    },
];

const services = [
    "Documentary-style brand films",
    "Product integration in original content",
    "Sponsored series development",
    "Founder/leadership profiles (TeqThots)",
    "Regional language campaigns",
    "Event coverage and behind-the-scenes",
];

export default function BrandsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center pt-24">
                <div className="container text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--caimue-purple)] mb-6 block"
                    >
                        For Brands
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="Content that earns attention,"
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="not just buys it."
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
                        We help brands tell their story through documentary-style content
                        that resonates with audiences who skip ads.
                    </motion.p>
                </div>
            </section>

            {/* What We Do */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="label text-[var(--caimue-purple)] mb-4 block">What We Create</span>
                            <h2 className="text-[var(--foreground)] mb-8">
                                Stories, not advertisements
                            </h2>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-4 text-[var(--foreground-muted)]"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[var(--caimue-purple)]" />
                                        {service}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-[var(--caimue-purple)]/10 to-transparent rounded-lg p-10">
                                <div className="text-6xl font-serif text-[var(--caimue-purple)] mb-4">93%</div>
                                <p className="text-[var(--foreground)] text-xl mb-2">of our content</p>
                                <p className="text-[var(--foreground-muted)]">is watched without skipping</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ideal Brand Fit */}
            <section className="section border-t border-[var(--card-border)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">Who We Work With</span>
                        <h2 className="text-[var(--foreground)]">Is this the right fit?</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {idealBrands.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center p-6 card"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-[var(--foreground)] text-lg font-serif mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--foreground-muted)] text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[var(--foreground)] mb-6">
                            Let&apos;s explore what&apos;s possible
                        </h2>
                        <p className="text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            Share your brand goals and we&apos;ll propose content ideas that align with your vision
                            and resonate with your audience.
                        </p>
                        <MagneticButton href="/collaborate" variant="primary">
                            Start a Conversation
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
