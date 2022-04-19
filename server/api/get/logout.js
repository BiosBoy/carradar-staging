const isLogged = require('../../utils/isLogged');

const logout = (req, res) => {
  if (!isLogged(req.session, req.cookies)) {
    return res.redirect('/');
  }

  req.session.destroy();

  res.cookie('isLogged', false, { maxAge: 86400000, httpOnly: false });
  res.send(JSON.stringify({ status: 'Logged out successfully!' }));
};

module.exports = logout;
