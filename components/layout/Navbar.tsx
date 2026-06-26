"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const channelLinks = [
        { href: "/channels/ennitto", label: "Ennitto" },
        { href: "/channels/ennamo", label: "Ennamo" },
        { href: "/channels/teqthots", label: "TeqThots" },
    ];

    const navLinks = [
        { href: "/about", label: "About" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100"
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <div
                        onClick={() => { router.push("/"); setMobileOpen(false); }}
                        className="relative z-10 block cursor-pointer transition-transform hover:scale-105 active:scale-95"
                        role="link"
                    >
                        <Image
                            src="/Caimue final logo.png"
                            alt="Caimue - Go to homepage"
                            width={180}
                            height={60}
                            className="h-10 md:h-12 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop nav + Contact */}
                    <div className="flex items-center gap-6">
                        {/* Channels dropdown */}
                        <div className="hidden md:block relative group">
                            <button className="flex items-center gap-1 text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors">
                                Channels
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-48 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 flex flex-col">
                                    {channelLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="px-4 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-[var(--caimue-purple)] hover:bg-purple-50 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hidden md:block text-[15px] font-bold text-gray-800 hover:text-[var(--caimue-purple)] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm px-6 py-2">
                            Contact
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg md:hidden"
                    >
                        <div className="container py-4 flex flex-col gap-1">
                            {/* Channels group */}
                            <span className="px-4 pt-2 pb-1 text-[12px] font-bold uppercase tracking-wider text-gray-400 text-center">
                                Channels
                            </span>
                            {channelLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 px-4 rounded-xl text-[16px] font-normal text-gray-800 hover:text-[var(--caimue-purple)] hover:bg-purple-50 transition-colors text-center"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-gray-100 my-2" />
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 px-4 rounded-xl text-[16px] font-normal text-gray-800 hover:text-[var(--caimue-purple)] hover:bg-purple-50 transition-colors text-center"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="block py-3 px-4 rounded-xl text-[16px] font-normal text-gray-800 hover:text-[var(--caimue-purple)] hover:bg-purple-50 transition-colors text-center"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
