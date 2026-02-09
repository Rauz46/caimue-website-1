"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
            className="fixed top-0 left-0 right-0 z-40 bg-white py-4 shadow-sm border-b border-gray-100"
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                    <Image
                        src="/caimue-logo.png"
                        alt="Caimue"
                        width={180}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    className="btn-primary text-sm"
                >
                    Contact
                </Link>
            </div>
        </motion.header>
    );
}
