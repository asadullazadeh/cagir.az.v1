/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "wembleypark.com",
      "hydeparkwinterwonderland.com",
      "plus.unsplash.com",
      "via.placeholder.com",
      "tailwindui.com",
      "lh3.googleusercontent.com",
      "talpa.az",
      "www.facebook.com",
      "www.itchf.org"
    ],
  },
};

module.exports = nextConfig;
