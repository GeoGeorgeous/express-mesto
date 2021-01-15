const mongoose = require('mongoose');
const urlRegExp = require('../utils/regExp');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(url) {
          return urlRegExp.test(url);
      },
      message: 'URL адрес для изображения указан некорректно.'
    }
  }
});

module.exports = mongoose.model('user', userSchema);