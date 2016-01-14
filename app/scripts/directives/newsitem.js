'use strict';

/**
 * @ngdoc directive
 * @name yeomanApp.directive:newsItem
 * @description
 * # newsItem
 */
angular.module('yeomanApp')
  .directive('newsItem', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/news/news-items.html',
      replace: true,
      scope: {
          articleObject: '='     
      }
    };
  });
