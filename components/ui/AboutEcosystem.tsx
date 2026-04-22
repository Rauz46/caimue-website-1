"use client";

import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
    {
        id: 1,
        name: "Alex",
        designation: "Director",
        image: "/team/image.png",
        color: "#FCD34D",
    },
    {
        id: 2,
        name: "Caitlin",
        designation: "Producer",
        image: "/team/smile 2.png",
        color: "#EC4899",
    },
    {
        id: 3,
        name: "Jimmy",
        designation: "Lead Editor",
        image: "/team/smile 1.png",
        color: "#F9A8D4",
    },
    {
        id: 4,
        name: "Shanov",
        designation: "Cinematographer",
        image: "/team/image (1).jpg",
        color: "#10B981",
    },
    {
        id: 5,
        name: "Sonya",
        designation: "Strategy",
        image: "/team/ghkl.jpg",
        color: "#3B82F6",
    },
    {
        id: 6,
        name: "Ashley",
        designation: "Creative Tech",
        image: "/team/ads.png",
        color: "#F97316",
    },
];

export function AboutEcosystem() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                CAIMUE
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <TeamMemberIcon member={team[0]} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <TeamMemberIcon member={team[1]} />
            </OrbitingCircles>

            {/* Outer Circles (fixed radius) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={30}
                reverse
            >
                <TeamMemberIcon member={team[2]} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={30}
                delay={15}
                reverse
            >
                <TeamMemberIcon member={team[3]} />
            </OrbitingCircles>

             {/* Outermost Circles */}
             <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={260}
                duration={40}
            >
                <TeamMemberIcon member={team[4]} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={260}
                duration={40}
                delay={20}
            >
                <TeamMemberIcon member={team[5]} />
            </OrbitingCircles>
        </div>
    );
}

function TeamMemberIcon({ member }: { member: (typeof team)[0] }) {
    return (
        <div className="relative group cursor-pointer">
             <div 
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform group-hover:scale-110"
                style={{ backgroundColor: member.color }}
            >
                <Image
                    src={member.image}
                    alt={member.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover mix-blend-overlay hover:mix-blend-normal transition-all"
                />
            </div>
            {/* Minimal label that appears on hover if tooltip isn't enough */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold bg-white/80 px-2 py-0.5 rounded shadow-sm pointer-events-none">
                {member.name}
            </div>
        </div>
    );
}
