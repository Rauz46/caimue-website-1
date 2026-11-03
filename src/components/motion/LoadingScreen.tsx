"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { CaimueLogoBounce } from "@/components/caimue-logo-bounce/CaimueLogoBounce";
import { MARK_START, MARK_HOLD } from "@/lib/intro-timing";

/** Tells the page the cover has started to lift (Hero starts on it). */
function signalFill() {
  document.documentElement.dataset.introFill = "1";
  window.dispatchEvent(new Event("caimue:fill"));
}


/**
 * The intro (Oct 2026):
 *   1. on a white cover the pink dot bounces the caimue logo into place;
 *   2. the logo steps back and the white wipes straight up off the dark hero
 *      (3 Nov 2026: no headline on the cover, the owner wants logo then hero).
 * Each beat starts from the one before. Styled inline: it must not depend
 * on a stylesheet arriving.
 */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const cover = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const isHome = usePathname() === "/";

  // the intro plays whenever the homepage is loaded; other pages have no cover to wait for
  useLayoutEffect(() => {
    if (!isHome) {
      signalFill();
      setDone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (done) return;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = document.querySelector<HTMLElement>(".hx-h1");
    if (hero && !reduced) hero.style.visibility = "hidden";
    const release = () => {
      if (hero) hero.style.visibility = "";
      signalFill();
      setDone(true);
    };
    if (reduced) {
      release();
      return;
    }
    const t = window.setTimeout(release, 14000);
    return () => window.clearTimeout(t);
  }, []);

  const afterLogo = () => {
    const sheet = cover.current;
    const mark = logo.current;
    if (!sheet || !mark || started.current) return;
    started.current = true;
    const hero = document.querySelector<HTMLElement>(".hx-h1");

    const tl = gsap.timeline({
      delay: MARK_HOLD,
      onComplete: () => {
        if (hero) hero.style.visibility = "";
        setDone(true);
      },
    });
    tl.to(mark, { y: -30, autoAlpha: 0, filter: "blur(6px)", duration: 0.55, ease: "power3.in" });

    // straight from the logo to the hero: the white wipes up off it as the mark leaves (owner: no headline in the intro)
    tl.add(() => {
      if (hero) hero.style.visibility = "";
      signalFill();
    }, "-=0.2");
    tl.fromTo(sheet, { clipPath: "inset(0% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.05, ease: "expo.inOut" });
  };

  if (done || !isHome) return null;

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
