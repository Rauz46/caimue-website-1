"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

/**
 * The site's motion system, ported from the reference implementation.
 *
 * Eases and durations are the reference's own, read out of its GSAP source.
 * The overall feel is springy rather than linear — its signature is
 * `elastic.out(1, 0.72)`, so reveals here use `back.out` and elastic rather
 * than a flat power curve.
 *
 * ARCHITECTURAL RULE: every reveal uses `gsap.from()`. Elements rest VISIBLE
 * in CSS; GSAP animates them away and back. A failure here cannot blank the
 * page.
 *
 * TIMING RULE: nothing splits text until `document.fonts.ready`. SplitText
 * measures line breaks at call time — run it against the fallback face and it
 * freezes those (much narrower) widths into the masks, which shatters a large
 * headline into fragments.
 */
export function Animator() {
  const pathname = usePathname();

  useEffect(() => {
    CustomEase.create("osmo", "0.625, 0.05, 0, 1");
    CustomEase.create("path-ease", "0.78, 0.18, 0.18, 1");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    // Wait for the real faces before measuring anything.
    const start = async () => {
      try {
        await document.fonts?.ready;
      } catch {
        /* fonts API unavailable — proceed with whatever is loaded */
      }
      if (cancelled) return;

      ctx = gsap.context(() => {
        const springy = "back.out(1.6)";

        /* ---------------- headings, split to lines ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-anim='lines']").forEach((el) => {
          const split = new SplitText(el, {
            type: "lines",
            linesClass: "split-line",
            mask: "lines",
          });

          gsap.from(split.lines, {
            yPercent: 118,
            duration: 1,
            ease: "osmo",
            stagger: 0.09,
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        /* ---------------- simple blocks ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-anim='fade']").forEach((el) => {
          gsap.from(el, {
            y: 30,
            autoAlpha: 0,
            duration: 0.9,
            ease: springy,
            delay: Number(el.dataset.animDelay ?? 0),
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        /* ---------------- staggered groups ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-anim='cards']").forEach((el) => {
          gsap.from(el.children, {
            y: 44,
            scale: 0.94,
            autoAlpha: 0,
            duration: 0.85,
            ease: springy,
            stagger: 0.08,
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        /* ---------------- media frames ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-anim='cover']").forEach((el) => {
          const img = el.querySelector("img");
          const tl = gsap.timeline({
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
          tl.from(el, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.9,
            ease: "path-ease",
          });
          if (img)
            tl.from(img, { scale: 1.18, duration: 1.3, ease: "osmo" }, 0);
        });

        /* ---------------- sticker plop ----------------
           Reference values: scale 0, rotate -20, elastic.out(1, 0.72).
           Note: no y offset — an in-flow element lifted by -4em covers
           whatever sits above it until the tween resolves. */
        gsap.utils.toArray<HTMLElement>("[data-plop-in]").forEach((el) => {
          const rest = Number(el.dataset.plopRotate ?? 0);
          gsap.from(el, {
            scale: 0,
            rotate: -20,
            autoAlpha: 0,
            duration: 0.75,
            ease: "elastic.out(1, 0.72)",
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
            onComplete: () => gsap.set(el, { rotate: rest }),
          });
        });

        /* ---------------- breathing blobs ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-blob]").forEach((el) => {
          const paths = el.querySelectorAll("path");
          if (!paths.length) return;
          const stroke = Number(el.dataset.blobStroke ?? 60);

          gsap.set(paths, {
            attr: { "stroke-width": 0 },
            rotate: 0,
            transformOrigin: "center center",
            transformBox: "fill-box",
          });

          const tl = gsap
            .timeline({ paused: true, repeat: -1 })
            .to(paths, {
              attr: { "stroke-width": stroke },
              rotate: 2,
              duration: 3,
              ease: "sine.inOut",
            })
            .to(paths, {
              attr: { "stroke-width": 0 },
              rotate: 0,
              duration: 3,
              ease: "sine.inOut",
            });

          ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => tl.play(),
            onEnterBack: () => tl.play(),
            onLeave: () => tl.pause(),
            onLeaveBack: () => tl.pause(),
          });
        });

        /* ---------------- magnetic pointer ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const strength = Number(el.dataset.magnetic || 0.35);
          const xTo = gsap.quickTo(el, "x", {
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
          });
          const yTo = gsap.quickTo(el, "y", {
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
          });

          el.addEventListener("pointermove", (e) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * strength);
            yTo((e.clientY - r.top - r.height / 2) * strength);
          });
          el.addEventListener("pointerleave", () => {
            xTo(0);
            yTo(0);
          });
        });
      });

      ScrollTrigger.refresh();
    };

    start();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
