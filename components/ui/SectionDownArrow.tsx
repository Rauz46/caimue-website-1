"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Subtle scroll hint pinned to a section's bottom edge.
// Absolutely positioned so it never affects the section's padding.
export function SectionDownArrow({ color = "#8B5CF6" }: { color?: string }) {
    return (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-10" aria-hidden>
            <motion.div
                animate={{ y: [0, 7, 0], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={26} strokeWidth={2} style={{ color }} />
            </motion.div>
        </div>
    );
}
