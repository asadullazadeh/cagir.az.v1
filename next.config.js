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
    // unoptimized: true,
    domains: [
      "api.cagir.az",
      "api.cagir.aznull",
      "api.cagir.azundefined",
      "api.cagir.aztemizlik-xidmeti",
      "api.cagir.azkombi-ustasi",
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
      "scontent-ord5-2.cdninstagram.com",
      "scontent-ord5-1.cdninstagram.com",
      "www.instagram.com"
    ],
  },
};

module.exports = nextConfig;
