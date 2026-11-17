"use client";

import React, { useState } from "react";

export type Field =
    | { name: string; label: string; type: "text" | "email" | "tel" | "url"; required?: boolean; autoComplete?: string }
    | { name: string; label: string; type: "select"; options: string[]; required?: boolean }
    | { name: string; label: string; type: "textarea"; required?: boolean };

/**
 * Enquiry form for the For Brands / For Artists pages. Posts to the same Formspree
 * endpoint as /contact, tagged with a subject so each enquiry reaches the right person.
 * Native validation, a calm inline confirmation (no modal, no burst).
 * `rows` groups fields: two fields in a row sit side by side from tablet width up.
 */
export function AudienceForm({ subject, rows, submitLabel }: { subject: string; rows: Field[][]; submitLabel: string }) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [name, setName] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mreapgye", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...data, _subject: subject }),
            });
            if (!res.ok) throw new Error("Form submission failed");
            setName(String(data.name ?? "").split(" ")[0]);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    const control = (f: Field) => {
        const id = `au-${f.name}`;
        const common = { id, name: f.name, required: f.required, className: "au-input" };
        if (f.type === "select") {
            return (
                <select {...common} defaultValue="">
                    <option value="" disabled>Select</option>
                    {f.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
            );
        }
        if (f.type === "textarea") return <textarea {...common} rows={4} />;
        return <input {...common} type={f.type} autoComplete={"autoComplete" in f ? f.autoComplete : undefined} />;
    };

    return (
        <div className="au-form-card">
            <form className="au-form" onSubmit={onSubmit}>
                {rows.map((row, i) => (
                    <div key={i} className={row.length > 1 ? "au-row" : "au-field-row"}>
                        {row.map((f) => (
                            <div key={f.name} className="au-field">
                                <label htmlFor={`au-${f.name}`}>{f.label}{f.required ? " *" : ""}</label>
                                {control(f)}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="au-submit" aria-live="polite">
                    <button type="submit" className="btn-primary" disabled={status === "sending"}>
                        {submitLabel}
                    </button>
                    {status === "sent" && (
                        <p className="text-[#4A3F5C] font-medium">
                            Thanks{name ? ` ${name}` : ""}, we&apos;ve received your message.
                        </p>
                    )}
                    {status === "error" && <p className="au-error">We couldn&apos;t send that. Please try again.</p>}
                </div>
            </form>
        </div>
    );
}
