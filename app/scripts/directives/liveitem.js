'use strict';

/**
 * @ngdoc directive
 * @name yeomanApp.directive:liveitem
 * @description
 * # liveitem
 */
angular.module('yeomanApp')
  .directive('liveItem', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/live/live-items.html',
      replace: true,
      scope: {
          gigObject: '='     
      }
    };
  });
