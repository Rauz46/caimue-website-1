"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Film, Briefcase, Video, Users, Package } from "lucide-react";
import Image from "next/image";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

// Film posters from video scroll
const ennittoFilms = [
    { id: 1, title: "Hey Sinamika", image: "/images/Hey! Sinamika Poster.jpg" },
    { id: 2, title: "Meiyazhagan", image: "/images/Meiyazhagan _ illustration poster - Vishnu Narayanan.jpg" },
    { id: 3, title: "Thiruchitrambalam", image: "/images/Thiruchitrambalam.jpg" },
    { id: 4, title: "Hi Papa", image: "/images/Hi papa.jpg" },
];

// Brand content thumbnails
const teqthotsContent = [
    { id: 1, title: "Odum Kuthira", image: "/images/Odum Kuthira Chaadum Kuthira poster.jpg" },
    { id: 2, title: "Atharvaa", image: "/images/#Atharvaa.jpg" },
    { id: 3, title: "Blog Graphics", image: "/images/Blog Graphics.jpg" },
    { id: 4, title: "YouTube Designs", image: "/images/Eye-Catching YouTube Thumbnail Designs.jpg" },
];

export function PlatformsSection() {
    const [hoveredFilm, setHoveredFilm] = useState<number | null>(null);
    const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

    return (
        <FollowerPointerCard title="🎥 Our Platforms">
            <section className="relative py-[100px] bg-white overflow-hidden">
                {/* Dark Grid Overlay */}
                <HeroGrid className="opacity-40 z-0" style={{ filter: "brightness(0.4)" }} />

                {/* Dark Scribbles */}
                <FloatingScribbles color="text-[#2D2D2D]/15" />

                {/* Noise texture */}
                <div className="absolute inset-0 bg-noise opacity-5 z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] text-center mb-[80px]"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Our Platforms
                    </motion.h2>

                    {/* ENNITTO CARD - Large Horizontal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -6 }}
                        className="relative bg-[#FAFAF8] rounded-[20px] p-8 md:p-[50px] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 mb-[40px] overflow-hidden group"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-[20px] p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-[2px] bg-[#FAFAF8] rounded-[18px]" />
                        </div>

                        {/* Internal Grid Effect */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-grid-pattern" style={{ filter: "brightness(0.5)" }} />
                        </div>

                        {/* Shimmer effect on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-[40px] relative z-10">
                            {/* LEFT COLUMN - Content (60%) */}
                            <div className="lg:col-span-3 flex flex-col justify-center">
                                {/* Tag */}
                                <span className="inline-block w-fit bg-[#E91E8C] text-white text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                    Cinema & Original Stories
                                </span>

                                {/* Heading */}
                                <h3
                                    className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    Ennitto
                                </h3>

                                {/* Tagline */}
                                <p className="text-lg italic text-[#5A5A5A] mb-6">
                                    Where Stories Become Movies
                                </p>

                                {/* Description */}
                                <p className="text-base text-[#5A5A5A] leading-relaxed mb-6" style={{ lineHeight: 1.7 }}>
                                    We produce original Malayalam, Tamil & English films—from shorts to features to OTT content. We discover talent, back stories that matter, and build toward theatrical and streaming releases.
                                </p>

                                {/* Key Points */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]"></div>
                                        <span className="text-[#5A5A5A] font-medium">Discovers New Talent</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]"></div>
                                        <span className="text-[#5A5A5A] font-medium">Original IP & Stories</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]"></div>
                                        <span className="text-[#5A5A5A] font-medium">Theatrical & OTT Vision</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#D01A7E] transition-colors w-fit"
                                >
                                    Explore Ennitto
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>

                            {/* RIGHT COLUMN - Film Thumbnails (40%) */}
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-2 gap-4">
                                    {ennittoFilms.map((film) => (
                                        <motion.div
                                            key={film.id}
                                            className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300 group cursor-pointer"
                                            onMouseEnter={() => setHoveredFilm(film.id)}
                                            onMouseLeave={() => setHoveredFilm(null)}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Film Icon Placeholder */}
                                            {/* Film Poster Image */}
                                            <Image
                                                src={film.image}
                                                alt={film.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 150px, 200px"
                                            />

                                            {/* Hover Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredFilm === film.id ? 1 : 0 }}
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                            >
                                                <p className="text-white font-semibold text-sm text-center px-4">
                                                    {film.title}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* TEQTHOTS CARD - Horizontal (60/40 Split) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -6 }}
                        className="relative bg-[#F8F8F8] rounded-[20px] p-8 md:p-[45px] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden group"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-[20px] p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-[2px] bg-[#F8F8F8] rounded-[18px]" />
                        </div>

                        {/* Internal Grid Effect */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-grid-pattern" style={{ filter: "brightness(0.5)" }} />
                        </div>

                        {/* Shimmer effect on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-[40px] relative z-10">
                            {/* LEFT COLUMN - Content (60%) */}
                            <div className="lg:col-span-3 flex flex-col justify-center">
                                {/* Tag */}
                                <span className="inline-block w-fit bg-[#7C3AED] text-white text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                    Brand Content
                                </span>

                                {/* Heading */}
                                <h3
                                    className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    TeqThots
                                </h3>

                                {/* Tagline */}
                                <p className="text-base italic text-[#5A5A5A] mb-6">
                                    Stories That Build Brands
                                </p>

                                {/* Description */}
                                <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6" style={{ lineHeight: 1.7 }}>
                                    We work with brands, startups, and teams to create content that explains what they're building. Not ads—real storytelling through founder interviews, product stories, and behind-the-scenes formats.
                                </p>

                                {/* Key Points */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3">
                                        <Users size={16} className="text-[#7C3AED]" />
                                        <span className="text-[#5A5A5A] font-medium">Founder Conversations</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Package size={16} className="text-[#7C3AED]" />
                                        <span className="text-[#5A5A5A] font-medium">Product Storytelling</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Video size={16} className="text-[#7C3AED]" />
                                        <span className="text-[#5A5A5A] font-medium">Brand Integrations in Films</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02, backgroundColor: "#5A5A5A", color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 border-2 border-[#5A5A5A] text-[#5A5A5A] font-semibold px-6 py-3 rounded-lg transition-all w-fit"
                                >
                                    Explore TeqThots
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>

                            {/* RIGHT COLUMN - Brand Content Thumbnails (40%) */}
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-2 gap-4">
                                    {teqthotsContent.map((content) => (
                                        <motion.div
                                            key={content.id}
                                            className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-blue-300 group cursor-pointer"
                                            onMouseEnter={() => setHoveredBrand(content.id)}
                                            onMouseLeave={() => setHoveredBrand(null)}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Briefcase Icon Placeholder */}
                                            {/* Brand Content Image */}
                                            <Image
                                                src={content.image}
                                                alt={content.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 150px, 200px"
                                            />

                                            {/* Hover Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredBrand === content.id ? 1 : 0 }}
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                            >
                                                <p className="text-white font-semibold text-sm text-center px-4">
                                                    {content.title}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </FollowerPointerCard>
    );
}
