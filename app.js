const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
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

// Роутинг:
app.post('/signin', login);
app.post('/signup', createUser);
app.use('/', auth, userRouter); // Роутинг пользователей
app.use('/', auth, cardRouter); // Роутинг карточек
app.use('*', (req, res) => { // Роутинг 404
  res.status('404').json({ message: 'Запрашиваемый ресурс не найден' });
});

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
