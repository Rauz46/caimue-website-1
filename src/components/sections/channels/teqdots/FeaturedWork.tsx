"use client";
import { useState, useEffect, useRef } from 'react';

const f = 'Plus Jakarta Sans, sans-serif';
const serif = 'var(--font-playfair, "Playfair Display", serif)';

// All videos shown uniformly, in order — no single video popped out bigger.
// Sourced from the TeqDots YouTube channel (@TeqThots) uploads.
const VIDEOS = [
    { tag: 'AI Hiring', title: 'Talentou AI Hiring — Office Chain Game', videoId: 'qxEgzqbbUtc', color: '#8B2FC9' },
    { tag: 'AI & SaaS', title: 'Real SaaS Product Debate — SimBFI × TeqDots', videoId: 'f_Wn3YpgPcw', color: '#2BA8A4' },
    { tag: 'AI & SaaS', title: 'Prodeia — AI for IT Services Engagements', videoId: 'spNgdn3qKSU', color: '#2BA8A4' },
    { tag: 'HR Tech', title: 'We Tried Talentou — What Recruiters Think', videoId: 'dCnnjCj-FYo', color: '#8B2FC9' },
    { tag: 'Culture', title: 'Fun Friday Hits Different', videoId: 'r8gJExsHXsw', color: '#6B5ED4' },
    { tag: 'AI & SaaS', title: 'Prodeia — Right-Sized Teams with AI', videoId: 'MxqQ08neZ6M', color: '#2BA8A4' },
    { tag: 'AI Hiring', title: 'Talentou — AI Hiring That Actually Works', videoId: 'b6XyubMUoV0', color: '#8B2FC9' },
    { tag: 'HR Tech', title: 'Talentou Recruitment AI — 3 Hiring Mistakes', videoId: 'dBTFAIZDnAw', color: '#8B2FC9' },
    { tag: 'Behind the Build', title: 'Piqual in Action — A Real Day Inside a Startup', videoId: 'PRvikFx6kU4', color: '#7C3AED' },
    { tag: 'Startup Life', title: 'Corporate Confessions — Startup Edition', videoId: 'L8ib0Y4VKYU', color: '#7C3AED' },
    { tag: 'AI & SaaS', title: 'Startup Team ChatGPT History', videoId: 'uBzZAAjEySk', color: '#2BA8A4' },
    { tag: 'Workplace', title: 'Red Flag or Green Flag — Workplace Edition', videoId: 'Ua-pzrr4aUA', color: '#6B5ED4' },
    { tag: 'Behind the Build', title: 'Inside Piqual — Episode 1', videoId: 'zwhRON7SIPU', color: '#7C3AED' },
    { tag: 'Behind the Build', title: 'Inside Piqual — Official Trailer', videoId: 'mAyqZp_StIA', color: '#7C3AED' },
    { tag: 'SalesTech', title: 'Piqual Sales Quiz Challenge', videoId: 'PTcZeW620Sk', color: '#2BA8A4' },
];

const iframeAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

export default function FeaturedWork() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const [hovers, setHovers] = useState<Record<number, boolean>>({});
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                padding: '7rem clamp(1.25rem, 6vw, 5rem)',
                background: '#FFFFFF',
                overflow: 'hidden',
            }}
        >
            {/* Dot overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(28px)',
                    transition: 'all 0.6s cubic-bezier(0.22, 0.68, 0, 1.15)',
                }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(124,58,237,0.07)',
                        border: '1px solid rgba(124,58,237,0.14)',
                        color: '#7C3AED',
                        borderRadius: '100px', padding: '7px 18px',
                        fontFamily: f, fontSize: '12px', fontWeight: 700,
                        letterSpacing: '0.06em',
                        marginBottom: '1.25rem',
                    }}>✦ Our Work</div>

                    <h2 style={{
                        fontFamily: serif, fontWeight: 700,
                        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                        lineHeight: 1.1, letterSpacing: '-0.01em',
                        marginBottom: '0.75rem',
                    }}>
                        <span style={{ color: '#18182B' }}>Don&apos;t take our word for it. </span>
                        <span style={{
                            background: 'linear-gradient(90deg, #8B2FC9, #3ECDC8)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>Watch it.</span>
                    </h2>

                    <p style={{
                        fontFamily: f, fontSize: '1rem',
                        color: '#8E8EA8', marginBottom: '3.5rem',
                    }}>Real brands. Real briefs. Real results.</p>
                </div>

                {/* Uniform video grid */}
                <div className="fw-grid">
                    {VIDEOS.map((card, i) => {
                        const isHov = hovers[i] || false;
                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHovers(p => ({ ...p, [i]: true }))}
                                onMouseLeave={() => setHovers(p => ({ ...p, [i]: false }))}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1.5px solid #E8E4FF',
                                    background: '#FAFAFA',
                                    transition: 'all 0.5s cubic-bezier(0.22, 0.68, 0, 1.15)',
                                    transitionDelay: `${i * 0.07}s`,
                                    opacity: visible ? 1 : 0,
                                    transform: visible
                                        ? (isHov ? 'translateY(-4px)' : 'translateY(0)')
                                        : 'translateY(28px)',
                                    boxShadow: isHov
                                        ? '0 14px 36px rgba(124,58,237,0.14)'
                                        : '0 2px 10px rgba(124,58,237,0.05)',
                                }}
                            >
                                {/* Embed */}
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${card.videoId}?rel=0&modestbranding=1&playsinline=1`}
                                        title={card.title}
                                        allowFullScreen
                                        allow={iframeAllow}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                    />
                                </div>
                                {/* Meta */}
                                <div style={{ padding: '1rem 1.1rem' }}>
                                    <span style={{
                                        background: `${card.color}14`,
                                        color: card.color,
                                        border: `1px solid ${card.color}26`,
                                        fontFamily: f, fontSize: '10px', fontWeight: 700,
                                        letterSpacing: '0.05em',
                                        padding: '3px 10px', borderRadius: '100px',
                                        display: 'inline-block', marginBottom: '0.5rem',
                                    }}>{card.tag}</span>
                                    <div style={{
                                        fontFamily: f, fontSize: '0.95rem', fontWeight: 700, color: '#18182B',
                                        lineHeight: 1.35,
                                    }}>{card.title}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom link */}
                <div style={{ marginTop: '3rem', textAlign: 'center' as const }}>
                    <a
                        href="https://www.youtube.com/@TeqThots"
                        target="_blank" rel="noreferrer"
                        onMouseEnter={() => setLinkHover(true)}
                        onMouseLeave={() => setLinkHover(false)}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            fontFamily: f, fontWeight: 600, fontSize: '15px',
                            color: linkHover ? '#8B2FC9' : '#7C3AED',
                            textDecoration: 'none',
                            borderBottom: `2px solid ${linkHover ? 'rgba(139,47,201,0.5)' : 'rgba(124,58,237,0.2)'}`,
                            paddingBottom: '2px',
                            transition: 'color 0.2s, border-color 0.2s',
                        }}
                    >
                        See everything on YouTube
                        <span style={{
                            display: 'inline-block',
                            transform: linkHover ? 'translateX(5px)' : 'translateX(0)',
                            transition: 'transform 0.2s',
                        }}>→</span>
                    </a>
                </div>
            </div>

            <style>{`
                .fw-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 900px) {
                    .fw-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 560px) {
                    .fw-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
