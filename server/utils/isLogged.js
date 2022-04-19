const jwt = require('jsonwebtoken');

const { COOKIE_NAME, JWT_SECRET } = require('../constants/tokens');

const isLogged = (session, cookies) => {
  const creds = session?.email;

  return !!creds || cookies && jwt.verify(cookies[COOKIE_NAME], JWT_SECRET);
};

module.exports = isLogged;
