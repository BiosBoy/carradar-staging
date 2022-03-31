/**
 *  @name compiler
 *  @author 3p-dima, 3p-harabara, 3p-sviat
 *  @version 1.0.0
 *  @description creating app bundles and lay them inside "/dist/" folder of the app
 *
 *  @copyright Copyright (c) Torn, LTD.
 */

const debug = require('debug');
const debugCompile = debug('app:webpack::builds');
const debugBuild = debug('app:webpack::build');

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const POLICE_ALARM_ICON = '🚨';

// -----------------------------
// READING WEBPACK CONFIGURATION
// -----------------------------
const webpackCompiler = () => {
  const checkStatsErrors = (jsonStats, reject) => {
    const errorFound = jsonStats.errors.length > 0;
    const warningFound = jsonStats.warnings.length > 0;

    if (errorFound || warningFound) {
      debugBuild('\x1b[41m%s\x1b[0m', 'Webpack compiler encountered some problems in stats during compilation.');
      debugBuild(jsonStats.errors.join('\n'));

      errorFound && reject();
    }
  };

  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      if (err) {
        debugBuild('\x1b[41m%s\x1b[0m', 'Webpack compiler encountered a fatal error.', err);
        reject(err);

        return;
      }

      const jsonStats = stats.toJson();

      checkStatsErrors(jsonStats, reject);

      debugBuild(stats.toString({ colors: true, children: false }));

      resolve(jsonStats);
    });
  });
};

// -----------------------------
// STARTING APP COMPILATION PROCESS
// -----------------------------
const startCompilation = async () => {
  debugCompile('\x1b[33m%s\x1b[0m', `=== ${POLICE_ALARM_ICON}  [START] Starting Webpack compiler... ===`);

  try {
    await webpackCompiler();

    debugCompile('\x1b[33m%s\x1b[0m', `=== ${POLICE_ALARM_ICON}  [FINISH] Compilation completed successfully! ===`);
  } catch (err) {
    debugCompile('\x1b[41m%s\x1b[0m', 'Oops... Compilation error! Exiting with status code "1". Error: ', err);

    process.exit(1);
  }
};

startCompilation();
