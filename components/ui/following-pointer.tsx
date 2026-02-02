"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "@/components/ui/cursor-context";

export const GlobalCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothX = useSpring(x, { stiffness: 500, damping: 28 });
    const smoothY = useSpring(y, { stiffness: 500, damping: 28 });
    const { title, isVisible } = useCursor();
    const isPointer = useRef(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);

            const target = e.target as HTMLElement;
            const clickable = window.getComputedStyle(target).cursor === 'pointer';

            if (isPointer.current !== clickable) {
                isPointer.current = clickable;
                if (clickable) {
                    document.body.classList.add('cursor-pointer-active');
                } else {
                    document.body.classList.remove('cursor-pointer-active');
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
            style={{
                x: smoothX,
                y: smoothY,
                translateZ: 0
            }}
        >
            {/* Main Cursor Dot */}
            <motion.div
                className="absolute h-4 w-4 bg-pink-500 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                animate={{
                    scale: title ? 1.5 : 1,
                }}
            />
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
