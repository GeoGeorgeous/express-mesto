const returnCards = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

const filePath = path.join(__dirname, '/../data/cards.json');

returnCards.get('/cards', (req, res) => {
  readFile(filePath) // Чтение файла
    .then((data) => {
      const cards = JSON.parse(data);
      res.status(200).json(cards);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = returnCards;
