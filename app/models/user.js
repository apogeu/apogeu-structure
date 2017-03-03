const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserModel);
