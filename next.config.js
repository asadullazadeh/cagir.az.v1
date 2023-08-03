/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    // unoptimized: true,
    domains: [
      "api.cagir.az",
      // "api.cagir.aznull",
      "api.cagir.azundefined",
      "photos.google.com",
      "images.unsplash.com",
      "wembleypark.com",
      "hydeparkwinterwonderland.com",
      "plus.unsplash.com",
      "via.placeholder.com",
      "tailwindui.com",
      "lh3.googleusercontent.com",
      "talpa.az",
      "www.facebook.com",
      "www.itchf.org",
      "cdn.pixabay.com",
      "www.kapitalbank.az",
      "i.imgur.com",
      "bakcell.com",
    ],
  },
};

module.exports = nextConfig;
