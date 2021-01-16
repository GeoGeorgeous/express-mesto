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
    .then((newCard) => res.status(200).send({ data: newCard }))
    .catch((err) => handleError(err, res, 'карточку'));
};

// GET Удаляет карточку по id
const deleteCard = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndRemove(requestedId)
    .then(() => res.send({ message: `Карточка ${requestedId} удалена` }))
    .catch((err) => handleError(err, res, 'карточку'));
};

// PUT Добавляет лайк карточке по идентификатору карточки
const addLike = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch((err) => handleError(err, res, 'карточку'));
};

// DELETE Удаляет лайк карточки по идентификатору карточки
const removeLike = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch((err) => handleError(err, res, 'карточку'));
};

module.exports = {
  getCards, createCard, deleteCard, addLike, removeLike,
};
