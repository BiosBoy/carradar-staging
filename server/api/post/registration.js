const findOne = require('../../db/mongodb/findOne');
const putOne = require('../../db/mongodb/putOne');

const { USERS_COLLECTION_ID } = require('../../db/mongodb/constants');

const createPass = require('../../utils/createPass');

const registration = async (req, res) => {
  if (req.session.email) {
    return res.send(JSON.stringify({ error: 'You are logged in. Please logout first' }))
  }

  if (!req.body.email || !req.body.username || !req.body.password || !req.body.passwordConfirmation) {
    return res.send(JSON.stringify({ error: 'Not all data required was provided' }));
  }

  if (req.body.password !== req.body.passwordConfirmation) {
    return res.send(JSON.stringify({ error: 'passwords dont match' }));
  }

  const user = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: req?.body?.email,
      username: req?.body?.username
    }
  });

  const isUserFound = user.status === 'found';

  if (isUserFound || user === null) {
    const payload = isUserFound ? 'User already registered' : 'Empty request data';

    return res.send(JSON.stringify({ error: payload }));
  }

  const resultSave = await putOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: req.body.email,
      username: req.body.username,
      password: await createPass(req.body.password),
      bio: '',
      usersurname: '',
      mobile: ''
    }
  });

  req.session.email = req.body.email;
  req.session.password = req?.body?.password;

  res.send(JSON.stringify(resultSave));
};

module.exports = registration;
