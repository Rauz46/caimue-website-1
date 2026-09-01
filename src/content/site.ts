/**
 * Single source of truth for site copy, navigation and data.
 * Components stay presentational; edit words and links here.
 */

export const site = {
  name: "Caimue",
  tagline: "Video-First B2B Marketing Agency",
  url: "https://www.caimue.com",
  logo: "/Caimue%20final%20logo.png",
  logoFooter: "/caimue%20final%20logo%20FOOTER.png",
  social: {
    instagram: "https://www.instagram.com/caimue_inc/",
    linkedin: "https://www.linkedin.com/company/caimue-inc",
  },
} as const;

export const nav = {
  /** Deliberately just one link — logo, About, Contact and nothing else. */
  primary: [{ href: "/about", label: "About" }],
  cta: { href: "/contact", label: "Contact" },
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
} as const;

/* ---------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Video-first B2B marketing",
  headline: ["Video worth watching.", "Brands worth building."],
  /** Index of the headline line that gets the gradient treatment. */
  gradientLine: 1,
  body: "Caimue creates video content for B2B brands worth remembering. Corporate films, LinkedIn campaigns, and the craft to make them land.",
  primaryCta: { href: "/contact", label: "Start a project" },
  secondaryCta: { href: "/platforms", label: "See our work" },
  /** Same figures as the track-record pillars, condensed for the hero strip. */
  stats: [
    { value: "20+", label: "Short films" },
    { value: "2M+", label: "Organic views" },
    { value: "25+", label: "Artists discovered" },
    { value: "15+", label: "Brand collabs" },
  ],
  /** Small meta line under the nav — where the studio operates. */
  meta: "Video-first studio · Chennai · London · Tampa",
  /**
   * Stills tiled behind the hero and dimmed. The work carries the visual
   * weight instead of a colour gradient.
   */
  backdrop: [
    "/images/Movies/Vishudha Sakshi.jpg",
    "/images/Movies/Welcome Home.jpg",
    "/images/Movies/Smile!.jpg",
    "/images/Movies/Malsya Mandooka Mahamaham.jpg",
    "/images/Movies/Harinarayana Kudu Charitham.jpg",
    "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg",
    "/images/Movies/Live a Little.jpg",
    "/images/Movies/Pazhampori.jpg",
  ],
  /** Poster art fanned out beneath the headline. */
  posters: [
    { src: "/images/Movies/Vishudha Sakshi.jpg", alt: "Vishudha Sakshi" },
    { src: "/images/Movies/ADS-369 Part 1.jpg", alt: "ADS-369" },
    {
      src: "/images/Movies/Malsya Mandooka Mahamaham.jpg",
      alt: "Malsya Mandooka Mahamaham",
    },
    { src: "/images/Movies/Welcome Home.jpg", alt: "Welcome Home" },
    { src: "/images/Movies/Smile!.jpg", alt: "Smile!" },
    { src: "/images/Movies/Live a Little.jpg", alt: "Live a Little" },
    {
      src: "/images/Movies/Harinarayana Kudu Charitham.jpg",
      alt: "Harinarayana Kudu Charitham",
    },
  ],
} as const;

/* -------------------------------------------------------- Track record */

