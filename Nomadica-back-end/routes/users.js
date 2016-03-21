'use strict';

var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

//POST new user
router.post('/', function(req, res) {
  var user = req.body;
  knex('users').insert({
    user_name: user.user_name,
    email: user.email,
    password: user.password
  })
  .then(function(data){
    res.sendStatus(200);
    console.log(data);
  })
  .catch(function(error) {
    res.sendStatus(500);
    console.log(error);
  });
});

//GET user by id
router.get('/:id', function(req, res) {
  knex('users')
    .where('id', req.params.id)
    .then(function(data) {
      res.sendStatus(200);
      console.log(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    });
});

//DELETE user
router.delete('/:id', function(req, res) {
  knex('users')
    .where('id', req.params.id)
    .del()
    .then(function() {
      res.sendStatus(200);
      console.log("User deleted");
    });
});

//UPDATE user account info
router.put('/:id', function(req, res) {
  var user = req.body;
  knex('users')
    .where('id', req.params.id)
    .update({
      user_name: user.user_name,
      email: user.email,
      password: user.password
    .then(function(data){
      res.sendStatus(200);
      console.log(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    })
  });
});

module.exports = router;
