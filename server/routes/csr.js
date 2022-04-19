const path = require('path');

const csr = (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
};

module.exports = csr;
