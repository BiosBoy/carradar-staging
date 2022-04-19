const fetch = require('node-fetch');

const getGoogleUserData = async (accessToken, idToken) => {
  const payload = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${idToken}` }
    }
  );

  const googleUser = await payload?.json();

  return googleUser;
};

module.exports = getGoogleUserData;
