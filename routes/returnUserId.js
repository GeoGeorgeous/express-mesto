const returnUsers = require('express').Router();
const users  = require('../data/users');

returnUsers.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send({ error: 'Такого пользователя нет' } )
    return
  }

  res.send(users[req.params.id]);
});

module.exports = returnUsers;