import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { BrandGround } from "@/components/ui/BrandGround";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import "./audience.css";

/** Inner-page hero on the site's purple ground (same layers as /about and /contact). */
export function AudienceHero({ title }: { title: React.ReactNode }) {
    return (
        <section className="au-hero">
            <BrandGround className="z-0" />
            <HeroGrid className="opacity-40 z-10" />
            <div className="bg-noise opacity-10 z-10" />
            <div className="hidden md:contents">
                <FloatingScribbles className="top-16" />
            </div>
            <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block" aria-hidden="true">
                <div className="absolute top-28 right-1/4 text-purple-300/30 text-4xl">✦</div>
                <div className="absolute top-48 left-1/3 text-purple-300/30 text-2xl">★</div>
                <div className="absolute bottom-1/4 right-1/3 text-purple-200/40 text-3xl">✧</div>
            </div>
            <div className="container relative z-20 text-center">
                <h1 className="au-hero-title font-serif cm-in">{title}</h1>
            </div>
        </section>
    );
}

/** A content section on the tinted or white ground, with the faint grid lines (and the doodles on white). */
export function AudienceSection({
    tone,
    id,
    children,
}: {
    tone: "tint" | "white";
    id?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className={`au-section au-section--${tone} cv-auto${id ? " au-anchor" : ""}`}>
            <div className="au-grid-lines" aria-hidden="true" />
            {tone === "white" && <HandDrawnScribbles />}
            <div className="container au-inner">{children}</div>
        </section>
    );
}

/** Centred section heading (and optional line), the site's one h2 style. */
export function SectionHead({ title, sub }: { title: React.ReactNode; sub?: string }) {
    return (
        <div className="au-head">
            <h2 className="cm-rise cm-h2 font-serif">{title}</h2>
            {sub && <p>{sub}</p>}
        </div>
    );
}

/** Titled steps joined by a quiet dashed rule; icons instead of numerals. */
export function Steps({ steps }: { steps: { icon: React.ReactNode; title: string; text: string }[] }) {
    return (
        <ol className={`au-steps au-steps--${steps.length}`}>
            {steps.map((s) => (
                <li key={s.title} className="au-step">
                    <span className="au-step-icon" aria-hidden="true">{s.icon}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                </li>
            ))}
        </ol>
    );
}

/** A card in the home "lively" style (lc classes from globals.css) with an optional dotted list. */
export function AudienceCard({
    tone,
    icon,
    title,
    text,
    listLabel,
    list,
}: {
    tone: "purple" | "pink" | "orange" | "yellow";
    icon: React.ReactNode;
    title: string;
    text: string;
    listLabel?: string;
    list?: string[];
}) {
    return (
        <article className={`lc lc--${tone} lc--plain`}>
            <div className="lc-head">
                <h3 className="lc-title">{title}</h3>
                <span className="lc-badge" aria-hidden="true">{icon}</span>
            </div>
            <p className="lc-text">{text}</p>
            {list && (
                <>
                    {listLabel && <p className="au-get-label">{listLabel}</p>}
                    <ul className="au-list">
                        {list.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </article>
    );
}

/** Accessible FAQ built on native disclosure elements. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
    return (
        <div className="au-faq">
            {items.map((it) => (
                <details key={it.q}>
                    <summary>
                        {it.q}
                        <span className="au-faq-icon" aria-hidden="true"><Plus size={16} strokeWidth={2.4} /></span>
                    </summary>
                    <p className="au-faq-a">{it.a}</p>
                </details>
            ))}
        </div>
    );
}

/** Brand logos we have worked with. */
export function LogoStrip({ logos }: { logos: { name: string; src: string }[] }) {
    return (
        <ul className="logo-grid" role="list">
            {logos.map((l) => (
                <li key={l.name} className="logo-grid-cell">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt={l.name} loading="lazy" decoding="async" />
                </li>
            ))}
        </ul>
    );
}
