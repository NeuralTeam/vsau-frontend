import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.DEV_ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    reactStrictMode: process.env.DEV_STRICT_MODE === "true",
    transpilePackages: ["next-mdx-remote"]
};

export default withBundleAnalyzer(nextConfig);
