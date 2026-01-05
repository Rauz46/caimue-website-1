"use client";

import { ReactNode } from "react";

interface HeroVisualFrameProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "grid";
}

export function HeroVisualFrame({ children, className = "", variant = "grid" }: HeroVisualFrameProps) {
    return (
        <div className={`relative w-full max-w-6xl mx-auto rounded-[2rem] border border-[var(--caimue-gray)]/20 bg-white shadow-xl overflow-hidden ${className}`}>

            {/* Grid Background Effect - "White Square Checked Box" */}
            {variant === "grid" && (
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            )}

            {/* Inner Content */}
            <div className="relative z-10 w-full h-full p-1">
                {children}
            </div>
        </div>
    );
}
