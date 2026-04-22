"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100"
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => router.push("/")}
                    className="relative z-10 block cursor-pointer transition-transform hover:scale-105 active:scale-95"
                    role="link"
                >
                    <Image
                        src="/caimue-logo.png"
                        alt="Caimue - Go to homepage"
                        width={180}
                        height={60}
                        className="h-10 md:h-12 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Navigation + Contact */}
                <div className="flex items-center gap-6">
                    <Link href="/about" className="hidden md:block text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">About</Link>
                    <Link
                    href="/contact"
                    className="btn-primary text-sm px-6 py-2"
                >
                    Contact
                </Link>
                </div>
            </div>
        </motion.header>
    );
}
