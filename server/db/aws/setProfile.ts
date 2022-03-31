const setProfile = () => {
  if (process.env.ENV_LOCAL) {
    // eslint-disable-next-line global-require
    const setS3Profile = require('../../creds/aws/setS3Profile')

    // since you can have multiple AWS accounts locally,
    // we need to specify the correct one for the access here
    setS3Profile()
  }
}

module.exports = setProfile
