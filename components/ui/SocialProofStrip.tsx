"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const creators = [
    {
        id: 1,
        name: "Arjun Menon",
        designation: "Filmmaker",
        image: "/team/avatar-1.png",
    },
    {
        id: 2,
        name: "Priya Kumar",
        designation: "Content Creator",
        image: "/team/avatar-2.png",
    },
    {
        id: 3,
        name: "Rahul Sharma",
        designation: "Director",
        image: "/team/avatar-1.png",
    },
];

export function SocialProofStrip() {
    return (
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up md:mb-8 mt-4">
            {/* Animated Tooltip Avatars */}
            <div className="flex items-center">
                <AnimatedTooltip items={creators} />
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-white tracking-tight">
                    Trusted by Creators
                </span>
                <div className="flex items-center gap-1">
                    <span className="text-[10px] text-[#FACC15]">
                        ★ ★ ★ ★ ★
                    </span>
                </div>
            </div>
        </div>
    );
}
