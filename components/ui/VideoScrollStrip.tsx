"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
    { id: 1, src: "/images/Hey!%20Sinamika%20Poster.jpg", title: "Cinematic" },
    { id: 2, src: "/images/Meiyazhagan%20_%20illustration%20poster%20-%20Vishnu%20Narayanan.jpg", title: "Documentary" },
    { id: 3, src: "/images/Thiruchitrambalam.jpg", title: "Commercial" },
    { id: 4, src: "/images/Hi%20papa.jpg", title: "Behind Scenes" },
    { id: 5, src: "/images/Odum%20Kuthira%20Chaadum%20Kuthira%20poster.jpg", title: "Editorial" },
    { id: 6, src: "/images/%23Atharvaa.jpg", title: "Short Film" },
];

export function VideoScrollStrip() {
    return (
        <div className="w-full relative z-20 overflow-hidden py-4 md:py-6">
            {/* The Lens Container */}
            <div className="relative w-full overflow-visible">
                <div
                    className="flex mask-horizontal-fade"
                    style={{
                        perspective: "1200px",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div
                        className="flex animate-scroll-horizontal gap-8 px-4 py-8"
                        style={{
                            transform: "rotateX(2deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* First Set */}
                        {[...videos, ...videos, ...videos].map((video, index) => (
                            <motion.div
                                key={`${video.id}-${index}`}
                                className="relative flex-none w-[180px] aspect-[10/16] md:w-[220px] rounded-[56px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-gray-900 group border border-white/5"
                                style={{
                                    transformStyle: "preserve-3d",
                                    // Subtle tilt based on index to simulate curve
                                    transform: `rotateY(${(index % 6 - 2.5) * 2}deg) translateZ(${Math.abs(index % 6 - 2.5) * -10}px)`
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    y: -15,
                                    rotateY: 0,
                                    translateZ: 20,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <Image
                                    src={video.src}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 180px, 220px"
                                />
                                {/* Sophisticated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-60 group-hover:opacity-30 transition-opacity" />

                                {/* Reflection Light Streak */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                {/* Label - cleaner */}
                                <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                                        {video.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global style for the horizontal scroll animation */}
            <style jsx global>{`
                @keyframes scroll-horizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-33.33% - 16px)); }
                }
                .animate-scroll-horizontal {
                    animation: scroll-horizontal 80s linear infinite;
                }
                .animate-scroll-horizontal:hover {
                    animation-play-state: paused;
                }
                .mask-horizontal-fade {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </div>
    );
}
