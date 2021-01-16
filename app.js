const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', { // Подключение БД
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true, // для new Server Discover и Monitoring engine
});

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(express.static(`${__dirname}/public`)); // Раздача Статики

// Авторизация (hard-coded)
app.use((req, res, next) => {
  req.user = {
    _id: '60030e62c1a9332e25ef3755',
  };

  next();
});

// Роутинг:
app.use('/', userRouter);
app.get('*', (req, res) => { // 404
  res.status('404').json({ message: 'Запрашиваемый ресурс не найден' });
});

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
