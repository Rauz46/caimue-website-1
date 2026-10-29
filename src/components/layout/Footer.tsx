import Link from "next/link";
import { nav, site } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * The footer, kept minimal the way top studio sites sign off: the
 * wordmark across the full width, then one quiet line under a hairline
 * (the year, the socials, the legal links). No repeated navigation.
 * Styles live in home.css (.ft).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft ft--min">
      <Link href="/" className="ft__mark" aria-label={site.name}>
        <Wordmark className="ft__mark-svg" />
      </Link>

      <div className="ft__bar">
        <span>
          © {year} {site.name}
        </span>
        <span className="ft__social">
          <a href={site.social.linkedin} target="_blank" rel="noreferrer noopener" className="ft__legal-link">
            LinkedIn
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer noopener" className="ft__legal-link">
            Instagram
          </a>
        </span>
        <span className="ft__legal-links">
          {nav.legal.map((l) => (
            <Link key={l.href} href={l.href} className="ft__legal-link">
              {l.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
