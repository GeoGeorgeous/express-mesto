const mongoose = require('mongoose');
const urlRegExp = require('../utils/regExp');

// name — имя карточки, строка от 2 до 30 символов, обязательное поле;
// link — ссылка на картинку, строка, обязательно поле. Для проверки данных используйте регулярное выражение из предыдущей схемы;
// owner — ссылка на модель автора карточки, тип ObjectId, обязательное поле;
// likes — список лайкнувших пост пользователей, массив ObjectId, по умолчанию — пустой массив (поле default);
// createdAt — дата создания, тип Date, значение по умолчанию Date.now.

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
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
    type: ObjectId,
    required: true
    // добавить регулярку сюда
  },
  likes: {},
  createdAt: {
    type: Date,
  }
});