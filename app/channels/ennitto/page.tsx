import type { Metadata } from "next";
import HomeHero from "@/components/channels/ennitto/HomeHero";
import { WhatWeDo } from "@/components/channels/ennitto/WhatWeDo";
import { FeaturedFilms } from "@/components/channels/ennitto/FeaturedFilms";

export const metadata: Metadata = {
    title: "Ennitto — by Caimue Film Studios",
    description:
        "Original Malayalam short films by Caimue Film Studios — discovering talent and building toward theatrical and OTT releases.",
};

// Caimue-reskinned rebuild of the Ennitto site (light look, Playfair/Inter),
// mirroring the TeqThots channel page structure.
export default function EnnittoChannelPage() {
    return (
        <>
            <HomeHero />
            <WhatWeDo />
            <FeaturedFilms />
        </>
    );
}
