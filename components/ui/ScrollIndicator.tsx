"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
    className?: string;
}

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
    return (
        <div className={cn("flex flex-col items-center", className)}>
            <div className="relative w-7 h-11">
                {/* Mouse Body Outline - Dual Tone */}
                <svg
                    width="28"
                    height="44"
                    viewBox="0 0 28 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0"
                >
                    {/* Top Half Border - Darker */}
                    <path
                        d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14V22H1V14Z"
                        stroke="#4B5563"
                        strokeWidth="2"
                    />
                    {/* Bottom Half Border - White */}
                    <path
                        d="M1 22V30C1 37.1797 6.8203 43 14 43C21.1797 43 27 37.1797 27 30V22H1Z"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>

                {/* Scroll Dot */}
                <div className="absolute inset-0 flex justify-center pt-5">
                    <motion.div
                        animate={{
                            y: [0, 14, 0],
                            opacity: [0, 1, 0],
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    />
                </div>
            </div>
        </div>
    );
};
