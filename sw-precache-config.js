module.exports = {
  staticFileGlobs: [
    'images/**/*',
    'data/**/*',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'favicon.ico',
    'safari-pinned-tab.svg',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'mstile-150x150.png',
    'browserconfig.xml',
    'site.webmanifest'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    }
  ]
};
