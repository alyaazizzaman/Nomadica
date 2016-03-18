'use strict';

angular.module('Nomadica.controllers', ['ionic'])

.controller('MainCtrl', function($http) {

  var vm = this;

  vm.signUp = function(user_name, email, password) {
    $http({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: {
        user_name: user_name,
        email: email,
        password: password
      }
    }).then(function() {
      console.log("success");
    });

  };

});
