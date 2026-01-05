"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { WaveDivider, WaveDividerAlt } from "@/components/effects/WaveDivider";

const features = [
    {
        icon: "⚡",
        title: "Reduce Friction",
        description: "Automate repetitive tasks so creators can focus on what matters — the story.",
    },
    {
        icon: "🔄",
        title: "Avoid Bottlenecks",
        description: "Smart scheduling and resource allocation keeps production moving smoothly.",
    },
    {
        icon: "📊",
        title: "Smarter Planning",
        description: "Data-informed decisions without losing the human intuition that makes stories resonate.",
    },
    {
        icon: "🎯",
        title: "Consistency",
        description: "Maintain quality across projects without burning out your team.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern z-0 opacity-60" />
                <FloatingScribbles />

                <div className="container text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--caimue-purple)] mb-6 block"
                    >
                        About Caimue
                    </motion.span>

                    <h1 className="max-w-5xl mx-auto mb-8 text-5xl md:text-6xl leading-tight font-bold">
                        <span className="text-gray-400">We don't chase virality.</span>{" "}
                        <span className="text-[var(--foreground)]">We build systems that let </span>
                        <span className="text-purple-600 font-serif italic">creativity survive long-term.</span>
                    </h1>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section relative bg-[var(--caimue-purple)] text-white overflow-hidden py-32">
                <WaveDivider position="top" fillColor="var(--background)" className="z-10" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-white mb-8 text-3xl md:text-5xl font-serif italic leading-tight">
                                "Creativity without structure burns out. Structure without creativity produces noise."
                            </h2>
                            <div className="w-20 h-1 bg-white/20 mb-8" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Nano Banana Image Placeholder */}
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-blue-900 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white/50 tracking-widest uppercase">Nano Banana Visual</span>
                                </div>
                                {/* If user has a specific image, they can replace the div above with:
                                <Image src="/path/to/nano-banana.jpg" alt="Nano Banana" fill className="object-cover" /> 
                                */}
                            </div>

                            <p className="text-white/90 text-lg leading-relaxed mb-6">
                                Caimue exists at the intersection of intelligent systems and human storytelling.
                                We fund and produce original Tamil and Malayalam content — from quarterly short films
                                to ongoing series.
                            </p>
                            <p className="text-white/90 text-lg leading-relaxed">
                                The AI is invisible to audiences but critical to execution. We use technology
                                to reduce chaos behind the scenes so more energy goes into the stories themselves.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <WaveDividerAlt position="bottom" fillColor="var(--background)" className="z-10" />
            </section>

            {/* Why AI-First Section */}
            <section className="section border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="label text-[var(--caimue-purple)] mb-4 block">Our Approach</span>
                        <h2 className="text-[var(--caimue-cream)] max-w-3xl mx-auto">
                            Why AI-First?
                        </h2>
                        <p className="text-[var(--caimue-gray)] max-w-2xl mx-auto mt-4">
                            The output feels organic. The engine is intelligent.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center p-8 card"
                            >
                                <div className="text-4xl mb-6">{feature.icon}</div>
                                <h3 className="text-[var(--caimue-cream)] text-xl font-serif mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--caimue-gray)] text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Premium Dashboard Style */}
            <section className="section bg-[var(--background-alt)]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { number: "12+", label: "Short Films", icon: "🎬", color: "from-purple-500 to-indigo-500" },
                            { number: "3", label: "Verticals", icon: "✨", color: "from-pink-500 to-rose-500" },
                            { number: "50+", label: "Creators", icon: "👥", color: "from-blue-500 to-cyan-500" },
                            { number: "2M+", label: "Views", icon: "👁️", color: "from-amber-500 to-orange-500" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/50"
                            >
                                {/* Decorative Gradient Blur Background */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-bl-[2rem] rounded-tr-[2rem] transition-opacity group-hover:opacity-10`} />

                                {/* Icon Pill */}
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--background-alt)] text-2xl shadow-inner">
                                    {stat.icon}
                                </div>

                                {/* Number with Gradient */}
                                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight`}>
                                    {stat.number}
                                </div>

                                {/* Label & Arrow */}
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-[var(--foreground-muted)] font-medium text-sm uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[var(--foreground)] group-hover:text-white transition-colors">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 11L11 1M11 1H3M11 1V9" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
