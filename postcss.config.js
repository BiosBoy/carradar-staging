/* eslint-disable global-require */
const cssConfig = require('./bin/postCSS');

// postcss-preset-env use autoprefixer under the hood,
// so we don't need to import it additionally
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')(cssConfig['postcss-preset-env']),
    require('cssnano')(cssConfig['cssnano'])
  ]
};
