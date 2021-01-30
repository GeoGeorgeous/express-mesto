/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
const Card = require('../models/card.js');
const NotFoundError = require('../utils/errors/NotFoundError.js');
const BadRequestError = require('../utils/errors/BadRequestError');
const ForbiddenError = require('../utils/errors/ForbiddenError');

// GET Возвращает все карточки
const getCards = (req, res, next) => {
  Card.find({})
    .populate('likes', '_id')
    // .orFail(() => {
    //   throw new NotFoundError('Карточки не найдены.');
    // })
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(next);
};

// POST Создаёт карточку
const createCard = (req, res, next) => {
  const {
    name, link, likes, createdAt,
  } = req.body;
  const owner = req.user._id;
  Card.create({
    name, link, owner, likes, createdAt,
  })
    .then((newCard) => res
      .status(200)
      .send({ data: newCard }))
    .catch(() => {
      throw new BadRequestError('Не получилось создать карточку, проверьте переданные данные.');
    })
    .catch(next);
};

// GET Удаляет карточку по id
const deleteCard = (req, res, next) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findById(requestedId)
    .then((requestedCard) => {
      // Если владелец, то карточку можно удалить
      // requestedCard.owner — object, req.user._id — String
      if (requestedCard.owner == req.user._id) {
        Card.findByIdAndRemove(requestedId) // Удаляем карточку
          .orFail()
          .then(() => res.send({ message: `Карточка ${requestedId} удалена` }))
          .catch(next);
      } else {
        throw new ForbiddenError('Вы не можете удалять чужие карточки.');
      }
    })
    .catch(next);
};

// PUT Добавляет лайк карточке по идентификатору карточки
const addLike = (req, res, next) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $addToSet: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError('Не получилось найти нужную карточку, проверьте идентификатор.');
    })
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch(next);
};

// DELETE Удаляет лайк карточки по идентификатору карточки
const removeLike = (req, res, next) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndUpdate(
    requestedId,
    { $pull: { likes: req.user._id } },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError('Не получилось найти нужную карточку, проверьте идентификатор.');
    })
    .then((updatedCard) => res.send({ data: updatedCard }))
    .catch(next);
};

module.exports = {
  getCards, createCard, deleteCard, addLike, removeLike,
};
