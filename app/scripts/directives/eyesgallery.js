'use strict';

/**
 * @ngdoc directive
 * @name yeomanApp.directive:eyesGallery
 * @description
 * # eyesGallery
 */
angular.module('yeomanApp')
  .directive('eyesGallery', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/eyes/eyes-gallery.html',
      replace: true,
      scope: {
          galleryObject: '='     
      }
    };
  });