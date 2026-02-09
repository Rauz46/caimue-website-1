"use client";

import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
                <HeroGrid />
                <div className="container text-center max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-8"
                    >
                        Get in Touch
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed"
                    >
                        Have a story to tell? Want to collaborate? We'd love to hear from you.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-600 mb-12"
                    >
                        Write to us at:
                    </motion.p>

                    <motion.a
                        href="mailto:collaborate.with.us@caimue.com"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent hover:from-[#6B21A8] hover:to-[#7C3AED] transition-all"
                    >
                        collaborate.with.us@caimue.com
                    </motion.a>
                </div>
            </section>
        </>
    );
}
