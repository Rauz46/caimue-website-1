"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import { SuccessModal } from "@/components/ui/SuccessModal";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedName, setSubmittedName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/mreapgye", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmittedName(formData.firstName);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
                setShowSuccess(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            throw error; // Re-throw to allow StatefulButton to handle failure if needed
        }
    };

    return (
        <main className="min-h-screen flex flex-col font-sans">
            {/* --- SECTION 1: HERO BANNER (Cinematic/Dark) --- */}
            <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16">
                <BackgroundGradientAnimation
                    autoMove
                    maskCenter
                    containerClassName="absolute inset-0 z-0 !h-full !w-full"
                    className="h-full w-full"
                    firstColor="124, 58, 237"  // Violet-600
                    secondColor="109, 40, 217" // Violet-700
                    thirdColor="91, 33, 182"   // Violet-800
                    fourthColor="126, 34, 206" // Purple-700
                    fifthColor="107, 33, 168"  // Purple-800
                    pointerColor="124, 58, 237" // Violet-600
                    gradientBackgroundStart="rgb(46, 16, 101)" // Deep violet
                    gradientBackgroundEnd="rgb(59, 7, 100)"    // Deep purple
                />

                {/* Background Elements */}
                <HeroGrid className="opacity-40 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-noise opacity-10 z-10 pointer-events-none" />

                {/* Decorative Elements */}
                <FloatingScribbles className="scale-75 origin-center opacity-80" />

                <div className="container mx-auto px-4 relative z-30 text-center flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-xl md:text-3xl font-bold !text-white leading-none tracking-tight drop-shadow-2xl"
                    >
                        Let&apos;s Collaborate
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-sm md:text-base !text-white leading-tight drop-shadow-md font-medium max-w-2xl mx-auto -mt-1 md:-mt-2"
                    >
                        Join the AI-first film studio.
                        <br className="md:hidden" />
                        <span className="hidden md:inline"> </span>
                        Let&apos;s create stories that matter.
                    </motion.p>
                </div>
            </section>

            {/* --- SECTION 2: CONTENT AREA (Light Purple Theme) --- */}
            <section
                className="pt-20 pb-16 relative overflow-hidden"
                style={{ background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)" }}
            >
                {/* Checked grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">

                        {/* Left Column: Creative Info — centered on mobile */}
                        <div className="flex-1 w-full space-y-8 text-center lg:text-left">
                            {/* Heading with gradient accent */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-purple-500 mb-4"
                                >
                                    Get In Touch
                                </motion.span>
                                <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                                    <span className="text-neutral-900">Ready to Get Your</span>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-purple-400">
                                        Brand Noticed?
                                    </span>
                                </h2>
                            </motion.div>

                            {/* Conversation Topics — Animated Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: "💰", label: "Invest with Us", desc: "Back stories that scale", from: "#7C3AED", to: "#8B5CF6", soft: "#EDE9FE" },
                                    { icon: "🎬", label: "Make a Film", desc: "Stories worth telling", from: "#DB2777", to: "#EC4899", soft: "#FCE7F3" },
                                    { icon: "🤝", label: "Grow Your Brand", desc: "Let's get you noticed", from: "#F59E0B", to: "#F97316", soft: "#FEF3C7" },
                                    { icon: "🌟", label: "Join the Team", desc: "Become part of the story", from: "#0D9488", to: "#14B8A6", soft: "#CCFBF1" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -6 }}
                                        className="group relative bg-white rounded-2xl p-6 transition-all duration-300 cursor-default overflow-hidden"
                                        style={{ boxShadow: "0 6px 24px rgba(75, 29, 149, 0.08)" }}
                                    >
                                        {/* Gradient accent along the top */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[4px]"
                                            style={{ background: `linear-gradient(90deg, ${item.from}, ${item.to})` }}
                                        />
                                        {/* Soft corner glow */}
                                        <div
                                            className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none"
                                            style={{ background: item.from }}
                                        />
                                        <div className="relative z-10 flex items-start gap-4 justify-center lg:justify-start text-left">
                                            <span
                                                className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                                                style={{ background: item.soft }}
                                            >
                                                {item.icon}
                                            </span>
                                            <div>
                                                <h3 className="font-bold text-neutral-900 text-[15px]">{item.label}</h3>
                                                <p className="text-[12.5px] text-neutral-400 mt-1 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full lg:w-[550px] bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(76,29,149,0.05)] relative overflow-hidden border border-purple-100/50"
                        >
                            <form className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-600">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-600">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-600">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-600">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-600">What&apos;s on your mind? *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-600">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-[#fbfbfb] border border-neutral-100 rounded-xl px-5 py-4 text-neutral-900 font-medium focus:outline-none focus:border-purple-200 transition-all placeholder:text-neutral-300 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <StatefulButton
                                        className="w-full sm:w-auto font-bold py-6 px-10 shadow-xl shadow-purple-200/50"
                                        onClick={async () => {
                                            await handleSubmit();
                                        }}
                                    >
                                        Send Message
                                    </StatefulButton>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: GLOBAL PRESENCE (White Grid Theme) --- */}
            <section className="relative py-16 md:py-20 overflow-hidden bg-white">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-sm font-semibold text-purple-500 mb-4 tracking-wide"
                        >
                            🌍 Our global presence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                        >
                            <span className="text-neutral-900">Three Cities. </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-purple-400">
                                One Vision.
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-400 mt-4 text-base max-w-md mx-auto"
                        >
                            Powered by teams working across continents to deliver world-class results.
                        </motion.p>
                    </div>

                    {/* Location Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                flag: "🇺🇸",
                                city: "Tampa",
                                country: "United States",
                                lines: [
                                    "1211, Tech Blvd., #23,",
                                    "Tampa, FL 33619"
                                ],
                                accent: "from-purple-500 to-violet-500",
                                monument: (
                                    <svg viewBox="0 0 100 120" fill="none" className="w-20 h-24 md:w-24 md:h-28 opacity-[0.14] group-hover:opacity-[0.3] transition-opacity duration-500">
                                        {/* US Capitol Dome — clean minimal */}
                                        <g fill="currentColor" className="text-purple-800">
                                            {/* Flagpole + finial */}
                                            <rect x="49" y="4" width="2" height="12" />
                                            <circle cx="50" cy="3" r="2" />
                                            {/* Dome top */}
                                            <path d="M50 16C42 16 36 24 36 32H64C64 24 58 16 50 16Z" />
                                            {/* Dome drum */}
                                            <rect x="34" y="32" width="32" height="6" rx="1" />
                                            {/* Dome pillars */}
                                            <rect x="36" y="38" width="2" height="14" />
                                            <rect x="42" y="38" width="2" height="14" />
                                            <rect x="48" y="38" width="2" height="14" />
                                            <rect x="54" y="38" width="2" height="14" />
                                            <rect x="60" y="38" width="2" height="14" />
                                            {/* Cornice */}
                                            <rect x="32" y="52" width="36" height="4" rx="1" />
                                            {/* Main building body */}
                                            <rect x="20" y="56" width="60" height="30" rx="1" />
                                            {/* Windows row */}
                                            <rect x="26" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="36" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="46" y="62" width="8" height="16" rx="4" fill="white" />
                                            <rect x="58" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="68" y="62" width="6" height="10" rx="1" fill="white" />
                                            {/* Wings */}
                                            <rect x="8" y="66" width="12" height="20" rx="1" />
                                            <rect x="80" y="66" width="12" height="20" rx="1" />
                                            {/* Steps */}
                                            <rect x="16" y="86" width="68" height="4" rx="1" />
                                            <rect x="12" y="90" width="76" height="4" rx="1" />
                                            <rect x="8" y="94" width="84" height="4" rx="1" />
                                        </g>
                                    </svg>
                                )
                            },
                            {
                                flag: "🇮🇳",
                                city: "Chennai",
                                country: "India",
                                lines: [
                                    "6th Floor, Arihant Technopolis,",
                                    "Chennai, Tamil Nadu 600096"
                                ],
                                accent: "from-violet-500 to-pink-500",
                                monument: (
                                    <svg viewBox="0 0 80 120" fill="none" className="w-16 h-24 md:w-20 md:h-28 opacity-[0.14] group-hover:opacity-[0.3] transition-opacity duration-500">
                                        {/* South Indian Temple Gopuram */}
                                        <g fill="currentColor" className="text-violet-800">
                                            {/* Kalasam (pot finial) */}
                                            <ellipse cx="40" cy="6" rx="3" ry="4" />
                                            <rect x="38" y="9" width="4" height="3" />
                                            {/* Tier 1 — top */}
                                            <path d="M33 12H47L45 20H35L33 12Z" />
                                            <rect x="32" y="20" width="16" height="2" />
                                            {/* Tier 2 */}
                                            <path d="M29 22H51L49 32H31L29 22Z" />
                                            <rect x="28" y="32" width="24" height="2" />
                                            {/* Tier 3 */}
                                            <path d="M25 34H55L53 46H27L25 34Z" />
                                            <rect x="24" y="46" width="32" height="2" />
                                            {/* Tier 4 */}
                                            <path d="M21 48H59L57 62H23L21 48Z" />
                                            <rect x="20" y="62" width="40" height="2" />
                                            {/* Tier 5 — base tier */}
                                            <path d="M17 64H63L61 80H19L17 64Z" />
                                            <rect x="16" y="80" width="48" height="3" />
                                            {/* Gateway / entrance wall */}
                                            <rect x="14" y="83" width="52" height="24" />
                                            {/* Central arch doorway */}
                                            <path d="M32 107V92Q32 86 40 84Q48 86 48 92V107Z" fill="white" />
                                            {/* Side windows */}
                                            <rect x="18" y="88" width="6" height="8" rx="3" fill="white" />
                                            <rect x="56" y="88" width="6" height="8" rx="3" fill="white" />
                                            {/* Base platform */}
                                            <rect x="10" y="107" width="60" height="4" rx="1" />
                                            <rect x="6" y="111" width="68" height="3" rx="1" />
                                        </g>
                                    </svg>
                                )
                            },
                            {
                                flag: "🇬🇧",
                                city: "London",
                                country: "United Kingdom",
                                lines: [
                                    "SINC, 12-16 Addiscombe Road,",
                                    "Croydon, London CR0 0XT"
                                ],
                                accent: "from-pink-500 to-purple-500",
                                monument: (
                                    <svg viewBox="0 0 70 140" fill="none" className="w-16 h-28 md:w-20 md:h-32 opacity-[0.14] group-hover:opacity-[0.3] transition-opacity duration-500">
                                        {/* Big Ben / Elizabeth Tower */}
                                        <g fill="currentColor" className="text-pink-900">
                                            {/* Spire */}
                                            <path d="M35 2L33 12H37L35 2Z" />
                                            <rect x="33.5" y="12" width="3" height="5" />
                                            {/* Spire base ornament */}
                                            <path d="M30 17H40L38 22H32L30 17Z" />
                                            {/* Upper tower section */}
                                            <rect x="28" y="22" width="14" height="15" rx="1" />
                                            {/* Clock face section */}
                                            <rect x="24" y="37" width="22" height="4" />
                                            <rect x="22" y="41" width="26" height="28" rx="2" />
                                            {/* Clock face */}
                                            <circle cx="35" cy="55" r="10" fill="white" />
                                            <circle cx="35" cy="55" r="8.5" stroke="currentColor" strokeWidth="1" />
                                            {/* Clock hands */}
                                            <line x1="35" y1="55" x2="35" y2="48" stroke="currentColor" strokeWidth="1.2" />
                                            <line x1="35" y1="55" x2="40" y2="55" stroke="currentColor" strokeWidth="1" />
                                            <circle cx="35" cy="55" r="1.2" />
                                            {/* Below clock ornament */}
                                            <rect x="24" y="69" width="22" height="4" />
                                            {/* Main tower body */}
                                            <rect x="20" y="73" width="30" height="45" />
                                            {/* Gothic windows — row 1 */}
                                            <path d="M25 78V88Q25 76 27.5 75Q30 76 30 78V88Z" fill="white" />
                                            <path d="M33 78V88Q33 76 35 75Q37 76 37 78V88Z" fill="white" />
                                            <path d="M40 78V88Q40 76 42.5 75Q45 76 45 78V88Z" fill="white" />
                                            {/* Gothic windows — row 2 */}
                                            <path d="M25 93V103Q25 91 27.5 90Q30 91 30 93V103Z" fill="white" />
                                            <path d="M33 93V103Q33 91 35 90Q37 91 37 93V103Z" fill="white" />
                                            <path d="M40 93V103Q40 91 42.5 90Q45 91 45 93V103Z" fill="white" />
                                            {/* Base section */}
                                            <rect x="18" y="118" width="34" height="5" />
                                            <rect x="15" y="123" width="40" height="4" rx="1" />
                                            <rect x="12" y="127" width="46" height="5" rx="1" />
                                        </g>
                                    </svg>
                                )
                            }
                        ].map((loc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                                whileHover={{ y: -10 }}
                                className="group relative cursor-default"
                            >
                                {/* Card */}
                                <div className="relative bg-gradient-to-b from-purple-50/60 to-white border border-purple-100/60 rounded-3xl p-8 pt-10 h-full flex flex-col shadow-[0_4px_40px_rgba(124,58,237,0.06)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.14)] hover:border-purple-200/80 transition-all duration-500 overflow-hidden">
                                    {/* Gradient Accent at Top — always on, grows on hover */}
                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[4px] w-20 group-hover:w-full rounded-b-full bg-gradient-to-r ${loc.accent} transition-all duration-700`} />

                                    {/* Monument Illustration — Top Right */}
                                    <div className="absolute top-4 right-4">
                                        {loc.monument}
                                    </div>

                                    {idx === 0 && (
                                        <span className="absolute top-5 left-8 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.16em] text-white px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 shadow-md">
                                            HQ
                                        </span>
                                    )}

                                    {/* Flag + City */}
                                    <div className="flex items-start gap-4 mb-5 relative z-10 justify-center md:justify-start">
                                        <span className="text-4xl mt-1 group-hover:scale-110 transition-transform duration-300 inline-block">{loc.flag}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">{loc.city}</h3>
                                            <p className="text-sm text-purple-600 font-semibold mt-0.5">{loc.country}</p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className={`h-[2px] w-12 bg-gradient-to-r ${loc.accent} mb-5 rounded-full group-hover:w-2/3 transition-all duration-700 mx-auto md:mx-0`} />

                                    {/* Address */}
                                    <div className="space-y-0.5 flex-1 relative z-10 text-center md:text-left">
                                        {loc.lines.map((line, lineIdx) => (
                                            <p key={lineIdx} className="text-neutral-500 text-sm font-medium leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="mt-6 pt-5 border-t border-neutral-50 flex items-center gap-2.5 relative z-10 justify-center md:justify-start">
                                        <motion.div
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                                            transition={{ repeat: Infinity, duration: 2, delay: idx * 0.4 }}
                                            className="w-2 h-2 rounded-full bg-emerald-400"
                                        />
                                        <span className="text-xs text-neutral-400 font-medium">Active office</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                senderName={submittedName}
            />
        </main>
    );
}
