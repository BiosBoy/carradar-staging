/* eslint-disable import/no-absolute-path */
/* eslint-disable global-require */
// FIXME: there is some issue with TS
// https://backbencher.dev/articles/typescript-solved-cannot-redeclare-block-scoped-variable-name
export {}

const aws = require('aws-sdk')
const parse = require('fast-csv')

let isCarNumberFound = false

let s3 = null

if (process.env.ENV_LOCAL) {
  const creds = require('/Users/user/.aws/creds_carradar')

  s3 = new aws.S3({
    accessKeyId: creds['aws_access_key_id'],
    secretAccessKey: creds['aws_secret_access_key']
  })
} else {
  s3 = new aws.S3()
}

const searchCar = (year, carNumber) => new Promise((resolve, _reject) => {
  console.log(year, carNumber, 'year')
  const yearToSearch = JSON.parse(JSON.stringify(year))
  const cardNumberToFind = JSON.parse(JSON.stringify(carNumber))
  let isFetchAborted = false

  isCarNumberFound = false

  const params = {
    Bucket: 'carradar',
    Key: `storage/TZ_data/tz_gov_${yearToSearch}.csv`
  }

  const s3Request = s3.getObject(params)
  const s3Stream = s3Request.createReadStream()

  parse
    .parseStream(s3Stream, { delimiter: ';' })
    .on('error', (error) => {
      console.error(`Some error happen in the year: ${yearToSearch}...`, error)
    })
    .on('data', (csvRowData) => {
      const rowCarNumber = csvRowData[csvRowData.length - 1]

      // in case car has been already found destroy all the rest table searches
      if (isCarNumberFound) {
        !isFetchAborted && console.log(`Car data already found! Aborting search in the table from ${yearToSearch}`)
        !isFetchAborted && s3Request.abort()

        isFetchAborted = true

        return
      }

      // we are good to go!
      if (rowCarNumber === cardNumberToFind) {
        console.log(`Success! Record found in the table from ${yearToSearch}`)

        s3Request.abort()
        isCarNumberFound = true

        resolve(csvRowData)
      }
    })
    .on('end', (rowCount) => {
      console.log(`Nothing found in the table from ${yearToSearch}. Parsed ${rowCount} rows.`)
    })
})

module.exports = searchCar
