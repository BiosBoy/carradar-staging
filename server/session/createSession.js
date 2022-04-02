const session = require('express-session');
const MongoStore = require('connect-mongo');

const { URL } = require('../db/mongodb/constants');

const creteSession = () => {
  return session({
    secret: process.env.__SESSION_SECRET__,
    resave: true,
    saveUninitialized: false,
    name: 'cookieUUID',
    cookie: {
      path: '/',
      maxAge: 86400000,
      httpOnly: true,
      secure: false,
      sameSite: false
    },
    store: new MongoStore({
      mongoUrl: URL(),
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'native',
      mongoOptions: {
        useUnifiedTopology: true
      }
    })
  });
};

module.exports = creteSession;
