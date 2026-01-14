"use client";

import Image from "next/image";

const avatars = [
    "/images/poster-1.png",
    "/images/poster-2.png",
    "/images/poster-3.png",
];

export function SocialProofStrip() {
    return (
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up md:mb-8">
            {/* Avatars Overlap */}
            <div className="flex items-center -space-x-3">
                {avatars.map((src, i) => (
                    <div
                        key={i}
                        className="relative w-8 h-8 rounded-full border-2 border-[var(--background)] overflow-hidden bg-gray-200"
                    >
                        <Image
                            src={src}
                            alt="Creator"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
                {/* Count Pill */}
                <div className="relative w-8 h-8 rounded-full border-2 border-[var(--background)] bg-[var(--caimue-purple-light)] flex items-center justify-center text-[10px] font-bold text-[var(--caimue-purple)]">
                    +20
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-white tracking-tight">
                    Trusted by creators & teams
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
