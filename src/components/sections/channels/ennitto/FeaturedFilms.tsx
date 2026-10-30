"use client";
import { useState, useEffect, useRef } from "react";

const f = "var(--font-outfit), sans-serif";
const serif = "var(--font-outfit), sans-serif";

// All films shown uniformly, in order — sourced from the @ennitto channel uploads.
const VIDEOS = [
  {
    tag: "Short Film",
    title: "Life of Pazham — ft. Avarude Ravu",
    videoId: "RbTy8p9Yozs",
    color: "#7C3AED",
  },
  {
    tag: "Tourism",
    title: "Kerala — ft. Malsya Mandooka Mahamaham",
    videoId: "fYkUhKTOvA0",
    color: "#2BA8A4",
  },
  {
    tag: "Crime Thriller",
    title: "Nadha Nee Varum Kaalocha Kelkuvaan",
    videoId: "HlRkj5mbEM8",
    color: "#4C1D95",
  },
  {
    tag: "Music",
    title: "Jessy's Land — ft. Live A Little",
    videoId: "s0JLsa483o0",
    color: "#6B5ED4",
  },
  {
    tag: "Short Film",
    title: "Puthu Mazha — ft. Avarude Ravu",
    videoId: "yAaDvlTe4lU",
    color: "#7C3AED",
  },
  {
    tag: "Short Film",
    title: "Kalyani — Welcome Home",
    videoId: "XQGPdDVlUzw",
    color: "#7C3AED",
  },
  {
    tag: "Status",
    title: "Mazhamegham — Smile",
    videoId: "aZ1DKKToPsk",
    color: "#8B2FC9",
  },
  {
    tag: "Short Film",
    title: "Amsham — ft. Smile",
    videoId: "SGv5CANSu_s",
    color: "#7C3AED",
  },
  {
    tag: "Tamil Short",
    title: "Live a Little — Shot on iPhone",
    videoId: "UbEN3ahOKcI",
    color: "#2BA8A4",
  },
  {
    tag: "Behind the Scenes",
    title: "Hey Vetri Vela — BTS",
    videoId: "Gs2Xwmr2qf4",
    color: "#6B5ED4",
  },
  {
    tag: "Short",
    title: "Anthathi — ft. Avarude Ravu",
    videoId: "YtiH-fVj6PA",
    color: "#7C3AED",
  },
  {
    tag: "Trailer",
    title: "Live a Little — Trailer",
    videoId: "D9ZKRo7_rRo",
    color: "#8B2FC9",
  },
  {
    tag: "Short",
    title: "Smile — ft. Sidu Sidu",
    videoId: "919Hprivcsk",
    color: "#7C3AED",
  },
  {
    tag: "Teaser",
    title: "Live a Little — Teaser",
    videoId: "jVZZ7S_C-34",
    color: "#8B2FC9",
  },
  {
    tag: "Shorts",
    title: "Office Vibes — Sapphire",
    videoId: "WoWB4UjRrX8",
    color: "#2BA8A4",
  },
];

const iframeAllow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

export function FeaturedFilms() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hovers, setHovers] = useState<Record<number, boolean>>({});
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem clamp(1.25rem, 6vw, 5rem) 7rem",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Dot overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.6s cubic-bezier(0.22, 0.68, 0, 1.15)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.14)",
              color: "#7C3AED",
              borderRadius: "100px",
              padding: "7px 18px",
              fontFamily: f,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              marginBottom: "1.25rem",
            }}
          >
            ✦ Our Films
          </div>

          <h2
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ color: "#18182B" }}>Watch the stories </span>
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #DB2777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              See the talent
            </span>
          </h2>

          <p
            style={{
              fontFamily: f,
              fontSize: "1rem",
              color: "#8E8EA8",
              marginBottom: "3.5rem",
            }}
          >
            Original Malayalam shorts, straight from the Ennitto channel.
          </p>
        </div>

        {/* Uniform video grid */}
        <div className="ef-grid">
          {VIDEOS.map((card, i) => {
            const isHov = hovers[i] || false;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovers((p) => ({ ...p, [i]: true }))}
                onMouseLeave={() => setHovers((p) => ({ ...p, [i]: false }))}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1.5px solid #E8E4FF",
                  background: "#FAFAFA",
                  transition: "all 0.5s cubic-bezier(0.22, 0.68, 0, 1.15)",
                  transitionDelay: `${(i % 3) * 0.07}s`,
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? isHov
                      ? "translateY(-4px)"
                      : "translateY(0)"
                    : "translateY(28px)",
                  boxShadow: isHov
                    ? "0 14px 36px rgba(124,58,237,0.14)"
                    : "0 2px 10px rgba(124,58,237,0.05)",
                }}
              >
                {/* Embed */}
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe loading="lazy"
                    src={`https://www.youtube-nocookie.com/embed/${card.videoId}?rel=0&modestbranding=1&playsinline=1`}
                    title={card.title}
                    allowFullScreen
                    allow={iframeAllow}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
                {/* Meta */}
                <div style={{ padding: "1rem 1.1rem" }}>
                  <span
                    style={{
                      background: `${card.color}14`,
                      color: card.color,
                      border: `1px solid ${card.color}26`,
                      fontFamily: f,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      display: "inline-block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.tag}
                  </span>
                  <div
                    style={{
                      fontFamily: f,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#18182B",
                      lineHeight: 1.35,
                    }}
                  >
                    {card.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div style={{ marginTop: "3rem", textAlign: "center" as const }}>
          <a
            href="https://www.youtube.com/@ennitto"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setLinkHover(true)}
            onMouseLeave={() => setLinkHover(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: f,
              fontWeight: 600,
              fontSize: "15px",
              color: linkHover ? "#DB2777" : "#7C3AED",
              textDecoration: "none",
              borderBottom: `2px solid ${linkHover ? "rgba(219,39,119,0.5)" : "rgba(124,58,237,0.2)"}`,
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            See everything on YouTube
            <span
              style={{
                display: "inline-block",
                transform: linkHover ? "translateX(5px)" : "translateX(0)",
                transition: "transform 0.2s",
              }}
            >
              →
            </span>
          </a>
        </div>
      </div>

      <style>{`
                .ef-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 900px) {
                    .ef-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 560px) {
                    .ef-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </section>
  );
}
