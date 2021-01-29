/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
const Card = require('../models/card.js');
const handleError = require('../utils/handleError');

// GET Возвращает все карточки
const getCards = (req, res) => {
  Card.find({})
    .orFail()
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
  Card.findById(requestedId)
    .then((requestedCard) => {
      // Если владелец, то карточку можно удалить
      // requestedCard.owner — object, req.user._id — String
      if (requestedCard.owner == req.user._id) {
        Card.findByIdAndRemove(requestedId) // Удаляем карточку
          .orFail()
          .then(() => res.send({ message: `Карточка ${requestedId} удалена` }))
          .catch((err) => handleError(err, res, 'карточку. Возможно, её'));
      } else {
        return Promise.reject(new Error('Вы не можете удалять чужие карточки'));
      }
    })
    .catch((err) => handleError(err, res, 'карточку. Возможно, её'));
};

// PUT Добавляет лайк карточке по идентификатору карточки
const addLike = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $addToSet: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch((err) => handleError(err, res, 'карточку. Возможно, её'));
};

// DELETE Удаляет лайк карточки по идентификатору карточки
const removeLike = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $pull: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch((err) => handleError(err, res, 'карточку. Возможно, её'));
};

module.exports = {
  getCards, createCard, deleteCard, addLike, removeLike,
};
