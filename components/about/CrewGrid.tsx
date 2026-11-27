import Image from "next/image";
import "./crew-grid.css";

/**
 * "Meet the Caimue Crew" (27 Nov 2026), ported from the team section of Humaan (humaan.com/about, Awwwards "Team
 * layout" pick): cut-out portraits on soft rounded cards with gaps, set in columns that sit at slightly different
 * heights, and at the foot of each card a white pill holding a dark chip with the full name, then the role.
 * In Caimue colours: lavender cards, deep purple chip. Phones: the pill keeps the name, the role sits under the card. (Humaan shows first names; we show full names.)
 * Styles: .cg-*.
 */
export type CrewMember = { name: string; role: string; image: string };

export function CrewGrid({ crew }: { crew: CrewMember[] }) {
    return (
        <ul className="cg" aria-label="The Caimue crew">
            {crew.map((p) => (
                <li key={p.name} className="cg-item">
                    <div className="cg-card">
                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 767px) 46vw, 290px" className="cg-img" />
                        <p className="cg-pill">
                            <span className="cg-first">{p.name}</span>
                            <span className="cg-role">{p.role}</span>
                        </p>
                    </div>
                    <p className="cg-cap">{p.role}</p>
                </li>
            ))}
        </ul>
    );
}
