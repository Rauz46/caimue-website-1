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

/* how long the head holds alone on the plain cover: about the time it takes to read six words */
const READ_HOLD = 1.6;

/**
 * The intro (Oct 2026):
 *   1. on a white cover the pink dot bounces the caimue logo into place;
 *   2. the logo steps back and the hero's head appears alone on the plain
 *      white, in near-black ink, set exactly where the hero shows it, and
 *      holds for a reading beat;
 *   3. the white wipes upward off the dark hero. The real head is shown
 *      underneath in the same place, so the words turn from ink to white
 *      exactly at the moving edge.
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

    let clone: HTMLElement | null = null;
    if (hero) {
      const r = hero.getBoundingClientRect();
      clone = hero.cloneNode(true) as HTMLElement;
      clone.removeAttribute("aria-label");
      clone.setAttribute("aria-hidden", "true");
      clone.style.visibility = "visible";
      Object.assign(clone.style, {
        position: "fixed",
        left: `${r.left}px`,
        top: `${r.top}px`,
        width: `${r.width}px`,
        margin: "0",
        textAlign: "left",
        color: "#110a1f",
        textShadow: "none",
      });
      const tone = clone.querySelector<HTMLElement>(".hx-tone");
      if (tone) tone.style.color = "#110a1f";
      clone.querySelectorAll<SVGElement>(".hx-under").forEach((u) => u.remove());
      sheet.appendChild(clone);
      // the words rise in, then hold alone on the plain page
      tl.from(clone.querySelectorAll(".hx-line > span"), { yPercent: 110, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, 0.3);
      tl.to({}, { duration: READ_HOLD });
    }

    // the white wipes up off the dark hero. The real head is shown underneath first, so the
    // words turn from ink to white exactly at the moving edge (no grey wash, no second set)
    tl.add(() => {
      if (hero) hero.style.visibility = "";
      signalFill();
    });
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
