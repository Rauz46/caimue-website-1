"use client";

import { motion } from "framer-motion";

export function FloatingScribbles() {
    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* 1. Top Left - "Action!" + Clapper hint */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 0.9,
                    y: [0, -4, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-[12%] left-[4%] hidden xl:block"
            >
                <div className="relative rotate-[-6deg]">
                    <span className="font-handwriting text-3xl text-white font-medium tracking-wide blur-[0.5px]">
                        Action!
                    </span>
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="absolute -bottom-4 left-2 text-white opacity-70">
                        <path d="M2 2 Q 20 18, 38 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
            </motion.div>

            {/* 2. Top Right - "Rolling..." Status */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.8,
                    y: [0, 3, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.5 },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute top-[8%] right-[6%] hidden lg:block"
            >
                <div className="flex items-center gap-2 rotate-[4deg]">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-handwriting text-2xl text-white font-medium blur-[0.3px]">
                        Rolling...
                    </span>
                </div>
            </motion.div>

            {/* 3. Bottom Left - "Built to scale" + Underline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.75,
                    y: [0, -3, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.8 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute bottom-[25%] left-[5%] hidden xl:block max-w-[150px]"
            >
                <div className="relative rotate-[-3deg]">
                    <span className="font-handwriting text-xl text-white blur-[0.4px]">
                        Built to scale
                    </span>
                    <svg width="80" height="10" viewBox="0 0 80 10" fill="none" className="absolute top-full left-0 text-white">
                        <path d="M2 2 C 20 8, 40 8, 78 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </div>
            </motion.div>

            {/* 4. Center Right (Margin) - "Elevate your content" + Star */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.8,
                    y: [0, 4, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.1 },
                    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute top-[45%] right-[5%] hidden 2xl:block"
            >
                <div className="relative rotate-[5deg] text-center">
                    <span className="text-white text-lg block mb-1">✦</span>
                    <span className="font-handwriting text-xl text-white leading-tight blur-[0.4px]">
                        Elevate<br />your content
                    </span>
                </div>
            </motion.div>

            {/* 6. Subtle Geometric Accent - Bottom Right - Circle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.5, // Lower opacity for shapes
                    rotate: [0, 5, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.5 },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-[20%] right-[10%] hidden lg:block"
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-white blur-[0.6px]">
                    <path d="M30 5 C 45 5, 55 15, 50 35 C 45 55, 15 55, 10 35 C 5 15, 15 5, 30 5 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* 7. New: "Scene 01" - Right Side Middle-Up */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="absolute top-[25%] right-[12%] hidden xl:block"
            >
                <div className="relative rotate-[-2deg] border border-white rounded px-2 py-1 opacity-60">
                    <span className="font-handwriting text-sm text-white">Scene 01</span>
                </div>
            </motion.div>

            {/* 8. New: Focus Crosshair - Left Side */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1, delay: 2.0 }}
                className="absolute top-[40%] left-[8%] hidden lg:block"
            >
                <div className="relative">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                        <path d="M10 20 H30 M20 10 V30" stroke="currentColor" strokeWidth="1" />
                        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] text-white pt-1 font-mono tracking-widest uppercase">Focus</span>
                </div>
            </motion.div>

            {/* 9. New: "REC" Dot - Top Center Offset */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="absolute top-[15%] left-[25%] hidden 2xl:block"
            >
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-white tracking-widest">REC</span>
                </div>
            </motion.div>

            {/* 10. New: Corner Bracket - Top Left Absolute */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 2.4 }}
                className="absolute top-[3%] left-[2%] hidden 2xl:block"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                    <path d="M2 15 V 2 H 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* 11. New: "Sound On" Waveform - Bottom Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 2.6 }}
                className="absolute bottom-[15%] left-[3%] hidden xl:block"
            >
                <div className="flex items-center gap-2 -rotate-3">
                    <span className="font-handwriting text-sm text-white">Sound On</span>
                    <div className="flex items-center gap-[2px]">
                        {[4, 8, 12, 6, 10].map((h, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [h / 2, h, h / 2] }}
                                transition={{ duration: 0.5 + i * 0.1, repeat: Infinity }}
                                style={{ height: h }}
                                className="w-[1.5px] bg-white"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 12. New: "4K" Badge - Bottom Right */}
            <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 0.5, rotate: 10 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="absolute bottom-[25%] right-[5%] hidden 2xl:block"
            >
                <div className="border border-white rounded-sm px-1.5 py-0.5">
                    <span className="font-mono text-[10px] text-white font-bold">4K</span>
                </div>
            </motion.div>
        </div>
    );
}
