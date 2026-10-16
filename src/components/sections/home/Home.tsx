"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Clapperboard,
  Film,
  Magnet,
  MapPin,
  Megaphone,
  MessageSquareQuote,
  Play,
  Smartphone,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { LIFT_START } from "@/lib/intro-timing";
import { WhoStats, type WhoStat } from "./WhoStats";
import { LogoMarquee } from "./LogoMarquee";
import { GridSpot } from "./GridSpot";
import "./home-ignitho.css";
import { MAP_DOTS, MAP_H, MAP_PINS, MAP_W } from "./world-dots";
import { Hero } from "./Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ============================================================
   THE HOMEPAGE (v19)

   Copy: every word is from the client's deck
   (reference/content/Caimue Corporate Deck  V1.pptx; text extract in
   reference/content/deck-v1-text.txt), slide by slide, in the deck's
   order. Nothing added. Deck chrome (the REC/timecode ornament, page
   numbers, the placeholder email and phone) is left out.

   Grounds: purple hero, then lavender tint and white alternating,
   purple close, white footer. Each section fits one viewport height.
   ============================================================ */

/* slide 2: who we are */
const WHO_STATS: WhoStat[] = [
  { icon: Play, value: "735K", label: "views on a single reel" },
  { icon: ChartNoAxesColumn, value: "2.09M", label: "organic views, top eight reels" },
  { icon: Users, value: "25+", label: "influencers discovered" },
];

/* slide 3: the problem we solve */
const PROBLEMS = [
  {
    img: "/deck/problem-01.jpg",
    hear: "“Our content looks like everyone else's.”",
    title: "Story First, Not Features",
    body: "We lead with people and purpose, not specs.",
  },
  {
    img: "/deck/problem-02.jpg",
    hear: "“Buyers scroll past us in three seconds.”",
    title: "Hook in the First Frame",
    body: "Every second of video earns the next one.",
  },
  {
    img: "/deck/problem-03.jpg",
    hear: "“We get views, but no leads.”",
    title: "Every View Has a Next Step",
    body: "A clear call to action in every piece we make.",
  },
];

/* slide 4: what we make */
const MAKE: { icon: LucideIcon; img: string; title: string; items: string[] }[] = [
  {
    icon: Film,
    img: "/deck/make-01.png",
    title: "Brand and vertical films",
    items: ["Founder and leadership stories", "Brand films and showreels", "Customer case-study films"],
  },
  {
    icon: Smartphone,
    img: "/deck/make-02.jpg",
    title: "Social video that travels",
    items: ["Reels and shorts", "LinkedIn and Instagram video", "Influencer collaborations"],
  },
  {
    icon: Megaphone,
    img: "/deck/make-03.jpg",
    title: "Campaigns that land",
    items: ["Product and brand launches", "Websites and landing pages", "Always-on content"],
  },
];

/* slide 5: featured clients (logos from the deck, in the deck's order) */
const CLIENTS = [
  { no: "01", sector: "Micro PE firm", name: "Aventei Capital", src: "/logos/deck/01-micro-pe.png", w: 913, h: 375 },
  { no: "02", sector: "Data & AI", name: "Ignitho", src: "/logos/deck/02-data-ai.png", w: 420, h: 160 },
  { no: "03", sector: "Venture Studios", name: "Nuvio Venture Studios", src: "/logos/deck/03-venture-studios.png", w: 1387, h: 490 },
  { no: "04", sector: "B2B Lead Generation", name: "Piqual", src: "/logos/deck/04-b2b-lead-gen.png", w: 750, h: 364 },
  { no: "05", sector: "Finance", name: "Simbfi", src: "/logos/deck/05-finance.png", w: 1520, h: 448 },
  { no: "06", sector: "AI product", name: "Prodeia", src: "/logos/deck/06-ai-product.png", w: 768, h: 280 },
  { no: "07", sector: "Talent & Hiring", name: "Talentou", src: "/logos/deck/07-talent-hiring.png", w: 264, h: 77 },
];

