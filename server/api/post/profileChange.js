const findOne = require('../../db/mongodb/findOne');
const updateOne = require('../../db/mongodb/updateOne');
const comparePass = require('../../utils/comparePass');
const createPass = require('../../utils/createPass');

const { USERS_COLLECTION_ID } = require('../../db/mongodb/constants');

const profileChange = async (req, res) => {
  if (!req.body.emailID || (!req.body.username && !req.body.email)) {
    return res.send(JSON.stringify('{ error: Fields must not be empty }'));
  }

  const {
    emailID,
    username,
    email,
    usersurname,
    bio,
    mobile,
    password,
    passwordNew,
    passwordConfirmation
  } = req.body

  const userDB = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: emailID
    }
  });

  const updatePass = async () => {
    if (password && (passwordNew !== passwordConfirmation)) {
      res.send(JSON.stringify({ error: 'Passwords do not match or empty!' }))

      return null
    }

    if (passwordNew && (passwordNew === passwordConfirmation)) {
      const isPasswordMatch = await comparePass(password, userDB.entity.password)
      const newUserPassword = await createPass(passwordNew)

      if (isPasswordMatch.status === 'error') {
        res.send(JSON.stringify({ error: 'Something bad happen during password update!' }))

        return null;
      }

      return newUserPassword
    }

    return null
  }

  const newPass = await updatePass()

  const user = await updateOne({
    collectionName: USERS_COLLECTION_ID,
    filterData: {
      email: emailID
    },
    entityData: {
      username: username,
      email: email,
      usersurname: usersurname,
      bio: bio,
      mobile: mobile,
      password: newPass || userDB.entity.password
    }
  })

  if (user === null || user.err) {
    return res.send(JSON.stringify({ error: user.err || 'Some error happen during data saving' }));
  }

  const newUserData = {
    email: req.body.email,
    username: req.body.username,
    mobile: req.body.mobile,
    usersurname: req.body.usersurname,
    bio: req.body.bio
  };

  req.session.email = req.body.email

  res.send(JSON.stringify({ status: 'Data changed successfully', user: newUserData }));
};

module.exports = profileChange;
