const jwt = require('jsonwebtoken');

const { COOKIE_NAME, JWT_SECRET } = require('../constants/tokens');

const isLogged = (session, cookies) => {
  const creds = session?.email;
  const token = cookies && cookies[COOKIE_NAME];

  return !!creds || token && jwt.verify(token, JWT_SECRET);
};

module.exports = isLogged;
