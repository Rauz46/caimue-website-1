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

export default function TermsPage() {
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
                            Terms of Service
                        </h1>
                        <p className="text-gray-500 text-base">
                            Effective date: April 24, 2026 &nbsp;·&nbsp; Last updated: April 24, 2026
                        </p>
                    </motion.div>

                    {/* Intro */}
                    <motion.p {...fadeUp(0.1)} className="text-lg text-gray-700 mb-14 leading-relaxed bg-purple-50/50 border border-purple-100 rounded-2xl p-6">
                        Welcome to <strong>Caimue Inc.</strong> ("Caimue," "we," "our," or "us"). By accessing or using <strong>caimue.com</strong> (the "Site") or any of our services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you do not agree with any part of these Terms, please do not use our Site or services.
                    </motion.p>

                    {/* Sections */}
                    <Section title="1. About Caimue" delay={0.15}>
                        <p>
                            Caimue is an AI-first production house incorporated in the State of Florida, United States. We create original video content — including short films, regional digital series (FunShortz), and documentary-style business content (TeqThots) — across Tamil, Malayalam, and English. We also provide production funding, creative support, and distribution assistance for independent filmmakers, and content and brand partnership services for businesses.
                        </p>
                        <p>
                            Our registered address is: 1211 Tech Blvd., Suite #23, Tampa, FL 33619, United States.
                        </p>
                    </Section>

                    <Section title="2. Acceptance of Terms" delay={0.2}>
                        <p>
                            By visiting the Site, submitting a contact or collaboration enquiry, or engaging with any Caimue service, you confirm that:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You are at least 18 years of age, or the legal age of majority in your jurisdiction.</li>
                            <li>You have the legal capacity to enter into a binding agreement.</li>
                            <li>You agree to comply with these Terms and all applicable local, national, and international laws and regulations.</li>
                        </ul>
                    </Section>

                    <Section title="3. Services" delay={0.25}>
                        <p>Through the Site and our operations, Caimue offers:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Content viewing:</strong> Access to information about our productions, platforms (TeqThots, FunShortz, Ennitto short films), team, and processes.
                            </li>
                            <li>
                                <strong>Creator services:</strong> Filmmaker funding, production support (equipment, crew, workflow), and distribution assistance for qualifying independent filmmakers.
                            </li>
                            <li>
                                <strong>Brand partnership services:</strong> Documentary-style brand films, product integrations, sponsored content series, and regional language campaigns.
                            </li>
                            <li>
                                <strong>Contact and enquiry handling:</strong> Processing of collaboration or business enquiries submitted through our contact form.
                            </li>
                        </ul>
                        <p>
                            Detailed terms governing specific commercial engagements (e.g., brand partnerships, filmmaker funding agreements) will be set out in separate written agreements. In the event of a conflict, those agreements will take precedence over these Terms.
                        </p>
                    </Section>

                    <Section title="4. Permitted Use of the Site" delay={0.3}>
                        <p>You may use the Site for lawful purposes only. You agree not to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Use the Site in any way that violates applicable law or regulation.</li>
                            <li>Scrape, crawl, or extract data from the Site using automated tools without our prior written consent.</li>
                            <li>Transmit any unsolicited commercial communications, spam, or malware.</li>
                            <li>Attempt to gain unauthorised access to any part of the Site, our servers, or any database connected to the Site.</li>
                            <li>Impersonate Caimue, our team members, or any other person or entity.</li>
                            <li>Use our brand, logos, or content for any commercial purpose without our explicit written permission.</li>
                            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which may harm Caimue or users of the Site.</li>
                        </ul>
                    </Section>

                    <Section title="5. Intellectual Property" delay={0.35}>
                        <p>
                            All content on the Site — including but not limited to text, graphics, logos, icons, images, video content, audio clips, data compilations, and software — is the property of Caimue Inc. or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.
                        </p>
                        <p>
                            Our name, logos, and the names of our platforms (TeqThots, FunShortz, Ennitto) are trademarks of Caimue Inc. Nothing in these Terms grants you any right to use our trademarks, trade names, or logos without our prior written consent.
                        </p>
                        <p>
                            You may view, download, and print content from the Site for your own personal, non-commercial reference only. Any other use — including reproduction, modification, distribution, transmission, re-publication, or display — requires our prior written consent.
                        </p>
                    </Section>

                    <Section title="6. User Submissions" delay={0.4}>
                        <p>
                            When you submit an enquiry, project proposal, script, or any other material to Caimue through the Site or by email, you represent that:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You own or have the necessary rights to share the submitted material.</li>
                            <li>The submission does not infringe any third-party intellectual property, privacy, or other rights.</li>
                            <li>The submission is not defamatory, obscene, or otherwise unlawful.</li>
                        </ul>
                        <p>
                            Unsolicited creative submissions (scripts, story ideas, concepts) are shared at your own risk. While we take reasonable steps to keep submissions confidential, we are not obligated to treat any submission as proprietary or confidential unless a separate non-disclosure agreement is in place. If you require an NDA before sharing creative material, please request one before submitting.
                        </p>
                    </Section>

                    <Section title="7. Third-Party Links and Services" delay={0.45}>
                        <p>
                            The Site may contain links to third-party websites, social media platforms, OTT platforms, or partner sites. These links are provided for your convenience only. We do not control those sites and are not responsible for their content, privacy practices, or terms. A link to a third-party site does not imply our endorsement of that site or its content. We encourage you to review the terms and privacy policies of any third-party sites you visit.
                        </p>
                    </Section>

                    <Section title="8. Disclaimer of Warranties" delay={0.5}>
                        <p>
                            The Site and its content are provided on an <strong>"as is" and "as available"</strong> basis without any warranties of any kind, either express or implied. To the fullest extent permitted by law, Caimue disclaims all warranties, including but not limited to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
                            <li>Any warranty that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                            <li>Any warranty as to the accuracy, completeness, or currency of any content on the Site.</li>
                        </ul>
                        <p>
                            Information about our services, production timelines, and results (e.g., performance figures, view counts) are provided for illustrative purposes and are not guarantees of specific outcomes.
                        </p>
                    </Section>

                    <Section title="9. Limitation of Liability" delay={0.55}>
                        <p>
                            To the fullest extent permitted by applicable law, Caimue Inc. and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill, or business opportunities — arising out of or in connection with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Your use of or inability to use the Site or our services.</li>
                            <li>Any content obtained from the Site.</li>
                            <li>Unauthorised access to or alteration of your submissions.</li>
                            <li>Any third-party conduct or content on the Site.</li>
                        </ul>
                        <p>
                            Where liability cannot be excluded under applicable law, our total aggregate liability to you shall not exceed the greater of (a) the amount you paid to Caimue in the 12 months preceding the claim, or (b) USD $100.
                        </p>
                    </Section>

                    <Section title="10. Indemnification" delay={0.6}>
                        <p>
                            You agree to indemnify, defend, and hold harmless Caimue Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to: (a) your use of the Site or services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit to us.
                        </p>
                    </Section>

                    <Section title="11. Privacy" delay={0.65}>
                        <p>
                            Your use of the Site is also governed by our{" "}
                            <Link href="/privacy" className="text-[#7C3AED] hover:underline font-medium">
                                Privacy Policy
                            </Link>
                            , which is incorporated into these Terms by reference. By using the Site, you consent to the collection and use of your information as described in the Privacy Policy.
                        </p>
                    </Section>

                    <Section title="12. Governing Law & Dispute Resolution" delay={0.7}>
                        <p>
                            These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
                        </p>
                        <p>
                            Any disputes that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the state and federal courts located in Hillsborough County, Florida. If you are a consumer in the UK or EEA, you may also have the right to bring proceedings in your local courts and access alternative dispute resolution schemes under applicable law.
                        </p>
                    </Section>

                    <Section title="13. Termination" delay={0.75}>
                        <p>
                            We reserve the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, third parties, or us — or for any other reason at our sole discretion. All provisions of these Terms that by their nature should survive termination (including intellectual property, disclaimers, indemnification, and limitations of liability) shall survive.
                        </p>
                    </Section>

                    <Section title="14. Changes to These Terms" delay={0.8}>
                        <p>
                            We may revise these Terms at any time by updating this page. The "Last updated" date at the top will reflect when changes were made. For material changes, we will make reasonable efforts to provide notice (e.g., via a site banner). Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.
                        </p>
                    </Section>

                    <Section title="15. Severability & Entire Agreement" delay={0.85}>
                        <p>
                            If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions. These Terms, together with our Privacy Policy and any separate written agreements for specific services, constitute the entire agreement between you and Caimue regarding your use of the Site and supersede all prior agreements.
                        </p>
                    </Section>

                    <Section title="16. Contact Us" delay={0.9}>
                        <p>If you have any questions about these Terms, please contact us:</p>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-4 shadow-sm">
                            <p className="font-semibold text-[#2D2D2D] mb-1">Caimue Inc.</p>
                            <p>1211 Tech Blvd., Suite #23</p>
                            <p>Tampa, FL 33619, United States</p>
                            <p className="mt-3">
                                <a href="mailto:collaborations@caimue.com" className="text-[#7C3AED] hover:underline font-medium">
                                    collaborations@caimue.com
                                </a>
                            </p>
                            <p className="mt-1">
                                Phone:{" "}
                                <a href="tel:+918428268065" className="text-[#7C3AED] hover:underline font-medium">
                                    +91 84282 68065
                                </a>
                            </p>
                        </div>
                    </Section>

                    {/* Bottom nav */}
                    <motion.div {...fadeUp(0.95)} className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link
                            href="/"
                            className="text-gray-500 hover:text-[#7C3AED] transition-colors text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-sm font-medium text-[#7C3AED] hover:underline"
                        >
                            View Privacy Policy →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
