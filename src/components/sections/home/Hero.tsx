"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

/* ============================================================
   THE HERO (v28, 30 Oct 2026), after the owner's reference. Text on the
   left; the billboard on its concrete building fills the frame as a still.
   A video (public/hero/billboard-loop.mp4, swap the file for our own) is
   laid over the billboard's face in perspective, with the lamps' light on
   it and the catwalk rail (cut from the still) back in front. The scroll
   into section two lives in Home.
   ============================================================ */

/* the billboard's face in the still, as fractions of the frame: TL, TR, BR, BL */
const FACE = [
  [0.561, 0.438],
  [0.844, 0.1],
  [0.851, 0.603],
  [0.56, 0.846],
];
const FILM_W = 2752;
const FILM_H = 1536;
const ART_W = 1600;
const ART_H = 1000;

const CSS = `
.hx{position:relative;isolation:isolate;overflow:clip;height:100vh;height:100svh;min-height:600px;display:grid;align-items:center;
  padding:calc(var(--header-h, 80px) + 8px) 0 clamp(20px,3.4vh,40px);color:#fff;background:#120b20}
.hx-video{position:absolute;left:0;top:0;z-index:-2;width:100%;height:100%;object-fit:cover;object-position:100% 50%;pointer-events:none}
.hx-rail{z-index:-1}
.hx::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:radial-gradient(circle at 1px 1px,rgb(217 203 239/.3) 1.1px,transparent 1.5px);background-size:40px 40px;background-position:center top;-webkit-mask-image:linear-gradient(90deg,#000,transparent 15%,transparent 85%,#000);mask-image:linear-gradient(90deg,#000,transparent 15%,transparent 85%,#000)}
.hx-bb,.hx-light{position:absolute;left:0;top:0;z-index:-1;width:${ART_W}px;height:${ART_H}px;max-width:none;transform-origin:0 0;pointer-events:none;visibility:hidden}
.hx-bb{object-fit:cover}
.hx-light{background:linear-gradient(170deg,rgb(255 255 255/.16),transparent 38%,transparent 62%,rgb(10 4 24/.3))}
.hx-in{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr);justify-items:start;box-sizing:border-box;width:100%;padding-left:10%}
.hx-tag{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:16px;width:calc(46.8vw - 10vw);margin:0 0 clamp(16px,2.6vh,28px);font-size:.9375rem;font-weight:400;letter-spacing:.02em;color:rgb(255 255 255/.75)}
.hx-tag::after{content:"";height:1px;background:rgb(255 255 255/.3)}
.hx-h1{margin:0 0 0 -.03em;font-family:var(--font-outfit),sans-serif;font-weight:500;font-size:clamp(2.5rem,min(4.6vw,10vh),6.25rem);line-height:1.06;letter-spacing:-.025em}
.hx-line{display:block;white-space:nowrap}
.hx-line > span{display:inline-block}
.hx-line--2{margin-top:.04em}
.hx-tone{position:relative;display:inline-block;color:var(--lav-2)}
.hx-under{position:absolute;left:0;bottom:-.1em;width:100%;height:.14em;overflow:visible;pointer-events:none}
.hx-lead{margin:clamp(16px,2.8vh,28px) 0 0;max-width:26em;font-size:clamp(1.0625rem,1.15vw,1.375rem);font-weight:300;line-height:1.55;color:rgb(255 255 255/.82);text-wrap:pretty}
.hx-actions{display:flex;gap:24px;margin-top:clamp(20px,3.4vh,32px)}
.hx-actions .ca-btn svg{width:1em;height:1em;margin-left:.75em}
@media (max-width:899px){
  .hx{align-items:end}
  .hx-tag::after{display:none}
  .hx-video{height:48%;object-position:82% 50%;-webkit-mask-image:linear-gradient(#000 78%,transparent);mask-image:linear-gradient(#000 78%,transparent)}
  .hx-tag{width:auto;letter-spacing:.12em}
  .hx-h1{font-size:10vw}
  .hx-in{width:calc(100% - 32px);margin-inline:auto;padding-left:0}
  .hx-lead{font-size:1.0625rem;margin-top:16px}
  .hx-actions{margin-top:20px;gap:12px}
  .hx-lead{max-width:none}
}
`;

