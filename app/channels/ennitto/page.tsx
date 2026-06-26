import { ChannelPage } from "@/components/ui/ChannelPage";

export default function EnnittoChannelPage() {
    return (
        <ChannelPage
            logo="/ennitto%20final.png"
            name="Ennitto"
            titleLines={["Original Malayalam", "short films."]}
            description="Our Malayalam short film channel by Caimue Film Studios — discovering talent and building toward theatrical and OTT releases."
            longDescription="From shorts to OTT content, Ennitto produces original Malayalam stories with professional execution. We discover new artists and filmmakers across Kerala and bring their work to a growing audience."
            accentFrom="#DDD6FE"
            accentTo="#7C3AED"
            aspect="2 / 3"
            gallery={[
                { src: "/logos/ennitto/Vishudha%20Sakshi.jpg", label: "Vishudha Sakshi" },
                { src: "/logos/ennitto/ADS-369%20Part%201.jpg", label: "ADS-369 Part 1" },
                { src: "/logos/ennitto/ADS-369%20Part%202.jpg", label: "ADS-369 Part 2" },
                { src: "/logos/ennitto/ADS-369%20Part%203.jpg", label: "ADS-369 Part 3" },
                { src: "/logos/ennitto/ADS-369%20Final%20Part.jpg", label: "ADS-369 Final Part" },
                { src: "/logos/ennitto/Pazhampori.jpg", label: "Pazhampori" },
                { src: "/logos/ennitto/Harinarayana%20Kudu%20Charitham.jpg", label: "Harinarayana Kudu Charitham" },
                { src: "/logos/ennitto/Malsya%20Mandooka%20Mahamaham.jpg", label: "Malsya Mandooka Mahamaham" },
                { src: "/logos/ennitto/Nadha%20Nee%20Varum%20Kaalocha%20Kelkuvaan.jpg", label: "Nadha Nee Varum Kaalocha Kelkuvaan" },
                { src: "/logos/ennitto/Smile%21.jpg", label: "Smile!" },
                { src: "/logos/ennitto/Welcome%20Home.jpg", label: "Welcome Home" },
            ]}
            cta={{ text: "Visit Website", href: "https://www.ennitto.com/", external: true }}
        />
    );
}
