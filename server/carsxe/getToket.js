const getSecret = require('../secretManager')

const SECRET_TAG = 'arn:aws:secretsmanager:eu-central-1:480124983095:secret:carmages-tjyMMs'
const SECRET_NAME = 'CARSXE_TOKEN'

let isStartedFetch = false

const getCarsxeToken = async () => {
  if (process.env.__CARSXE_TOKEN__ || isStartedFetch) {
    return
  }

  isStartedFetch = true

  const { status, error, secret } = await getSecret(SECRET_TAG, SECRET_NAME)

  isStartedFetch = false

  if (error || status !== 'success') {
    throw new Error('carsxe token secret not found')
  }

  process.env.__CARSXE_TOKEN__ = secret
}

module.exports = getCarsxeToken
