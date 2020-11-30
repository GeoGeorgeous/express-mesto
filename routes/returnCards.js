const returnCards = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '/../data/cards.json');

returnCards.get('/cards', (req, res) => {
  fsPromises.readFile(filePath, { encoding: 'utf8' }) // Чтение файла
    .then((data) => {
      const cards = JSON.parse(data);
      res.json(cards)
        .sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = returnCards;
