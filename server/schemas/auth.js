const mongoose = require('mongoose');
const SchemaDB = mongoose.Schema;

const UserSchema = new SchemaDB(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    passwordConfirmation: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    }
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', UserSchema);
