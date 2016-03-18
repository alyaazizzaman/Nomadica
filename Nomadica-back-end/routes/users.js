'use strict';


var express = require('express');
var router = express.Router();

var Table = require('../db/knex');

/* POST new user. */
router.post('/', function(req, res) {
  var user = req.body;

  function signUp(user_name, email, password) {
    knex('users').insert({
        user_name: user.user_name,
        email: user.email,
        password: user.password
      })
      .returning('id')
      .then(function(data, err) {
        if (!checkErr(res, err)) {
          res.send('success');
        }
      });
    }
  });

module.exports = router;
