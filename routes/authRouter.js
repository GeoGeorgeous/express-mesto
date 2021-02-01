const authRouter = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
const { login, createUser } = require('../controllers/users');

authRouter.post('/signin', login);
authRouter.post('/signup', createUser);

module.exports = authRouter;
