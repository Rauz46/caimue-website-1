import React from "react";

/**
 * Home "lively" card (Nov 2026) — the approved section-three style from the new
 * site: one solid punchy colour, bold title + white icon badge on top, short
 * text, then a visual that rises from the bottom edge (people cut-out, posters
 * or a logo plate) with a contrasting disc and a large lighter arc behind it.
 * Styles: .lc* in app/globals.css.
 */
export type LcTone = "purple" | "pink" | "orange" | "yellow";

export function LivelyCard({
    tone,
    eyebrow,
    stat,
    title,
    icon,
    text,
    action,
    visual,
    visualHeight = 250,
}: {
    tone: LcTone;
    eyebrow?: React.ReactNode;
    stat?: string;
    title?: React.ReactNode;
    icon?: React.ReactNode;
    text: React.ReactNode;
    action?: React.ReactNode;
    visual?: React.ReactNode;
    visualHeight?: number;
}) {
    return (
        <article className={`lc lc--${tone}${visual ? "" : " lc--plain"}`}>
            <div className="lc-head">
                <div className="min-w-0">
                    {eyebrow && <div className="lc-eyebrow">{eyebrow}</div>}
                    {stat && <div className="lc-stat">{stat}</div>}
                    {title && <h3 className="lc-title">{title}</h3>}
                </div>
                {icon && <span className="lc-badge" aria-hidden>{icon}</span>}
            </div>
            <p className="lc-text">{text}</p>
            {action && <div className="lc-action">{action}</div>}
            {visual && (
                <div className="lc-visual" style={{ height: visualHeight }}>
                    {visual}
                </div>
            )}
        </article>
    );
}
