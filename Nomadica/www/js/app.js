'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Nomadica', ['ionic', 'Nomadica.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('home', {

    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  })
  // Each tab has its own nav history stack:
  .state('signin', {

    url: '/signin',
    templateUrl: 'templates/signin.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  })

  .state('signup', {

    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  })

  .state('mytrips', {

    url: '/mytrips',
    templateUrl: 'templates/mytrips.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  })

  .state('trip', {

    url: '/trip',
    templateUrl: 'templates/trip.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  })

  .state('entry', {

    url: '/entry',
    templateUrl: 'templates/entry.html',
    controller: 'MainCtrl',
    controllerAs: 'MC'
  });

  // If none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/home');

});
