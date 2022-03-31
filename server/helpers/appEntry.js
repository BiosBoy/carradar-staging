/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');

const appEntry = () => {
  const files = fs.readdirSync(path.resolve(__dirname, '../../public'), {});
  const appEntryName = files.find((name) => /^app.*\.js$/im.test(name));

  console.log(appEntryName, 'appEntryName');

  // const App = fs.readFileSync(path.resolve(__dirname, `../../public/${appEntry}`), 'utf8');

  return appEntryName;
};

module.exports = appEntry;
