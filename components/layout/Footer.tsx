"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
    platforms: [
        { href: "/platforms/teqthots", label: "TeqThots" },
        { href: "/platforms/funshortz", label: "FunShortz" },
        { href: "/platforms/short-films", label: "Short Films" },
    ],
    company: [
        { href: "/about", label: "About" },
        { href: "/team", label: "Team" },
        { href: "/process", label: "How We Work" },
        { href: "/collaborate", label: "Collaborate" },
    ],
    connect: [
        { href: "/creators", label: "For Creators" },
        { href: "/brands", label: "For Brands" },
        { href: "mailto:hello@caimue.com", label: "Contact" },
    ],
};

const socialLinks = [
    { href: "https://instagram.com/caimue", label: "Instagram", icon: "IG" },
    { href: "https://youtube.com/@caimue", label: "YouTube", icon: "YT" },
    { href: "https://linkedin.com/company/caimue", label: "LinkedIn", icon: "LI" },
];

export function Footer() {
    return (
        <footer className="border-t border-[var(--card-border)] bg-[var(--background-secondary)]">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Logo & Tagline */}
                    <div className="lg:col-span-2">
                        <Link href="/">
                            <Image
                                src="/logos/caimue-logo.png"
                                alt="Caimue"
                                width={140}
                                height={45}
                                className="h-10 w-auto object-contain mb-4"
                            />
                        </Link>
                        <p className="text-[var(--foreground-muted)] max-w-xs leading-relaxed text-sm">
                            An AI-first production house building original stories at scale.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {/* Instagram */}
                            <a href="https://instagram.com/caimue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com/@caimue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://linkedin.com/company/caimue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Platforms */}
                    <div>
                        <h4 className="label mb-4 text-[var(--foreground)]">Platforms</h4>
                        <ul className="space-y-2">
                            {footerLinks.platforms.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="label mb-4 text-[var(--foreground)]">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="label mb-4 text-[var(--foreground)]">Connect</h4>
                        <ul className="space-y-2">
                            {footerLinks.connect.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--foreground-muted)] text-sm">
                        © {new Date().getFullYear()} Caimue. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-[var(--foreground-muted)]">
                        <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
