'use strict';

var myApp = angular.module('myApp', ['ngResource','ngRoute'])

	.config(
		function($routeProvider, $locationProvider){
			$routeProvider.when('/',
				{
					templateUrl:'templates/home.html',
					controller:'controller'
				}
			);

			$routeProvider.otherwise({redirectTo:'/'});

			$locationProvider.html5Mode(true);
		}
	);

	