/** The homography taking the art's rectangle onto the billboard's face, as a CSS matrix. */
function faceMatrix(video: HTMLElement) {
  const W = video.clientWidth;
  const H = video.clientHeight;
  const s = Math.max(W / FILM_W, H / FILM_H);
  const [px, py] = getComputedStyle(video).objectPosition.split(" ").map((v) => parseFloat(v) / 100);
  const ox = (W - FILM_W * s) * px;
  const oy = (H - FILM_H * s) * py;
  const [p0, p1, p2, p3] = FACE.map(([x, y]) => [ox + x * FILM_W * s, oy + y * FILM_H * s]);
  const dx1 = p1[0] - p2[0];
  const dx2 = p3[0] - p2[0];
  const sx = p0[0] - p1[0] + p2[0] - p3[0];
  const dy1 = p1[1] - p2[1];
  const dy2 = p3[1] - p2[1];
  const sy = p0[1] - p1[1] + p2[1] - p3[1];
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / den;
  const h = (dx1 * sy - sx * dy1) / den;
  const a = p1[0] - p0[0] + g * p1[0];
  const b = p3[0] - p0[0] + h * p3[0];
  const d = p1[1] - p0[1] + g * p1[1];
  const e = p3[1] - p0[1] + h * p3[1];
  return `matrix3d(${a / ART_W},${d / ART_W},0,${g / ART_W},${b / ART_H},${e / ART_H},0,${h / ART_H},0,0,1,0,${p0[0]},${p0[1]},0,1)`;
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const done = () => {
      document.documentElement.dataset.heroDone = "1";
      window.dispatchEvent(new Event("caimue:hero-done"));
    };
    const video = el.querySelector<HTMLElement>(".hx-video");
    const art = el.querySelector<HTMLVideoElement>(".hx-bb");
    const light = el.querySelector<HTMLElement>(".hx-light");
    const fit = () => {
      if (!video || !art || !light) return;
      const m = faceMatrix(video);
      for (const layer of [art, light]) {
        layer.style.transform = m;
        layer.style.visibility = "visible";
      }
    };
    // follows the still's own box: the page can lay out late, with no window resize to announce it
    const watch = new ResizeObserver(fit);
    if (video) watch.observe(video);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      done();
      return () => watch.disconnect();
    }

    const ctx = gsap.context(() => {
      el.querySelectorAll<SVGPathElement>(".hx-under path").forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDashoffset: len, strokeDasharray: len });
      });

      const tl = gsap.timeline({ paused: true, delay: 0.25 });
      tl.to(".hx-under path", { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 0)
        .from(".hx-tag, .hx-lead, .hx-actions", { autoAlpha: 0, y: 18, duration: 0.8, stagger: 0.07, ease: "power3.out" }, 0.2)
        .call(done, [], 1.05);
      const go = () => tl.play();
      if (document.documentElement.dataset.introFill) go();
      else window.addEventListener("caimue:fill", go, { once: true });
    }, el);

    return () => {
      watch.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="hx" data-ground="dark">
      <style>{CSS}</style>
      <Image className="hx-video" src="/hero/billboard-bg.webp" alt="" fill priority sizes="100vw" />
      <video className="hx-bb" src="/hero/billboard-loop.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden />
      <i className="hx-light" aria-hidden />
      <Image className="hx-video hx-rail" src="/hero/billboard-rail.webp" alt="" fill sizes="100vw" />
      <div className="hx-in">
        <p className="hx-tag">B2B creative marketing agency</p>
        <h1 className="hx-h1" aria-label="Creative that clicks, growth that follows">
          <span className="hx-line" aria-hidden>
            <span>
              Creative that{" "}
              <span className="hx-tone">
                clicks
                <svg className="hx-under" viewBox="0 0 300 40" preserveAspectRatio="none">
                  <path d="M6 26 C 70 10, 160 8, 294 20" fill="none" stroke="#ff0080" strokeWidth={6} strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </span>
          <span className="hx-line hx-line--2" aria-hidden>
            <span>Growth that follows</span>
          </span>
        </h1>
        <p className="hx-lead">
          We are a creative marketing agency headquartered in Tampa, helping B2B brands turn attention into inbound leads through
          brand strategy, websites, video marketing, social media and campaigns.
        </p>
        <div className="hx-actions">
          <Link href="/contact" className="ca-btn ca-btn--pink">
            Contact
          </Link>
          <Link href="/#work" className="ca-btn ca-btn--ghost-light">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
