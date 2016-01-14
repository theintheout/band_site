'use strict';

/*
Company:  My Local Broker
Author:   <Author Name>
Wiki Link(s):
  <Link>
Description:
	<Description>
*/

angular.module('myLocalBrokerApp')
	.controller('AboutUsCtrl', function ($scope, screenSize, $location, navContent) {
		$scope.screenSize = screenSize;
        navContent.state = 'public';
   
		$scope.journeyTypeCurrent = 'lightbulb';
		$scope.journeyTypeSet = function(journeyType) {
		$scope.journeyTypeCurrent = journeyType;
	};
		
  });
