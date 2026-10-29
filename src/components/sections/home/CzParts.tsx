"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Count } from "./WhoStats";

/* ============================================================
   Pieces of the crency-style homepage sections (Oct 2026).
   See home-crency.css for the system they share.
   ============================================================ */

/** True once the element has scrolled into view (and stays true). */
function useSeen<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

/* the tag: a rounded block with a pointed right end, the play shape stretched long */
const TAG_PATH = "M28 0H300L360 90L300 180H28A28 28 0 0 1 0 152V28A28 28 0 0 1 28 0Z";

export type CzStat = { value: string; label: string };

/**
 * Who we are: the figures as chunky brand shapes that cluster like
 * crency's floating icon tiles: a Caimue corner, a disc and a tag.
 */
export function CzStats({ items }: { items: CzStat[] }) {
  const [ref, seen] = useSeen<HTMLDListElement>();
  return (
    <dl ref={ref} className="cz-stats">
      {items.map((s, i) => (
        <div className={`cz-stat cz-stat--${i + 1}`} key={s.label} data-cz-float>
          {i === 2 && (
            <svg className="cz-stat__shape" viewBox="0 0 360 180" preserveAspectRatio="none" aria-hidden>
              <path d={TAG_PATH} />
            </svg>
          )}
          <dt className="cz-stat__label">{s.label}</dt>
          <dd className="cz-stat__value">
            <Count value={s.value} run={seen} />
            <span className="sr-only">{s.value}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export type CzChip = { value: string; label: string };

/**
 * Results: the figures as floating metric chips around a giant title, after
 * crency's "free audit" block. A percentage fills its bar to that percentage;
 * the view counts carry a small play mark instead (no bar to imply a scale).
 */
export function ResultChips({ items, children }: { items: CzChip[]; children: ReactNode }) {
  const [ref, seen] = useSeen<HTMLDivElement>();
  return (
    <div ref={ref} className={`cz-chips${seen ? " is-on" : ""}`}>
      {children}
      <dl className="cz-chips__list">
        {items.map((c, i) => {
          const pct = c.value.endsWith("%") ? parseFloat(c.value) : null;
          return (
            <div className={`cz-chip cz-chip--${i + 1}`} key={c.label} data-cz-float>
              <dt className="cz-chip__label">
                <span className="cz-chip__dot" aria-hidden />
                {c.label}
              </dt>
              <dd className="cz-chip__value">
                <Count value={c.value} run={seen} />
                <span className="sr-only">{c.value}</span>
              </dd>
              <dd className="cz-chip__meter" aria-hidden>
                {pct === null ? (
                  <svg viewBox="0 0 12 12" className="cz-chip__play">
                    <path d="M3 1.8L10 6L3 10.2Z" />
                  </svg>
                ) : (
                  <span className="cz-chip__bar" style={{ ["--pct" as string]: `${pct}%` }} />
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

/** The 3D arrow block, after crency's "view all cases": a pink tag with its side extruded. */
export function TagLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="cz-tag">
      <svg className="cz-tag__shape" viewBox="0 0 360 180" preserveAspectRatio="none" aria-hidden>
        <path className="cz-tag__side" d={TAG_PATH} transform="translate(10 12)" />
        <path className="cz-tag__face" d={TAG_PATH} />
      </svg>
      <span className="cz-tag__text">{children}</span>
    </Link>
  );
}

export type MakeItem = { img: string; title: string; items: string[] };

/**
 * What we make: the three formats as a deck, after theadaffair.com's
 * interactive cards. One card faces front; the other two fan out behind
 * it. Click (or press Enter on) a side card and the deck shuffles it to
 * the front. On phones the deck simply stacks.
 */
export function MakeDeck({ items }: { items: MakeItem[] }) {
  const [front, setFront] = useState(1);
  const n = items.length;
  return (
    <div className="cz-deck">
      <span className="cz-deck__disc" aria-hidden />
      {items.map((m, i) => {
        // -1 = fanned left, 0 = front, 1 = fanned right
        const pos = ((i - front + n + 1) % n) - 1;
        const isFront = pos === 0;
        return (
          <article
            key={m.title}
            className="cz-make-card"
            data-pos={pos}
            role={isFront ? undefined : "button"}
            tabIndex={isFront ? undefined : 0}
            aria-label={isFront ? undefined : `Bring ${m.title} to the front`}
            onClick={() => !isFront && setFront(i)}
            onKeyDown={(e) => {
              if (!isFront && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setFront(i);
              }
            }}
          >
            <div className="cz-make-card__media">
              <Image src={m.img} alt="" fill sizes="(max-width: 900px) 92vw, 440px" />
            </div>
            <h3 className="cz-make-card__title">{m.title}</h3>
            <ul className="cz-make-card__list">
              {m.items.map((it) => (
                <li key={it}>
                  <svg viewBox="0 0 12 12" aria-hidden>
                    <path d="M3 1.8L10 6L3 10.2Z" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

/**
 * A kinetic band of the formats (the deck's own list), after the big
 * moving text strip on theadaffair.com: one line of type running sideways
 * forever, each format separated by a play tile.
 */
export function FormatBand({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="cz-band__row" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it}>
          <span>{it}</span>
          <svg viewBox="0 0 100 100" className="cz-band__mark" aria-hidden>
            <path d="M24 0H76A24 24 0 0 1 100 24V100H24A24 24 0 0 1 0 76V24A24 24 0 0 1 24 0Z" />
            <path d="M39 31L71 50L39 69Z" className="cz-band__glyph" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="cz-band" aria-label="What we make">
      <div className="cz-band__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
