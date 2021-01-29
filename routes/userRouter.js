const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUsersById, updateUser, updateUserAvatar, getCurrentUser,
} = require('../controllers/users');

userRouter.get('/users', getUsers); // Возвращает всех польователей
userRouter.get('/users/:id', getUsersById); // Возвращает пользователя по _id
userRouter.get('/users/me/', getCurrentUser); // Возвращает информацию о текущем пользователе

userRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }).unknown(true),
}), updateUser); // Обновляет профиль

userRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
}), updateUserAvatar); // Обновляет аватар

module.exports = userRouter;
