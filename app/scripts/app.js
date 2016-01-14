'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  
  

  
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      // MAIN
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // NEWS
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      // WHEN
      .when('/when', {
        templateUrl: 'views/when.html',
        controller: 'LiveCtrl'
      })
      // GALLERY
      .when('/eyes', {
        templateUrl: 'views/eyes.html',
        controller: 'EyesCtrl'
      })
      // MUSIC
      .when('/ears', {
        templateUrl: 'views/ears.html',
        controller: 'MainCtrl'
      })
      // WHO
      .when('/who', {
        templateUrl: 'views/who.html',
        controller: 'WhoCtrl'
      })
      // SHOP
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'MainCtrl'
      })
      // CONTACT
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
  