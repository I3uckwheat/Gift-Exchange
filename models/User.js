const mongoose = require('mongoose');

const User = mongoose.model('User', {
  githubID: String,
});

module.exports = User;