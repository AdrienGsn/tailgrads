import withNextConfig from "next-intl/plugin";

const nextIntlConfig = withNextConfig();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextIntlConfig(nextConfig);
