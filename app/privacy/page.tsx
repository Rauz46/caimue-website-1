"use client";

import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
                <HeroGrid />
                <div className="container max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-8 text-center"
                    >
                        Privacy Policy
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <p className="text-xl text-gray-700 mb-8 text-center">
                            This page is currently under construction.
                        </p>

                        <p className="text-lg text-gray-600 text-center">
                            For any privacy-related questions, please contact us at{" "}
                            <a
                                href="mailto:collaborate.with.us@caimue.com"
                                className="text-[#7C3AED] hover:underline"
                            >
                                collaborate.with.us@caimue.com
                            </a>
                        </p>

                        <div className="text-center mt-12">
                            <Link
                                href="/"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white rounded-full font-semibold hover:shadow-lg transition-all"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
