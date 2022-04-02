/**
 *  @name postCSS
 *  @author info@carradar.com.ua
 *  @version 1.0.0
 *  @description common css postprocessing core. Responsible for css output generation
 *
 *  @copyright Copyright (c) Carradar.
 */

const styleConfigs = {
  development: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      },
      autoprefixer: {
        add: false,
        grid: true,
        cascade: false,
        remove: false
      }
    },
    cssnano: {
      preset: [
        'default',
        {
          normalizeWhitespace: false
        }
      ]
    }
  },
  production: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      },
      autoprefixer: {
        add: true,
        grid: true,
        remove: true
      }
    },
    cssnano: {
      discardComments: {
        removeAll: true
      },
      discardUnused: true,
      mergeIdents: false,
      reduceIdents: false,
      sourcemap: true
    }
  }
};

module.exports = styleConfigs[process.env.NODE_ENV || process.env.__NODE_ENV__] || {};
