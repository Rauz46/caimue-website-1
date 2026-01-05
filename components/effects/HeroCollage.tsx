"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroCollage() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Right Side Composition */}
            <div className="hidden lg:block absolute right-0 top-[15%] w-[40%] h-[70%]">
                {/* Blue Grid Background */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-20 bg-repeat bg-[length:40px_40px]"
                    style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
                />
                {/* Video/Image Placeholder - Positioned to frame, not overlap */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 6 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -right-[5%] top-[20%] w-[550px] h-[320px] rounded-xl overflow-hidden shadow-2xl border border-white/20 hidden xl:block group"
                >
                    {/* Use user uploaded dashboard image if available, else fallback to gradient */}
                    <div className="relative w-full h-full bg-neutral-900">
                        <Image
                            src="/images/dashboard-preview.png"
                            alt="Caimue Dashboard"
                            fill
                            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay with play button */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Geometric Elements - Subtle Backgrounds */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[5%] top-[10%] w-24 h-24 bg-[var(--caimue-lime)] rounded-full mix-blend-screen opacity-40 blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-[25%] bottom-[30%] w-40 h-40 bg-[var(--caimue-purple)] rounded-full mix-blend-screen opacity-30 blur-3xl"
                />

                {/* Floating "Notification" Box - Repositioned */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute top-[45%] right-[5%] bg-white dark:bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[var(--caimue-purple)]/20 max-w-[220px] z-10 hidden xl:block"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0 animate-pulse" />
                        <div>
                            <p className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider mb-1">System Status</p>
                            <p className="text-sm font-medium text-[var(--foreground)] leading-tight">
                                optimizing_assets...
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Left Side Composition (Subtle) */}
            <div className="hidden lg:block absolute left-0 top-[20%] w-[30%] h-[60%]">
                <motion.div
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute left-[10%] top-[20%] w-40 h-40 border-4 border-[var(--caimue-peach)] rounded-full opacity-20"
                />
            </div>
        </div>
    );
}
