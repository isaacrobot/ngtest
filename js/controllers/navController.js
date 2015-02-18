'use strict';

myApp.controller('navController',
	
	function navController($scope){

		$scope.name = 'My NG Testing';

		$scope.navLinks = [
			{
				name:'About',
				url:'about'
			},
			{
				name:'Services',
				url:'services'
			},
			{
				name:'Contact',
				url:'contact'
			},
		];

	}
);