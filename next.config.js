const withLess = require('next-with-less'); //eslint-disable-line @typescript-eslint/no-var-requires

module.exports = withLess({
  lessLoaderOptions: {},
  // trailingSlash: true,
  experimental: {
    externalDir: true,
  },
  images: {
    path: '/',
  },
});
