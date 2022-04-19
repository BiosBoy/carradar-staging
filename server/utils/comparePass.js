const bcrypt = require('bcrypt-nodejs');

const comparePass = (requestPassword, realPassword) => new Promise(async (resolve, _rej) => {
  if (!requestPassword || !realPassword) {
    console.log('Error during password checking: no password provided');

    resolve({ status: 'error' });

    return;
  }

  await bcrypt.compare(requestPassword, realPassword, (error, result) => {
    if (error || !result) {
      console.log(`Error during password checking: ${error}`);

      return resolve({ status: 'error' });
    }

    return resolve({ status: 'success' });
  });
});

module.exports = comparePass;
