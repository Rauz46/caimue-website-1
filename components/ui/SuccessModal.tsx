"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Particle / Confetti System ---
interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
    angle: number;
    distance: number;
}

const COLORS = [
    "#a855f7", "#7c3aed", "#c084fc", "#e879f9",
    "#f0abfc", "#818cf8", "#6366f1", "#d946ef",
    "#fbbf24", "#34d399", "#f472b6", "#60a5fa",
];

function generateParticles(count: number): Particle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 10,
        y: 50 + (Math.random() - 0.5) * 10,
        size: Math.random() * 8 + 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.4,
        duration: Math.random() * 1.2 + 0.8,
        angle: (360 / count) * i + (Math.random() - 0.5) * 30,
        distance: Math.random() * 200 + 100,
    }));
}

// --- Floating Orb ---
const FloatingOrb = ({ delay, size, x, color }: { delay: number; size: number; x: number; color: string }) => (
    <motion.div
        className="absolute rounded-full blur-sm"
        style={{
            width: size,
            height: size,
            left: `${x}%`,
            background: color,
        }}
        initial={{ y: 300, opacity: 0, scale: 0 }}
        animate={{
            y: [-20, -180, -300],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0.5],
        }}
        transition={{
            duration: 3,
            delay,
            ease: "easeOut",
        }}
    />
);

// --- Main Component ---
interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    senderName?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, senderName }) => {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [orbs, setOrbs] = useState<{ id: number; delay: number; size: number; x: number; color: string }[]>([]);

    useEffect(() => {
        setMounted(true);
        setParticles(generateParticles(40));
        setOrbs(
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                delay: Math.random() * 1.5,
                size: Math.random() * 12 + 4,
                x: Math.random() * 100,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            }))
        );
    }, []);

    // Auto close after 5 seconds
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    // Close on Escape
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Confetti Burst */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {particles.map((p) => {
                            const rad = (p.angle * Math.PI) / 180;
                            const endX = Math.cos(rad) * p.distance;
                            const endY = Math.sin(rad) * p.distance;

                            return (
                                <motion.div
                                    key={p.id}
                                    className="absolute rounded-full"
                                    style={{
                                        width: p.size,
                                        height: p.size,
                                        left: `${p.x}%`,
                                        top: `${p.y}%`,
                                        background: p.color,
                                    }}
                                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                                    animate={{
                                        scale: [0, 1.5, 0.8],
                                        x: endX,
                                        y: endY,
                                        opacity: [1, 1, 0],
                                        rotate: Math.random() * 360,
                                    }}
                                    transition={{
                                        duration: p.duration,
                                        delay: p.delay + 0.3,
                                        ease: "easeOut",
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Floating Orbs */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {orbs.map((orb) => (
                            <FloatingOrb key={orb.id} {...orb} />
                        ))}
                    </div>

                    {/* Card */}
                    <motion.div
                        className="relative w-[420px] max-w-[90vw] overflow-hidden"
                        initial={{ scale: 0.5, y: 40, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.8, y: 30, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            delay: 0.1,
                        }}
                    >
                        {/* Glass Card */}
                        <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-[0_30px_100px_rgba(124,58,237,0.25)] p-10 text-center">
                            {/* Gradient glow behind card */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/20 via-violet-300/10 to-pink-400/20 rounded-[3rem] blur-2xl -z-10" />

                            {/* Pulsing ring behind checkmark */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    {/* Outer pulse ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: "linear-gradient(135deg, #a855f7, #6366f1, #e879f9)",
                                        }}
                                        initial={{ scale: 1, opacity: 0.5 }}
                                        animate={{
                                            scale: [1, 1.8, 2.2],
                                            opacity: [0.4, 0.15, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />
                                    {/* Second pulse ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: "linear-gradient(135deg, #c084fc, #818cf8)",
                                        }}
                                        initial={{ scale: 1, opacity: 0.3 }}
                                        animate={{
                                            scale: [1, 1.5, 1.9],
                                            opacity: [0.3, 0.1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.4,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />

                                    {/* Checkmark Circle */}
                                    <motion.div
                                        className="relative w-20 h-20 rounded-full flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
                                            boxShadow: "0 8px 40px rgba(124, 58, 237, 0.4)",
                                        }}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 18,
                                            delay: 0.3,
                                        }}
                                    >
                                        {/* Animated Check SVG */}
                                        <motion.svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <motion.path
                                                d="M5 13l4 4L19 7"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.6,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </motion.svg>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Title */}
                            <motion.h2
                                className="text-2xl font-bold tracking-tight text-neutral-900 mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Message sent!
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                className="text-neutral-400 text-sm leading-relaxed max-w-[280px] mx-auto"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                            >
                                {senderName ? (
                                    <>Thanks <span className="font-semibold text-purple-600">{senderName}</span>, we&apos;ve received your message.</>
                                ) : (
                                    <>We&apos;ve received your message and will get back to you soon.</>
                                )}
                            </motion.p>

                            {/* Divider */}
                            <motion.div
                                className="h-[2px] w-16 mx-auto my-6 rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-pink-400"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            />

                            {/* Brand Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                            >
                                <span className="text-xs font-bold text-purple-600 tracking-wide">CAIMUE</span>
                                <span className="text-neutral-300">·</span>
                                <span className="text-xs text-neutral-400 font-medium">We&apos;ll respond within 24hrs</span>
                            </motion.div>

                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors group"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-neutral-400 group-hover:text-neutral-600 transition-colors">
                                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </motion.button>

                            {/* Auto-close progress bar */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[3px] rounded-b-[2rem] bg-gradient-to-r from-purple-500 via-violet-400 to-pink-400"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
