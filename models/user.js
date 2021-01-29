const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

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

// Проверяет, есть ли пользователь с указанной почтой в базе;
// Если пользователь найден, сверяет хеш его пароля;
// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user; // теперь user доступен
        });
    });
};

module.exports = mongoose.model('user', userSchema);
