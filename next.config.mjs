import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.DEV_ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    reactStrictMode: process.env.DEV_STRICT_MODE === "true",
    async rewrites() {
        if (process.env.DEV_API_PROXY === "true") {
            return [
                {
                    source: "/api/:path*",
                    destination: "http://localhost:8000/api/:path*"
                }
            ];
        }
        return [];
    }
};

export default withBundleAnalyzer(nextConfig);
