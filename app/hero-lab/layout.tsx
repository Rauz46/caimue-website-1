import type { Metadata } from "next";

// Design trial page (23 Nov 2026): not linked anywhere, kept out of search engines
export const metadata: Metadata = {
    title: "Hero lab | Caimue",
    robots: { index: false, follow: false },
};

export default function HeroLabLayout({ children }: { children: React.ReactNode }) {
    return children;
}
