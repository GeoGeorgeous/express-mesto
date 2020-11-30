const returnCards = require('express').Router();
const cards  = require('./db/cards');

returnCards.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = returnCards;