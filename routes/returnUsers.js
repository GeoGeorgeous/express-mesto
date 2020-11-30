const returnUsers = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '/../data/users.json');

returnUsers.get('/users', (req, res) => {
  fsPromises.readFile(filePath, { encoding: 'utf8' }) // Чтение файла
    .then((data) => {
      const users = JSON.parse(data);
      res.send(JSON.stringify(users))
        .sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = returnUsers;
