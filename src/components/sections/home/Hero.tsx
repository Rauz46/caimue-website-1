import Image from "next/image";
import { Clapperboard, Megaphone, Play, Smartphone, Sparkles, UserRound, Users, Video, type LucideIcon } from "lucide-react";

/* ============================================================
   THE HERO (v25)
   Two columns on the page grid: the words on the left (title, the
   who-we-are paragraph, the formats as frosted chips), the imagery
   on the right (the two creators, two figures, one film still and
   one chart, each turned slightly toward the copy).
   Ground: fluted glass on the logo purple over slow pink and violet
   glows. Copy and figures are the deck's own (slides 1, 2, 4, 6).
   ============================================================ */

const CSS = `
.hx{position:relative;overflow:hidden;isolation:isolate;background:#3b1680;height:100svh;min-height:680px;max-height:1200px;padding-bottom:0!important}
.hx-bg{position:absolute;inset:0;z-index:-5;pointer-events:none;background:linear-gradient(180deg,#2c0d63 0%,#3b1680 50%,#4a1f95 100%)}
.hx-glow{position:absolute;inset:-10%;z-index:-4;pointer-events:none;background:
  radial-gradient(ellipse 26% 40% at 92% 6%,rgb(255 0 128/.32),rgb(255 0 128/0) 70%),
  radial-gradient(ellipse 22% 60% at 86% 46%,rgb(170 120 245/.32),rgb(170 120 245/0) 70%),
  radial-gradient(ellipse 22% 55% at 12% 58%,rgb(130 84 230/.28),rgb(130 84 230/0) 70%),
  radial-gradient(ellipse 40% 40% at 28% 6%,rgb(24 2 70/.5),rgb(24 2 70/0) 70%),
  radial-gradient(ellipse 50% 30% at 50% 100%,rgb(150 100 240/.22),rgb(150 100 240/0) 70%);
  animation:hx-glow 24s ease-in-out infinite alternate;will-change:transform}
@keyframes hx-glow{0%{transform:translate3d(-2%,0,0)}100%{transform:translate3d(2%,-1.5%,0)}}
/* fluted glass: even columns, each lit on its left edge and shaded on its right, so every seam is a clean line */
.hx-flutes{position:absolute;inset:0;z-index:-3;pointer-events:none;opacity:.7;
  background:repeating-linear-gradient(90deg,rgb(255 255 255/.06) 0,rgb(255 255 255/.07) 4px,rgb(255 255 255/.02) 20px,rgb(255 255 255/0) 34px,rgb(16 0 50/.04) 50px,rgb(16 0 50/.09) 64px,rgb(16 0 50/.05) 69px,rgb(255 255 255/.06) 72px);
  background-position:center top;
  -webkit-mask-image:linear-gradient(90deg,#000 0%,#000 26%,rgb(0 0 0/.45) 42%,rgb(0 0 0/.45) 58%,#000 74%,#000 100%);
  mask-image:linear-gradient(90deg,#000 0%,#000 26%,rgb(0 0 0/.45) 42%,rgb(0 0 0/.45) 58%,#000 74%,#000 100%)}
@media (max-width:767px){.hx-flutes{background-size:48px 100%;background-image:repeating-linear-gradient(90deg,rgb(255 255 255/.06) 0,rgb(255 255 255/.07) 3px,rgb(255 255 255/.02) 13px,rgb(255 255 255/0) 22px,rgb(16 0 50/.04) 33px,rgb(16 0 50/.09) 42px,rgb(16 0 50/.05) 46px,rgb(255 255 255/.06) 48px)}}
.hx-blobs{position:absolute;inset:0;z-index:-4;pointer-events:none;overflow:hidden}
.hx-blob{position:absolute;border-radius:50%;will-change:transform}
.hx-blob--1{width:38vw;height:38vw;right:-8vw;top:-14vw;background:radial-gradient(closest-side,rgb(255 0 128/.3),rgb(255 0 128/0));animation:hx-b1 18s ease-in-out infinite alternate}
.hx-blob--2{width:30vw;height:30vw;left:-6vw;bottom:-8vw;background:radial-gradient(closest-side,rgb(255 60 170/.3),rgb(255 60 170/0));animation:hx-b2 22s ease-in-out infinite alternate}
.hx-blob--3{width:26vw;height:26vw;left:58%;top:18%;background:radial-gradient(closest-side,rgb(236 72 200/.22),rgb(236 72 200/0));animation:hx-b3 26s ease-in-out infinite alternate}
.hx-blob--4{width:34vw;height:34vw;left:8%;top:-10vw;background:radial-gradient(closest-side,rgb(150 96 245/.22),rgb(168 110 255/0));animation:hx-b2 30s ease-in-out infinite alternate-reverse}
@keyframes hx-b1{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-9vw,8vw,0) scale(1.15)}}
@keyframes hx-b2{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(10vw,-6vw,0) scale(1.1)}}
@keyframes hx-b3{0%{transform:translate3d(0,0,0) scale(.9)}100%{transform:translate3d(-14vw,10vw,0) scale(1.1)}}
@media (max-width:767px){.hx-blob--1{width:80vw;height:80vw;top:-30vw}.hx-blob--2{width:70vw;height:70vw}.hx-blob--3,.hx-blob--4{display:none}}
@media (prefers-reduced-motion:reduce){.hx-glow,.hx-blob,.hx-float,.hx-halo{animation:none}}
.hx-body{position:relative;flex:1;min-height:0;width:var(--wrap);margin-inline:auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:var(--space-2xl);align-items:center}

/* left: the words */
.hx-copy{display:grid;justify-items:start;text-align:left;position:relative;z-index:3;padding-bottom:var(--space-xl)}
.hx-copy .cx-h1{text-align:left;line-height:1.06}
.hx-tone{color:#d9c6ff}
.hx-copy .cx-lead{margin:var(--space-m) 0 0;max-width:34rem;color:rgb(255 255 255/.88);text-align:left;font-size:var(--t-body);line-height:1.6;text-wrap:pretty}
.hx-copy .cx-lead strong{color:#fff;font-weight:600}
.hx-chips{margin-top:var(--space-xl);display:grid;grid-template-columns:repeat(3,max-content);gap:10px}
.hx-glass{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:12px;
  background:rgb(255 255 255/.1);border:1px solid rgb(255 255 255/.14);color:rgb(255 255 255/.92);font-weight:500;font-size:.875rem;white-space:nowrap;
  -webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.hx-glass svg{width:16px;height:16px;flex:none;color:#e6d8ff}

/* right: the imagery */
.hx-stage{position:relative;align-self:stretch;min-height:0;text-align:left}
.hx-people{position:absolute;left:50%;bottom:0;translate:-50% 0;width:124%;height:auto;max-height:90%;object-fit:contain;object-position:bottom;max-width:none;z-index:2;filter:drop-shadow(0 30px 60px rgb(28 6 60/.35))}
.hx-halo{position:absolute;left:50%;bottom:6%;width:88%;aspect-ratio:1.3;translate:-50% 0;z-index:1;border-radius:50%;pointer-events:none;
  background:radial-gradient(closest-side,rgb(255 0 128/.42),rgb(255 40 160/.16) 55%,rgb(255 40 160/0));animation:hx-halo 12s ease-in-out infinite alternate;will-change:transform}
@keyframes hx-halo{0%{transform:translate3d(-3%,0,0) scale(.95)}100%{transform:translate3d(3%,-3%,0) scale(1.05)}}
.hx-el{position:absolute;z-index:3}
.hx-float{animation:hx-float 7s ease-in-out infinite alternate;will-change:transform;perspective:1000px}
@keyframes hx-float{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-10px,0)}}
.hx-frost{position:relative;background:rgb(255 255 255/.86);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid rgb(255 255 255/.7);border-radius:16px;box-shadow:0 20px 44px rgb(30 8 70/.22);color:#2a1150}
.hx-kpi{display:grid;gap:2px;padding:12px 16px;width:200px}
.hx-v{font-size:1.625rem;font-weight:600;letter-spacing:-.02em;color:#5b299d;line-height:1.05}
.hx-l{font-size:.8125rem;line-height:1.3;color:#4a3a66}
.hx-badge{position:absolute;top:-14px;right:-14px;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#5b299d;box-shadow:0 8px 20px rgb(30 8 70/.25)}
.hx-badge svg{width:16px;height:16px}
.hx-tile{border-radius:16px;overflow:hidden;box-shadow:0 20px 44px rgb(30 8 70/.35);background:#3a1670;position:relative;width:240px;height:156px}
.hx-tile img{display:block;width:100%;height:100%;object-fit:cover}
.hx-play{position:absolute;left:50%;top:50%;translate:-50% -50%;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:rgb(255 255 255/.88);color:#5b299d}
.hx-play svg{width:16px;height:16px;margin-left:2px;fill:currentColor}
.hx-chart{width:240px;padding:14px 16px;display:grid;gap:6px}
.hx-chart svg{width:100%;height:56px;display:block}
.hx-tilt-l{transform:rotateY(14deg) rotateX(2deg);transform-origin:left center}
.hx-tilt-r{transform:rotateY(-14deg) rotateX(2deg);transform-origin:right center}
@media (prefers-reduced-motion:reduce){.hx-halo,.hx-float{animation:none}}

@media (max-width:1100px){.hx-media{display:none}.hx-chips{grid-template-columns:repeat(2,max-content)}}
@media (max-width:899px){
  .hx-body{grid-template-columns:minmax(0,1fr);gap:var(--space-m);align-items:start;padding-top:var(--space-m)}
  .hx-copy{padding-bottom:0}
  .hx-chips{margin-top:var(--space-m)}
  .hx-chips .hx-glass:nth-child(n+5){display:none}
  .hx-stage{min-height:42svh}
  .hx-people{width:100%;max-height:100%}
  .hx-kpi{width:auto;padding:10px 12px}
  .hx-v{font-size:1.25rem}
  .hx-l{font-size:.75rem}
  .hx-badge{width:28px;height:28px;top:-10px;right:-10px}
  .hx-badge svg{width:13px;height:13px}
}
`;

