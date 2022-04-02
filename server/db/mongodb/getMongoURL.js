const getSecret = require('../../secretManager');

const MONGO_SECRET_TAG = 'arn:aws:secretsmanager:eu-central-1:480124983095:secret:mongoURL-hUTXeu';
const MONGO_SECRET_NAME = 'mongoURL';

let isStartedFetch = false;

const getMongoURL = async () => new Promise(async (resolve, _) => {
  if (process.env.__MONGO_URL__ || isStartedFetch) {
    return;
  }

  isStartedFetch = true;

  const { status, error, secret } = await getSecret(MONGO_SECRET_TAG, MONGO_SECRET_NAME);

  isStartedFetch = false;

  if (error || status !== 'success') {
    console.log('mongoURL token not found');

    resolve(true);
  }

  process.env.__MONGO_URL__ = secret;
  resolve(true);
});

module.exports = getMongoURL;
