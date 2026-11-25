import { ArrowRight, Play } from "lucide-react";
import type { Channel } from "@/components/ui/PlatformsSection";
import "./format-flip.css";

/**
 * Home, formats and channels (25 Nov 2026). Ported 1:1 from YouTube for Creators, "Tell your story, your way"
 * (youtube.com/creators/create/overview): four tall flip cards, 24px radius, 12px gaps. Front: the image full bleed
 * under a flat shade, a big white title low in the card and an arrow under it. Back (hover or focus flips on Y):
 * a dark face with an icon, the title, the text in grey and outline pill buttons. Ours: the format's person on its
 * brand colour; the back is the logo purple with the format's tag, its text and its channels as buttons to YouTube.
 * Above the cards: the standard section head, then the channels as a still row of die-cut logo stickers
 * (public/stickers) on one baseline with hairline column rules, each with its language, words and YouTube link.
 * Styles: format-flip.css (.ff-*).
 */
export type FfFormat = { title: string; text: string; tag: string; object: string };

const GROUNDS = ["#6B2BE5", "#E31B23", "#FF7A3D", "#4C1D95"];
// the disc behind each person, a contrasting brand colour (the same arc + disc language as the section two cards)
const DISCS = ["#FFC633", "#8754F2", "#6B2BE5", "#E31B23"];
const STICKER: Record<string, string> = {
    Ennitto: "/stickers/ennitto.webp",
    Ennamo: "/stickers/ennamo.webp",
    TeqDots: "/stickers/teqdots.webp",
    "Startup Musings": "/stickers/startup-musings.webp",
};
const CARRIES = [["Ennitto", "Ennamo"], ["Ennitto", "Ennamo"], [], ["TeqDots", "Startup Musings"]];

export function FormatFlip({ formats, channels, title, text }: { formats: FfFormat[]; channels: Channel[]; title: [string, string]; text: string }) {
    const byName = (n: string) => channels.find((c) => c.name === n)!;
    return (
        <>
            {/* the site's standard section head: one heading size, one description size */}
            <div className="ff-hero">
                <h2 className="cm-rise cm-h2 font-serif mb-5">{title[0]} {title[1]}</h2>
                <p className="ff-lede text-[#4A3F5C] text-base md:text-lg leading-relaxed">{text}</p>
            </div>

            {/* the channels: die-cut logo stickers on one baseline, each with its language, words and YouTube link.
                Still; on hover a sticker straightens and lifts a little */}
            <ul className="ff-chs" aria-label="Our channels">
                {channels.map((c) => (
                    <li key={c.name} className="ff-ch">
                        {c.comingSoon ? (
                            <span className="ff-ch__stk">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={STICKER[c.name]} alt={c.name} loading="lazy" decoding="async" data-n={c.name} />
                            </span>
                        ) : (
                            <a className="ff-ch__stk" href={c.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} on YouTube`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={STICKER[c.name]} alt="" loading="lazy" decoding="async" data-n={c.name} />
                            </a>
                        )}
                        <span className="ff-ch__lang">{c.language}</span>
                        <p className="ff-ch__text">{c.description}</p>
                        {!c.comingSoon && (
                            <a className="ff-ch__go" href={c.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} on YouTube`}>
                                <span aria-hidden><Play size={9} fill="currentColor" strokeWidth={0} /></span> YouTube
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <ul className="ff-grid">
                {formats.map((f, i) => (
                    <li key={f.title} className="ff-card" tabIndex={0} aria-label={f.title}>
                        <div className="ff-inner">
                            <div className="ff-face ff-face--front" style={{ background: GROUNDS[i] }} aria-hidden>
                                <span className="ff-arc" />
                                <span className="ff-disc" style={{ background: DISCS[i] }} />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className={`ff-person ff-person--${i}`} src={f.object} alt="" loading="lazy" decoding="async" />
                                <span className="ff-shade" />
                                <div className="ff-layout">
                                    <span className="ff-title">{f.title}</span>
                                    <ArrowRight className="ff-arrow" size={20} strokeWidth={2} />
                                </div>
                            </div>
                            <div className="ff-face ff-face--back">
                                <div className="ff-layout ff-layout--back">
                                    <span className="ff-icon">{f.tag}</span>
                                    <h3 className="ff-sub">{f.title}</h3>
                                    <p className="ff-text">{f.text}</p>
                                    <div className="ff-btns">
                                        {CARRIES[i].map(byName).map((c) =>
                                            c.comingSoon ? (
                                                <span key={c.name} className="ff-btn ff-btn--off">{c.name} <small>{c.language}</small></span>
                                            ) : (
                                                <a key={c.name} className="ff-btn" href={c.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} on YouTube`}>
                                                    <Play size={12} fill="currentColor" strokeWidth={0} /> {c.name}
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </>
    );
}
