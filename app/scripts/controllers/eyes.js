'use strict';
/**
 * @ngdoc function
 * @name yeomanApp.controller:EyesCtrl
 * @description
 * # EyesCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('EyesCtrl', function ($scope) {
    $scope.galleries = [
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-1.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-2.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-3.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-5.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
//      {
//        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-6.jpg',
//        imgAlt: 'The In The Out',
//        imgLink: 'http://barrytakesphotos.com/',
//        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
//      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-7.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-8.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-10.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-11.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
//      {
//        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-12.jpg',
//        imgAlt: 'The In The Out',
//        imgLink: 'http://barrytakesphotos.com/',
//        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
//      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-13.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://barrytakesphotos.com/',
        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
      },
//      {
//        image: 'http://www.theintheout.com/images/gallery/theintheout-old-bar-barry-takes-photos-14.jpg',
//        imgAlt: 'The In The Out',
//        imgLink: 'http://barrytakesphotos.com/',
//        copyright: 'Melbourne Australia - 2016 Photography by Barry C Douglas'
//      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-1.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-3.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-4.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-5.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-6.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-7.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-8.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-9.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-10.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-11.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-12.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-13.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-14.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-15.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-16.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-17.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-18.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-19.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-20.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-21.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-22.jpg',
        imgAlt: 'The In The Out',
        imgLink: 'http://ilanarose.zenfolio.com/',
        copyright: 'Melbourne, Australia - 2016 Photography by Ilana Rose'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-23.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-24.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-25.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-26.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-27.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-28.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-29.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-30.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-31.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-32.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-33.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-34.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      },
      {
        image: 'http://www.theintheout.com/images/gallery/theintheout-35.jpg',
        imgAlt: 'The In The Out',
        copyright: 'Melbourne, Australia - 2013'
      }
    ];
  });
