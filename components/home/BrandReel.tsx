"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./brand-reel.css";

/**
 * "Put your brand in a story people follow" (27 Nov 2026): the brands we have worked with as logo bubbles (tabs).
 * Picking a brand shows its videos, each in its own true shape, and every brand's set has the same height and edges:
 *   - three wide videos: one large, two stacked beside it, the pair exactly as tall as the large one;
 *   - vertical videos (Shorts, or vertical footage in a wide upload): standing side by side at that same height.
 * Keep each brand to all wide or all vertical videos; a mixed set falls back to one row.
 * A click opens the video on YouTube in a new tab. While the section is on screen and nobody has picked anything, the brands
 * step on by themselves: a thin line under the selected logo fills, then the next brand opens (paused on hover;
 * stops for good once a logo or video is clicked). Each brand leads with the
 * videos that are about it; brands with fewer are filled with our own films until their own work is picked.
 * Styles: .br-*.
 */
// short: a vertical YouTube Short. pillar: vertical footage uploaded inside a wide (16:9) video, shown as vertical too.
// sd: the video has no high-resolution thumbnail, so the standard one is used. bars: the picture itself carries
// cinema bars above and below; the cover zooms past them.
export type ReelVideo = { id: string; title: string; time: string; short?: boolean; pillar?: boolean; sd?: boolean; bars?: boolean };
export type ReelClient = { name: string; logo: string; videos: ReelVideo[] };

const tall = (v: ReelVideo) => Boolean(v.short || v.pillar);
const poster = (v: ReelVideo) => `https://i.ytimg.com/vi/${v.id}/${v.short ? "oar2" : v.sd ? "sddefault" : "maxresdefault"}.jpg`;
const watchUrl = (v: ReelVideo) => (v.short ? `https://www.youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`);
const STEP_MS = 7000;

function Clip({ v, i, onPlay }: { v: ReelVideo; i: number; onPlay: () => void }) {
    return (
        <figure className={`br-clip${tall(v) ? " br-clip--short" : ""}${v.pillar ? " br-clip--pillar" : ""}`} style={{ ["--i" as string]: i } as React.CSSProperties}>
            <div className="br-frame">
                <a className="br-cover" href={watchUrl(v)} target="_blank" rel="noopener noreferrer" onClick={onPlay} aria-label={`Watch ${v.title} on YouTube`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`br-img${v.bars ? " br-img--bars" : ""}`} src={poster(v)} alt="" loading="lazy" decoding="async" />
                    <span className="br-badges" aria-hidden>
                        {v.short && <span className="br-badge br-badge--short">Short</span>}
                        <span className="br-badge">{v.time}</span>
                    </span>
                </a>
            </div>
            <figcaption className="br-caption">{v.title}</figcaption>
        </figure>
    );
}

export function BrandReel({ clients }: { clients: ReelClient[] }) {
    const [on, setOn] = useState(0);
    const client = clients[on];
    // stepping on by itself: only while on screen, until someone picks a brand or plays a video
    const [auto, setAuto] = useState(true);
    const [seen, setSeen] = useState(false);
    const root = useRef<HTMLDivElement>(null);
    const stop = () => setAuto(false);
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setAuto(false); return; }
        const el = root.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.45 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    // the selection ring slides from bubble to bubble
    const tabsRef = useRef<HTMLDivElement>(null);
    const [ring, setRing] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
    useLayoutEffect(() => {
        const wrap = tabsRef.current;
        if (!wrap) return;
        const place = () => {
            const t = wrap.querySelectorAll<HTMLElement>(".br-tab")[on];
            if (!t) return;
            setRing({ x: t.offsetLeft, y: t.offsetTop, w: t.offsetWidth, h: t.offsetHeight });
            // phones: the bubbles scroll sideways; keep the selected one in view (sideways only, never the page)
            if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: t.offsetLeft - (wrap.clientWidth - t.offsetWidth) / 2, behavior: "smooth" });
        };
        place();
        const ro = new ResizeObserver(place);
        ro.observe(wrap);
        return () => ro.disconnect();
    }, [on]);
    const kind = client.videos.every((v) => !tall(v)) ? "wide" : client.videos.every(tall) ? "tall" : "mixed";

    return (
        <div className={`br${auto && seen ? " is-auto" : ""}`} ref={root}>
            <div className="br-tabs" role="tablist" aria-label="Brands we have worked with" ref={tabsRef}>
                {ring && (
                    <span
                        className="br-ring"
                        aria-hidden
                        style={{ transform: `translate(${ring.x}px, ${ring.y}px)`, width: ring.w, height: ring.h }}
                    >
                        {auto && (
                            <span className="br-step" key={on}>
                                <span
                                    className="br-step-fill"
                                    style={{ animationDuration: `${STEP_MS}ms` }}
                                    onAnimationEnd={(e) => { if (e.target === e.currentTarget) setOn((n) => (n + 1) % clients.length); }}
                                />
                            </span>
                        )}
                    </span>
                )}
                {clients.map((c, i) => (
                    <button
                        key={c.name}
                        type="button"
                        role="tab"
                        id={`br-tab-${i}`}
                        aria-selected={i === on}
                        aria-controls="br-panel"
                        className="br-tab"
                        onClick={() => { setOn(i); stop(); }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.logo} alt={c.name} loading="lazy" decoding="async" data-n={c.name} />
                    </button>
                ))}
            </div>

            <div className="br-panel" id="br-panel" role="tabpanel" aria-labelledby={`br-tab-${on}`} key={client.name}>
                {/* one height for every brand: three wide videos sit as one large with two stacked beside it;
                    vertical ones stand side by side at that same height */}
                <div className={`br-set br-set--${kind}`}>
                    {client.videos.map((v, k) => <Clip key={v.id} v={v} i={k} onPlay={stop} />)}
                </div>
            </div>
        </div>
    );
}
