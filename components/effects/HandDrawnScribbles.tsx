"use client";

import { motion } from "framer-motion";

export const HandDrawnScribbles = () => {
    return (
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden hidden md:block" style={{ zIndex: 1 }} aria-hidden="true">
            {/* Top Section Scribbles */}
            <motion.svg
                className="absolute top-10 left-[10%] w-16 h-16 text-purple-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(-5px)", "translateY(5px)", "translateY(-5px)"] }}
                transition={{ duration: 5, repeat: 0, ease: "easeInOut" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M20,50 Q30,40 40,50 T60,50 T80,50" strokeLinecap="round" />
            </motion.svg>

            <motion.div
                className="absolute top-20 right-[15%] text-4xl text-yellow-400 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["rotate(0deg) scale(1)", "rotate(10deg) scale(1.1)", "rotate(0deg) scale(1)"],  }}
                transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.svg
                className="absolute top-32 left-[5%] w-12 h-12 text-pink-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px)", "translateY(-8px)", "translateY(0px)"] }}
                transition={{ duration: 4, repeat: 0, ease: "easeInOut", delay: 0.5 }}
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
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["rotate(-5deg)", "rotate(5deg)", "rotate(-5deg)"] }}
                transition={{ duration: 3, repeat: 0, ease: "easeInOut" }}
            >
                →
            </motion.div>

            <motion.svg
                className="absolute top-[55%] left-[2%] w-14 h-14 text-pink-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(-3px)", "translateY(3px)", "translateY(-3px)"] }}
                transition={{ duration: 6, repeat: 0, ease: "easeInOut", delay: 1 }}
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
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["scale(1)", "scale(1.2)", "scale(1)"] }}
                transition={{ duration: 2.5, repeat: 0, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.svg
                className="absolute top-[50%] right-[2%] w-16 h-16 text-purple-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["rotate(0deg)", "rotate(360deg)"] }}
                transition={{ duration: 20, repeat: 0, ease: "linear" }}
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
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(-2px)", "translateY(2px)", "translateY(-2px)"] }}
                transition={{ duration: 4, repeat: 0, ease: "easeInOut", delay: 0.8 }}
            >
                Action!
            </motion.div>

            {/* Bottom Section Scribbles */}
            <motion.div
                className="absolute bottom-20 left-[12%] text-3xl text-purple-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["rotate(0deg)", "rotate(-10deg)", "rotate(0deg)"] }}
                transition={{ duration: 3.5, repeat: 0, ease: "easeInOut" }}
            >
                ★
            </motion.div>

            <motion.div
                className="absolute bottom-32 right-[18%] font-handwriting text-base text-yellow-400 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateX(-3px)", "translateX(3px)", "translateX(-3px)"] }}
                transition={{ duration: 5, repeat: 0, ease: "easeInOut" }}
            >
                Cinema
            </motion.div>

            <motion.svg
                className="absolute bottom-24 left-[8%] w-12 h-12 text-pink-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(0px)", "translateY(-5px)", "translateY(0px)"] }}
                transition={{ duration: 4.5, repeat: 0, ease: "easeInOut", delay: 1.2 }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            >
                <path d="M20,30 Q50,10 80,30 L80,70 Q50,90 20,70 Z" />
            </motion.svg>

            <motion.div
                className="absolute bottom-16 right-[10%] text-2xl text-purple-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["rotate(0deg) scale(1)", "rotate(15deg) scale(1.15)", "rotate(0deg) scale(1)"],  }}
                transition={{ duration: 2, repeat: 0, ease: "easeInOut", delay: 0.3 }}
            >
                ★
            </motion.div>

            <motion.div
                className="absolute bottom-28 left-[20%] font-handwriting text-sm text-pink-500 opacity-60"
                viewport={{ amount: 0 }}
                whileInView={{ transform: ["translateY(-4px)", "translateY(4px)", "translateY(-4px)"] }}
                transition={{ duration: 6, repeat: 0, ease: "easeInOut", delay: 1.5 }}
            >
                Stories
            </motion.div>
        </div>
    );
};
