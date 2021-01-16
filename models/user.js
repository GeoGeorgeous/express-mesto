const mongoose = require('mongoose');
const urlRegExp = require('../utils/regExp'); // Регулярное выражение для проверки URL

const userSchema = new mongoose.Schema({
  name: { // Имя пользователя
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  about: { // Информация о пользователе
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  avatar: { // Ссылка на аватар
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