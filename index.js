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
// app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса
app.use(express.static(`${__dirname}/public`)); // Раздача Статики

// Роутинг:
app.use('/', userRouter);
// app.use('/', returnUsers);
// app.use('/', returnCards);
// app.use('/', returnUserId);
app.get('*', (req, res) => { // 404
  res.status('404').json({ message: 'Запрашиваемый ресурс не найден' });
});

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
