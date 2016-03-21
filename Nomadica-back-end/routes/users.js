'use strict';

var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

//POST new user
router.post('/', function(req, res) {
  console.log(req.body);
  var user = req.body;
  knex('users').insert({
    user_name: user.user_name,
    email: user.email,
    password: user.password
  })
  .then(function(success){
    res.sendStatus(200);
  })
  .catch(function(error) {
    res.sendStatus(500);
  });
});

//GET user by id
router.get('/:id', function(req, res) {
  var user = req.body;
  knex('users').

    })
})

module.exports = router;