/* slide 6: results */
const RESULTS = [
  { value: "2.09M", label: "views across our top eight reels", img: "/deck/results-01.png" },
  { value: "735K", label: "views on a single reel", img: "/deck/results-02.png" },
  { value: "37.2%", label: "engagement on one client post", img: "/deck/results-03.png" },
  { value: "76%", label: "lift in client search clicks, week on week", img: "/deck/results-04.png" },
  { value: "77%", label: "of a client's site traffic from one campaign", img: "/deck/results-05.png" },
];

/* slide 7: why caimue */
const WHY: { icon: LucideIcon; img: string; title: string; body: string; value: string; label: string }[] = [
  { icon: Clapperboard, img: "/deck/why-01.jpg", title: "Born in film", body: "Craft that holds attention in a three-second feed.", value: "735K", label: "Views on a Single Reel" },
  { icon: Magnet, img: "/deck/why-02.jpg", title: "Audience before sale", body: "Earn attention first, then a clear call to action.", value: "2.09M", label: "Organic Views Earned" },
  { icon: UserRound, img: "/deck/why-03.jpg", title: "One dedicated lead", body: "One contact owns your brand, brief to final cut.", value: "1", label: "Lead for Every Client" },
  { icon: MapPin, img: "/deck/why-04.jpg", title: "US-headquartered", body: "Led from the US, with a team in Chennai, India.", value: "Tampa, Florida", label: "US Headquarters" },
];

/* slide 8: how we work */
const STEPS = [
  { title: "Discover", body: "Your story and your buyers", when: "Week 1", img: "/deck/how-01.png" },
  { title: "Define", body: "Stories, formats and channels", when: "Week 2", img: "/deck/how-02.png" },
  { title: "Create", body: "Script, shoot, edit and design", when: "Weeks 3–5", img: "/deck/how-03.png" },
  { title: "Launch", body: "In front of the right buyers", when: "4-week push", img: "/deck/how-04.png" },
  { title: "Optimize", body: "Keep what earns attention", when: "Ongoing", img: "/deck/how-05.png" },
];

/* slide 9: the two locations */
const OFFICES = [
  { key: "tampa", label: "HQ · Tampa, Florida", side: "left" },
  { key: "chennai", label: "Team · Chennai, India", side: "right" },
] as const;

const MAP_PATH = (() => {
  let d = "";
  for (let i = 0; i < MAP_DOTS.length; i += 2) d += `M${MAP_DOTS[i]} ${MAP_DOTS[i + 1]}h0`;
  return d;
})();

function arc(a: { x: number; y: number }, b: { x: number; y: number }, lift: number) {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - lift;
  return `M${a.x} ${a.y}Q${mx} ${my} ${b.x} ${b.y}`;
}

/* ------------------------------------------------------------ */

/** The wordmark's pink i on its side (play, pause, stop in white). Decorative. */
function Cue() {
  return (
    <span className="cx-cue" aria-hidden>
      <svg viewBox="0 0 96 32">
        <rect className="cx-cue__bar" width="96" height="32" rx="6" />
        <path className="cx-cue__sym" d="M13 9.5L24 16L13 22.5Z" />
        <path className="cx-cue__sym" d="M43.5 10h4v12h-4zM52.5 10h4v12h-4z" />
        <path className="cx-cue__sym" d="M73 10h11v12H73z" />
      </svg>
    </span>
  );
}

/** Section head: the cue and the deck's label on one line, then the title and its line. */
function Head({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <header className="cx-head">
      <p className="cx-label">
        <Cue />
        <span>{label}</span>
      </p>
      <h2 className="cx-h2" data-split>
        {title}
      </h2>
      {lead && (
        <p className="cx-lead" data-rise>
          {lead}
        </p>
      )}
    </header>
  );
}

