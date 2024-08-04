import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.DEV_ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    reactStrictMode: process.env.DEV_STRICT_MODE === "true",
    transpilePackages: ["next-mdx-remote"],
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000"
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "8000"
            },
            {
                protocol: "https",
                hostname: "vsau.neuralteam.ru"
            }
        ]
    }
};

export default withBundleAnalyzer(nextConfig);
