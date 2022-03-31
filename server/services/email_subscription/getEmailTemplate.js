const { readFileSync } = require('fs');
const path = require('path');

const getEmailTemplate = async () => {
  const emailTemplate = readFileSync(path.join(__dirname, '../../views/email.html'), 'utf8');
  const data = await emailTemplate;

  return data;
};

module.exports = getEmailTemplate;
