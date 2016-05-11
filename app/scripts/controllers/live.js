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
//      {
//        venue: 'Tago Mago',
//        location: 'Thornbury, Vic AU',
//        date: '22.04.2016',
//        imgUrl: '',
//        imgAlt: '',
//        linkUrl: 'https://www.facebook.com/ClubTagoMago/',
//        linkTitle: 'Tago Mago',
//        content: '11pm // supports: THE NIGHT COLLECTORS // $8'
//      },
//      {
//        venue: 'The Old Bar',
//        location: 'Fitzroy, Vic AU',
//        date: '01.05.2016',
//        imgUrl: '',
//        imgAlt: '',
//        linkUrl: 'http://www.theoldbar.com.au/',
//        linkTitle: 'The Old Bar',
//        content: '9pm // supporting: KIM SALMON // $TBC'
//      },
      {
        venue: 'Penny Black',
        location: 'Brunswick, Vic AU',
        date: '21.05.2016',
        imgUrl: '',
        imgAlt: '',
        linkUrl: 'https://www.facebook.com/events/1609528096036173/',
        linkTitle: 'FB event',
        content: '9pm // supports: SWAMP + NOTI // FREE'
      },
      {
        venue: 'The Old Bar (Duo) w/KIM SALMON',
        location: 'Fitzroy, Vic AU',
        date: '22.05.2016',
        imgUrl: '',
        imgAlt: '',
        linkUrl: 'https://www.facebook.com/events/1771875139709520/',
        linkTitle: 'FB event',
        content: 'Dallas Gale & Will Hindmarsh only! // 8:40pm // supporting: KIM SALMON // $TBC'
      },
      {
        venue: 'Lyrebird Lounge',
        location: 'Glen Eira, Vic AU',
        date: '27.05.2016',
        imgUrl: '',
        imgAlt: '',
        linkUrl: 'https://www.facebook.com/LyrebirdLounge/',
        linkTitle: 'Lyrebird Lounge',
        content: '10pm // supports: // FREE'
      }
    ];
    
    
    
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
