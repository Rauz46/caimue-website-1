"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const next = window.scrollY > 50;
            setIsScrolled(prev => (prev === next ? prev : next));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // the current page (or a page under it) is marked in the menu
    const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

    const navLinks = [
        { href: "/originals", label: "Originals" },
        { href: "/for-brands", label: "For Brands" },
        { href: "/for-artists", label: "For Artists" },
        { href: "/about", label: "About" },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-4 shadow-sm border-b border-gray-100"
            >
                {/* logo left, page links centred, Contact right */}
                <div className="container flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
                    {/* Logo */}
                    {/* A real link, so Next prefetches the homepage; hover is a quiet fade, no scaling */}
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="cm-logo-link relative z-10 block justify-self-start w-fit"
                        aria-label="Caimue - Go to homepage"
                    >
                        <Image
                            src="/logos/finalized-logo/Caimue-logo.svg"
                            alt="Caimue"
                            width={400}
                            height={104}
                            className="h-9 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop page links, centred */}
                    <nav aria-label="Main" className="hidden md:flex items-center gap-1 justify-self-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className="cm-nav-link"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-5 justify-self-end">
                        {/* Wrapper div enforces mobile hiding even if .btn-primary sets its own display */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                aria-current={isActive("/contact") ? "page" : undefined}
                                className="btn-primary cm-nav-cta inline-flex text-sm px-6 py-2"
                            >
                                Contact
                            </Link>
                        </div>

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
                        <div className="container pt-6 pb-8 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    aria-current={isActive(link.href) ? "page" : undefined}
                                    className="cm-nav-mlink"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                aria-current={isActive("/contact") ? "page" : undefined}
                                className="cm-nav-mlink"
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
