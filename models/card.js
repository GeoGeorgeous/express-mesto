const mongoose = require('mongoose');
const urlRegExp = require('../utils/regExp'); // Регулярное выражение для проверки URL

const cardSchema = new mongoose.Schema({
  name: { // Название карточки
    type: String,
    required: [true, 'Поле name обязательное'],
    minlength: 2,
    maxlength: 30,
  },
  link: { // Ссылка на картинку
    type: String,
    required: true,
    validate: {
      validator(url) {
        return urlRegExp.test(url);
      },
      message: 'URL адрес для изображения карточки указан некорректно.',
    },
  },
  owner: { // Владелец карточки
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{ // Массив лайков
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false,
  }],
  createdAt: { // Дата создания
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('card', cardSchema);
