"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HeroGrid } from "@/components/effects/HeroGrid";

type TeamMember = {
    name: string;
    role: string;
    image: string;
    color: string;
    position: { top?: string; left?: string; right?: string; bottom?: string };
    pillPos: string;
};

const team: TeamMember[] = [
    {
        name: "Alex",
        role: "Director",
        image: "/team/avatar-1.png",
        color: "#FCD34D", // Yellow
        position: { top: "15%", left: "15%" },
        pillPos: "-top-6 left-0"
    },
    {
        name: "Caitlin",
        role: "Producer",
        image: "/team/avatar-2.png",
        color: "#EC4899", // Pink
        position: { top: "25%", right: "20%" },
        pillPos: "-top-4 right-0"
    },
    {
        name: "Jimmy",
        role: "Lead Editor",
        image: "/team/avatar-1.png",
        color: "#F9A8D4", // Light Pink
        position: { top: "45%", left: "25%" },
        pillPos: "-top-6 right-0"
    },
    {
        name: "Shanov",
        role: "Cinematographer",
        image: "/team/avatar-1.png", // specific male avatar
        color: "#10B981", // Green
        position: { top: "50%", right: "25%" },
        pillPos: "-top-6 left-2"
    },
    {
        name: "Sonya",
        role: "Strategy",
        image: "/team/avatar-2.png",
        color: "#3B82F6", // Blue
        position: { top: "65%", left: "12%" },
        pillPos: "-top-6 left-4"
    },
    {
        name: "Ashley",
        role: "Creative Tech",
        image: "/team/avatar-1.png",
        color: "#F97316", // Orange
        position: { top: "75%", right: "35%" },
        pillPos: "-top-5 right-2"
    },
];

export default function TeamPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center pt-32 pb-8 relative overflow-hidden">
                <HeroGrid />
                <div className="container text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="label text-[var(--accent)] mb-4 block"
                    >
                        Our Team
                    </motion.span>

                    <h1 className="max-w-3xl mx-auto mb-6 flex flex-wrap justify-center gap-x-4">
                        <AnimatedText
                            text="The People"
                            delay={0.4}
                            className="text-[var(--foreground)]"
                        />
                        <AnimatedText
                            text="Behind the Stories"
                            delay={0.8}
                            className="text-[var(--caimue-purple)]"
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto"
                    >
                        A small but mighty crew of filmmakers, technologists, and storytellers
                        building the future of regional content.
                    </motion.p>
                </div>
            </section>

            {/* Floating Avatars Section */}
            <section className="py-12">
                <div className="container">
                    <div className="relative min-h-[600px] md:min-h-[700px]">
                        {/* Background decoration */}
                        {/* Floating Avatars & Scribbles */}
                        <FloatingScribbles />

                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                                className="absolute"
                                style={{
                                    top: member.position.top,
                                    left: member.position.left,
                                    right: member.position.right,
                                }}
                            >
                                <div className="relative group cursor-pointer">
                                    {/* Name Pill */}
                                    <motion.div
                                        className={`absolute ${member.pillPos} z-20 bg-gray-100 px-4 py-1.5 rounded-xl shadow-lg border border-white/50`}
                                        whileHover={{ y: -2 }}
                                    >
                                        <span className="font-bold text-sm text-gray-800">{member.name}</span>
                                    </motion.div>

                                    {/* Colored Circle Avatar */}
                                    <div
                                        className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: member.color }}
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={144}
                                            height={144}
                                            className="w-full h-full object-cover mix-blend-overlay opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
                                        />
                                        {/* Fallback visual if image fails or blend mode needs assist */}
                                        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid for Mobile */}
            <section className="section md:hidden">
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3"
                                    style={{ backgroundColor: member.color }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-medium text-sm">{member.name}</h3>
                                <p className="text-[var(--foreground-muted)] text-xs">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Process Section (Replaces Values) */}
            <section className="section overflow-hidden">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="label text-[var(--accent)] mb-4 block">Our Workflow</span>
                        <h2>Chaos Managed. Creativity Unleashed.</h2>
                    </motion.div>

                    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-gray-100 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden group">
                        {/* Placeholder Team Photo Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 font-bold text-4xl opacity-20 uppercase tracking-widest text-center">
                                Team Workflow Photo<br /><span className="text-sm">(User to Upload Team Shot)</span>
                            </span>
                        </div>
                        {/* Or use unoptimized placeholder if needed: <Image src="/team/workflow-bg.jpg" fill className="object-cover opacity-50" /> */}

                        {/* Overlay Process Tags */}

                        {/* 1. Trello Card - Left */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-[30%] left-[5%] bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transform -rotate-6"
                        >
                            <span className="font-bold">Trello</span>
                        </motion.div>

                        {/* 2. In Progress - Bottom Left */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-[20%] left-[15%] bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg font-bold"
                        >
                            IN PROGRESS
                        </motion.div>

                        {/* 3. Revision - Top Center */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute top-[15%] left-[40%] bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg font-bold uppercase"
                        >
                            REVISION
                        </motion.div>

                        {/* 4. For Checking - Top Right */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-[10%] right-[20%] bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg font-bold uppercase"
                        >
                            FOR CHECKING
                        </motion.div>

                        {/* 5. In Review - Bottom Center */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.0 }}
                            className="absolute bottom-[10%] left-[55%] bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg font-bold uppercase"
                        >
                            IN REVIEW
                        </motion.div>

                        {/* 6. Approved - Bottom Right */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-[25%] right-[5%] bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg font-bold uppercase transform rotate-2"
                        >
                            APPROVED!
                        </motion.div>

                        {/* Connection Lines (Simulated with SVGs) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-800 stroke-2 text-gray-800" fill="none">
                            {/* Line from Trello to In Progress */}
                            <path d="M100,200 C150,200 150,400 200,450" strokeDasharray="5,5" className="opacity-40" />
                            {/* Line from Revision to Center */}
                            <path d="M500,150 L550,250" className="opacity-40" markerEnd="url(#arrow)" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section bg-[var(--background-secondary)]">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6">Want to Join the Team?</h2>
                        <p className="text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            We're always looking for talented filmmakers, editors, and creative technologists
                            who want to build the future of regional content.
                        </p>
                        <a href="mailto:careers@caimue.com" className="btn-primary">
                            Get in Touch →
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
