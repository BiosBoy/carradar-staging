const getSecret = require('../secretManager');

const SECRET_TAG = 'arn:aws:secretsmanager:eu-central-1:480124983095:secret:session-hPcgsC';
const SECRET_NAME = 'session';

let isStartedFetch = false;

const getSessionData = async () => {
  if (process.env.__SESSION_SECRET__ || isStartedFetch) {
    return;
  }

  isStartedFetch = true;

  const { status, error, secret } = await getSecret(SECRET_TAG, SECRET_NAME);

  isStartedFetch = false;

  if (error || status !== 'success') {
    throw new Error('session secret not found');
  }

  process.env.__SESSION_SECRET__ = secret;
};

module.exports = getSessionData;
