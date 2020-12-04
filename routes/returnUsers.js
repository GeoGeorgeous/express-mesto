const returnUsers = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

const filePath = path.join(__dirname, '/../data/users.json');

returnUsers.get('/users', (req, res) => {
  readFile(filePath) // Чтение файла
    .then((data) => {
      const users = JSON.parse(data);
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = returnUsers;
