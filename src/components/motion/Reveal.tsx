"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll entrance that is safe when JS hasn't run.
 *
 * The server HTML is fully visible. On mount we "arm" the element (which is
 * what applies the hidden state) and only for elements that are still below
 * the fold — anything already on screen is left alone, so there's no flash.
 *
 * This replaces framer's `initial={{ opacity: 0 }}`, which bakes
 * `style="opacity:0"` into the server HTML and leaves content invisible for
 * anyone whose observer never fires (no JS, print, long-page screenshots).
 */
function useReveal(delay: number) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already in view on first paint? Leave it visible rather than hiding it
    // just to fade it straight back in.
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.9) return;

    el.dataset.armed = "true";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return {
    ref,
    className: "reveal",
    style: { "--delay": `${delay}s` } as React.CSSProperties,
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const { ref, className: base, style } = useReveal(delay);

  return (
    <Tag ref={ref} className={cn(base, className)} style={style}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  /** Gap between each child's entrance, in seconds. */
  gap?: number;
  delay?: number;
  as?: ElementType;
};

/** Stamps an incremental delay onto each direct `RevealItem` child. */
export function RevealGroup({
  children,
  className,
  gap = 0.08,
  delay = 0,
  as: Tag = "div",
}: RevealGroupProps) {
  return (
    <Tag className={className}>
      {Children.map(children, (child, i) =>
        isValidElement<{ delay?: number }>(child)
          ? cloneElement(child, { delay: delay + i * gap })
          : child,
      )}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const { ref, className: base, style } = useReveal(delay);

  return (
    <Tag ref={ref} className={cn(base, className)} style={style}>
      {children}
    </Tag>
  );
}
