"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
    { id: 1, src: "/images/Hey! Sinamika Poster.jpg", title: "Cinematic" },
    { id: 2, src: "/images/Meiyazhagan _ illustration poster - Vishnu Narayanan.jpg", title: "Documentary" },
    { id: 3, src: "/images/Thiruchitrambalam.jpg", title: "Commercial" },
    { id: 4, src: "/images/Hi papa.jpg", title: "Behind Scenes" },
    { id: 5, src: "/images/Odum Kuthira Chaadum Kuthira poster.jpg", title: "Editorial" },
    { id: 6, src: "/images/#Atharvaa.jpg", title: "Short Film" },
];

export function VideoScrollStrip() {
    return (
        <div className="w-full relative z-20 mt-12 md:mt-20">
            {/* Label requiring scribbles later */}
            <div className="container mb-6 flex justify-between items-end">
                <span className="text-sm font-medium text-[var(--foreground-muted)] flex items-center gap-2">
                    Recent Productions <span className="text-[var(--accent)]">→</span>
                </span>
            </div>

            {/* Auto-scrolling Marquee Container */}
            <div className="marquee">
                {/* Original Set */}
                <div className="marquee-content py-8">
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-[var(--border-radius-lg)] overflow-hidden shadow-xl bg-black group shrink-0 cursor-pointer"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Image
                                src={video.src}
                                alt={video.title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            <div className="absolute bottom-6 left-6">
                                <span className="text-white font-serif text-lg tracking-wide">{video.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="marquee-content py-8">
                    {videos.map((video) => (
                        <motion.div
                            key={`dup-${video.id}`}
                            className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-[var(--border-radius-lg)] overflow-hidden shadow-xl bg-black group shrink-0 cursor-pointer"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Image
                                src={video.src}
                                alt={video.title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            <div className="absolute bottom-6 left-6">
                                <span className="text-white font-serif text-lg tracking-wide">{video.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
