"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * Navigation: the mark at the left, the links centred, one pill at the
 * right, on a floating white bar.
 *
 * ENTRANCE (Oct 2026): last, after the hero has arrived (caimue:hero-done).
 * The bar drops in from above the top edge; its contents settle in a stagger.
 */
export function Navbar() {
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    // the bar comes in last, once the hero has arrived (straight away on later pages)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.heroDone) {
      el.dataset.nav = "shown";
      return;
    }
    // it drops in from above the top edge, and its contents settle in a quick stagger
    let tl: gsap.core.Timeline | null = null;
    const show = () => {
      if (el.dataset.nav === "shown") return;
      const kids = el.querySelectorAll(".nav-logo, .nav-link, .nav-cta, .menu-btn");
      tl = gsap.timeline({ onComplete: () => gsap.set(el, { clearProps: "transform" }) });
      tl.set(el, { yPercent: -160 })
        .add(() => (el.dataset.nav = "shown"))
        .to(el, { yPercent: 0, duration: 0.9, ease: "expo.out" })
        .fromTo(kids, { y: -8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.04, ease: "power3.out" }, 0.2);
    };
    window.addEventListener("caimue:hero-done", show, { once: true });
    const safety = window.setTimeout(show, 15000);
    return () => {
      window.removeEventListener("caimue:hero-done", show);
      window.clearTimeout(safety);
      tl?.kill();
    };
  }, []);

  const isCurrent = (href: string) => (pathname === href ? ("page" as const) : undefined);

  const links = (
    <>
      {nav.primary.map((link) => (
        <Link key={link.href} href={link.href} aria-current={isCurrent(link.href)} className="nav-link">
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="site-header u-fluid">
      <div className="site-header__inner" ref={bar} data-nav="hidden">
        <Link href="/" className="nav-logo" aria-label={site.name}>
          <Wordmark className="nav-logo-img" />
        </Link>

        <div className="site-header__right">
          <nav className="nav-links">{links}</nav>

          <Link href={nav.cta.href} aria-current={isCurrent(nav.cta.href)} className="nav-cta">
            {nav.cta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpenAt(open ? null : pathname)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="menu-btn flex h-[1.5em] w-[1.5em] flex-col items-center justify-center gap-[0.3em] md:hidden"
          >
            <span className={cn("block h-[2px] w-full bg-current transition-transform duration-300", open && "translate-y-[0.35em] rotate-45")} />
            <span className={cn("block h-[2px] w-full bg-current transition-transform duration-300", open && "-translate-y-[0.35em] -rotate-45")} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav md:hidden">
          <div className="flex flex-col items-start gap-[1em]">
            {links}
            <Link href={nav.cta.href} aria-current={isCurrent(nav.cta.href)} className="nav-link">
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
