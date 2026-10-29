"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/brand/Wordmark";

/* the island at rest, as on the iPhone: a 126 x 37 black capsule */
const ISLAND_W = 126;
const ISLAND_H = 37;

/**
 * A simple damped spring (iOS-style: response ~0.5 s, a touch of
 * overshoot). Calls onFrame with the spring's value from 0 towards 1.
 */
function spring(onFrame: (v: number) => void, onDone: () => void, stiffness = 210, damping = 20) {
  let x = 0;
  let v = 0;
  let last = performance.now();
  let raf = 0;
  const step = (now: number) => {
    const dt = Math.min(0.032, (now - last) / 1000);
    last = now;
    const a = -stiffness * (x - 1) - damping * v;
    v += a * dt;
    x += v * dt;
    onFrame(x);
    if (Math.abs(x - 1) < 0.0005 && Math.abs(v) < 0.0005) {
      onFrame(1);
      onDone();
      return;
    }
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

/**
 * Navigation: the mark at the left, the links centred, one pill at the
 * right, on a floating white bar.
 *
 * ENTRANCE (Oct 2026): the Dynamic Island. A small black capsule appears
 * at the top centre, springs open (with the island's slight overshoot and
 * stretch) to the bar's full size, and the black dissolves into the white
 * bar as its contents fade in.
 */
export function Navbar() {
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const bar = useRef<HTMLDivElement>(null);
  const island = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = bar.current;
    const isl = island.current;
    if (!el || !isl) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => {
      el.dataset.intro = "done";
    };
    if (reduced) {
      finish();
      return;
    }
    let stop: (() => void) | undefined;
    let t = 0;
    const run = () => {
      const W = el.offsetWidth;
      const H = el.offsetHeight;
      const ix = Math.max(0, (W - ISLAND_W) / 2);
      const iy = Math.max(0, (H - ISLAND_H) / 2);
      el.dataset.intro = "island";
      isl.style.clipPath = `inset(${iy}px ${ix}px round 999px)`;
      isl.style.opacity = "1";
      isl.animate([{ opacity: 0, transform: "scale(.6)" }, { opacity: 1, transform: "scale(1)" }], {
        duration: 260,
        easing: "cubic-bezier(.2,.9,.3,1.2)",
      });
      window.setTimeout(() => {
        stop = spring(
          (p) => {
            const q = Math.min(1, p);
            isl.style.clipPath = `inset(${iy * (1 - q)}px ${ix * (1 - q)}px round 999px)`;
            // past the target the capsule stretches a little, like the island does
            const over = Math.max(0, p - 1);
            isl.style.transform = `scale(${1 + over * 0.5}, ${1 + over * 0.25})`;
          },
          () => {
            el.dataset.intro = "open";
            // the contents rise out of a blur one after another: logo, links, then the button
            const items = [
              el.querySelector(".nav-logo"),
              ...Array.from(el.querySelectorAll(".nav-links .nav-link")),
              el.querySelector(".nav-cta"),
            ].filter(Boolean) as HTMLElement[];
            items.forEach((it, i) =>
              it.animate(
                [
                  { opacity: 0, transform: "translateY(14px)", filter: "blur(8px)" },
                  { opacity: 1, transform: "none", filter: "blur(0)" },
                ],
                { duration: 700, delay: 80 + i * 70, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" },
              ),
            );
            window.setTimeout(finish, 1100);
          },
        );
      }, 220);
    };
    // the island appears as the intro window fills the screen (straight away on later pages)
    const go = () => (t = window.setTimeout(run, 150));
    if (document.documentElement.dataset.introFill) go();
    else window.addEventListener("caimue:fill", go, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("caimue:fill", go);
      stop?.();
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
      <div className="site-header__inner" ref={bar} data-intro="wait">
        <span className="nav-island" ref={island} aria-hidden />
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
