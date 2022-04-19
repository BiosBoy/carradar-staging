const isLogged = require('../../utils/isLogged');

const registration = (req, res, next) => {
  if (isLogged(req.session, req.cookies)) {
    return res.redirect('/');
  }

  next();
};

module.exports = registration;
