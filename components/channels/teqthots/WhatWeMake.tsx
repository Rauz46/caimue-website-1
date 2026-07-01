// ADD AFTER: <Hero /> in HomePage
"use client";
import { useState, useEffect, useRef } from 'react';

export default function WhatWeMake() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const cardWrapper: React.CSSProperties = {
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "2rem",
        border: "1.5px solid #E8E4FF",
        boxShadow: "0 4px 24px rgba(124,58,237,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: "580px", // Increased height
    };

    const getCardAnim = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `0.6s cubic-bezier(0.22, 0.68, 0, 1.15) ${delay}`,
        height: "100%",
    });

    const iconBox: React.CSSProperties = {
        width: "44px",
        height: "44px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.1rem",
        position: "absolute",
        top: "1.75rem",
        right: "1.75rem",
        border: "1px solid rgba(0,0,0,0.05)",
    };

    const cardHeadline: React.CSSProperties = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontWeight: 800,
        fontSize: "1.75rem",
        lineHeight: 1.2,
        marginBottom: "0.6rem",
    };

    const description: React.CSSProperties = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "0.9rem",
        color: "#6B6B85",
        lineHeight: 1.6,
        marginBottom: "1.5rem",
    };

    const tileLabel: React.CSSProperties = {
        fontSize: "9px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        color: "white",
        background: "rgba(0,0,0,0.4)",
        padding: "3px 8px",
        borderRadius: "4px",
        backdropFilter: "blur(4px)",
    };

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "8rem clamp(1.25rem, 6vw, 5rem)",
                background: "#EEF0FF",
                overflow: "hidden",
            }}
        >
            {/* Subtle dot pattern overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(139,47,201,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            <div style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "1280px",
                margin: "0 auto",
            }}>
                {/* TOP SECTION */}
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <div style={{
                        display: "inline-block",
                        background: "#fff",
                        border: "1px solid rgba(139,47,201,0.15)",
                        color: "#8B2FC9",
                        borderRadius: "100px",
                        padding: "8px 20px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "1.5rem",
                        boxShadow: "0 4px 12px rgba(139,47,201,0.08)",
                    }}>
                        ✦ THREE WAYS WE SHOW UP FOR YOUR BRAND
                    </div>

                    <h2 style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        marginBottom: "1.25rem",
                        textAlign: "center"
                    }}>
                        <span style={{ color: "#18182B", display: "block" }}>Every format your brand</span>
                        <span style={{
                            display: "block",
                            background: "linear-gradient(90deg, #7C3AED, #8B2FC9, #3ECDC8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>will ever need.</span>
                    </h2>

                    <p style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "1.05rem",
                        color: "#6B6B85",
                        maxWidth: "580px",
                        margin: "0 auto",
                        lineHeight: 1.8,
                    }}>
                        Product Videos. Knowledge & Trends. Brand Stories.
                        One studio that does all three — and makes each one look
                        like it cost ten times more than it did.
                    </p>
                </div>

                {/* 3 CARDS */}
                <div className="what-we-make-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.75rem",
                }}>
                    {/* CARD 1: Product Videos */}
                    <div style={getCardAnim("0s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 24px 64px rgba(124,58,237,0.12)";
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "#F5F3FF" }}>🎬</div>
                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>Your Product.</span><br />
                                    <span style={{ color: "#8B2FC9" }}>Centre Stage.</span>
                                </h3>
                                <p style={description}>
                                    We turn what your product does into content that makes people want it. High-impact demos built to convert.
                                </p>

                                {/* Image Layout - new/new images */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "0.5rem",
                                    flexGrow: 1,
                                }}>
                                    {/* Top: full-width feature image */}
                                    <div style={{
                                        gridColumn: "span 2",
                                        borderRadius: "16px",
                                        backgroundImage: "url('/assets/what-we-make/new/new/maxresdefault.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center 20%",
                                        position: "relative",
                                        height: "160px",
                                    }}>
                                        <div style={{ position: "absolute", bottom: "8px", left: "8px" }}>
                                            <span style={tileLabel}>LIVE NOW</span>
                                        </div>
                                        {/* Subtle gradient at bottom for depth */}
                                        <div style={{
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "16px",
                                            background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.25) 100%)",
                                        }} />
                                    </div>

                                    {/* Middle: two images side by side */}
                                    <div style={{
                                        borderRadius: "12px",
                                        backgroundImage: "url('/assets/what-we-make/new/new/sddefault.webp')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100px",
                                    }} />
                                    <div style={{
                                        borderRadius: "12px",
                                        backgroundImage: "url('/assets/what-we-make/new/new/shared image (6).jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100px",
                                    }} />

                                    {/* Bottom: full-width team image */}
                                    <div style={{
                                        gridColumn: "span 2",
                                        borderRadius: "12px",
                                        backgroundImage: "url('/assets/what-we-make/new/new/Image (17).jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center 30%",
                                        height: "120px",
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Knowledge & Trends */}
                    <div style={getCardAnim("0.15s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 24px 64px rgba(124,58,237,0.12)";
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "#FFFBEB" }}>🤖</div>
                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>Be the Brand</span><br />
                                    <span style={{ color: "#8B2FC9" }}>That Knows.</span>
                                </h3>
                                <p style={description}>
                                    Educate while you sell. We make you the most informed and trusted voice in your space.
                                </p>

                                {/* Visual area - Adjusted for Portrait/Landscape Matching */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexGrow: 1 }}>
                                    <div style={{
                                        height: "170px",
                                        borderRadius: "16px",
                                        backgroundImage: "url('/assets/what-we-make/new/IMG_2967.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center 40%",
                                    }} />

                                    {/* Portrait Placeholder for Portrait Images */}
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "0.5rem",
                                        height: "190px" // Taller for portrait
                                    }}>
                                        <div style={{
                                            borderRadius: "12px",
                                            backgroundImage: "url('/assets/what-we-make/new/image.png')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center 5%"
                                        }} />
                                        <div style={{
                                            borderRadius: "12px",
                                            backgroundImage: "url('/assets/what-we-make/new/THE TEAM.jpg')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center 5%"
                                        }} />
                                    </div>

                                    <div style={{
                                        background: "#fff",
                                        borderRadius: "16px",
                                        padding: "1rem 0.5rem",
                                        border: "1px solid #f0f0f5",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                                        marginTop: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}>
                                        <div style={{
                                            fontSize: "8px",
                                            fontWeight: 700,
                                            color: "#18182B",
                                            letterSpacing: "0.05em",
                                            textTransform: "lowercase",
                                            marginBottom: "0.6rem",
                                            textAlign: "center"
                                        }}>our latest collabs</div>

                                        <div style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                            gap: "0.6rem",
                                            alignItems: "center"
                                        }}>
                                            {[
                                                { src: "/assets/what-we-make/logos/hael logo.jpg" },
                                                { src: "/assets/what-we-make/logos/Prodeify-logo-final-768x280-1.png" },
                                                { src: "/assets/what-we-make/logos/talentou_logo.png" },
                                                { src: "/assets/what-we-make/logos/XIME-Logo.png" },
                                                { src: "/assets/what-we-make/logos/webiste logo.png" },
                                                { src: "/assets/what-we-make/logos/website lgo.png" },
                                                { src: "/assets/what-we-make/logos/Untitled_design__30___1_-removebg-preview-e1767002253317.png" }
                                            ].map((logo, idx) => (
                                                <div key={idx} style={{ height: "14px", display: "flex", alignItems: "center" }}>
                                                    <img
                                                        src={logo.src}
                                                        alt="Partner Logo"
                                                        style={{
                                                            height: "100%",
                                                            width: "auto",
                                                            objectFit: "contain",
                                                            filter: "grayscale(1) opacity(0.7)",
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Brand Stories */}
                    <div style={getCardAnim("0.3s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 24px 64px rgba(124,58,237,0.12)";
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "#ECFDF5" }}>🎙️</div>
                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>The Story</span><br />
                                    <span style={{ color: "#8B2FC9" }}>Behind the Build.</span>
                                </h3>
                                <p style={description}>
                                    People buy from people. We tell founder journeys and culture stories that stick.
                                </p>

                                {/* Portrait Gallery - Optimized to Fill Every Inch */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "0.5rem",
                                    flexGrow: 1,
                                }}>
                                    <div style={{
                                        gridColumn: "span 2",
                                        borderRadius: "16px",
                                        backgroundImage: "url('/assets/what-we-make/new/NEVER.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "120px"
                                    }} />
                                    <div style={{
                                        borderRadius: "12px",
                                        backgroundImage: "url('/assets/what-we-make/new/thumbnail.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "180px"
                                    }} />
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem" }}>
                                        {[
                                            '/assets/what-we-make/story/Image (16).jpg',
                                            '/assets/what-we-make/story/Image (18).jpg',
                                        ].map((img, i) => (
                                            <div key={i} style={{
                                                borderRadius: "10px",
                                                backgroundImage: `url('${img}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: "86px"
                                            }} />
                                        ))}
                                    </div>
                                    <div style={{
                                        gridColumn: "span 2",
                                        borderRadius: "12px",
                                        backgroundImage: "url('/assets/what-we-make/story/Untitled-2.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top",
                                        height: "160px",
                                        marginTop: "auto"
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .what-we-make-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .what-we-make-grid > div > div {
                        min-height: unset !important;
                        padding: 1.5rem !important;
                    }
                    .what-we-make-section {
                        padding-top: 4rem !important;
                        padding-bottom: 4rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
