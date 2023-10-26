const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: "az",
    localeDetection: false,
  },
  swcMinify: true,
  images: {
    domains: [
      "api.cagir.az",
      "api.cagir.aznull",
      "api.cagir.azundefined",
      "photos.google.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "tailwindui.com",
      "talpa.az",
      "www.facebook.com",
      "www.itchf.org",
      "cdn.pixabay.com",
      "www.kapitalbank.az",
      "i.imgur.com",
      "bakcell.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
