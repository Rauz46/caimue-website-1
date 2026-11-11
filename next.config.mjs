/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
    async redirects() {
        // TeqThots was rebranded to TeqDots (July 2026)
        return [
            { source: "/channels/teqthots", destination: "/channels/teqdots", permanent: true },
            { source: "/platforms/teqthots", destination: "/platforms/teqdots", permanent: true },
            // "/collaborate" never existed; send it to the contact page instead of a 404
            { source: "/collaborate", destination: "/contact", permanent: false },
        ];
    },
};

export default nextConfig;
