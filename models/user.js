const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const urlRegExp = require('../utils/regExp'); // Регулярное выражение для проверки URL

const userSchema = new mongoose.Schema({
  name: { // Имя пользователя
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: { // Информация о пользователе
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: { // Ссылка на аватар
    type: String,
  },
});

module.exports = mongoose.model('user', userSchema);
