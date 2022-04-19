/* eslint-disable complexity */
const jwt = require('jsonwebtoken');

const findOne = require('../../db/mongodb/findOne');
const putOne = require('../../db/mongodb/putOne');

const { USERS_COLLECTION_ID } = require('../../db/mongodb/constants');
const { TOKEN_COOKIE_NAME, JWT_SECRET } = require('../../constants/tokens');

const getGoogleUserData = require('../../tokens/getGoogleOathData');

const createPass = require('../../utils/createPass');

const registration = async (req, res) => {
  const { session, body } = req;

  if (session.email) {
    return res.send(JSON.stringify({ error: 'You are logged in. Please logout first' }));
  }

  if (!body.email || !body.username || (!body.isSocialRegistration && (!body.password || !body.passwordConfirmation))) {
    return res.send(JSON.stringify({ error: 'Not all data required was provided' }));
  }

  if ((!body.isSocialRegistration && (!body.password !== !body.passwordConfirmation))) {
    return res.send(JSON.stringify({ error: 'passwords dont match' }));
  }

  const user = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: body?.email,
      username: body?.username
    }
  });

  const isUserFound = user.status === 'found';

  if (isUserFound || user === null) {
    const payload = isUserFound ? 'User already registered' : 'Empty request data';

    return res.send(JSON.stringify({ error: payload }));
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

  const resultSave = await putOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: body.email,
      username: body.username,
      password: body.password ? await createPass(body.password) : '',
      bio: '',
      usersurname: body.usersurname || '',
      mobile: '',
      image: '',
      imageurl: body.imageurl || ''
    }
  });

  console.log('User is registered:', session.email);

  session.email = body.email;
  res.cookie('isLogged', true, { maxAge: 86400000, httpOnly: false });
  res.send(JSON.stringify(resultSave));
};

module.exports = registration;
