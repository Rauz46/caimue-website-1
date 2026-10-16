"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { NAV_START } from "@/lib/intro-timing";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * Navigation: the mark at the left; the links and one pill at the
 * right. Transparent, always — it never gets a bar behind it and never
 * changes colour on scroll. It gets out of the way instead: scrolling
 * down slides it off the top, scrolling back up brings it back.
 *
 * COLOUR. Ink on white pages; paper over the homepage hero's violet
 * (CSS: `body:has(.hero-track)`, in sections.css). No JS decides that.
 *
 * ENTRANCE. Fades in on the shared intro playhead (NAV_START), as the
 * loader's star unmounts over a page of the same violet — the nav is
 * the first thing that visibly arrives, so it arrives rather than pops.
 */
export function Navbar() {
  const [hidden, setHidden] = useState(false);
  // Home only: the bar turns solid white once the purple hero has gone by.
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  // The menu remembers the route it was opened on, so a route change
  // closes it by construction.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Hide only on a real downward move past the top; any upward
        // move brings it back.
        setHidden(y > lastY && y > 120);
        const hero = document.querySelector<HTMLElement>(".cx-hero");
        setSolid(hero ? y > hero.offsetHeight - 80 : false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href ? ("page" as const) : undefined;

  const links = (
    <>
      {nav.primary.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isCurrent(link.href)}
          className="nav-link"
        >
          {link.label}
        </Link>
      ))}
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noreferrer noopener"
        className="nav-link"
      >
        Instagram
      </a>
      <a
        href={site.social.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="nav-link"
      >
        LinkedIn
      </a>
    </>
  );

  return (
    <motion.header
      className={cn("site-header u-fluid", hidden && !open && "site-header--hidden", solid && "site-header--solid")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: reduced ? 0 : NAV_START, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="site-header__inner">
        <Link href="/" className="nav-logo" aria-label={site.name}>
          <Wordmark className="nav-logo-img" />
        </Link>

        <div className="site-header__right">
          <nav className="nav-links">{links}</nav>

          <Link
            href={nav.cta.href}
            aria-current={isCurrent(nav.cta.href)}
            className="nav-cta"
          >
            {nav.cta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpenAt(open ? null : pathname)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="menu-btn flex h-[1.5em] w-[1.5em] flex-col items-center justify-center gap-[0.3em] md:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-full bg-current transition-transform duration-300",
                open && "translate-y-[0.35em] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-full bg-current transition-transform duration-300",
                open && "-translate-y-[0.35em] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav md:hidden">
          <div className="flex flex-col items-start gap-[1em]">
            {links}
            <Link
              href={nav.cta.href}
              aria-current={isCurrent(nav.cta.href)}
              className="nav-link"
            >
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
