const redirectToHTTPS = (req, res, next) => {
  return req.secure ? next() : res.redirect(`https://${req.headers.host}${req.url}`);
};

module.exports = redirectToHTTPS;
