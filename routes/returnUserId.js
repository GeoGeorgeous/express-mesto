const returnUsers = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '/../data/users.json');

returnUsers.get('/users/:id', (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;

  fsPromises.readFile(filePath, { encoding: 'utf8' }) // Чтение файла
    .then((data) => {
      const users = JSON.parse(data); // Массив объектов пользователей
      const selectedUser = users.find((user) => (user._id === requestedId));
      /* eslint-disable no-unused-expressions */
      selectedUser
        ? res.status(200).json(selectedUser)
        : res.status(404).json({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = returnUsers;
