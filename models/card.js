const mongoose = require('mongoose');
const urlRegExp = require('../utils/regExp'); // Регулярное выражение для проверки URL

const cardSchema = new mongoose.Schema({
  name: { // Название карточки
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: { // Ссылка на картинку
    type: String,
    required: true,
    validate: {
      validator(url) {
          return urlRegExp.test(url);
      },
      message: 'URL адрес для изображения указан некорректно.'
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});