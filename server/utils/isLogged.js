const isLogged = session => {
  const creds = session?.email && session?.password;

  return !!creds;
};

module.exports = isLogged;
