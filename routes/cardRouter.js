const cardRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteCard, addLike, removeLike,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards); // Возвращает все карточки

cardRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }).unknown(true),
}), createCard); // Создаёт карточку

cardRouter.delete('/cards/:id', deleteCard); // Удаляет карточку по идентификатору

cardRouter.put('/cards/:id/likes', addLike); // Добавляет лайк карточке по идентификатору карточки

cardRouter.delete('/cards/:id/likes', removeLike); // Удаляет лайк карточки по идентификатору карточки

module.exports = cardRouter;
