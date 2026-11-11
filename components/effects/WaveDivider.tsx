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
                    stroke="none"
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

// New organic wave with decorative circles
export function OrganicWave({
    position = "bottom",
    fillColor = "#FFE5ED",
    className = ""
}: WaveDividerProps) {
    const isBottom = position === "bottom";

    return (
        <div className={`absolute ${isBottom ? 'bottom-[-50px]' : 'top-0'} left-0 right-0 w-full ${className}`}
            style={{
                transform: isBottom ? 'none' : 'rotate(180deg)',
                zIndex: 20
            }}
        >
            <svg
                viewBox="0 0 1440 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-auto"
                style={{ display: 'block' }}
            >
                {/* Main wave path - smooth organic curve */}
                <path
                    d="M0 80 C 240 20, 480 100, 720 80 C 960 60, 1200 120, 1440 80 L 1440 200 L 0 200 Z"
                    fill={fillColor}
                />

                {/* Decorative circles */}
                <circle cx="180" cy="100" r="12" fill={fillColor} opacity="0.8" />
                <circle cx="220" cy="85" r="8" fill={fillColor} opacity="0.6" />
                <circle cx="1100" cy="110" r="15" fill={fillColor} opacity="0.7" />
                <circle cx="1150" cy="95" r="10" fill={fillColor} opacity="0.5" />
                <circle cx="600" cy="70" r="10" fill={fillColor} opacity="0.6" />
            </svg>
        </div>
    );
}
