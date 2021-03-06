const webpack = require('webpack');
const path = require('path');

// CSS Optimization Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// JS Optimization Plugins
const TerserPlugin = require('terser-webpack-plugin');

// HTML Optimization Plugins`
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

// Helpers
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const debug = require('debug')('app:webpack::config');

const globals = require('./globals');

// ------------------------------------
// RULES INJECTION!
// ------------------------------------
const fileLoadersRules = [
  // PRELOAD CHECKING
  // if you would like to lint files on each hot module reload
  // {
  //   enforce: 'pre',
  //   test: /\.(js|jsx)?$/,
  //   exclude: /(node_modules|bower_components)/,
  //   use: {
  //     loader: 'eslint-loader',
  //     options: {
  //       quiet: true
  //     }
  //   }
  // },
  // {
  //   enforce: 'pre',
  //   test: /\.(ts|tsx)?$/,
  //   exclude: /(node_modules|bower_components)/,
  //   use: {
  //     loader: 'tslint-loader',
  //     options: {
  //       quiet: true,
  //       tsConfigFile: './tsconfig.json'
  //     }
  //   }
  // },
  // JAVASCRIPT/JSON
  {
    test: /\.html$/,
    use: ['html-loader']
  },
  {
    test: /\.(js|jsx|ts|tsx)?$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: __DEV__ ? 'ES2019' : 'ES5'
          }
        }
      }
    ]
  },
  // STYLES
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader'
      }
    ]
  },
  {
    test: /.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-modules-typescript-loader'
      },
      {
        loader: 'css-loader',
        options: {
          url: {
            filter: (url) => url.includes('~@')
          },
          modules: {
            localIdentName: '[local]___[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            data: `
              @import "mediaTypes.scss";
              @import "constants.scss";
              @import "colors.scss";
            `,
            includePaths: [path.resolve(__dirname, './src/styles')]
          }
        }
      }
    ]
  },
  // FILE/IMAGES
  {
    test: /\.(jpe?g|png|webp|gif|woff|woff2|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
    type: 'asset/resource'
  },
  {
    test: /\.pdf/,
    type: 'asset/resource'
  }
];

// ------------------------------------
// BUNDLES OPTIMIZATION
// ------------------------------------
const compOptimization = {
  splitChunks: {
    chunks: 'all',
    minChunks: 2
  },
  minimize: __PROD__, // webpack grab it only for production!
  minimizer: [
    new TerserPlugin({
      test: /\.(js|jsx|ts|tsx)?$/i,
      parallel: true,
      extractComments: false,
      terserOptions: {
        module: true,
        output: {
          ecma: '5',
          comments: false,
          beautify: false
        },
        compress: {
          ecma: '5',
          toplevel: true,
          dead_code: true
        }
      }
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};

// ------------------------------------
// STAGE PLUGINS INJECTION! [DEVELOPMENT, PRODUCTION, TESTING]
// ------------------------------------
const plugins = [
  new webpack.DefinePlugin({
    __DEV__,
    __PROD__,
    __TEST__,
    ...globals
  }),
  new MiniCssExtractPlugin({
    filename: __DEV__ ? '[name].css' : 'css/[name].[fullhash].css',
    chunkFilename: __DEV__ ? '[id].css' : 'css/[name].[fullhash].css'
  }),
  new webpack.SourceMapDevToolPlugin({
    test: /\.(js|jsx|ts|tsx|json|css)$/,
    filename: '[file].map[query]',
    exclude: ['vendor.js']
  })
];

// ------------------------------------
// Extra Plugins By Running Mode
// ------------------------------------
const extraPluginsByModes = {
  test: [new BundleAnalyzerPlugin()],
  development: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: false,
      chunksSortMode: 'auto'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  production: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'auto'
    }),
    new WebpackManifestPlugin({
      fileName: 'assets-manifest.json'
    })
  ]
};

// ------------------------------------
// STAGE CONFIGURATION INJECTION! [DEVELOPMENT, PRODUCTION]
// ------------------------------------
const stageConfig = {
  test: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  },
  development: {
    devtool: 'source-map',
    devServer: {
      contentBase: './src',
      hot: true
    },
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  },
  production: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  }
};

// ------------------------------------
// Entry Points
// ------------------------------------
const entryPoints = {
  test: [path.resolve(__dirname, 'src/index.js'), 'webpack-hot-middleware/client?path=/__webpack_hmr'],
  development: [path.resolve(__dirname, 'src/index.js'), 'webpack-hot-middleware/client?path=/__webpack_hmr'],
  production: __SSR__ ? path.resolve(__dirname, 'src/provider/index.tsx') : path.resolve(__dirname, 'src/index.js')
};

// ------------------------------------
// Bundle externals
// ------------------------------------
const externalBundles = {
  react: __SSR__ ? 'react' : 'React',
  'react-dom': __SSR__ ? 'react-dom' : 'ReactDOM',
  'react-dom/server': __SSR__ ? 'react-dom/server' : 'ReactDOMServer'
};

// ------------------------------------
// Bundle Output
// ------------------------------------
const outputBundles = {
  filename: 'js/[name].[fullhash].js',
  chunkFilename: 'js/[name].[fullhash].js',
  assetModuleFilename: 'assets/[name].[hash][ext]',
  path: path.resolve(__dirname, 'public'),
  publicPath: '/',
  ...(__SSR__ ?
    {
      libraryTarget: 'commonjs',
      library: 'ui-kit'
    } :
    {})
};

const createConfig = () => {
  debug('\x1b[36m', '=== Prepearing Webpack to work... ===');
  debug('\x1b[35m', `??? mode: ${__NODE_ENV__}`);

  const webpackConfig = {
    mode: __PROD__ ? 'production' : 'development',
    name: 'client',
    target: __SSR__ ? 'node' : 'web',
    optimization: compOptimization,
    performance: {
      hints: false
    },
    devtool: stageConfig[__NODE_ENV__].devtool,
    stats: stageConfig[__NODE_ENV__].stats,
    entry: {
      app: entryPoints[__NODE_ENV__]
    },
    externals: externalBundles,
    output: outputBundles,
    module: {
      rules: fileLoadersRules
    },
    plugins: [...plugins, ...extraPluginsByModes[__NODE_ENV__]],
    resolve: {
      modules: ['node_modules'],
      roots: [__dirname],
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.json',
        '.eot',
        '.png',
        '.jpg',
        '.jpeg',
        '.webp',
        '.woff',
        '.svg',
        '.woff2',
        '.ttf',
        '.d.ts',
        '.scss',
        '.css'
      ],
      alias: {
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './assets')
      }
    }
  };

  debug('\x1b[36m', '=== Webpack is configured successfuly! ===');

  return webpackConfig;
};

module.exports = createConfig();
