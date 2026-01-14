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
        <div className="w-full relative z-20 py-8 overflow-hidden bg-gradient-to-b from-[var(--background)] to-[var(--background-alt)]">
            {/* 3D Perspective Container */}
            <div className="marquee flex gap-6" style={{ perspective: "1000px" }}>
                {/* Original Set */}
                <div className="marquee-content flex gap-6 items-center">
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            className="relative w-[200px] h-[140px] md:w-[240px] md:h-[160px] rounded-[var(--border-radius)] overflow-hidden shadow-lg bg-black hover:z-10"
                            initial={{ transform: "rotateY(0deg)" }}
                            whileHover={{ scale: 1.1, rotateY: 0, zIndex: 10 }}
                            // Subtle orbital tilt effect - static for now to ensure readability, or animated if needed. 
                            // For "motion along a curve", we rely on the marquee movement + a slight tilt.
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                src={video.src}
                                alt={video.title}
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Reflection/Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="marquee-content flex gap-6 items-center">
                    {videos.map((video) => (
                        <motion.div
                            key={`dup-${video.id}`}
                            className="relative w-[200px] h-[140px] md:w-[240px] md:h-[160px] rounded-[var(--border-radius)] overflow-hidden shadow-lg bg-black hover:z-10"
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                src={video.src}
                                alt={video.title}
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Gradient Masks for Fade Out */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
        </div>
    );
}
