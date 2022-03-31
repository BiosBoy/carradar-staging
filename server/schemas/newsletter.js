const mongoose = require('mongoose');
const SchemaDB = mongoose.Schema;

const NewsletterDB = new SchemaDB(
  {
    email: String
  },
  {
    collection: 'newsletter'
  }
);

module.exports = mongoose.model('NewsletterDB', NewsletterDB);
