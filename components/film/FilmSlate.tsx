"use client";

import { motion } from "framer-motion";
import "./film-slate.css";

/**
 * The three offices (27 Nov 2026) as film slates (clapperboards), after the clapperboard business-card pattern
 * (striped clapper across the top, the details written on ruled lines beneath; e.g. "Clapper Board Business Card",
 * creativemarket.com). Each slate: a two-part striped clapper whose upper stick lifts a little on hover, then a deep
 * purple board with chalk-white ruled rows: the office, the address, the country and status. No photographs.
 * PARKED (27 Nov): the owner liked the idea ("good creativity") but wants it used elsewhere, with less detail.
 * Not rendered anywhere yet. Styles: film-slate.css (.sl-*).
 */
const OFFICES = [
    { city: "Tampa", hq: true, address: ["1211, Tech Blvd., #23,", "Tampa, FL 33619"], country: "United States" },
    { city: "Chennai", hq: false, address: ["6th Floor, Arihant Technopolis,", "Chennai, Tamil Nadu 600096"], country: "India" },
    { city: "London", hq: false, address: ["SINC, 12-16 Addiscombe Road,", "Croydon, London CR0 0XT"], country: "United Kingdom" },
];

export function FilmSlates() {
    return (
        <ul className="sl-list">
            {OFFICES.map((o, i) => (
                <motion.li
                    key={o.city}
                    className="sl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* the clapper: the upper stick hinges at its left end */}
                    <div className="sl-clap" aria-hidden>
                        <span className="sl-stick sl-stick--top" />
                        <span className="sl-stick sl-stick--base" />
                    </div>

                    <div className="sl-board">
                        <div className="sl-row">
                            <span className="sl-label">Office</span>
                            <h3 className="sl-city">{o.city}{o.hq && <span className="sl-hq">HQ</span>}</h3>
                        </div>
                        <div className="sl-row">
                            <span className="sl-label">Address</span>
                            <p className="sl-text">{o.address.map((l) => <span key={l}>{l}</span>)}</p>
                        </div>
                        <div className="sl-row sl-row--split">
                            <div>
                                <span className="sl-label">Country</span>
                                <p className="sl-text">{o.country}</p>
                            </div>
                            <div>
                                <span className="sl-label">Status</span>
                                <p className="sl-text sl-status"><i aria-hidden />Active office</p>
                            </div>
                        </div>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}