/* slide 1's lead and slide 4's formats */
const CHIPS: { icon: LucideIcon; label: string }[] = [
  { icon: Clapperboard, label: "Brand films" },
  { icon: UserRound, label: "Founder stories" },
  { icon: Smartphone, label: "Social video" },
  { icon: Megaphone, label: "Campaigns" },
  { icon: Video, label: "Reels and shorts" },
  { icon: Sparkles, label: "Always-on content" },
];

export function Hero() {
  return (
    <section className="cx-s cx-hero hx" data-ground="purple">
      <style>{CSS}</style>
      <div className="hx-bg" aria-hidden />
      <div className="hx-glow" aria-hidden />
      <div className="hx-blobs" aria-hidden>
        <span className="hx-blob hx-blob--1" />
        <span className="hx-blob hx-blob--2" />
        <span className="hx-blob hx-blob--3" />
        <span className="hx-blob hx-blob--4" />
      </div>
      <div className="hx-flutes" aria-hidden />

      <div className="cx-recede hx-body">
        <div className="hx-copy">
          <h1 className="cx-h1" data-hero="h1">
            <span className="cx-h1__line">Video-First</span>
            <span className="cx-h1__line">
              B2B <span className="hx-tone">Marketing</span>
            </span>
          </h1>
          <p className="cx-lead" data-hero="lead">
            Caimue is a <strong>video-first B2B marketing company headquartered in the US</strong>. We grew out of{" "}
            <strong>Café Musings</strong>, making short films and short-form video for our own audience. Millions of
            organic views later, we bring that same craft to B2B brands.
          </p>
          <div className="hx-chips">
            {CHIPS.map(({ icon: Icon, label }) => (
              <span key={label} className="hx-glass" data-hero="el">
                <Icon aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="hx-stage" data-hero="stage">
          <span className="hx-halo" aria-hidden />
          <Image
            src="/hero/hx-people.webp"
            alt=""
            width={1584}
            height={1100}
            priority
            sizes="(max-width: 899px) 100vw, 50vw"
            className="hx-people"
          />

          <div className="hx-el" style={{ left: "0%", top: "30%" }} data-hero="el">
            <div className="hx-float" style={{ animationDelay: "-1s" }}>
              <div className="hx-frost hx-kpi">
                <span className="hx-v">735K</span>
                <span className="hx-l">views on a single reel</span>
                <span className="hx-badge" aria-hidden>
                  <Play />
                </span>
              </div>
            </div>
          </div>
          <div className="hx-el" style={{ right: "0%", top: "30%" }} data-hero="el">
            <div className="hx-float" style={{ animationDelay: "-4s" }}>
              <div className="hx-frost hx-kpi">
                <span className="hx-v">25+</span>
                <span className="hx-l">influencers discovered</span>
                <span className="hx-badge" aria-hidden>
                  <Users />
                </span>
              </div>
            </div>
          </div>

          <div className="hx-el hx-media" style={{ left: "0%", bottom: "10%" }} data-hero="el">
            <div className="hx-float" style={{ animationDelay: "-2.5s" }}>
              <div className="hx-tile hx-tilt-l">
                <Image src="/hero/hx-interview.webp" alt="" width={460} height={300} sizes="230px" />
                <span className="hx-play" aria-hidden>
                  <Play />
                </span>
              </div>
            </div>
          </div>
          <div className="hx-el hx-media" style={{ right: "0%", bottom: "10%" }} data-hero="el">
            <div className="hx-float" style={{ animationDelay: "-5.5s" }}>
              <div className="hx-frost hx-chart hx-tilt-r">
                <span className="hx-v">2.09M</span>
                <span className="hx-l">organic views, top eight reels</span>
                <svg viewBox="0 0 240 56" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 50 C 24 47, 40 37, 64 40 S 104 28, 128 31 S 176 12, 240 6 V56 H0 Z" fill="rgb(109 53 214 / 0.12)" />
                  <path d="M0 50 C 24 47, 40 37, 64 40 S 104 28, 128 31 S 176 12, 240 6" fill="none" stroke="#6d35d6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
