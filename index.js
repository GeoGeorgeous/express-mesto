const express = require('express');
const bodyParser = require('body-parser');
const returnUsers = require('./routes/returnUsers');
const returnCards = require('./routes/returnCards');
const returnUserId = require('./routes/returnUserId');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(`${__dirname}/public`)); // static

app.use(bodyParser.urlencoded({ extended: true })); // body-parse

// Routing:
app.use('/', returnUsers);
app.use('/', returnCards);
app.use('/', returnUserId);
app.get('*', (req, res) => {
  res.send({ "message": "Запрашиваемый ресурс не найден" })
});


// Run App:

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
