"use client";

import { motion } from "framer-motion";

export const HandDrawnScribbles = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">
            {/* Top Section Scribbles */}
            <motion.svg
                className="absolute top-10 left-[10%] w-16 h-16 text-purple-500 opacity-60"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M20,50 Q30,40 40,50 T60,50 T80,50" strokeLinecap="round" />
            </motion.svg>

            <motion.div
                className="absolute top-20 right-[15%] text-4xl text-yellow-400 opacity-60"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.svg
                className="absolute top-32 left-[5%] w-12 h-12 text-pink-500 opacity-60"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            >
                <rect x="20" y="30" width="60" height="40" rx="4" />
                <line x1="30" y1="20" x2="30" y2="30" />
                <line x1="70" y1="20" x2="70" y2="30" />
                <line x1="20" y1="50" x2="80" y2="50" />
            </motion.svg>

            {/* Left Margin Scribbles */}
            <motion.div
                className="absolute top-[40%] left-[3%] text-3xl text-purple-500 opacity-60"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                →
            </motion.div>

            <motion.svg
                className="absolute top-[55%] left-[2%] w-14 h-14 text-pink-500 opacity-60"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="15" />
                <line x1="50" y1="20" x2="50" y2="35" />
                <line x1="50" y1="65" x2="50" y2="80" />
                <line x1="20" y1="50" x2="35" y2="50" />
                <line x1="65" y1="50" x2="80" y2="50" />
            </motion.svg>

            {/* Right Margin Scribbles */}
            <motion.div
                className="absolute top-[35%] right-[4%] text-2xl text-yellow-400 opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.svg
                className="absolute top-[50%] right-[2%] w-16 h-16 text-purple-500 opacity-60"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M30,20 L70,20 L80,40 L70,60 L30,60 L20,40 Z" />
                <line x1="40" y1="30" x2="60" y2="30" />
                <line x1="40" y1="40" x2="60" y2="40" />
                <line x1="40" y1="50" x2="60" y2="50" />
            </motion.svg>

            <motion.div
                className="absolute top-[65%] right-[5%] font-handwriting text-lg text-pink-500 opacity-60"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                Action!
            </motion.div>

            {/* Bottom Section Scribbles */}
            <motion.div
                className="absolute bottom-20 left-[12%] text-3xl text-purple-500 opacity-60"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.div
                className="absolute bottom-32 right-[18%] font-handwriting text-base text-yellow-400 opacity-60"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                Cinema
            </motion.div>

            <motion.svg
                className="absolute bottom-24 left-[8%] w-12 h-12 text-pink-500 opacity-60"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            >
                <path d="M20,30 Q50,10 80,30 L80,70 Q50,90 20,70 Z" />
            </motion.svg>

            <motion.div
                className="absolute bottom-16 right-[10%] text-2xl text-purple-500 opacity-60"
                animate={{ rotate: [0, 15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
                ★
            </motion.div>

            <motion.div
                className="absolute bottom-28 left-[20%] font-handwriting text-sm text-pink-500 opacity-60"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                Stories
            </motion.div>
        </div>
    );
};
