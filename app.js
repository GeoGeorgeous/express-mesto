const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { login, createUser } = require('./controllers/users');
const userRouter = require('./routes/userRouter');
const cardRouter = require('./routes/cardRouter');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', { // Подключение БД
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json()); // JSON

// Авторизация (hard-coded)
app.use((req, res, next) => {
  req.user = {
    _id: '60030e62c1a9332e25ef3755',
  };
  next(); // Добавили в каждый req объект user
});

// Роутинг:
app.post('/signin', login);
app.post('/signup', createUser);
app.use('/', userRouter); // Роутинг пользователей
app.use('/', cardRouter); // Роутинг карточек
app.use('*', (req, res) => { // Роутинг 404
  res.status('404').json({ message: 'Запрашиваемый ресурс не найден' });
});

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
