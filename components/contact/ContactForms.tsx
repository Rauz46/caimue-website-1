"use client";

import { useEffect, useState } from "react";
import { AudienceSection, SectionHead } from "@/components/audience/AudienceParts";
import { AudienceForm, type Field } from "@/components/audience/AudienceForm";

/**
 * The site's only enquiry forms, on /contact. The brand form and the artist form (same fields and headings they had
 * on For Brands and For Artists) sit behind a two-way switch. /contact#brands and /contact#artists open the matching one.
 */
type Kind = "brands" | "artists";

const FORMS: Record<Kind, { tab: string; title: string; subject: string; rows: Field[][] }> = {
    brands: {
        tab: "Brands",
        title: "Tell Us About Your Brand.",
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
        <AudienceSection tone="tint">
            {/* scroll targets for /contact#brands and /contact#artists */}
            <span id="brands" className="ct-form-anchor" aria-hidden />
            <span id="artists" className="ct-form-anchor" aria-hidden />
            <SectionHead title={form.title} />
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
        </AudienceSection>
    );
}
