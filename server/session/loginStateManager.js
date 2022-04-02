const isLogged = require('../utils/isLogged');

const loginStateManager = (req, res, next) => {
  if (req?.session?.email) {
    res.cookie('isLogged', isLogged(req.session), { maxAge: 86400000, httpOnly: false });
  }

  next();
};

module.exports = loginStateManager;
