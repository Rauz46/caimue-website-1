"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
    { href: "/brands", label: "Brands" },
    { href: "/creators", label: "Creators" },
    { href: "/platforms", label: "Platforms" },
    { href: "/about", label: "About" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
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

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-5 py-2 text-sm font-semibold text-[var(--caimue-purple)] hover:text-[var(--caimue-purple-dark)] transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-3">

                        <Link
                            href="/contact"
                            className="btn-primary text-sm"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex lg:hidden items-center gap-3">

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-10 p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif font-bold text-[var(--caimue-purple)] hover:text-[var(--caimue-purple-dark)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary mt-4"
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
