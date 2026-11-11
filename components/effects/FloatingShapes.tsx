"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingShapes() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Parallax transforms - different speeds for depth perception
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Shape 1: Large Purple Blob (Top Left) */}
            <motion.div
                style={{ y: y1 }}
                animate={{
                    x: [0, 30, -20, 0],
                    rotate: [0, 10, -5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[80px] mix-blend-multiply dark:bg-purple-900/20"
            />

            {/* Shape 2: Pink/Peach Orb (Middle Right) */}
            <motion.div
                style={{ y: y2, rotate: rotate1 }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full bg-pink-400/10 blur-[60px] mix-blend-multiply dark:bg-pink-800/20"
            />

            {/* Shape 3: Cyan Gradient (Bottom Left) */}
            <motion.div
                style={{ y: y3 }}
                animate={{
                    x: [0, -40, 20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-cyan-400/10 blur-[70px] mix-blend-multiply dark:bg-cyan-800/20"
            />

            {/* Shape 4: Small Accent (Center-ish) */}
            <motion.div
                style={{ y: y2 }}
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[25%] left-[60%] w-[100px] h-[100px] rounded-full bg-orange-300/20 blur-[40px] mix-blend-multiply dark:bg-orange-700/20"
            />
        </div>
    );
}
