"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const steps = [
    {
        number: "01",
        title: "Idea Intake",
        description: "You bring the story. We evaluate fit, scope, and potential. Initial conversations happen within a week.",
        details: [
            "Share your concept, script, or pitch deck",
            "We assess creative alignment",
            "Initial budget and timeline discussion",
        ],
    },
    {
        number: "02",
        title: "Planning",
        description: "AI-assisted pre-production. We lock scripts, schedules, and resources before cameras roll.",
        details: [
            "Script development and feedback",
            "Automated scheduling and resource allocation",
            "Crew and equipment coordination",
        ],
    },
    {
        number: "03",
        title: "Execution",
        description: "Production with precision. Smaller crews, smarter workflows, fewer bottlenecks.",
        details: [
            "Professional crew and equipment",
            "Real-time production tracking",
            "On-set creative collaboration",
        ],
    },
    {
        number: "04",
        title: "Post-Production",
        description: "Streamlined editing, color, sound, and delivery. No version limbo.",
        details: [
            "Efficient edit workflows",
            "Color grading and sound design",
            "Clear review and approval process",
        ],
    },
    {
        number: "05",
        title: "Distribution",
        description: "We handle platforms, festivals, and audience building. Your story finds its viewers.",
        details: [
            "Festival submission strategy",
            "Platform distribution (YouTube, OTT)",
            "Audience development campaigns",
        ],
    },
];

export default function ProcessPage() {
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
                        Our Process
                    </motion.span>

                    <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="From idea to audience."
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="Systematically."
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
                        Every project follows a clear path. AI handles the logistics,
                        humans handle the creative decisions.
                    </motion.p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="relative mb-16 last:mb-0"
                            >
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-[var(--caimue-purple)] to-transparent" />
                                )}

                                <div className="flex gap-8">
                                    {/* Number */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[var(--caimue-purple)]/10 border border-[var(--caimue-purple)] flex items-center justify-center">
                                            <span className="text-[var(--caimue-purple)] font-serif text-xl">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <h3 className="text-[var(--foreground)] text-2xl font-serif mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-[var(--foreground-muted)] text-lg mb-6">
                                            {step.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {step.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-[var(--foreground-muted)] text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--caimue-purple)]" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section border-t border-[var(--card-border)]">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "14", label: "Days Average Pre-Production" },
                            { number: "30%", label: "Faster Than Traditional" },
                            { number: "0", label: "Version Control Nightmares" },
                            { number: "100%", label: "Projects Delivered On Time" },
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
                                <p className="text-[var(--foreground-muted)] text-sm">{stat.label}</p>
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
                            Ready to start your project?
                        </h2>
                        <p className="text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            Whether you're at idea stage or ready to roll — we're here to help.
                        </p>
                        <MagneticButton href="/collaborate" variant="primary">
                            Submit Your Idea
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
