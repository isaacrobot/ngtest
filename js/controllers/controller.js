'use strict';

myApp.controller('controller',
	
	function controller($scope, Data){

		$scope.siteTitle = "My first chuvaness";



	    $scope.names = 'sac';

	    $scope.list = Data.get($scope);

	}
);