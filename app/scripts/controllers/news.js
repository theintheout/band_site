'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('NewsCtrl', function ($scope) {
    
    $scope.articles = [
      {
      title: 'New Single RETURN Released',
      date: '08.10.2015',
      imgUrl: '../images/news/return-cover.jpg',
      imgAlt: 'Placeholder',
      linkUrl: 'http://theintheout.bandcamp.com',
      linkTitle: 'stream / download now',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.'
      },
      {
      title: '2016 Tour Announced',
      date: '08.10.2015',
      imgUrl: '../images/placeholder.gif',
      imgAlt: 'Placeholder',
      linkUrl: ' http://www.facebook.com/ ',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
      title: 'Gigs, Gigs, Gigs',
      date: '08.10.2015',
      imgUrl: '../images/placeholder.gif',
      imgAlt: 'Placeholder',
      linkUrl: ' http://www.facebook.com/ ',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      },
      {
      title: 'New Website',
      date: '08.10.2015',
      imgUrl: '../images/placeholder.gif',
      imgAlt: 'Placeholder',
      linkUrl: ' http://www.facebook.com/ ',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, .'
      },
      {
      title: 'Photos from Tote show',
      date: '08.10.2015',
      imgUrl: '../images/placeholder.gif',
      imgAlt: 'Placeholder',
      linkUrl: ' http://www.facebook.com/ ',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
      }
    ];
    
    
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });

