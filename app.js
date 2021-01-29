const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const NotFoundError = require('./utils/errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');
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

app.use(bodyParser.json()); // Парсер JSON

// Роутинг:
app.post('/signin', login);
app.post('/signup', createUser);
app.use('/', auth, userRouter); // Роутинг пользователей
app.use('/', auth, cardRouter); // Роутинг карточек
app.use('*', () => { // Роутинг 404
  throw new NotFoundError('Запрашиваемый ресурс не найден.');
});

// Обработка ошибок:
app.use(errorHandler);

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
