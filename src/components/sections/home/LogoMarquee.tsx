/**
 * The clients as a strip of film: each logo in its own frame, sprocket holes
 * running along both edges, the whole reel sliding left. The list renders
 * twice and slides by half its width; every frame is the same width and the
 * holes repeat on a period that divides it, so the loop never jumps. It pauses
 * on hover and stands still under reduced motion (home-ignitho.css).
 */
const SECONDS_PER_LOGO = 3.2;

export type MarqueeLogo = { src: string; name: string; w: number; h: number };

export function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="ig-marquee film">
      <ul className="ig-marquee__track film__track" style={{ ["--ig-dur" as string]: `${logos.length * SECONDS_PER_LOGO}s` }}>
        {doubled.map((l, i) => (
          <li key={`${l.src}-${i}`} className="film__cell" aria-hidden={i >= logos.length || undefined}>
            <div className="film__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={i < logos.length ? l.name : ""} width={l.w} height={l.h} loading="eager" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
