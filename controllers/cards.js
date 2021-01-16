const Card = require('../models/card.js');

// GET Возвращает все карточки
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
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
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

// GET Удаляет карточку по id
const deleteCard = (req, res) => {
  console.log(req.params.id);
  const requestedId = req.params.id; // Запрашиваемый ID;
  Card.findByIdAndRemove(requestedId)
    .then(() => res.send({ message: `Карточка ${requestedId} удалена` }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports = { getCards, createCard, deleteCard };