export const trackRecord = {
  eyebrow: "Our track record",
  headline: "Proof, not promises",
  body: "We've produced films, promoted brands, and discovered talent across Tamil, Malayalam, and English. Here's our journey as we build toward feature films.",
  pillars: [
    {
      stat: "20+",
      title: "Short Films, 2M+ Views",
      body: "Original short films that have crossed 2 million organic views on YouTube.",
      accent: "violet",
      images: [
        { src: "/images/Movies/Welcome Home.jpg", alt: "Welcome Home" },
        { src: "/images/Movies/Smile!.jpg", alt: "Smile!" },
        {
          src: "/images/Movies/Malsya Mandooka Mahamaham.jpg",
          alt: "Malsya Mandooka Mahamaham",
        },
        {
          src: "/images/Movies/Harinarayana Kudu Charitham.jpg",
          alt: "Harinarayana Kudu Charitham",
        },
        {
          src: "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg",
          alt: "Nadha Nee Varum Kaalocha Kelkuvaan",
        },
      ],
    },
    {
      stat: "15+",
      title: "Brand Collaborations",
      body: "Brand stories woven naturally into films and TeqDots — never feeling like ads.",
      accent: "pink",
      images: [
        { src: "/collabs/heal%20brand.png", alt: "Hael brand video" },
        { src: "/collabs/prodeia.png", alt: "Prodeia brand video" },
        { src: "/collabs/piqual%20collab.png", alt: "Piqual brand video" },
        { src: "/collabs/xime%20collab.png", alt: "XIME brand video" },
        { src: "/collabs/nuivio%20collab.png", alt: "Nuivio brand video" },
      ],
    },
    {
      stat: "25+",
      title: "Artists Discovered",
      body: "Writers, directors, and actors creating under our production.",
      accent: "cyan",
      images: [
        { src: "/team/megha  2.jpg", alt: "Megha" },
        { src: "/team/image.png", alt: "Artist" },
        { src: "/team/smile 1.png", alt: "Smile Team 1" },
        { src: "/team/ads.png", alt: "Ads Team 1" },
        { src: "/team/ghkl.jpg", alt: "Artist" },
      ],
    },
  ],
} as const;

/* ------------------------------------------------------------ Services */

export const services = {
  eyebrow: "What we make",
  headline: "Run your brand like a studio",
  body: "We help companies show up online — corporate films, founder stories, social campaigns and marketing sites that make brands impossible to scroll past.",
  items: [
    {
      title: "Corporate Videos",
      body: "Founder stories and brand films with cinematic polish.",
      color: "#3B6BF0",
      icon: "film",
      image: "/collabs/xime%20collab.png",
    },
    {
      title: "LinkedIn Media Campaigns",
      body: "Content engines that keep your brand in every feed.",
      color: "#F0566B",
      icon: "megaphone",
      image: "/collabs/nuivio%20collab.png",
    },
    {
      title: "Marketing Websites",
      body: "Sites built to turn visitors into believers.",
      color: "#9B4DF5",
      icon: "sparkles",
      image: "/collabs/prodeia.png",
    },
    {
      title: "Talent Discovery",
      body: "Writers, directors, and actors creating under our production.",
      color: "#1FA97A",
      icon: "users",
      image: "/team/smile%201.png",
    },
  ],
} as const;

/* ------------------------------------------------------------ Channels */

export type Channel = {
  name: string;
  logo: string;
  logoHeight: number;
  description: string;
  youtube: string;
  comingSoon?: boolean;
  from: string;
  to: string;
  previews: string[];
};

