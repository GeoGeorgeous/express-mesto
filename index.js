const express = require('express');
const mongoose = require('mongoose');
const returnUsers = require('./routes/returnUsers');
const returnCards = require('./routes/returnCards');
const returnUserId = require('./routes/returnUserId');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.static(`${__dirname}/public`)); // static

// Routing:
app.use('/', returnUsers);
app.use('/', returnCards);
app.use('/', returnUserId);
app.get('*', (req, res) => {
  res.status('404').json({ message: 'Запрашиваемый ресурс не найден' });
});

// Run App:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
