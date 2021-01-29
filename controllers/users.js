const bcrypt = require('bcryptjs');
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

const createUser = (req, res) => {
  // хешируем пароль
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar, // записываем хеш в базу
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// // POST Создаёт пользователя
// const createUser = (req, res) => {
//   bcrypt.hash(req.body.password, 10) // password hash
//     .then((hash) => {
//       User.create({
//         email: req.body.email,
//         password: hash,
//         // name: req.body.name,
//         // about: req.body.about,
//         // avatar: req.body.avatar,
//       })
//         .then((newUser) => res.send({ data: newUser }))
//         .catch((err) => res.send(err));
//     })
//     .then((newUser) => res.send({ data: newUser }))
//     .catch((err) => res.send(err));
// };

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
