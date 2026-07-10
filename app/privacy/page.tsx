"use client";

import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
    return (
        <motion.div {...fadeUp(delay)} className="mb-12">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4 font-serif border-l-4 border-[#7C3AED] pl-4">
                {title}
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3 pl-5">{children}</div>
        </motion.div>
    );
}

export default function PrivacyPage() {
    return (
        <>
            <section className="pt-32 pb-20 relative overflow-hidden">
                <HeroGrid />

                <div className="container max-w-4xl relative z-10">
                    {/* Header */}
                    <motion.div {...fadeUp(0)} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-50 text-[#7C3AED] border border-purple-100 mb-6">
                            Legal
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500 text-base">
                            Effective date: April 24, 2026 &nbsp;·&nbsp; Last updated: April 24, 2026
                        </p>
                    </motion.div>

                    {/* Intro */}
                    <motion.p {...fadeUp(0.1)} className="text-lg text-gray-700 mb-14 leading-relaxed bg-purple-50/50 border border-purple-100 rounded-2xl p-6">
                        At <strong>Caimue Inc.</strong> ("Caimue," "we," "our," or "us"), your privacy matters as much as the stories we tell. This Privacy Policy explains what information we collect when you visit <strong>caimue.com</strong> or interact with our services, how we use it, and the choices you have. Please read it carefully — if you do not agree with these practices, please do not use our website.
                    </motion.p>

                    {/* Sections */}
                    <Section title="1. Who We Are" delay={0.15}>
                        <p>
                            Caimue is an AI-first film studio headquartered in Tampa, Florida, USA, with teams in Chennai, India and London, UK. We produce original short films, regional digital content (FunShortz), and documentary-style business content (TeqThots) across Tamil, Malayalam, and English. We also partner with brands and support independent filmmakers through funding and production services.
                        </p>
                        <p>
                            <strong>Data controller:</strong> Caimue Inc., 1211 Tech Blvd., Suite #23, Tampa, FL 33619, United States.
                            <br />
                            <strong>Contact:</strong>{" "}
                            <a href="mailto:collaborations@caimue.com" className="text-[#7C3AED] hover:underline">
                                collaborations@caimue.com
                            </a>
                        </p>
                    </Section>

                    <Section title="2. Information We Collect" delay={0.2}>
                        <p>We collect information in two ways:</p>
                        <p>
                            <strong>Information you provide directly:</strong> When you fill out our contact or collaboration form, we collect your first name, last name, email address, phone number, the subject of your enquiry, and the message content. We do not collect payment information on this website.
                        </p>
                        <p>
                            <strong>Information collected automatically:</strong> Like most websites, we collect certain technical data when you visit — your IP address, browser type, device type, operating system, pages viewed, time spent on pages, referring URL, and general geographic location (country/city level). This data is collected through cookies and similar technologies.
                        </p>
                        <p>
                            <strong>Information from third parties:</strong> If you reach us via social media platforms (Instagram, LinkedIn), those platforms may share limited profile data with us in accordance with their own privacy policies.
                        </p>
                    </Section>

                    <Section title="3. How We Use Your Information" delay={0.25}>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Respond to your enquiries, collaboration requests, or brand partnership proposals.</li>
                            <li>Assess and process filmmaker funding or production support applications.</li>
                            <li>Send you updates about Caimue projects, releases, or opportunities — only where you have opted in or have a legitimate interest in receiving such communications.</li>
                            <li>Analyse website performance and improve user experience.</li>
                            <li>Comply with applicable legal obligations.</li>
                            <li>Protect the security and integrity of our website and services.</li>
                        </ul>
                        <p>
                            We do not sell your personal data. We do not use your data for automated profiling or decision-making that produces legal effects.
                        </p>
                    </Section>

                    <Section title="4. Legal Basis for Processing (GDPR)" delay={0.3}>
                        <p>If you are located in the European Economic Area or the United Kingdom, we process your personal data under one of the following legal bases:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Contract performance:</strong> Where processing is necessary to fulfil a request or agreement with you.</li>
                            <li><strong>Legitimate interests:</strong> Where we have a genuine business reason that does not override your rights (e.g., analytics, fraud prevention).</li>
                            <li><strong>Consent:</strong> Where you have given explicit consent, such as subscribing to updates. You may withdraw consent at any time.</li>
                            <li><strong>Legal obligation:</strong> Where processing is required by applicable law.</li>
                        </ul>
                    </Section>

                    <Section title="5. Cookies & Tracking Technologies" delay={0.35}>
                        <p>
                            We use cookies and similar tracking technologies to operate and improve our website. These may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Essential cookies:</strong> Required for the website to function (e.g., session management).</li>
                            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the site (e.g., page views, traffic sources). We use privacy-respecting analytics tools.</li>
                            <li><strong>Preference cookies:</strong> Remember your settings across sessions.</li>
                        </ul>
                        <p>
                            You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                        </p>
                    </Section>

                    <Section title="6. How We Share Your Information" delay={0.4}>
                        <p>We share your information only in the following limited circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Service providers:</strong> We use Formspree to process contact form submissions. Formspree acts as a data processor under our instructions. You can review Formspree's privacy policy at{" "}
                                <span className="text-[#7C3AED]">formspree.io/legal/privacy-policy</span>.
                            </li>
                            <li>
                                <strong>Analytics providers:</strong> Aggregated, anonymised usage data may be shared with analytics platforms.
                            </li>
                            <li>
                                <strong>Legal requirements:</strong> We may disclose your information if required by law, court order, or government authority, or to protect the rights, property, or safety of Caimue, our users, or others.
                            </li>
                            <li>
                                <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your data becomes subject to a different privacy policy.
                            </li>
                        </ul>
                        <p>We do not sell, rent, or trade your personal data to third parties.</p>
                    </Section>

                    <Section title="7. International Data Transfers" delay={0.45}>
                        <p>
                            Caimue operates across the United States, India, and the United Kingdom. Your data may be processed in any of these jurisdictions. When transferring data from the UK or EEA to the United States or India, we apply appropriate safeguards — including Standard Contractual Clauses where required — to ensure your data receives a level of protection consistent with applicable data protection laws.
                        </p>
                    </Section>

                    <Section title="8. Data Retention" delay={0.5}>
                        <p>
                            We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Contact form submissions are generally retained for up to 24 months. Analytics data is retained in anonymised or aggregated form. If you request deletion of your data, we will action this within 30 days unless retention is required by law.
                        </p>
                    </Section>

                    <Section title="9. Your Rights" delay={0.55}>
                        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li><strong>Correction:</strong> Request that inaccurate or incomplete data be corrected.</li>
                            <li><strong>Deletion:</strong> Request that your data be deleted ("right to be forgotten").</li>
                            <li><strong>Restriction:</strong> Ask us to restrict processing of your data in certain circumstances.</li>
                            <li><strong>Portability:</strong> Receive your data in a structured, commonly-used format.</li>
                            <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
                            <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
                        </ul>
                        <p>
                            <strong>California residents (CCPA/CPRA):</strong> You have the right to know what personal data we collect, to opt out of the sale of personal data (we do not sell your data), and to non-discrimination for exercising your rights.
                        </p>
                        <p>
                            To exercise any of these rights, email us at{" "}
                            <a href="mailto:collaborations@caimue.com" className="text-[#7C3AED] hover:underline">
                                collaborations@caimue.com
                            </a>
                            . We will respond within 30 days (or sooner where required by law). We may ask you to verify your identity before processing your request.
                        </p>
                    </Section>

                    <Section title="10. Children's Privacy" delay={0.6}>
                        <p>
                            Our website and services are not directed at children under the age of 13 (or 16 in the EEA/UK). We do not knowingly collect personal data from children. If you believe a child has provided us with personal data without parental consent, please contact us immediately and we will delete it promptly.
                        </p>
                    </Section>

                    <Section title="11. Third-Party Links" delay={0.65}>
                        <p>
                            Our website may contain links to third-party websites, social media platforms, or partner pages (e.g., Instagram, LinkedIn, OTT platforms). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing them with any personal information.
                        </p>
                    </Section>

                    <Section title="12. Security" delay={0.7}>
                        <p>
                            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. However, no internet transmission is completely secure. We cannot guarantee absolute security, and you share information with us at your own risk. If you believe your data has been compromised, please contact us immediately.
                        </p>
                    </Section>

                    <Section title="13. Changes to This Policy" delay={0.75}>
                        <p>
                            We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. For significant changes, we will provide a more prominent notice. Your continued use of our website after any changes constitutes your acceptance of the updated policy. We encourage you to review this page periodically.
                        </p>
                    </Section>

                    <Section title="14. Contact Us" delay={0.8}>
                        <p>If you have any questions, concerns, or requests about this Privacy Policy or our data practices, please reach out:</p>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-4 shadow-sm">
                            <p className="font-semibold text-[#2D2D2D] mb-1">Caimue Inc.</p>
                            <p>1211 Tech Blvd., Suite #23</p>
                            <p>Tampa, FL 33619, United States</p>
                            <p className="mt-3">
                                <a href="mailto:collaborations@caimue.com" className="text-[#7C3AED] hover:underline font-medium">
                                    collaborations@caimue.com
                                </a>
                            </p>
                        </div>
                    </Section>

                    {/* Bottom nav */}
                    <motion.div {...fadeUp(0.85)} className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link
                            href="/"
                            className="text-gray-500 hover:text-[#7C3AED] transition-colors text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm font-medium text-[#7C3AED] hover:underline"
                        >
                            View Terms of Service →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
