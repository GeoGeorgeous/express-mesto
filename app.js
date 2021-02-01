const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const { errors } = require('celebrate'); <- Включить для проверки ошибок JOI / Celebrate
const cors = require('cors');
const auth = require('./middlewares/auth');
const NotFoundError = require('./utils/errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');
// const { login, createUser } = require('./controllers/users');
const celebrateErrorHandler = require('./middlewares/celebrateErrorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const authRouter = require('./routes/authRouter');
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

// Милдверы:
app.use(cors()); // CORS
app.use(bodyParser.urlencoded({ // Парсер
  extended: true,
}));
app.use(bodyParser.json()); // Парсер
app.use(requestLogger); // Логгер

// crash-test <———————————————————————————————————————————————————————DELETE——>
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// Роутинг:
app.use('/', authRouter);
app.use('/users', auth, userRouter); // Роутинг пользователей
app.use('/cards', auth, cardRouter); // Роутинг карточек
app.use('*', () => { // Роутинг 404
  throw new NotFoundError('Запрашиваемый ресурс не найден.');
});

// Логгер ошибок:
app.use(errorLogger);

// Обработка ошибок:
// app.use(errors()); <- Включить для проверки ошибок JOI / Celebrate
app.use(celebrateErrorHandler);
app.use(errorHandler);

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
