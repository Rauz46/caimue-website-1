"use client";

import { motion } from "framer-motion";

interface WaveDividerProps {
    position?: "top" | "bottom";
    fillColor?: string;
    className?: string;
}

export function WaveDivider({
    position = "bottom",
    fillColor = "var(--background)",
    className = ""
}: WaveDividerProps) {
    return (
        <div className={`wave-divider ${position} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ opacity: 1 }}
            >
                <path
                    d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,80 L1200,120 L0,120 Z"
                    fill={fillColor}
                />
            </svg>
        </div>
    );
}

export function WaveDividerAlt({
    position = "bottom",
    fillColor = "var(--background)",
    className = ""
}: WaveDividerProps) {
    return (
        <div className={`wave-divider ${position} ${className}`}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill={fillColor}
                    stroke="none"
                />
            </svg>
        </div>
    );
}
