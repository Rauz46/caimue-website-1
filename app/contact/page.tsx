"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BrandGround } from "@/components/ui/BrandGround";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { OfficeCards } from "@/components/contact/OfficeCards";
import "./contact.css";


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
            {/* --- SECTION 1: HERO (our design: brand ground, grid, scribbles, Urbanist) --- */}
            <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16">
                <BrandGround className="z-0" />
                <HeroGrid className="opacity-40 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-noise opacity-10 z-10 pointer-events-none" />
                <FloatingScribbles className="scale-75 origin-center opacity-80" />

                <div className="container mx-auto px-4 relative z-30 text-center flex flex-col items-center justify-center">
                    <motion.h1 className="cm-in font-serif text-4xl! md:text-5xl! lg:text-6xl! font-bold !text-white leading-[1.15]! mb-0! tracking-tight">
                        Let&apos;s Collaborate
                    </motion.h1>
                    <p className="cm-in mt-4 text-base md:text-lg !text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
                        Partner with a video-first marketing agency. Let&apos;s create stories that matter.
                    </p>
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

            {/* --- SECTION 3: THREE CITIES (our design: one heading size, 18px line, calm cards) --- */}
            <section className="cv-auto relative py-16 md:py-20 overflow-hidden bg-white">
                <div className="ct-grid-lines ct-grid-lines--soft" aria-hidden />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="cm-rise cm-h2 font-serif">Three Cities. One Vision.</h2>
                        <p className="mt-5 text-[#4A3F5C] text-base md:text-lg leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
                            Powered by teams working across continents to deliver world-class results.
                        </p>
                    </div>

                    <OfficeCards />
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
