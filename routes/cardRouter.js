const cardRouter = require('express').Router();
const {
  getCards, createCard, deleteCard,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards); // Возвращает все карточки
cardRouter.post('/cards', createCard); // Создаёт карточку
cardRouter.delete('/cards/:id', deleteCard); // Удаляет карточку по идентификатору

module.exports = cardRouter;
