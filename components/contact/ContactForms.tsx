"use client";

import { useEffect, useState } from "react";
import { Mail, Megaphone, Sparkles } from "lucide-react";
import { AudienceForm, type Field } from "@/components/audience/AudienceForm";
import "@/components/audience/audience.css";

/**
 * Contact page, second band (26 Nov 2026: the first site's layout in our design). Left: the form's heading and the
 * three doors from the v7 copy as topic cards. Right: the enquiry form card (brand form / artist form behind a two-way
 * switch). /contact#brands and /contact#artists open the matching form.
 */
type Kind = "brands" | "artists";

const FORMS: Record<Kind, { tab: string; title: string; subject: string; rows: Field[][] }> = {
    brands: {
        tab: "Brands",
        title: "Tell Us About Your Brand",
        subject: "Brand enquiry (Contact page)",
        rows: [
            [{ name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
             { name: "company", label: "Company", type: "text", required: true, autoComplete: "organization" }],
            [{ name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
             { name: "make", label: "What do you want to make?", type: "select", required: true, options: ["Micro-series", "Brand film", "Integration", "Corporate film", "Not sure"] }],
            [{ name: "budget", label: "Budget range", type: "text" }],
            [{ name: "message", label: "Message", type: "textarea", required: true }],
        ],
    },
    artists: {
        tab: "Artists",
        title: "Show Us Your Work",
        subject: "Artist submission (Contact page)",
        rows: [
            [{ name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
             { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2" }],
            [{ name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
             { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" }],
            [{ name: "role", label: "I am a", type: "select", required: true, options: ["Actor", "Writer", "Director", "DOP", "Editor", "Musician"] },
             { name: "languages", label: "Languages", type: "text", required: true }],
            [{ name: "links", label: "Links to your work", type: "textarea", required: true }],
            [{ name: "message", label: "Message", type: "textarea" }],
        ],
    },
};

// v7 copy: one door per audience, each with its own inbox
const DOORS = [
    { label: "Brands", line: "A series, a film or a collaboration.", email: "brands@caimue.com", Icon: Megaphone, tone: "#6B2BE5", soft: "#EFE6FF" },
    { label: "Artists", line: "Actors, writers, directors, crew.", email: "artists@caimue.com", Icon: Sparkles, tone: "#E31B23", soft: "#FDE8E9" },
    { label: "Everything Else", line: "Press, partnerships, careers.", email: "hello@caimue.com", Icon: Mail, tone: "#FF7A3D", soft: "#FFEFE6" },
];

export function ContactForms() {
    const [kind, setKind] = useState<Kind>("brands");

    // follow the hash: links from the home page land on the right form
    useEffect(() => {
        const sync = () => {
            const h = window.location.hash.slice(1);
            if (h === "brands" || h === "artists") setKind(h);
        };
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);

    const form = FORMS[kind];
    return (
        <section className="ct-band">
            <div className="ct-grid-lines" aria-hidden />
            {/* scroll targets for /contact#brands and /contact#artists */}
            <span id="brands" className="ct-form-anchor" aria-hidden />
            <span id="artists" className="ct-form-anchor" aria-hidden />
            <div className="ct-split">
                {/* left: the heading and the three doors */}
                <div className="ct-info">
                    <h2 className="cm-rise cm-h2 font-serif ct-info-title">{form.title}</h2>
                    <ul className="ct-doors">
                        {DOORS.map(({ label, line, email, Icon, tone, soft }) => (
                            <li key={label} className="ct-door" style={{ ["--t" as string]: tone, ["--s" as string]: soft } as React.CSSProperties}>
                                <span className="ct-door-icon" aria-hidden><Icon size={22} /></span>
                                <span className="ct-door-copy">
                                    <h3 className="ct-door-label">{label}</h3>
                                    <p className="ct-door-line">{line}</p>
                                    <a className="ct-door-mail" href={`mailto:${email}`}>{email}</a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* right: the form card */}
                <div className="ct-form-col">
                    <div className="ct-tabs" role="tablist" aria-label="Who is writing">
                        {(Object.keys(FORMS) as Kind[]).map((k) => (
                            <button
                                key={k}
                                type="button"
                                role="tab"
                                id={`ct-tab-${k}`}
                                aria-selected={kind === k}
                                aria-controls="ct-form-panel"
                                className="ct-tab"
                                onClick={() => setKind(k)}
                            >
                                {FORMS[k].tab}
                            </button>
                        ))}
                    </div>
                    <div id="ct-form-panel" role="tabpanel" aria-labelledby={`ct-tab-${kind}`}>
                        <AudienceForm key={kind} subject={form.subject} submitLabel="Send" rows={form.rows} />
                    </div>
                </div>
            </div>
        </section>
    );
}
