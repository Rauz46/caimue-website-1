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
        <div className="w-full relative z-20 overflow-hidden">

            <div className="w-full overflow-hidden flex flex-col items-center justify-center py-6 relative">
                {/* Container with Strong Perspective for Spherical Curve */}
                <div
                    className="w-[110%] -ml-[5%] relative"
                    style={{
                        perspective: "500px",
                        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
                    }}
                >
                    <div
                        className="marquee flex gap-3 py-4"
                        style={{
                            transform: "rotateX(12deg) scale(0.92)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Original Set - Portrait Orientation */}
                        <div className="marquee-content flex gap-3 items-center animate-scroll" style={{ transformStyle: "preserve-3d" }}>
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    className="relative w-[140px] h-[200px] md:w-[160px] md:h-[240px] rounded-[var(--border-radius)] overflow-hidden shadow-2xl bg-black hover:z-10"
                                    initial={{ transform: "rotateY(0deg)" }}
                                    whileHover={{ scale: 1.15, rotateY: 0, zIndex: 20 }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: `rotateY(${(index % 5 - 2) * 8}deg) translateZ(${Math.abs(index % 5 - 2) * -30}px)`
                                    }}
                                >
                                    <Image
                                        src={video.src}
                                        alt={video.title}
                                        fill
                                        className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Reflection/Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Duplicate Set for Seamless Loop */}
                        <div className="marquee-content flex gap-3 items-center animate-scroll" style={{ transformStyle: "preserve-3d" }}>
                            {videos.map((video, index) => (
                                <motion.div
                                    key={`dup-${video.id}`}
                                    className="relative w-[140px] h-[200px] md:w-[160px] md:h-[240px] rounded-[var(--border-radius)] overflow-hidden shadow-2xl bg-black hover:z-10"
                                    whileHover={{ scale: 1.15, zIndex: 20 }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: `rotateY(${(index % 5 - 2) * 8}deg) translateZ(${Math.abs(index % 5 - 2) * -30}px)`
                                    }}
                                >
                                    <Image
                                        src={video.src}
                                        alt={video.title}
                                        fill
                                        className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Reflection/Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Masks for Fade Out */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-600/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pink-600/50 to-transparent z-10 pointer-events-none" />
        </div>
    );
}
