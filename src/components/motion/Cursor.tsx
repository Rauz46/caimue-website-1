"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   THE CURSOR (30 Oct 2026). A pink arrow with a white outline and a
   soft shadow, wide at the back. Over anything clickable it becomes the
   ordinary pointing hand, drawn the same way, the fingertip on the hot
   spot. It tracks the pointer one to one (a cursor that trails feels
   broken). A press sinks and tilts it and deepens the pink; the release
   springs it back past its size and settles. Mouse and trackpad only;
   text fields keep the native caret.
   ============================================================ */

/* shared with the big cursor in the hero's click (Home) */
export const ARROW_PATH =
  "M5.3 3.6 Q3.2 2.8 3.8 5 L9.2 25.9 Q9.9 28.3 11.4 26.3 L15.8 19.8 Q16.4 19 17.4 18.8 L25.9 15.9 Q28.2 15.1 26.3 13.9 Z";
/* the hand: Phosphor "hand-pointing-fill" (MIT), viewBox 256 */
export const HAND_PATH =
  "M224,104v50.93c0,46.2-36.85,84.55-83,85.06A83.71,83.71,0,0,1,80.6,215.4C58.79,192.33,34.15,136,34.15,136a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,96,151.74V32a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V104a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V88a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V112a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25v-7.28c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,224,104Z";

const CSS = `
html.has-cursor, html.has-cursor *{cursor:none!important}
html.has-cursor input, html.has-cursor textarea, html.has-cursor select, html.has-cursor [contenteditable="true"]{cursor:auto!important}
.cur{position:fixed;left:0;top:0;z-index:10000;pointer-events:none;width:30px;height:30px;opacity:0;transition:opacity .2s ease;will-change:transform}
.cur.is-on{opacity:1}
.cur.is-off{opacity:0}
.cur svg{position:absolute;display:block;overflow:visible;filter:drop-shadow(0 2px 3px rgb(17 10 31/.3));
  transition:transform .24s cubic-bezier(.22,1,.36,1),opacity .14s ease}
.cur .cur__fill{fill:#ff0080;stroke:#fff;stroke-linejoin:round;transition:fill .12s ease}
.cur__arrow{left:0;top:0;width:30px;height:30px;transform-origin:4px 4px}
.cur__hand{left:-8.2px;top:2.2px;width:28px;height:28px;transform-origin:12.2px 1.8px;opacity:0;transform:scale(.7)}
.cur.is-link .cur__arrow{opacity:0;transform:scale(.7)}
.cur.is-link .cur__hand{opacity:1;transform:none}
.cur.is-down svg{transition-duration:.09s}
.cur.is-down .cur__arrow{transform:scale(.78) rotate(-7deg)}
.cur.is-link.is-down .cur__hand{transform:scale(.78) rotate(-7deg)}
.cur.is-down .cur__fill{fill:#d6006b}
`;

const CLICKABLE = "a, button, [role='button'], label, summary, .ca-tile, [data-cursor='link']";

export function Cursor() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = el.current;
    if (!cur) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const html = document.documentElement;
    html.classList.add("has-cursor");

    let raf = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      raf = 0;
      cur.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
      cur.classList.add("is-on");
      cur.classList.remove("is-off");
      const t = e.target as Element | null;
      cur.classList.toggle("is-link", !!t?.closest?.(CLICKABLE));
    };
    const down = () => cur.classList.add("is-down");
    // the release: back past its size, a small counter-tilt, then still
    const up = () => {
      cur.classList.remove("is-down");
      const shape = cur.querySelector<SVGElement>(cur.classList.contains("is-link") ? ".cur__hand" : ".cur__arrow");
      shape?.animate(
        [
          { transform: "scale(.78) rotate(-7deg)" },
          { transform: "scale(1.14) rotate(3deg)", offset: 0.42 },
          { transform: "scale(.97) rotate(-1deg)", offset: 0.74 },
          { transform: "none" },
        ],
        { duration: 380, easing: "cubic-bezier(.22,1,.36,1)" },
      );
    };
    const leave = () => cur.classList.add("is-off");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, []);

  return (
    <div ref={el} className="cur" aria-hidden>
      <style>{CSS}</style>
      <svg className="cur__arrow" viewBox="0 0 30 30">
        <path className="cur__fill" d={ARROW_PATH} strokeWidth={2.2} />
      </svg>
      <svg className="cur__hand" viewBox="0 0 256 256">
        <path className="cur__fill" d={HAND_PATH} strokeWidth={32} paintOrder="stroke" />
      </svg>
    </div>
  );
}
