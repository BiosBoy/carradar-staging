const aws = require('aws-sdk');

const setS3Profile = () => {
  const credentials = new aws.SharedIniFileCredentials({ profile: 'carradar' });

  aws.config.credentials = credentials;
};

module.exports = setS3Profile;
