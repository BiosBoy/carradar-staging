const checkSession = (req, _res) => {
  return req?.cookies?.cookieUUID;
};

module.exports = checkSession;
