const returnUsers = require('express').Router();
const users  = require('./db/users');

returnUsers.get('/users', (req, res) => {
  res.send(users);
});

module.exports = returnUsers;