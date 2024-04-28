import createMDX from "@next/mdx";
import withNextConfig from "next-intl/plugin";

const nextIntlConfig = withNextConfig();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

export default nextIntlConfig(withMDX(nextConfig));
