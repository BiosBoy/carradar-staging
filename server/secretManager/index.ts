// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://aws.amazon.com/developers/getting-started/nodejs/

// Load the AWS SDK
const AWS = require('aws-sdk');
const REGION = 'eu-central-1';

// @ts-ignore
const getSecret = async (secretName, secretKey) => new Promise((resolve, _) => {
  const client = new AWS.SecretsManager({
    region: REGION
  });

  console.log(secretName, secretKey, 'secretName, secretKey');

  client.getSecretValue({ SecretId: secretName }, (err, data) => {
    if (err || (err?.code && err.code === 'DecryptionFailureException')) {
      return resolve({
        status: 'error',
        errorMessage: err,
        secret: null
      });
    }

    resolve({
      status: 'success',
      secret: JSON.parse(data.SecretString)[secretKey]
    });
  });
});

module.exports = getSecret;
