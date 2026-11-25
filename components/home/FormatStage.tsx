"use client";

import { useEffect, useRef, useState } from "react";
import { Clapperboard, Film, Heart, Mic, Smartphone, type LucideIcon } from "lucide-react";
import "./format-stage.css";

/**
 * "From one-minute episodes to the big screen" (18 Nov 2026). The four formats as tabs, without a box: colour pills
 * across the top (each in its card colour), the open format's words free on the page, and a Bauhaus composition for
 * the stage: a big disc in the format's colour with the person at work rising out of its top, that format's minimal
 * motion graphic around its edge, with only elements that belong to that format, each in constant, quiet motion. Switching
 * sweeps the new colour across the disc and moves the shapes to new places. Auto-advances while on screen; hover
 * pauses; a click stops it. Photos: public/formats/SOURCES.md. Styles: format-stage.css (.fs2-*).
 */
export type StageItem = { title: string; text: string; tone: "purple" | "pink" | "orange" | "yellow"; object: string; chip?: string };

const ICONS: LucideIcon[] = [Smartphone, Film, Clapperboard, Mic];
const REEL = ["/images/Movies/Welcome Home.jpg", "/images/Movies/Smile!.jpg", "/images/Movies/Live a Little.jpg"];
const STRIP = ["/images/Movies/Vishudha Sakshi.jpg", "/images/Movies/Malsya Mandooka Mahamaham.jpg", "/images/Movies/Harinarayana Kudu Charitham.jpg", "/images/Movies/Pazhampori.jpg"];
const FEATURE = ["/images/Movies/Harinarayana Kudu Charitham.jpg", "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg", "/images/Movies/Pazhampori.jpg", "/images/Movies/Vishudha Sakshi.jpg"];
const ROTATE_MS = 7000;

/* eslint-disable @next/next/no-img-element */
function SceneSeries() {
    return (
        <div className="fs2-fx">
            <div className="fs2-reel">
                <div className="fs2-reel__track">{[...REEL, REEL[0]].map((s, i) => <img key={i} src={s} alt="" loading="lazy" decoding="async" />)}</div>
                <span className="fs2-reel__bars">{REEL.map((s, i) => <i key={s} style={{ ["--n" as string]: i } as React.CSSProperties} />)}</span>
                {/* a like on every episode: the heart pops in the middle of the reel, like a double tap */}
                <span className="fs2-heart"><Heart fill="currentColor" strokeWidth={0} /></span>
            </div>
            <div className="fs2-facts"><span className="fs2-tag">Reels</span><span className="fs2-tag">Shorts</span></div>
        </div>
    );
}
function SceneShort() {
    return (
        <div className="fs2-fx">
            <div className="fs2-strip">
                <div className="fs2-strip__track">{[...STRIP, ...STRIP].map((src, i) => <img key={i} src={src} alt="" loading="lazy" decoding="async" />)}</div>
                <span className="fs2-time">5–20 min</span>
            </div>
            <div className="fs2-facts"><span className="fs2-tag">Tamil</span><span className="fs2-tag">Malayalam</span></div>
        </div>
    );
}
function SceneFeature() {
    return (
        <div className="fs2-fx">
            <div className="fs2-screen">
                {FEATURE.map((src, i) => (
                    <img key={src} className="fs2-screen__img" src={src} alt="" loading="lazy" decoding="async" style={{ ["--n" as string]: i } as React.CSSProperties} />
                ))}
            </div>
            <div className="fs2-thumbs">
                {FEATURE.map((src, i) => (
                    <span key={src} className="fs2-thumbs__t" style={{ ["--n" as string]: i } as React.CSSProperties}>
                        <img src={src} alt="" loading="lazy" decoding="async" />
                    </span>
                ))}
            </div>
        </div>
    );
}
function SceneFounder() {
    return (
        <div className="fs2-fx">
            <div className="fs2-wave">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ ["--n" as string]: i } as React.CSSProperties} />)}</div>
            <div className="fs2-shows">
                <span><img src="/logos/teqdots-logo.png" alt="" loading="lazy" decoding="async" /></span>
                <span><img src="/startup%20musings%20final.png" alt="" loading="lazy" decoding="async" /></span>
            </div>
            <div className="fs2-facts"><span className="fs2-tag">In English</span></div>
        </div>
    );
}
/* eslint-enable @next/next/no-img-element */
const SCENES = [SceneSeries, SceneShort, SceneFeature, SceneFounder];