export const channels = {
  eyebrow: "Our channels",
  headline: "Homegrown, and growing",
  body: "Original Tamil & Malayalam short films and founder-led documentaries — homegrown channels building an audience on the way to feature films.",
  items: [
    {
      name: "Ennitto",
      logo: "/ennitto%20final.png",
      logoHeight: 60,
      description:
        "We produce original Malayalam short films — from shorts to OTT content. We discover talent and build toward theatrical and streaming releases.",
      youtube: "https://www.youtube.com/@ennitto",
      from: "#E11D74",
      to: "#0FB5A6",
      previews: ["/logos/ennitto/Vishudha Sakshi.jpg","/logos/ennitto/Welcome Home.jpg","/logos/ennitto/Smile!.jpg"],
    },
    {
      name: "Ennamo",
      logo: "/ennamo%20new.png",
      logoHeight: 60,
      description:
        "Our Tamil short film channel by Caimue. We produce original Tamil shorts, discover Tamil talent, and build toward theatrical and OTT releases.",
      youtube: "https://www.youtube.com/channel/UCXWl6JIzlHIJCYbaCvV_VFg",
      from: "#6D5BF0",
      to: "#F0435A",
      previews: ["/logos/ennamo/Live a Little.jpg","/logos/ennamo/kadhal gpt.webp","/logos/ennamo/maxresdefault.jpg"],
    },
    {
      name: "TeqDots",
      logo: "/logos/teqdots-logo.png",
      logoHeight: 68,
      description:
        "Documentary-style conversations that capture how companies are built. Deep dives into technology, strategy, and scale.",
      youtube: "https://www.youtube.com/@TeqThots",
      from: "#7C3AED",
      to: "#F59E0B",
      previews: ["/logos/teqthots/thumbnail.jpg","/logos/teqthots/NEVER.jpg","/logos/teqthots/Image (17).jpg"],
    },
    {
      name: "Startup Musings",
      logo: "/startup%20musings%20final.png",
      logoHeight: 74,
      description:
        "Candid conversations with founders and builders — the ideas, lessons, and journeys behind startups as they grow.",
      youtube: "#",
      comingSoon: true,
      from: "#1E3A8A",
      to: "#F97316",
      previews: ["/logos/teqthots/Image (16).jpg","/logos/teqthots/shared image (6).jpg","/logos/teqthots/Untitled-2.jpg"],
    },
  ] satisfies Channel[],
} as const;

/* -------------------------------------------------------- Feature films */

export const featureFilms = {
  eyebrow: "Feature films — coming soon",
  headline: "The reel is just getting started",
  body: "Everything we've built so far — short films, talent, and craft — leads here. Our first feature is in the works.",
  posters: [
    {
      title: "Vishudha Sakshi",
      src: "/images/Movies/Vishudha Sakshi.jpg",
      meta: "1 Lakh+ views",
    },
    {
      title: "Welcome Home",
      src: "/images/Movies/Welcome Home.jpg",
      meta: "100K views & counting",
    },
    {
      title: "Harinarayana Kudu Charitham",
      src: "/images/Movies/Harinarayana Kudu Charitham.jpg",
      meta: "3 Lakhs+ views",
    },
    {
      title: "Malsya Mandooka Mahamaham",
      src: "/images/Movies/Malsya Mandooka Mahamaham.jpg",
      meta: "From the CAIMUE reel",
    },
    {
      title: "Smile!",
      src: "/images/Movies/Smile!.jpg",
      meta: "From the CAIMUE reel",
    },
    {
      title: "Nadha Nee Varum Kaalocha Kelkuvaan",
      src: "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg",
      meta: "1 Lakh+ views",
    },
  ],
} as const;

/* -------------------------------------------------------- Work with us */

export const workWithUs = {
  eyebrow: "Come work with us",
  headline: "Pick your path",
  body: "Two doors, one production house. Tell us which one you're knocking on.",
  paths: [
    {
      kicker: "For brands",
      title: "Brand owner?",
      body: "Looking to tell your story through content that people actually want to watch? We help brands create meaningful video content and integrate into stories naturally.",
      cta: { href: "/contact?type=brand", label: "Tell us your story" },
      accent: "violet",
      note: "tell your story",
    },
    {
      kicker: "For artists",
      title: "Aspiring artist?",
      body: "Are you an upcoming artist? Do you have talent in acting, writing scripts, directing, or shooting? We discover individual artists and bring them together to create films under our production.",
      cta: { href: "/contact?type=artist", label: "Show us your craft" },
      accent: "pink",
      note: "we'll find you",
    },
  ],
} as const;

/* ------------------------------------------------------------ Footer CTA */

export const footerCta = {
  headline: "Fancy a chat?",
  body: "Discover how Caimue drives stories with impact. Teams in the US, UK, and India are ready to connect.",
  cta: { href: "/contact", label: "Start a conversation" },
} as const;
