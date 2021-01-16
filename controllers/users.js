const User = require('../models/user.js');

// GET Возвращает всех польователей
const getUsers = (req, res) => {
  User.find({}) // Чтение файла
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

// GET Возвращает пользователя по _id
const getUsersById = (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;
  User.findById(requestedId) // Чтение файла
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(404).json({ message: 'Нет пользователя с таким id' });
    });
};

// POST Создаёт пользователя
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports = { getUsers, getUsersById, createUser };
