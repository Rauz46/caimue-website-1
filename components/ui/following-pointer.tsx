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
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);

            const target = e.target as HTMLElement;
            const clickable = window.getComputedStyle(target).cursor === 'pointer';

            if (isPointer.current !== clickable) {
                isPointer.current = clickable;
                setIsHovering(clickable);
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
            <motion.div
                animate={{
                    scale: isHovering || title ? 1.2 : 1,
                    rotate: isHovering ? 15 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-500 drop-shadow-sm"
                    style={{
                        transform: "translate(-4px, -4px)", // Adjust to align tip with mouse
                    }}
                >
                    <path
                        d="M8.2 2.1c-1.1-.6-2.2.4-1.8 1.5l7.9 23.4c.4 1.1 1.9 1.3 2.5.3l4.3-7.2c.2-.3.5-.5.8-.6l8.1-1.7c1.1-.2 1.4-1.6.5-2.3L8.2 2.1z"
                        fill="currentColor"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
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
