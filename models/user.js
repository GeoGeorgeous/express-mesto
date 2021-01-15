const mongoose = require('mongoose');

const regex = new RegExp(/^(https?:\/\/)?(w{3}.)?+([a-z\d]{0,}).([a-z\d]{2,})+([a-z0-9-._~:\/?#[\\\]@!\$&'()*+,;=]{1,})/gi)

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
          return regex.test(url);
      },
      message: 'URL адрес для изображения указан некорректно.',
  }
    // добавить регулярку сюда
  }
});

module.exports = mongoose.model('user', userSchema);