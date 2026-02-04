"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
    className?: string;
}

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
    return (
        <div className={cn("flex flex-col items-center opacity-60", className)}>
            <div className="relative w-6 h-10">
                {/* Mouse Body Outline - Single Tone White */}
                <div className="absolute inset-0 border-[1.5px] border-white rounded-full" />

                {/* Scroll Dot Animation - Trailing Effect */}
                <div className="absolute inset-0 flex justify-center pt-2">
                    <div className="relative h-full flex flex-col items-center">
                        {/* Main Dot */}
                        <motion.div
                            animate={{
                                y: [0, 16, 16],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                        />
                        {/* Trail Dot 1 */}
                        <motion.div
                            animate={{
                                y: [4, 20, 20],
                                opacity: [0, 0.4, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.1,
                            }}
                            className="w-1 h-1 rounded-full bg-white absolute top-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
