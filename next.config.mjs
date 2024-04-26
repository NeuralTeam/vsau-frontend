import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.DEV_ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    reactStrictMode: process.env.DEV_STRICT_MODE === "true"
};

export default withBundleAnalyzer(nextConfig);
