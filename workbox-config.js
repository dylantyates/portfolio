module.exports = {
  globDirectory: "build/default/public/",
  globPatterns: [
    "**/*.{png,xml,json,svg,jpg,gif,html,webmanifest,js}"
  ],
  swDest: "build/default/public/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  navigateFallback: "/home",
  runtimeCaching: [{
    urlPattern: new RegExp(/\.(?:png|jpg|jpeg|svg|html|js|xml|svg|webmanifest|ico)$/),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
    }],
};
