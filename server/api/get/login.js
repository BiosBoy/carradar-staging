const isLogged = require('../../utils/isLogged');

const login = (req, res, next) => {
  if (isLogged(req.session)) {
    return res.redirect('/');
  }

  next();
};

module.exports = login;
