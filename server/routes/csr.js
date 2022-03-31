const path = require('path');

const csr = (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/view.html'));
};

module.exports = csr;
