"use client";

import Image from "next/image";

/**
 * Hero film arch (Nov 2026). Seven landscape posters sit on a true circular
 * arc: every card rotates around one shared pivot far below the strip, so the
 * spacing and curve are exact and centred. On load the cards fan out from a
 * stacked deck. Hover / focus: the card rises 16px along its radius, turns
 * mostly upright, the poster eases in inside its frame, the shadow deepens.
 * Pure CSS; no JavaScript animation loop.
 */
const title = (src: string) =>
  decodeURIComponent(src.split("/").pop() ?? "").replace(/\.[a-z]+$/i, "");

export default function MovieCardsFan({ images = [] }: { images?: string[] }) {
  const items = images.slice(0, 7);
  const mid = (items.length - 1) / 2;
  return (
    <div className="arch" aria-label="Our films">
      {items.map((src, i) => (
        <div
          key={src}
          className="arch-card"
          tabIndex={0}
          style={{ ["--k" as string]: i - mid, ["--i" as string]: i } as React.CSSProperties}
        >
          <div className="arch-face">
            <Image src={src} alt={`${title(src)} poster`} fill sizes="(max-width: 768px) 40vw, 240px" priority className="arch-img" draggable={false} />
          </div>
          <span className="sr-only">{title(src)}</span>
        </div>
      ))}

      <style>{`
        .arch{
          --w: clamp(150px, 15.2vw, 230px);          /* card width */
          --R: calc(var(--w) * 12);                  /* arc radius (pivot distance) */
          --step: 3.8deg;                            /* angle between cards: a gentle arch */
          position:relative; height: calc(var(--w) * 0.95); margin-top:30px;
        }
        .arch-card{
          --a: calc(var(--k) * var(--step));
          --lift: 0px; --grow: 1; --spread: 0deg;
          position:absolute; left:50%; top:22px;
          width:var(--w); aspect-ratio:16/10; margin-left:calc(var(--w) / -2);
          transform-origin: 50% calc(100% + var(--R));
          transform: rotate(calc(var(--a) + var(--spread))) translateY(calc(-1 * var(--lift)));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
          animation: arch-deal .9s cubic-bezier(.22,1,.36,1) backwards;
          animation-delay: calc(.2s + var(--i) * .05s);
          z-index: calc(10 - var(--k) * var(--k));
          outline:none; cursor:default;
        }
        .arch-face{
          position:absolute; inset:0; border-radius:16px; overflow:hidden;
          box-shadow: 0 24px 44px -20px rgba(20,5,60,.75), 0 0 0 1px rgba(255,255,255,.08);
          transform: rotate(0deg) scale(1); transform-origin: 50% 60%;
          transition: box-shadow .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1);
        }
        .arch-img{ object-fit:cover; transition: transform .7s cubic-bezier(.22,1,.36,1); }

        /* hover / focus: the card is picked out of the hand: it rises along
           its radius, turns most of the way upright, the poster eases in
           inside a fixed frame, and the shadow deepens. Nothing else moves. */
        @media (hover: hover) and (pointer: fine){
          .arch .arch-card:hover{ --lift: 16px; z-index:30; }
          .arch-card:hover .arch-face{
            transform: rotate(calc(var(--a) * -0.7)) scale(1.04);
            box-shadow: 0 40px 60px -26px rgba(20,5,60,.9), 0 0 0 1px rgba(255,255,255,.08);
          }
          .arch-card:hover .arch-img{ transform: scale(1.06); }
        }
        .arch .arch-card:focus-visible{ --lift: 16px; z-index:30; }
        .arch-card:focus-visible .arch-face{
          transform: rotate(calc(var(--a) * -0.7)) scale(1.04);
          box-shadow: 0 0 0 3px #fff, 0 40px 60px -26px rgba(20,5,60,.9);
        }

        /* load: the cards deal out of a stacked deck into the arch */
        @keyframes arch-deal{
          from{ opacity:0; transform: rotate(0deg) translateY(40px) scale(.9); }
          40%{ opacity:1; }
        }

        @media (max-width: 768px){
          .arch{ --w: 26vw; --R: calc(var(--w) * 10); --step: 3.6deg; margin-top:24px; }
          .arch-card:nth-child(1), .arch-card:nth-child(7){ display:none; }
          .arch-face{ border-radius:12px; }
        }
        @media (prefers-reduced-motion: reduce){
          .arch-card, .arch-img{ transition:none; animation:none; }
        }
      `}</style>
    </div>
  );
}
