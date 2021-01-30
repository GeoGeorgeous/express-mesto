/* eslint-disable consistent-return */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const NotFoundError = require('../utils/errors/NotFoundError.js');
const BadRequestError = require('../utils/errors/BadRequestError');
const ConflictError = require('../utils/errors/ConflictError');
const User = require('../models/user.js');

// GET Возвращает всех польователей
const getUsers = (req, res, next) => {
  User.find({})
    .orFail(() => {
      throw new NotFoundError('Пользователи не найдены.');
    })
    .then((users) => { res.status(200).send(users); })
    .catch(next);
};

// GET Возвращает пользователя по _id
const getUsersById = (req, res, next) => {
  let requestedId = req.params.id; // Запрашиваемый ID;
  if (requestedId === 'me') { // Возвращает информацию о текущем пользователе
    requestedId = req.user._id;
  }

  User.findById(requestedId)
    .orFail(() => {
      throw new NotFoundError('Не получилось найти нужного пользователя.');
    })
    .then((user) => { res.status(200).send(user); })
    .catch(next);
};

// GET Возвращает информацию о текущем пользователе
const getCurrentUser = (req, res, next) => {
  const requestedId = req.user.id; // Запрашиваемый ID;
  User.findById(requestedId)
    .orFail()
    .then((user) => { res.status(200).send(user); })
    .catch(next);
};

// POST Создаёт пользователя
const createUser = (req, res, next) => {
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
      if (err.name === 'MongoError') {
        // Если уже используется
        throw new ConflictError('Данный email уже зарегистрирован.');
      } else {
        throw new BadRequestError('Не получилось зарегистрировать пользователя, проверьте переданные данные. ');
      }
    })
    .catch(next);
};

// Получает из запроса почту и пароль и проверяет их.
// Если почта и пароль правильные, контроллер создаёт JWT сроком на неделю.
const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        'some-secret-key',
        { expiresIn: '7d' },
      );
      res
        .status(200)
        .send({ token });
    })
    .catch(() => {
      throw new BadRequestError('Неверный пароль или email');
    })
    .catch(next);
};

// PATCH Обновляет данные пользователя:
const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail(() => {
      throw new BadRequestError('Не получилось обновить данные пользователя, проверьте переданные данные.');
    })
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch(next);
};

// PATCH Обновляет аватар пользователя:
const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(() => {
      throw new BadRequestError('Не получилось обновить данные пользователя, проверьте переданные данные.');
    })
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch(next);
};

module.exports = {
  getUsers, getUsersById, createUser, updateUser, updateUserAvatar, login, getCurrentUser,
};
