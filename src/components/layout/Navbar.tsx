"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";
import { NAV_HEIGHT } from "@/lib/layout";




export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // rAF-coalesced so a fast wheel never queues more than one state write.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        style={{ height: NAV_HEIGHT }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center border-b bg-white transition-shadow duration-300",
          scrolled
            ? "border-black/[0.07] shadow-[0_2px_14px_-6px_rgba(21,10,38,0.14)]"
            : "border-transparent",
        )}
      >
        <div className="container flex items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            aria-label={`${site.name} — home`}
          >
            <Image
              src={site.logo}
              alt={site.name}
              width={200}
              height={70}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          <div className="flex items-center gap-6 sm:gap-8">
            {nav.primary.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hidden text-[0.95rem] font-bold transition-colors duration-200 md:block",
                  pathname === link.href
                    ? "text-violet"
                    : "text-[#1f2937] hover:text-violet",
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={nav.cta.href}
              className="hidden items-center justify-center rounded-full px-8 py-3 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_-8px_rgba(124,58,237,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgba(124,58,237,0.8)] sm:inline-flex"
              style={{
                background: "linear-gradient(100deg, #8b5cf6 0%, #7c3aed 100%)",
              }}
            >
              {nav.cta.label}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1f2937] transition-colors hover:bg-violet-wash md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Reading progress. Pure CSS scroll-driven timeline — no scroll
            handler, runs on the compositor. */}
        <span
          className="scroll-progress absolute inset-x-0 bottom-0 h-[2px] origin-left"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #e0409c, #f4622c)",
          }}
          aria-hidden
        />
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="ground-hero absolute inset-0"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.45, ease: easeOutExpo, delay: 0.05 }}
              className="relative flex h-full flex-col justify-center gap-2 px-8"
              style={{ paddingTop: NAV_HEIGHT }}
            >
              {nav.primary.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: easeOutExpo,
                    delay: 0.1 + i * 0.06,
                  }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-4 font-display text-3xl font-extrabold tracking-tight text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: easeOutExpo,
                  delay: 0.1 + nav.primary.length * 0.06,
                }}
                className="mt-8"
              >
                <Link
                  href={nav.cta.href}
                  className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-bold text-violet-deep"
                >
                  {nav.cta.label}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
