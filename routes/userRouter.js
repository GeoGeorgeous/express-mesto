const userRouter = require('express').Router();
const {
  getUsers, getUsersById, updateUser, updateUserAvatar, getCurrentUser,
} = require('../controllers/users');

userRouter.get('/users', getUsers); // Возвращает всех польователей
userRouter.get('/users/:id', getUsersById); // Возвращает пользователя по _id
userRouter.get('/users/me/', getCurrentUser); // Возвращает информацию о текущем пользователе
userRouter.patch('/users/me', updateUser); // Обновляет профиль
userRouter.patch('/users/me/avatar', updateUserAvatar); // Обновляет аватар

module.exports = userRouter;
