/* eslint-disable no-new */
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse');
const JSONStream = require('JSONStream');

const inputStream = fs.createReadStream(path.resolve(__dirname, 'tz_gov_2013.csv'));
const outputStream = fs.createWriteStream(path.resolve(__dirname, 'tz_gov_2013.json'));

const createWritablePipe = () => {
  const transformStream = JSONStream.stringify();

  transformStream.pipe(outputStream);

  outputStream.on('finish', () => {
    console.log('Done');
  });

  return transformStream;
};

const fromInputToOutputStream = createWritablePipe();

inputStream
  .pipe(parse({ delimiter: ';' }))
  .on(
    'data',
    (csvRowData) => new Promise(async (resolve) => {
      await fromInputToOutputStream.write(csvRowData);

      resolve(console.log(csvRowData, 'csvRowData'));
    })
  )
  .on('end', () => {
    console.log('END!!!');

    fromInputToOutputStream.end();
  });
