/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "i.gifer.com"],
  },
};

module.exports = nextConfig;
