const bcrypt = require('bcrypt-nodejs');

const getSecret = require('../secretManager');

const SECRET_TAG = 'arn:aws:secretsmanager:eu-central-1:480124983095:secret:salt-0vHhoD';
const SECRET_NAME = 'salt';

const getSalt = async () => {
  if (process.env.__SESSION_SECRET__) {
    return process.env.__SESSION_SECRET__;
  }

  const { status, error, secret } = await getSecret(SECRET_TAG, SECRET_NAME);

  if (error || status !== 'success') {
    throw new Error('salt secret not found');
  }

  process.env.__SESSION_SECRET__ = secret;

  return process.env.__SESSION_SECRET__;
};

const createPass = (password) => new Promise(async (resolve, _rej) => {
  const saltSecret = await getSalt();
  const salt = bcrypt.genSaltSync(saltSecret);

  await bcrypt.hash(password, salt, null, (err, hash) => {
    if (err) {
      console.log(`Some error happened while generating the hash: ${err}`);

      resolve(err);
    }

    resolve(hash);
  });
});

module.exports = createPass;
