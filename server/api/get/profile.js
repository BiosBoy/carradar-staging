const findOne = require('../../db/mongodb/findOne');
const isLogged = require('../../utils/isLogged');

const { USERS_COLLECTION_ID, CARS_COLLECTION_ID } = require('../../db/mongodb/constants');

const profile = async (req, res) => {
  console.log('retrieving profile data', req.session)

  if (!isLogged(req.session)) {
    return res.redirect('/');
  }

  const user = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: {
      email: req.session.email
    }
  });

  const cars = await findOne({
    collectionName: CARS_COLLECTION_ID,
    entityData: {
      email: req.session.userdata
    }
  });

  if (user.error || user.status === 'error' || !user.entity) {
    return res.send(JSON.stringify({ error: user.error || 'User not found.' }));
  }

  return res.send(JSON.stringify({
    email: user.entity.email,
    username: user.entity.username,
    mobile: user.entity.mobile,
    usersurname: user.entity.usersurname,
    bio: user.entity.bio,
    searchHistory: cars.entity.searchHistory || null
  }));
};

module.exports = profile;
