(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope) {
	$scope.lunchList = "";
	$scope.lunchMessage = "";


	$scope.displayMessage = function () {
		var comma = ',';
		var listArray;
		var lunchItems = 0;
		listArray = $scope.lunchList.split(comma);
		lunchItems = listArray.length;
				
		
				if (lunchItems <1) {
					$scope.lunchMessage = "Enter atleast one item please";
				}
				if (lunchItems>1 && lunchItems<4) {
					$scope.lunchMessage = "Enjoy";
				}
				if (lunchItems>3) {
					$scope.lunchMessage = "Eating too much";
				}
				
				


	};

});

}) ();