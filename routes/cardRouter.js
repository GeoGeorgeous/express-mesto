const cardRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteCard, addLike, removeLike,
} = require('../controllers/cards');
const regex = require('../utils/regExp');

// Возвращает все карточки
cardRouter.get('/', getCards);

// Создаёт карточку
cardRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30),
    link: Joi
      .string()
      .required()
      .pattern(regex),
  }).unknown(true),
}), createCard);

// Удаляет карточку по идентификатору
cardRouter.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
}), deleteCard);

// Добавляет лайк карточке по идентификатору карточки
cardRouter.put('/:id/likes', celebrate({
  params: Joi.object().keys({
    id: Joi
      .string()
      .alphanum()
      .hex()
      .length(24),
  }),
}), addLike);

// Удаляет лайк карточки по идентификатору карточки
cardRouter.delete('/:id/likes', celebrate({
  params: Joi.object().keys({
    id: Joi
      .string()
      .alphanum()
      .hex()
      .length(24),
  }),
}), removeLike);

module.exports = cardRouter;
