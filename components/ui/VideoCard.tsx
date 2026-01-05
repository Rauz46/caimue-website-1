"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface VideoCardProps {
    title: string;
    description: string;
    thumbnail: string;
    href: string;
    logo?: string;
}

export function VideoCard({ title, description, thumbnail, href, logo }: VideoCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                className="card group relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                    >
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--caimue-black)] via-transparent to-transparent opacity-60" />

                    {/* Logo */}
                    {logo && (
                        <div className="absolute top-4 left-4">
                            <Image
                                src={logo}
                                alt=""
                                width={100}
                                height={40}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                    )}

                    {/* Play button */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-16 h-16 rounded-full bg-[var(--caimue-purple)] flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-serif text-[var(--caimue-cream)] mb-2 group-hover:text-[var(--caimue-purple)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-[var(--caimue-gray)] text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Arrow */}
                    <motion.div
                        className="mt-4 inline-flex items-center gap-2 text-[var(--caimue-purple)] text-sm font-medium"
                        animate={{ x: isHovered ? 8 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    );
}
