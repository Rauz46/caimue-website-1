"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ============================================================
   THE HERO (v17, 29 Oct 2026), after two26.studio: the huge centred head
   with three pill tags pressed over it and a pink hand-drawn underline
   under "clicks". Arrival: the words rise with a small turn, the
   underline draws, the tags are pressed on, then the line and buttons.
   On scroll the hero simply scrolls away; section two carries the effect.
   ============================================================ */

const CSS = `
.hx{position:relative;isolation:isolate;overflow:clip;height:100vh;height:100svh;min-height:600px;display:grid;place-items:center;
  padding:calc(var(--header-h, 88px) + 24px) 0 64px;background:#110a1f;color:#fff}
.hx::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:
  radial-gradient(ellipse 60% 50% at 50% 46%,rgb(103 47 178/.34),transparent 70%),
  linear-gradient(180deg,transparent 70%,rgb(75 33 131/.5))}
/* the two loops, in the clear corners: bottom left beside the buttons, top right above the head */
.hx-loop{position:absolute;z-index:0;pointer-events:none;fill:none;stroke-linecap:round;stroke-linejoin:round;overflow:visible}
.hx-loop--l{left:-4vw;bottom:-12vh;width:24vw;stroke:var(--lav-2);animation:hx-turn 38s ease-in-out infinite alternate}
.hx-loop--r{right:-5vw;top:11vh;width:18vw;stroke:var(--pink);animation:hx-turn 44s ease-in-out infinite alternate-reverse}
@keyframes hx-turn{from{rotate:-4deg}to{rotate:5deg}}
@media (prefers-reduced-motion:reduce){.hx-loop{animation:none}}
.hx-in{position:relative;z-index:1;display:grid;justify-items:center;text-align:center;width:min(92vw,1500px)}
.hx-head{position:relative}
.hx-h1{margin:0;font-family:var(--font-urbanist),sans-serif;font-weight:800;font-size:clamp(3.25rem,8.2vw,9.5rem);line-height:1;letter-spacing:-.045em}
.hx-line{display:block;white-space:nowrap}
.hx-line > span{display:inline-block}
.hx-w{display:inline-block}
.hx-tone{position:relative;display:inline-block;color:var(--lav-2)}
/* the hand-drawn underline under "clicks" */
.hx-under{position:absolute;left:-4%;right:-4%;bottom:-.12em;width:108%;height:.32em;overflow:visible;pointer-events:none}
.hx-tag{position:absolute;z-index:2;padding:.55em 1.05em;border-radius:999px;background:#fff;color:#160a33;font-size:clamp(.8125rem,.7rem + .3vw,1rem);
  font-weight:700;line-height:1;white-space:nowrap;box-shadow:0 14px 28px -14px rgb(0 0 0/.55)}
.hx-tag--1{left:6%;top:-6%;rotate:-9deg}
.hx-tag--2{left:48%;top:38%;rotate:5deg;background:var(--pink);color:#fff}
.hx-tag--3{right:4%;bottom:-8%;rotate:-6deg}
.hx-lead{margin:40px 0 0;max-width:42rem;font-size:clamp(1.0625rem,1rem + .25vw,1.25rem);line-height:1.6;color:rgb(255 255 255/.8);text-wrap:balance}
.hx-actions{display:flex;justify-content:center;gap:12px;margin-top:36px}
`;

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const split = SplitText.create(".hx-line > span", { type: "words", wordsClass: "hx-w", mask: "words" });
      const draw = el.querySelectorAll<SVGPathElement>(".hx-loop path, .hx-under path");
      draw.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      // arrival
      const tl = gsap.timeline({ paused: true, delay: 0.1 });
      tl.from(split.words, { yPercent: 115, rotate: 6, transformOrigin: "0% 100%", duration: 1.1, stagger: 0.06, ease: "power4.out" }, 0)
        .to(".hx-loop path", { strokeDashoffset: 0, duration: 2.2, stagger: 0.15, ease: "power2.out" }, 0)
        .from(".hx-loop", { scale: 0.85, transformOrigin: "50% 50%", duration: 2.4, stagger: 0.15, ease: "elastic.out(1, 0.6)" }, 0)
        .to(".hx-under path", { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" }, 0.95)
        .from(".hx-tag", { scale: 0, rotate: "+=18", duration: 0.6, stagger: 0.12, ease: "back.out(2)" }, 1.0)
        .from(".hx-lead, .hx-actions", { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.08, ease: "power3.out" }, 1.05);
      const go = () => tl.play();
      if (document.documentElement.dataset.introFill) go();
      else window.addEventListener("caimue:fill", go, { once: true });

    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hx" data-ground="dark">
      <style>{CSS}</style>
      <svg className="hx-loop hx-loop--l" viewBox="0 0 400 520" aria-hidden>
        <path d="M-40 470 C 60 470 170 420 220 330 C 270 240 250 130 175 110 C 100 90 60 170 95 235 C 135 310 260 320 330 250 C 380 200 395 120 380 40" strokeWidth={30} />
      </svg>
      <svg className="hx-loop hx-loop--r" viewBox="0 0 400 520" aria-hidden>
        <path d="M440 60 C 330 40 230 90 200 180 C 170 270 230 350 300 330 C 370 310 360 220 290 205 C 210 190 130 260 120 360 C 112 440 150 500 200 540" strokeWidth={24} />
      </svg>
      <div className="hx-in">
        <div className="hx-head">
          <h1 className="hx-h1" aria-label="Creativity that clicks, growth that follows">
            <span className="hx-line" aria-hidden>
              <span>
                Creativity that{" "}
                <span className="hx-tone">
                  clicks
                  <svg className="hx-under" viewBox="0 0 300 40" preserveAspectRatio="none">
                    <path d="M6 26 C 70 10, 160 8, 294 20" fill="none" stroke="#ff0080" strokeWidth={9} strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </span>
            <span className="hx-line" aria-hidden>
              <span>Growth that follows</span>
            </span>
          </h1>
          <span className="hx-tag hx-tag--1" aria-hidden>
            Brand strategy
          </span>
          <span className="hx-tag hx-tag--2" aria-hidden>
            Video marketing
          </span>
          <span className="hx-tag hx-tag--3" aria-hidden>
            Websites
          </span>
        </div>
        <p className="hx-lead">
          We are a creative marketing agency headquartered in Tampa, helping B2B brands turn attention into inbound leads
          through brand strategy, websites, video marketing, social media and campaigns.
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
