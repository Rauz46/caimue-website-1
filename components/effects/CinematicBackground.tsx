"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CinematicBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Main Background Image (Simulating Video) */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/images/cinematic_homepage_1767608281019.webp"
                    alt="Cinematic Studio Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Light Theme Overlay - Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--caimue-warm-bg)]/80 via-[var(--caimue-warm-bg)]/60 to-[var(--caimue-warm-bg)]" />

            {/* Grain Overlay for Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')] pointer-events-none mix-blend-multiply" />
        </div>
    );
}
