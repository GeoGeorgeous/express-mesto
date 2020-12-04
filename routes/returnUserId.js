const returnUsers = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

const filePath = path.join(__dirname, '/../data/users.json');

returnUsers.get('/users/:id', (req, res) => {
  const requestedId = req.params.id; // Запрашиваемый ID;

  readFile(filePath) // Чтение файла
    .then((data) => {
      const users = JSON.parse(data); // Массив объектов пользователей
      const selectedUser = users.find((user) => (user._id === requestedId));
      if (selectedUser) {
        res.status(200).json(selectedUser);
      } else {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});

module.exports = returnUsers;
