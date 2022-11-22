const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,

  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
  images: {
    domains: ['i.scdn.co']
  },
  // next config
});
module.exports = nextConfig;