function OfficeMap() {
  const t = MAP_PINS.tampa;
  const c = MAP_PINS.chennai;
  return (
    <div className="cx-map" aria-label="HQ in Tampa, Florida; team in Chennai, India" role="img">
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="cx-map__svg" aria-hidden>
        <path className="cx-map__dots" d={MAP_PATH} />
        <path className="cx-map__arc" d={arc(t, c, 14)} pathLength={1} />
        <circle className="cx-map__runner" r="0.55">
          <animateMotion dur="6s" repeatCount="indefinite" path={arc(t, c, 14)} />
        </circle>
      </svg>
      {OFFICES.map((o) => {
        const p = MAP_PINS[o.key];
        return (
          <div
            key={o.key}
            className={`cx-pin cx-pin--${o.side}`}
            style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
          >
            <i className="cx-pin__dot" />
            <span className="cx-pin__label">
              <b>{o.label}</b>
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ */

export function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("cx--still");
      return;
    }

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const waitReveal = () =>
      document.documentElement.dataset.revealed
        ? Promise.resolve()
        : new Promise<void>((r) => window.addEventListener("caimue:revealed", () => r(), { once: true }));

    (async () => {
      try {
        await document.fonts?.ready;
      } catch {
        /* proceed with what loaded */
      }
      if (cancelled) return;

      ctx = gsap.context(() => {
        el.classList.add("cx--motion");
        heroIntro(el);
      }, el);

      await waitReveal();
      if (cancelled) return;
      ctx.add(() => scrollScenes(el));
      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div className="cx" ref={root}>
      <GridSpot />
      {/* ==================== 1. HERO (purple) ==================== */}
      <Hero />

      {/* ==================== 2. WHO WE ARE (tint) ==================== */}
      <section className="cx-s cx-sheet cx-who" data-ground="tint">
        <div className="cx-recede cx-wrap">
          <Head
            label="WHO WE ARE"
            title="Born in film. Built for B2B."
            lead="Caimue is a video-first B2B marketing company headquartered in the US. We grew out of Café Musings, making short films and short-form video for our own audience. Millions of organic views later, we bring that same craft to B2B brands."
          />
          <WhoStats items={WHO_STATS} />
        </div>
      </section>

      {/* ==================== 3. THE PROBLEM WE SOLVE (white) ==================== */}
      <section className="cx-s cx-sheet cx-problem" data-ground="white">
        <div className="cx-recede cx-wrap">
          <Head
            label="THE PROBLEM WE SOLVE"
            title="Most B2B marketing is forgotten by Friday."
            lead="Three things B2B marketers tell us, and how Caimue approaches each one."
          />
          <div className="cq-grid" data-group>
            {PROBLEMS.map((p) => (
              <article className="cq cx-has-media" key={p.title} data-card>
                <div className="cx-media cx-media--wide">
                  <Image src={p.img} alt="" fill sizes="(max-width: 900px) 92vw, 30vw" />
                </div>
                <p className="cq__kicker">What We Hear</p>
                <div className="cq__head">
                  <h3 className="cq__quote">{p.hear}</h3>
                  <span className="cx-ico" aria-hidden>
                    <MessageSquareQuote strokeWidth={1.8} />
                  </span>
                </div>
                <div className="cq__answer">
                  <p className="cq__kicker cq__kicker--accent">How Caimue Approaches It</p>
                  <p className="cq__title">{p.title}</p>
                  <p className="cq__body">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. WHAT WE MAKE (tint) ==================== */}
      <section className="cx-s cx-sheet cx-make" data-ground="tint">
        <div className="cx-recede cx-wrap">
          <Head
            label="WHAT WE MAKE"
            title="Video people actually watch."
            lead="We turn what you do into brand films, social video and the campaigns that carry them."
          />
          <div className="cm-grid" data-group>
            {MAKE.map((m) => (
              <article className="cm cx-has-media" key={m.title} data-card>
                <div className="cx-media cx-media--wide">
                  <Image src={m.img} alt="" fill sizes="(max-width: 900px) 92vw, 30vw" />
                </div>
                <div className="cm__head">
                  <h3 className="cm__title">{m.title}</h3>
                  <span className="cx-ico" aria-hidden>
                    <m.icon strokeWidth={1.8} />
                  </span>
                </div>
                <ul className="cm__panel">
                  {m.items.map((it) => (
                    <li key={it}>
                      <svg className="cm__play" viewBox="0 0 12 12" aria-hidden>
                        <path d="M3 1.8L10 6L3 10.2Z" />
                      </svg>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. OUR FEATURED CLIENTS (white) ==================== */}
      <section className="cx-s cx-sheet cx-clients" data-ground="white">
        <div className="cx-recede cx-wrap">
          <Head
            label="Seven B2B brands. One video-first partner."
            title="Our featured clients"
            lead="Private equity, Data and AI, Venture building, B2B Lead generation, Finance and Talent, across the US, UK, and India."
          />
          <LogoMarquee logos={CLIENTS} />
          <Link href="/contact" className="ig-marquee-cta" data-rise>
            Your brand could be next.
            <ArrowRight size={18} strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </section>

      {/* ==================== 6. RESULTS (tint) ==================== */}
      <section className="cx-s cx-sheet cx-results" data-ground="tint">
        <div className="cx-recede cx-wrap">
          <Head
            label="The work speaks."
            title="Results"
            lead="Numbers from our own channels and from the brands we run marketing for."
          />
          <dl className="cs-band" data-group>
            {RESULTS.map((r) => (
              <div className="cs" key={r.label} data-card>
                <dt className="cs__label">{r.label}</dt>
                <dd className="cs__value">{r.value}</dd>
                <dd className="cs__pic" aria-hidden>
                  <Image src={r.img} alt="" width={56} height={56} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="cx-note" data-rise>
            None of it was paid reach.
          </p>
        </div>
      </section>

      {/* ==================== 7. WHY CAIMUE (white) ==================== */}
      <section className="cx-s cx-sheet cx-why" data-ground="white">
        <div className="cx-recede cx-wrap">
          <Head
            label="WHY CAIMUE"
            title="Why B2B brands choose Caimue"
            lead="A film-trained team, headquartered in the US, that builds an audience before it asks for the sale."
          />
          <div className="cb" data-group>
            {WHY.map((w) => (
              <article className="cb__cell cx-has-media" key={w.title} data-card>
                <div className="cx-media cx-media--why">
                  <Image src={w.img} alt="" fill sizes="(max-width: 600px) 92vw, (max-width: 1100px) 46vw, 23vw" />
                </div>
                <div className="cb__head">
                  <h3 className="cb__title">{w.title}</h3>
                  <span className="cx-ico" aria-hidden>
                    <w.icon strokeWidth={1.8} />
                  </span>
                </div>
                <p className="cb__body">{w.body}</p>
                <p className="cb__fig">
                  <b>{w.value}</b>
                  <span>{w.label}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. HOW WE WORK (tint) ==================== */}
      <section className="cx-s cx-sheet cx-how" data-ground="tint">
        <div className="cx-recede cx-wrap">
          <Head
            label="HOW WE WORK"
            title="Five steps to a brand people remember"
            lead="From first conversation to launch, and every week after."
          />
          <ol className="cx-steps5" data-group>
            {STEPS.map((s) => (
              <li className="cx-card cx-step5" key={s.title} data-card>
                <div className="cx-step5__top">
                  <span className="cx-step5__pic" aria-hidden>
                    <Image src={s.img} alt="" width={96} height={89} />
                  </span>
                  <span className="cx-step5__when">{s.when}</span>
                </div>
                <h3 className="cx-card__title">{s.title}</h3>
                <p className="cx-card__body">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="cx-note" data-rise>
            About two months to first results. Then it keeps rolling.
          </p>
        </div>
      </section>

      {/* ==================== 9. THAT'S A WRAP (purple) ==================== */}
      <section className="cx-s cx-sheet cx-talk" data-ground="purple">
        <div className="cx-wrap cx-talk__grid">
          <div className="cx-talk__copy">
            <p className="cx-label">
              <Cue />
              <span>THAT&apos;S A WRAP</span>
            </p>
            <h2 className="cx-h2 cx-talk__title" data-split>
              Ready to be remembered?
            </h2>
            <p className="cx-lead" data-rise>
              Send us what you do. We will come back with what it could look like on screen.
            </p>
            <div className="cx-actions" data-rise>
              <Link href="/contact" className="cx-btn cx-btn--pink">
                Let&apos;s talk
              </Link>
            </div>
          </div>
          <div className="cx-talk__map" data-rise>
            <OfficeMap />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   MOTION
   ============================================================ */

const EASE_OUT = "power4.out";

/** The opening title: label, then the title rising out of its mask, then the line. */
function heroIntro(el: HTMLElement) {
  const q = (s: string) => el.querySelector<HTMLElement>(s);
  const h1 = q('[data-hero="h1"]');
  const lines = h1 ? Array.from(h1.querySelectorAll<HTMLElement>(".cx-h1__line")) : [];
  lines.forEach((line) => {
    const split = new SplitText(line, { type: "words", mask: "words", wordsClass: "cx-word" });
    gsap.set(split.words, { yPercent: 110 });
  });

  const elapsed = performance.now() / 1000;
  const delay = Math.max(0.1, LIFT_START + 0.35 - elapsed);
  const tl = gsap.timeline({ delay, defaults: { ease: EASE_OUT } });

  tl.to(lines.flatMap((l) => Array.from(l.querySelectorAll(".cx-word"))), { yPercent: 0, duration: 1.1, stagger: 0.08 }, 0.1)
    .from(q('[data-hero="lead"]'), { y: 16, autoAlpha: 0, duration: 0.8 }, 0.6)
    .from(q('.hx-people'), { y: 60, autoAlpha: 0, duration: 1.3, ease: 'expo.out' }, 0.35)
    .from(el.querySelectorAll('[data-hero="el"]'), { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.07 }, 0.75);
}

function scrollScenes(el: HTMLElement) {
  /* Light reveals only: transform and opacity, short and soft, each played once.
     (The scrubbed section recede, the clip-path card wipes and the masked line
     splits repainted large areas every frame and made scrolling heavy.) */
  const SOFT = "power3.out";

  /* ---------- texture: each ribbon shifts a little against the scroll ---------- */
  el.querySelectorAll<HTMLElement>(".cx-waves").forEach((w) => {
    gsap.fromTo(
      w,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: w.closest(".cx-s"), start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });

  /* ---------- cues: a small echo of the intro as each head arrives ---------- */
  el.querySelectorAll<HTMLElement>(".cx-cue").forEach((cue) => {
    if (cue.closest(".cx-hero")) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: cue, start: "top 90%", once: true }, defaults: { ease: SOFT } });
    tl.from(cue.querySelector(".cx-cue__bar"), { scaleX: 0, transformOrigin: "0% 50%", duration: 0.5 }, 0)
      .from(cue.querySelectorAll(".cx-cue__sym"), { scale: 0, transformOrigin: "50% 50%", duration: 0.35, stagger: 0.08 }, 0.2)
      .from(cue.nextElementSibling, { x: -8, autoAlpha: 0, duration: 0.5 }, 0.25);
  });

  /* ---------- heads: the title fades up as one piece ---------- */
  el.querySelectorAll<HTMLElement>("[data-split]").forEach((h) => {
    gsap.from(h, {
      y: 18,
      autoAlpha: 0,
      duration: 0.7,
      ease: SOFT,
      scrollTrigger: { trigger: h, start: "top 90%", once: true },
    });
  });

  el.querySelectorAll<HTMLElement>("[data-rise]").forEach((b) => {
    gsap.from(b, {
      y: 14,
      autoAlpha: 0,
      duration: 0.6,
      delay: 0.08,
      ease: SOFT,
      scrollTrigger: { trigger: b, start: "top 94%", once: true },
    });
  });

  /* ---------- card groups: a short, soft cascade ---------- */
  el.querySelectorAll<HTMLElement>("[data-group]").forEach((group) => {
    const cards = Array.from(group.querySelectorAll<HTMLElement>("[data-card]"));
    gsap.from(cards, {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: SOFT,
      clearProps: "transform",
      scrollTrigger: { trigger: group, start: "top 90%", once: true },
    });
  });

  /* ---------- wrap: the route draws, then the pins land ---------- */
  const map = el.querySelector<HTMLElement>(".cx-map");
  if (map) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: map, start: "top 80%", once: true } });
    tl.fromTo(map.querySelectorAll(".cx-map__arc"), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }, 0.3).from(
      map.querySelectorAll(".cx-pin"),
      { scale: 0, duration: 0.7, stagger: 0.4, ease: "back.out(1.6)" },
      0.2,
    );
  }
}
