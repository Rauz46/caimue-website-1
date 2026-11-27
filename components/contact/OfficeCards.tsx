"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import "./office-cards.css";

/**
 * The three offices as cards (Tampa HQ, Chennai, London), each with its landmark drawing, pin, address and an
 * "Active office" line. First built for the Contact page's "Three Cities. One Vision." section (26 Nov 2026);
 * shared with the About page's "Where We Are" (27 Nov). Styles: office-cards.css (.ct-place*).
 */
// The three offices from the first site, each with its landmark drawing
const CITIES = [
                            {
                                flag: "🇺🇸",
                                city: "Tampa",
                                country: "United States",
                                lines: [
                                    "1211, Tech Blvd., #23,",
                                    "Tampa, FL 33619"
                                ],
                                accent: "from-purple-500 to-violet-500",
                                monument: (
                                    <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
                                        {/* US Capitol Dome — clean minimal */}
                                        <g fill="currentColor" className="text-purple-800">
                                            {/* Flagpole + finial */}
                                            <rect x="49" y="4" width="2" height="12" />
                                            <circle cx="50" cy="3" r="2" />
                                            {/* Dome top */}
                                            <path d="M50 16C42 16 36 24 36 32H64C64 24 58 16 50 16Z" />
                                            {/* Dome drum */}
                                            <rect x="34" y="32" width="32" height="6" rx="1" />
                                            {/* Dome pillars */}
                                            <rect x="36" y="38" width="2" height="14" />
                                            <rect x="42" y="38" width="2" height="14" />
                                            <rect x="48" y="38" width="2" height="14" />
                                            <rect x="54" y="38" width="2" height="14" />
                                            <rect x="60" y="38" width="2" height="14" />
                                            {/* Cornice */}
                                            <rect x="32" y="52" width="36" height="4" rx="1" />
                                            {/* Main building body */}
                                            <rect x="20" y="56" width="60" height="30" rx="1" />
                                            {/* Windows row */}
                                            <rect x="26" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="36" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="46" y="62" width="8" height="16" rx="4" fill="white" />
                                            <rect x="58" y="62" width="6" height="10" rx="1" fill="white" />
                                            <rect x="68" y="62" width="6" height="10" rx="1" fill="white" />
                                            {/* Wings */}
                                            <rect x="8" y="66" width="12" height="20" rx="1" />
                                            <rect x="80" y="66" width="12" height="20" rx="1" />
                                            {/* Steps */}
                                            <rect x="16" y="86" width="68" height="4" rx="1" />
                                            <rect x="12" y="90" width="76" height="4" rx="1" />
                                            <rect x="8" y="94" width="84" height="4" rx="1" />
                                        </g>
                                    </svg>
                                )
                            },
                            {
                                flag: "🇮🇳",
                                city: "Chennai",
                                country: "India",
                                lines: [
                                    "6th Floor, Arihant Technopolis,",
                                    "Chennai, Tamil Nadu 600096"
                                ],
                                accent: "from-violet-500 to-pink-500",
                                monument: (
                                    <svg viewBox="0 0 80 120" fill="none" className="w-full h-full">
                                        {/* South Indian Temple Gopuram */}
                                        <g fill="currentColor" className="text-violet-800">
                                            {/* Kalasam (pot finial) */}
                                            <ellipse cx="40" cy="6" rx="3" ry="4" />
                                            <rect x="38" y="9" width="4" height="3" />
                                            {/* Tier 1 — top */}
                                            <path d="M33 12H47L45 20H35L33 12Z" />
                                            <rect x="32" y="20" width="16" height="2" />
                                            {/* Tier 2 */}
                                            <path d="M29 22H51L49 32H31L29 22Z" />
                                            <rect x="28" y="32" width="24" height="2" />
                                            {/* Tier 3 */}
                                            <path d="M25 34H55L53 46H27L25 34Z" />
                                            <rect x="24" y="46" width="32" height="2" />
                                            {/* Tier 4 */}
                                            <path d="M21 48H59L57 62H23L21 48Z" />
                                            <rect x="20" y="62" width="40" height="2" />
                                            {/* Tier 5 — base tier */}
                                            <path d="M17 64H63L61 80H19L17 64Z" />
                                            <rect x="16" y="80" width="48" height="3" />
                                            {/* Gateway / entrance wall */}
                                            <rect x="14" y="83" width="52" height="24" />
                                            {/* Central arch doorway */}
                                            <path d="M32 107V92Q32 86 40 84Q48 86 48 92V107Z" fill="white" />
                                            {/* Side windows */}
                                            <rect x="18" y="88" width="6" height="8" rx="3" fill="white" />
                                            <rect x="56" y="88" width="6" height="8" rx="3" fill="white" />
                                            {/* Base platform */}
                                            <rect x="10" y="107" width="60" height="4" rx="1" />
                                            <rect x="6" y="111" width="68" height="3" rx="1" />
                                        </g>
                                    </svg>
                                )
                            },
                            {
                                flag: "🇬🇧",
                                city: "London",
                                country: "United Kingdom",
                                lines: [
                                    "SINC, 12-16 Addiscombe Road,",
                                    "Croydon, London CR0 0XT"
                                ],
                                accent: "from-pink-500 to-purple-500",
                                monument: (
                                    <svg viewBox="0 0 70 140" fill="none" className="w-full h-full">
                                        {/* Big Ben / Elizabeth Tower */}
                                        <g fill="currentColor" className="text-pink-900">
                                            {/* Spire */}
                                            <path d="M35 2L33 12H37L35 2Z" />
                                            <rect x="33.5" y="12" width="3" height="5" />
                                            {/* Spire base ornament */}
                                            <path d="M30 17H40L38 22H32L30 17Z" />
                                            {/* Upper tower section */}
                                            <rect x="28" y="22" width="14" height="15" rx="1" />
                                            {/* Clock face section */}
                                            <rect x="24" y="37" width="22" height="4" />
                                            <rect x="22" y="41" width="26" height="28" rx="2" />
                                            {/* Clock face */}
                                            <circle cx="35" cy="55" r="10" fill="white" />
                                            <circle cx="35" cy="55" r="8.5" stroke="currentColor" strokeWidth="1" />
                                            {/* Clock hands */}
                                            <line x1="35" y1="55" x2="35" y2="48" stroke="currentColor" strokeWidth="1.2" />
                                            <line x1="35" y1="55" x2="40" y2="55" stroke="currentColor" strokeWidth="1" />
                                            <circle cx="35" cy="55" r="1.2" />
                                            {/* Below clock ornament */}
                                            <rect x="24" y="69" width="22" height="4" />
                                            {/* Main tower body */}
                                            <rect x="20" y="73" width="30" height="45" />
                                            {/* Gothic windows — row 1 */}
                                            <path d="M25 78V88Q25 76 27.5 75Q30 76 30 78V88Z" fill="white" />
                                            <path d="M33 78V88Q33 76 35 75Q37 76 37 78V88Z" fill="white" />
                                            <path d="M40 78V88Q40 76 42.5 75Q45 76 45 78V88Z" fill="white" />
                                            {/* Gothic windows — row 2 */}
                                            <path d="M25 93V103Q25 91 27.5 90Q30 91 30 93V103Z" fill="white" />
                                            <path d="M33 93V103Q33 91 35 90Q37 91 37 93V103Z" fill="white" />
                                            <path d="M40 93V103Q40 91 42.5 90Q45 91 45 93V103Z" fill="white" />
                                            {/* Base section */}
                                            <rect x="18" y="118" width="34" height="5" />
                                            <rect x="15" y="123" width="40" height="4" rx="1" />
                                            <rect x="12" y="127" width="46" height="5" rx="1" />
                                        </g>
                                    </svg>
                                )
                            }
                        ];

export function OfficeCards() {
    return (
        <div className="ct-places">
            {CITIES.map((loc, idx) => (
                <motion.div
                    key={loc.city}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="ct-place"
                >
                    <span className="ct-place-bar" aria-hidden />
                    <span className="ct-place-mark" aria-hidden>{loc.monument}</span>
                    <div className="ct-place-head">
                        <span className="ct-place-pin" aria-hidden><MapPin size={22} /></span>
                        <div>
                            <h3 className="ct-place-city">{loc.city}{idx === 0 && <span className="ct-place-hq">HQ</span>}</h3>
                            <p className="ct-place-country">{loc.country}</p>
                        </div>
                    </div>
                    <span className="ct-place-rule" aria-hidden />
                    <p className="ct-place-lines">
                        {loc.lines.map((line) => (<span key={line} className="block">{line}</span>))}
                    </p>
                    <p className="ct-place-status"><span className="ct-place-dot" aria-hidden />Active office</p>
                </motion.div>
            ))}
        </div>
    );
}
