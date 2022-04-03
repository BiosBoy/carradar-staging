const getSecret = require('../../secretManager');

const SECRET_TAG = 'arn:aws:secretsmanager:eu-central-1:480124983095:secret:ria-ykOG6U';
const SECRET_NAME = 'ria';

let isStartedFetch = false;

const getRiaToken = async () => {
  if (process.env.__RIA_TOKEN__ || isStartedFetch) {
    return;
  }

  isStartedFetch = true;

  const { status, error, secret } = await getSecret(SECRET_TAG, SECRET_NAME);

  isStartedFetch = false;

  if (error || status !== 'success') {
    throw new Error('ria token secret not found');
  }

  process.env.__RIA_TOKEN__ = secret;
};

module.exports = getRiaToken;
