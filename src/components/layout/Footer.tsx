import Link from "next/link";
import { nav, site } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * The footer: white, after the purple close. The wordmark and one line
 * about the studio, then three short columns (company, social, offices)
 * and the legal row. Styles live in home.css (.ft).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__grid">
        <div className="ft__brand">
          <Link href="/" aria-label={site.name}>
            <Wordmark className="ft__logo" />
          </Link>
        </div>

        <nav className="ft__col" aria-label="Site">
          {nav.primary.map((link) => (
            <Link key={link.href} href={link.href} className="ft__link">
              {link.label}
            </Link>
          ))}
          <Link href={nav.cta.href} className="ft__link">
            {nav.cta.label}
          </Link>
        </nav>

        <nav className="ft__col" aria-label="Social">
          <a href={site.social.instagram} target="_blank" rel="noreferrer noopener" className="ft__link">
            Instagram
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer noopener" className="ft__link">
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="ft__legal">
        <span>
          © {year} {site.name} · Video-first B2B marketing · Headquartered in the US
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
