'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:WhoCtrl
 * @description
 * # WhoCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('WhoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
