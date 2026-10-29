"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CaimueLogoBounce } from "@/components/caimue-logo-bounce/CaimueLogoBounce";
import { MARK_START, MARK_HOLD } from "@/lib/intro-timing";

/** Tells the page the cover has started to lift (Hero and Navbar start on it). */
function signalFill() {
  document.documentElement.dataset.introFill = "1";
  window.dispatchEvent(new Event("caimue:fill"));
}

/**
 * The intro (Oct 2026): on a white cover the pink dot bounces the caimue
 * logo into place (caimue-logo-bounce); the logo steps back and the white
 * dissolves into the dark hero, where the hero's own words rise. Only one
 * set of words ever shows. Styled inline: it must not depend on a
 * stylesheet arriving.
 */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const cover = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      signalFill();
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => {
      signalFill();
      setDone(true);
    }, 12000);
    return () => window.clearTimeout(t);
  }, []);

  const afterLogo = () => {
    const sheet = cover.current;
    const mark = logo.current;
    if (!sheet || !mark || started.current) return;
    started.current = true;

    const tl = gsap.timeline({ delay: MARK_HOLD, onComplete: () => setDone(true) });
    // the logo steps back, the white dissolves into the dark hero, and the hero takes over
    tl.to(mark, { y: -30, scale: 0.8, autoAlpha: 0, filter: "blur(6px)", duration: 0.6, ease: "power3.in" })
      .add(signalFill, "-=0.15")
      .to(sheet, { backgroundColor: "rgba(255,255,255,0)", duration: 0.9, ease: "power2.inOut" }, "<");
  };

  if (done) return null;

  return (
    <div ref={cover} aria-hidden style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none", background: "#ffffff" }}>
      <div
        ref={logo}
        style={{ position: "absolute", left: "50%", top: "46%", width: "min(50vw, 560px)", translate: "-50% -50%", willChange: "transform" }}
      >
        <CaimueLogoBounce delay={MARK_START} dropHeight={900} onComplete={afterLogo} />
      </div>
    </div>
  );
}
