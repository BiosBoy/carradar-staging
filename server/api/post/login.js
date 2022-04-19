const jwt = require('jsonwebtoken');

const findOne = require('../../db/mongodb/findOne');
const comparePass = require('../../utils/comparePass');
const { USERS_COLLECTION_ID } = require('../../db/mongodb/constants');
const { TOKEN_COOKIE_NAME, JWT_SECRET } = require('../../constants/tokens');

const getGoogleUserData = require('../../tokens/getGoogleOathData');

const login = async (req, res) => {
  const { session, cookies, body } = req;

  console.log(body.token?.access_token, cookies, 'Login attempt');

  if (session.email) {
    return res.send(JSON.stringify({ error: 'You are logged in already. Please logout first' }));
  }

  if (!body.userdata || (!body.password && !body.isSocial)) {
    return res.send(JSON.stringify({ error: 'All fields are required' }));
  }

  const user = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: [
      {
        email: req?.body?.userdata
      },
      {
        username: req?.body?.userdata
      }
    ]
  });

  if (!body.isSocial && !user.entity?.password) {
    return res.send(JSON.stringify({ error: 'User doesn\'t have password yet.' }));
  }

  const isPasswordMatch = await comparePass(body.password, user.entity?.password);
  const isUserFound = user.status === 'found';

  if (!isUserFound || user === null || (!body.isSocial && isPasswordMatch.status === 'error')) {
    return res.send(JSON.stringify({ error: 'User not found. Wrong email, username or password' }));
  }

  if (body.isSocial) {
    const googleUser = await getGoogleUserData(body.token?.access_token, body.token?.id_token);

    if (!googleUser) {
      return res.send(JSON.stringify({ error: 'User token is invalid' }));
    }

    res.cookie(
      TOKEN_COOKIE_NAME,
      jwt.sign({ data: googleUser }, JWT_SECRET),
      { maxAge: 900000, httpOnly: true, secure: false }
    );
  }

  console.log('User is logged in:', session.email);

  session.email = user.entity.email;
  res.cookie('isLogged', true, { maxAge: 86400000, httpOnly: false });
  res.send(JSON.stringify({ status: 'Logged in successfully' }));
};

module.exports = login;
