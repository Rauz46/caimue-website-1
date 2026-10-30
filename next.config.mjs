/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first, WebP fallback. The poster/team art is heavy JPEG+PNG, so
    // this is the single biggest transfer win on the site.
    formats: ["image/avif", "image/webp"],
    // Trimmed from the defaults — the site never renders above 1920.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 168, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  experimental: {
    // Rewrites `import { X } from "lucide-react"` to per-icon deep imports so
    // the whole icon set never reaches the client bundle.
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // The dev disk cache kept serving stale CSS on this Windows checkout.
    turbopackFileSystemCacheForDev: false,
  },

  async redirects() {
    // TeqThots was rebranded to TeqDots (July 2026)
    return [
      { source: "/channels", destination: "/platforms", permanent: false },
      { source: "/collaborate", destination: "/contact", permanent: false },
      {
        source: "/channels/teqthots",
        destination: "/channels/teqdots",
        permanent: true,
      },
      {
        source: "/platforms/teqthots",
        destination: "/platforms/teqdots",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
