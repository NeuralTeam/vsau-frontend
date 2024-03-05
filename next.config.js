const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.DEV_ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    reactStrictMode: process.env.DEV_STRICT_MODE === "true"
};

module.exports = withBundleAnalyzer(nextConfig);
