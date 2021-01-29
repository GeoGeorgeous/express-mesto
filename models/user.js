import { isEmail } from 'validator';

const mongoose = require('mongoose'); // Валидтор для Email
const urlRegExp = require('../utils/regExp'); // Регулярное выражение для проверки URL

const userSchema = new mongoose.Schema({
  email: { // Email пользователя
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Неправильно указан email'],
  },
  password: { // Пароль пользователя
    type: String,
    required: true,
    minlength: 8,
  },
  name: { // Имя пользователя
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: { // Информация о пользователе
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: { // Ссылка на аватар
    type: String,
    validate: {
      validator(url) {
        return urlRegExp.test(url);
      },
      message: 'URL адрес для изображения указан некорректно.',
    },
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
});

module.exports = mongoose.model('user', userSchema);
