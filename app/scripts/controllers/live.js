'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:LiveCtrl
 * @description
 * # LiveCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('LiveCtrl', function ($scope) {
    
    $scope.gigs = [
      {
      venue: 'Gin Lane',
      location: 'Belgrave, Vic AU',
      date: '30.01.2016',
      imgUrl: '../images/posters/Jan-30.jpg',
      imgAlt: 'January 30 - Gin Lane (Belgrave VIC)',
      linkUrl: 'http://www.google.com',
      linkTitle: 'Gin Lane',
      content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
      },
      {
      venue: 'The Retreat',
      location: 'Belgrave, Vic AU',
      date: '26.01.2016',
      imgUrl: '',
      imgAlt: '',
      linkUrl: 'http://www.google.com',
      linkTitle: 'Retreat Hotel',
      content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
      },
      {
      venue: 'The Penny Black',
      location: 'Belgrave, Vic AU',
      date: '23.01.2016',
      imgUrl: '',
      imgAlt: '',
      linkUrl: 'http://www.google.com',
      linkTitle: 'Penny Black',
      content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
      }
    //   ,
    //   {
    //   venue: 'The Old Bar',
    //   location: 'Fitzroy, Vic AU',
    //   date: '20.12.2015',
    //   imgUrl: '../images/posters/Dec-20.jpg',
    //   imgAlt: 'December 20 - The Old Bar (Fitzroy VIC)',
    //   linkUrl: 'http://www.google.com',
    //   linkTitle: 'The Old Bar',
    //   content: 'Australia Day at the Retreat featuring... '
    //   },
    //   {
    //   venue: 'Gin Lane',
    //   location: 'Belgrave, Vic AU',
    //   date: '5.11.2015',
    //   imgUrl: '../images/posters/Nov-5.jpg',
    //   imgAlt: 'January 30 - Gin Lane (Belgrave VIC)',
    //   linkUrl: 'http://www.google.com',
    //   linkTitle: 'Google',
    //   content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
    //   },
    //   {
    //   venue: 'Toff In Town',
    //   location: 'Melbourne, Vic AU',
    //   date: '7.02.2015',
    //   imgUrl: '../images/posters/Feb-7.jpg',
    //   imgAlt: 'Feb 7 - Toff In Town (Melbourne VIC)',
    //   linkUrl: 'http://www.google.com',
    //   linkTitle: 'Google',
    //   content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
    //   },
    //   {
    //   venue: 'Boney',
    //   location: 'Melbourne, Vic AU',
    //   date: '15.02.2014',
    //   imgUrl: '../images/posters/Jan-15-2014.jpg',
    //   imgAlt: 'Feb 7 - Toff In Town (Melbourne VIC)',
    //   linkUrl: 'http://www.google.com',
    //   linkTitle: 'Google',
    //   content: 'We play the Old Bar to bring in xmas with special guests The Night Collectors. '
    //   }
    ];
    
    
    
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
