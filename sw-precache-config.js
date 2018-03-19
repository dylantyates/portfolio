module.exports = {
  staticFileGlobs: [
    'bower_components/webcomponentsjs/webcomponents-loader.js',
    'images/**/*',
    'data/**/*',
    'src/**.html',
    'manifest.json',
    'browserconfig.xml',
    'safari-pinned-tab.svg',
    '**.png',

  ],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/dylantyates\.github\.io\/portfolio\/(.*)/,
      handler: 'networkFirst'
    }
  ]
};
