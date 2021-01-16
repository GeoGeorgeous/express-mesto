const Card = require('../models/card.js');
const handleError = require('../utils/handleError');

// GET Возвращает все карточки
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => handleError(err, res, 'карточку'));
};

// POST Создаёт карточку
const createCard = (req, res) => {
  const {
    name, link, likes, createdAt,
  } = req.body;
  const owner = req.user._id;
  Card.create({
    name, link, owner, likes, createdAt,
  })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => handleError(err, res, 'карточку'));
};

// ValidationError

// GET Удаляет карточку по id
const deleteCard = (req, res) => {
  console.log(req.params.id);
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndRemove(requestedId)
    .then(() => res.send({ message: `Карточка ${requestedId} удалена` }))
    .catch((err) => handleError(err, res, 'карточку'));
};

module.exports = { getCards, createCard, deleteCard };
