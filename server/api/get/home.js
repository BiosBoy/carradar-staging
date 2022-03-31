const home = (req, res, next) => {
  const host = req.get('host');

  if (host.includes('heroku')) {
    return res.redirect('https://carradar.com.ua');
  }

  next();
};

module.exports = home;
