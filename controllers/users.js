const User = require('../models/user.js');
const handleError = require('../utils/handleError');

// GET Возвращает всех польователей
const getUsers = (req, res) => {
  User.find({})
    .orFail()
    .then((users) => { res.status(200).send(users); })
    .catch((err) => handleError(err, res, 'пользователя'));
};

// GET Возвращает пользователя по _id
const getUsersById = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  User.findById(requestedId)
    .orFail()
    .then((user) => { res.status(200).send(user); })
    .catch((err) => handleError(err, res, 'пользователя с таким id. Возможно, его'));
};

// POST Создаёт пользователя
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((newUser) => res.send({ data: newUser }))
    .catch((err) => handleError(err, res, 'пользователя'));
};

// PATCH Обновляет данные пользователя:
const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail()
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch((err) => handleError(err, res, 'пользователя'));
};

// PATCH Обновляет аватар пользователя:
const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail()
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch((err) => handleError(err, res, 'пользователя'));
};

module.exports = {
  getUsers, getUsersById, createUser, updateUser, updateUserAvatar,
};
