const userRouter = require('express').Router();
const {
  getUsers, getUsersById, createUser,
} = require('../controllers/users');

userRouter.get('/users', getUsers); // Возвращает всех польователей
userRouter.get('/users/:id', getUsersById); // Возвращает пользователя по _id
userRouter.post('/users', createUser); // Создаёт пользователя

module.exports = userRouter;
