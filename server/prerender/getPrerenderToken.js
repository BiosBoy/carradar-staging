const { PRERENDER_TOKEN, PRERENDER_KEY } = require('../constants/prerender');
const getSecret = require('../secretManager');

let isStartedFetch = false;

const getPrerenderToken = async () => {
  if (process.env.__PRERENDER_TOKEN__ || isStartedFetch) {
    return;
  }

  isStartedFetch = true;

  const { status, error, secret } = await getSecret(PRERENDER_TOKEN, PRERENDER_KEY);

  isStartedFetch = false;

  if (error || status !== 'success') {
    throw new Error('prerender token secret not found');
  }

  process.env.__PRERENDER_TOKEN__ = secret;
};

module.exports = getPrerenderToken;
