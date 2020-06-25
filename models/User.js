const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Please add the username.']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add the email.']
  },
  password: {
    type: String,
    required: [true, 'Please add the password.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
