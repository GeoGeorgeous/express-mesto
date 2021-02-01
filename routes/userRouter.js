const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUsersById, updateUser, updateUserAvatar, getCurrentUser,
} = require('../controllers/users');
const regex = require('../utils/regExp');

userRouter.get('/', getUsers); // Возвращает всех польователей
userRouter.get('/me', getCurrentUser); // Возвращает информацию о текущем пользователе

// Обновляет профиль
userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30),
    about: Joi
      .string()
      .required()
      .min(2)
      .max(30),
  }).unknown(true),
}), updateUser);

userRouter.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi
      .string()
      .alphanum()
      .hex()
      .length(24),
  }),
}), getUsersById); // Возвращает пользователя по _id

// Обновляет аватар
userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi
      .string()
      .required()
      .pattern(regex)
      .required(),
  }),
}), updateUserAvatar);

module.exports = userRouter;
