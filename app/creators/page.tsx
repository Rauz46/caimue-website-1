"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const offerings = [
    {
        icon: "💰",
        title: "Funding",
        description: "Production budget for your short film. No strings attached loans — we invest in your story.",
    },
    {
        icon: "🎬",
        title: "Production Support",
        description: "Access to equipment, crew networks, and production expertise when you need it.",
    },
    {
        icon: "📺",
        title: "Distribution",
        description: "We handle festival submissions, OTT pitches, and audience building so you can focus on creating.",
    },
    {
        icon: "🔄",
        title: "Continuity",
        description: "This isn't a one-off deal. We build long-term partnerships that grow with your career.",
    },
];

export default function CreatorsPage() {
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
                        For Filmmakers & Creators
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="This is a partnership,"
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="not a one-off deal."
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
                        We support filmmakers with more than just money. From production to distribution,
                        we're invested in helping your stories reach audiences.
                    </motion.p>
                </div>
            </section>

            {/* What We Offer */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">What We Offer</span>
                        <h2 className="text-[var(--foreground)]">End-to-end support for your vision</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {offerings.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-8"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-[var(--foreground)] text-xl font-serif mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--foreground-muted)] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Digital Creators */}
            <section className="section border-t border-[var(--card-border)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="label text-[var(--caimue-purple)] mb-4 block">For Digital Creators</span>
                            <h2 className="text-[var(--foreground)] mb-6">
                                Content that grows with you
                            </h2>
                            <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                                Already creating content? We can help you scale without burning out.
                                Our systems handle the operational complexity, so you stay focused on creativity.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Production workflow optimization",
                                    "Content strategy and planning",
                                    "Brand partnership facilitation",
                                    "Cross-platform distribution",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3 text-[var(--foreground-muted)]"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[var(--caimue-purple)]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-[var(--caimue-purple)]/20 via-transparent to-transparent p-12 rounded-lg"
                        >
                            <blockquote className="text-2xl font-serif text-[var(--foreground)] mb-6 italic">
                                "More stories shipped. Less chaos behind the scenes."
                            </blockquote>
                            <p className="text-[var(--foreground-muted)]">— The Caimue Promise</p>
                        </motion.div>
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
                            Ready to build something together?
                        </h2>
                        <p className="text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            Tell us about your project. Whether it's a short film script, a content series idea,
                            or collaboration proposal — we want to hear it.
                        </p>
                        <MagneticButton href="/collaborate" variant="primary">
                            Submit Your Project
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
