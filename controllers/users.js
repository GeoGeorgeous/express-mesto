const User = require('../models/user.js');
const handleError = require('../utils/handleError');

// GET Возвращает всех польователей
const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => handleError(err, res, 'пользователя'));
};

// GET Возвращает пользователя по _id
const getUsersById = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  User.findById(requestedId)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => handleError(err, res, 'пользователя с таким id. Возможно, его не существует'));
};

// POST Создаёт пользователя
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => handleError(err, res, 'пользователя'));
};

module.exports = { getUsers, getUsersById, createUser };
