import Link from "next/link";
import "./not-found.css";

/**
 * 404: a floating island at sunset in the brand colours, with the 404 as folded, faceted letters standing on it.
 * Layout after a classic desert-island 404 the owner chose, redrawn as Caimue's own (palette, cypress trees, faceted type).
 * Intro: the sun opens, the island rises, the letters rise out of the ground one by one, the trees grow, the speed lines draw in.
 * Motion after the "orange dot motion system" prompt (prompt-motion.com): one dot drops in, lands on a small spring and grows into the sun;
 * the corner disc clusters spring in from their corners; then quiet loops (float, sway, light sweep, drifting discs, twinkling sparkles). No pointer interaction.
 */
export default function NotFound() {
  return (
    <section className="nf relative overflow-hidden">
      {/* same ground as the homepage's white sections, kept quieter than the hero: faint grid lines and softened doodles */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      {/* background in the card-disc language: solid disc clusters in the corners, soft lavender discs,
          thin outline arcs, small coloured dots, sparkles and plus marks */}
      <div className="nf-bg" aria-hidden="true">
        <span className="nf-blob nf-blob--tl" />
        <span className="nf-ring nf-ring--tl" />
        <span className="nf-cluster nf-cluster--tr">
          <span className="nf-blob nf-blob--soft-tr" />
          <span className="nf-blob nf-blob--purple" />
          <span className="nf-blob nf-blob--orange" />
          <span className="nf-blob nf-blob--red" />
        </span>
        <span className="nf-ring nf-ring--tr" />
        <span className="nf-cluster nf-cluster--bl">
          <span className="nf-blob nf-blob--soft-bl" />
          <span className="nf-blob nf-blob--pink" />
        </span>
        <span className="nf-ring nf-ring--bl" />
        <span className="nf-cluster nf-cluster--br">
          <span className="nf-blob nf-blob--soft-br" />
          <span className="nf-blob nf-blob--peach" />
        </span>
        <span className="nf-ring nf-ring--br" />

        <span className="nf-dot" style={{ left: "24%", top: "27%", background: "#FF7A3D", animationDelay: "1.05s, 2.4s" }} />
        <span className="nf-dot nf-dot--s" style={{ left: "43%", top: "14%", background: "#F28CB8", animationDelay: "1.12s, 2.4s" }} />
        <span className="nf-dot" style={{ left: "71%", top: "22%", background: "#E31B23", animationDelay: "1.19s, 2.4s" }} />
        <span className="nf-dot nf-dot--l" style={{ left: "77.5%", top: "28%", background: "#FFC633", animationDelay: "1.26s, 2.4s" }} />
        <span className="nf-dot nf-dot--s" style={{ left: "88%", top: "28%", background: "#B9A3F2", animationDelay: "1.33s, 2.4s" }} />
        <span className="nf-dot" style={{ left: "90.5%", top: "34.5%", background: "#F0447A", animationDelay: "1.40s, 2.4s" }} />
        <span className="nf-dot nf-dot--s" style={{ left: "19%", top: "44.5%", background: "#B9A3F2", animationDelay: "1.47s, 2.4s" }} />
        <span className="nf-dot nf-dot--s" style={{ left: "69%", top: "61%", background: "#FF7A3D", animationDelay: "1.54s, 2.4s" }} />

        <svg className="nf-mark nf-mark--plus" style={{ left: "9%", top: "44%" }} viewBox="0 0 56 56"><circle cx="28" cy="28" r="26" /><path d="M28 14v28M14 28h28" /></svg>
        <svg className="nf-mark nf-mark--wave" style={{ left: "60%", top: "8%" }} viewBox="0 0 90 20"><path d="M2 12c10-12 20-12 30 0s20 12 30 0 18-10 26-4" /></svg>
        <svg className="nf-mark nf-mark--plus-s" style={{ left: "66.5%", top: "18%" }} viewBox="0 0 16 16"><path d="M8 2v12M2 8h12" /></svg>
        <svg className="nf-mark nf-mark--plus-s" style={{ left: "29%", top: "59%" }} viewBox="0 0 16 16"><path d="M8 2v12M2 8h12" /></svg>
        <svg className="nf-mark nf-mark--plus-s" style={{ left: "78%", top: "59%" }} viewBox="0 0 16 16"><path d="M8 2v12M2 8h12" /></svg>
        <svg className="nf-spark4" style={{ left: "31%", top: "11%", color: "#C9B6F5" }} viewBox="0 0 24 24"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
        <svg className="nf-spark4 nf-spark4--line" style={{ left: "77%", top: "42%", color: "#A88BEB" }} viewBox="0 0 24 24"><path d="M12 1l2.4 8.6L23 12l-8.6 2.4L12 23l-2.4-8.6L1 12l8.6-2.4z" /></svg>
        <svg className="nf-spark4" style={{ left: "74%", top: "51%", color: "#F0447A", width: 18, height: 18 }} viewBox="0 0 24 24"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
        <svg className="nf-spark4" style={{ left: "29%", top: "64%", color: "#FFC633", width: 22, height: 22 }} viewBox="0 0 24 24"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
        <svg className="nf-spark4" style={{ left: "85.5%", top: "51%", color: "#FFC633", width: 30, height: 30 }} viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9z" /></svg>
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center">
        <h1 className="sr-only">404: page not found</h1>

        <svg className="nf-art" viewBox="0 0 600 420" role="img" aria-label="404">
          <defs>
            <clipPath id="nf-g0"><path d="M0 -232V-546L600 -1490H1112V-546H1284V-232H1112V0H724V-232ZM734 -546V-1070H722L398 -558V-546Z" /></clipPath>
            <clipPath id="nf-g1"><path d="M658 20Q451 20 304 -71Q157 -162 78 -332Q0 -503 0 -744Q0 -985 78 -1156Q157 -1328 304 -1419Q451 -1510 658 -1510Q865 -1510 1012 -1418Q1160 -1327 1238 -1156Q1316 -985 1316 -744Q1316 -503 1238 -332Q1160 -162 1013 -71Q866 20 658 20ZM658 -308Q735 -308 788 -358Q841 -408 868 -506Q896 -603 896 -744Q896 -886 868 -984Q841 -1082 788 -1133Q735 -1184 658 -1184Q582 -1184 528 -1133Q475 -1082 448 -984Q420 -886 420 -744Q420 -603 447 -506Q474 -408 528 -358Q581 -308 658 -308Z" /></clipPath>
            <clipPath id="nf-g2"><path d="M0 -232V-546L600 -1490H1112V-546H1284V-232H1112V0H724V-232ZM734 -546V-1070H722L398 -558V-546Z" /></clipPath>
            <clipPath id="nf-ground"><rect x="0" y="-200" width="600" height="506" /></clipPath>
          </defs>

          {/* sun with drifting cloud lines */}
          {/* soft ground shadow under the floating island: shrinks as the island lifts */}
          <ellipse className="nf-shadow" cx="300" cy="414" rx="190" ry="7" fill="#5B299D" opacity=".12" />

          <g className="nf-sun">
            <circle cx="320" cy="168" r="122" fill="#FFC633" />
            <circle cx="410" cy="78" r="26" fill="#FFFFFF" />
          </g>
          <g className="nf-clouds" fill="#FFFFFF">
            <g className="nf-lines">
              <rect className="nf-line" x="262" y="104" width="110" height="5" rx="2.5" />
              <rect className="nf-line" x="300" y="116" width="96" height="5" rx="2.5" style={{ animationDelay: ".82s" }} />
            </g>
            <g className="nf-puff" fill="#EFE6FE">
              <rect x="150" y="104" width="96" height="16" rx="8" />
              <circle cx="180" cy="104" r="14" />
              <circle cx="204" cy="99" r="18" />
              <rect x="128" y="128" width="96" height="5" rx="2.5" />
            </g>
          </g>

          {/* the floating island and everything on it */}
          <g className="nf-float">
            <g className="nf-island">
              <path fill="#8754F2" d="M64,310 L536,310 C530,340 500,350 470,346 C440,342 430,372 400,370 C360,368 350,398 300,398 C250,398 240,368 200,370 C170,372 160,342 130,346 C100,350 70,340 64,310 Z" />
              <path fill="#5B299D" d="M64,310 L536,310 C528,330 505,336 480,332 C450,328 436,352 400,350 C366,348 346,374 300,374 C254,374 234,348 200,350 C164,352 150,328 120,332 C95,336 72,330 64,310 Z" />
              <path fill="#EFE6FE" d="M48,298 Q300,286 552,298 L536,312 L64,312 Z" />
              <path fill="#DCCBFB" d="M150,300 Q200,262 262,300 Z M338,300 Q410,256 478,300 Z" />
            </g>
            <g className="nf-tree" style={{ animationDelay: "1.55s" }}>
              <rect x="95" y="284" width="6" height="18" rx="3" fill="#3B1A7A" />
              <g className="nf-sway">
                <ellipse cx="98" cy="238" rx="20" ry="50" fill="#FFA06F" />
                <path d="M98,188 A20,50 0 0 1 98,288 Z" fill="#FF7A3D" />
              </g>
            </g>
            <g className="nf-tree" style={{ animationDelay: "1.7s" }}>
              <rect x="61" y="284" width="6" height="18" rx="3" fill="#3B1A7A" />
              <g className="nf-sway">
                <ellipse cx="64" cy="258" rx="12" ry="30" fill="#FFDA75" />
                <path d="M64,228 A12,30 0 0 1 64,288 Z" fill="#FFC633" />
              </g>
            </g>
            <g className="nf-tree" style={{ animationDelay: "1.6s" }}>
              <rect x="499" y="284" width="6" height="18" rx="3" fill="#3B1A7A" />
              <g className="nf-sway">
                <ellipse cx="502" cy="238" rx="20" ry="50" fill="#FFA06F" />
                <path d="M502,188 A20,50 0 0 1 502,288 Z" fill="#FF7A3D" />
              </g>
            </g>
            <g className="nf-tree" style={{ animationDelay: "1.75s" }}>
              <rect x="533" y="284" width="6" height="18" rx="3" fill="#3B1A7A" />
              <g className="nf-sway">
                <ellipse cx="536" cy="258" rx="12" ry="30" fill="#FFDA75" />
                <path d="M536,228 A12,30 0 0 1 536,288 Z" fill="#FFC633" />
              </g>
            </g>
            <g clipPath="url(#nf-ground)">
            <g className="nf-letter" style={{ animationDelay: "1.2s" }}>
              <g transform="translate(127 302) rotate(-5 54.6 -60) scale(0.085)">
                <path d="M0 -232V-546L600 -1490H1112V-546H1284V-232H1112V0H724V-232ZM734 -546V-1070H722L398 -558V-546Z" fill="#5B299D" />
                <g clipPath="url(#nf-g0)"><polygon points="642,-1600 1334,-1600 1334,-820 449,-700" fill="#3B1A7A" /><polygon points="-50,-560 770,-430 899,60 -50,60" fill="#3B1A7A" /><polygon points="-50,-1600 385,-1600 231,-1050 -50,-1150" fill="#7440C2" /></g><g clipPath="url(#nf-g0)"><rect className="nf-shine" x="-900" y="-1700" width="360" height="2000" fill="#FFFFFF" opacity=".22" transform="skewX(-18)" style={{ animationDelay: "2.40s" }} /></g>
              </g>
            </g>
            <g className="nf-letter" style={{ animationDelay: "1.3s" }}>
              <g transform="translate(244.1 298) rotate(2 55.9 -60) scale(0.085)">
                <path d="M658 20Q451 20 304 -71Q157 -162 78 -332Q0 -503 0 -744Q0 -985 78 -1156Q157 -1328 304 -1419Q451 -1510 658 -1510Q865 -1510 1012 -1418Q1160 -1327 1238 -1156Q1316 -985 1316 -744Q1316 -503 1238 -332Q1160 -162 1013 -71Q866 20 658 20ZM658 -308Q735 -308 788 -358Q841 -408 868 -506Q896 -603 896 -744Q896 -886 868 -984Q841 -1082 788 -1133Q735 -1184 658 -1184Q582 -1184 528 -1133Q475 -1082 448 -984Q420 -886 420 -744Q420 -603 447 -506Q474 -408 528 -358Q581 -308 658 -308Z" fill="#5B299D" />
                <g clipPath="url(#nf-g1)"><polygon points="724,-1600 1366,-1600 1366,-760 592,-900" fill="#3B1A7A" /><polygon points="-50,-700 658,-560 816,80 -50,80" fill="#3B1A7A" /><polygon points="-50,-1600 421,-1600 263,-1080 -50,-1150" fill="#7440C2" /></g><g clipPath="url(#nf-g1)"><rect className="nf-shine" x="-900" y="-1700" width="360" height="2000" fill="#FFFFFF" opacity=".22" transform="skewX(-18)" style={{ animationDelay: "2.54s" }} /></g>
              </g>
            </g>
            <g className="nf-letter" style={{ animationDelay: "1.4s" }}>
              <g transform="translate(364.0 302) rotate(5 54.6 -60) scale(0.085)">
                <path d="M0 -232V-546L600 -1490H1112V-546H1284V-232H1112V0H724V-232ZM734 -546V-1070H722L398 -558V-546Z" fill="#5B299D" />
                <g clipPath="url(#nf-g2)"><polygon points="642,-1600 1334,-1600 1334,-820 449,-700" fill="#3B1A7A" /><polygon points="-50,-560 770,-430 899,60 -50,60" fill="#3B1A7A" /><polygon points="-50,-1600 385,-1600 231,-1050 -50,-1150" fill="#7440C2" /></g><g clipPath="url(#nf-g2)"><rect className="nf-shine" x="-900" y="-1700" width="360" height="2000" fill="#FFFFFF" opacity=".22" transform="skewX(-18)" style={{ animationDelay: "2.68s" }} /></g>
              </g>
            </g>
            </g>
          </g>
        </svg>

        <p className="nf-copy">This page doesn&rsquo;t exist or has moved.</p>
        <Link href="/" className="nf-btn">Back to home</Link>
      </div>
    </section>
  );
}
