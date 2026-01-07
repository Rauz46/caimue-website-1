"use client";

import { motion } from "framer-motion";

export function HeroGrid() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
}
