"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "@/components/ui/cursor-context";

export const GlobalCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothX = useSpring(x, { stiffness: 500, damping: 28 });
    const smoothY = useSpring(y, { stiffness: 500, damping: 28 });
    const { title, isVisible } = useCursor();
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);

            // Optional: Check if clicking on something interactive
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer';
            setIsPointer(isClickable);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x: smoothX,
                y: smoothY,
            }}
        >
            {/* Main Cursor Dot */}
            <motion.div
                className="absolute h-4 w-4 bg-pink-500 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                animate={{
                    scale: title ? 1.5 : (isPointer ? 0.8 : 1),
                }}
            />

            {/* Context Title Pill */}
            <AnimatePresence>
                {title && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 20 }}
                        exit={{ opacity: 0, scale: 0.5, x: 10 }}
                        className="absolute top-0 left-0 bg-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// This component now acts as a Trigger Area for the global cursor
interface FollowerPointerCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const FollowerPointerCard = ({
    children,
    className,
    title,
}: FollowerPointerCardProps) => {
    const { setTitle } = useCursor();

    const handleMouseEnter = () => {
        if (title) setTitle(title);
    };

    const handleMouseLeave = () => {
        if (title) setTitle(null);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("relative", className)}
        >
            {children}
        </div>
    );
};
