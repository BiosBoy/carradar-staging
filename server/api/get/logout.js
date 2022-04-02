const isLogged = require('../../utils/isLogged');

const logout = (req, res) => {
  if (!isLogged(req.session)) {
    return res.redirect('/');
  }

  console.log(req.session, 'logout done');
  req.session.destroy();

  res.cookie('isLogged', false, { maxAge: 86400000, httpOnly: false });
  res.json(JSON.stringify({ status: 'Logged out successfully!' }));
};

module.exports = logout;