export function FormatStage({ items, onActive }: { items: StageItem[]; onActive?: (i: number) => void }) {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(0);
    const [cycle, setCycle] = useState(0);          // bumps on every pick, so the timer and its ring restart
    const [held, setHeld] = useState(false);        // pointer over the section: the timer and the ring wait
    const [seen, setSeen] = useState(false);
    const root = useRef<HTMLDivElement>(null);
    const hover = useRef(false);

    useEffect(() => {
        const el = root.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.35 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // tells the section which format is open (the channel row below lights the channels that carry it)
    useEffect(() => { onActive?.(active); }, [active, onActive]);

    const go = (i: number) => { setActive((cur) => { if (cur !== i) setPrev(cur); return i; }); };

    // the tabs keep moving on by themselves; a click opens a tab and the count starts again from there
    useEffect(() => {
        if (!seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let left = ROTATE_MS;
        let last = performance.now();
        const id = window.setInterval(() => {
            const now = performance.now();
            if (!hover.current) left -= now - last;
            last = now;
            if (left <= 0) go((active + 1) % items.length);
        }, 100);
        return () => window.clearInterval(id);
    }, [active, cycle, seen, items.length]);

    const pick = (i: number) => { go(i); setCycle((c) => c + 1); };
    const onKey = (e: React.KeyboardEvent) => {
        const next = e.key === "ArrowRight";
        if (!next && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const i = (active + (next ? 1 : items.length - 1)) % items.length;
        pick(i);
        root.current?.querySelectorAll<HTMLButtonElement>(".fs2-tab")[i]?.focus();
    };

    const t = items[active];
    const Scene = SCENES[active];
    return (
        <div className={`fs2${held ? " is-held" : ""}`} ref={root} style={{ ["--fs2-ms" as string]: `${ROTATE_MS}ms` } as React.CSSProperties}
            onPointerEnter={() => { hover.current = true; setHeld(true); }} onPointerLeave={() => { hover.current = false; setHeld(false); }}>
            <div className="fs2-tabs" role="tablist" aria-label="Our formats" onKeyDown={onKey}>
                {items.map((f, i) => {
                    const Icon = ICONS[i];
                    return (
                        <button key={f.title} type="button" role="tab" id={`fs2-tab-${i}`} aria-selected={active === i} aria-controls="fs2-panel"
                            tabIndex={active === i ? 0 : -1} className={`fs2-tab fs2--${f.tone}${active === i ? " is-on" : ""}`} onClick={() => pick(i)}>
                            {/* the open tab's icon sits in a ring that draws itself round while the tab is on show */}
                            <span className="fs2-tab__ico" key={active === i ? `on-${cycle}` : "off"} aria-hidden><Icon strokeWidth={2} /></span>
                            {f.title}
                        </button>
                    );
                })}
            </div>

            <div className={`fs2-panel fs2--${t.tone}`} role="tabpanel" id="fs2-panel" aria-labelledby={`fs2-tab-${active}`}>
                {/* soft colour blobs in the box's corners, in the format's own disc tones, drifting slowly */}
                <span className="fs2-blob fs2-blob--tr" aria-hidden />
                <span className="fs2-blob fs2-blob--bl" aria-hidden />
                <span className="fs2-blob fs2-blob--tl" aria-hidden />
                <div className="fs2-copy" key={`copy-${active}`}>
                    <h3 className="font-serif">{t.title}</h3>
                    {t.chip && <span className="fs2-chip">{t.chip}</span>}
                    <p>{t.text}</p>
                </div>

                <div className="fs2-art" data-k={active} aria-hidden>
                    {/* the disc: the previous colour, with the new one sweeping across it */}
                    <span className={`fs2-disc fs2--${items[prev].tone}`}>
                        <span key={`wipe-${active}`} className={`fs2-wipe fs2--${t.tone}`} />
                    </span>
                    {/* the person rises out of the disc: clipped to it below its middle, free above */}
                    <span className="fs2-clip">
                        <img key={`p-${active}`} className={`fs2-person fs2-person--${active}`} src={t.object} alt="" decoding="async" draggable={false} />
                    </span>
                    <div key={`fx-${active}`} className="fs2-fxwrap"><Scene /></div>
                </div>
            </div>
        </div>
    );
}
