'use strict';

var myApp = angular.module('myApp', ['ngResource','ngRoute'])

	.config(
		function($routeProvider, $locationProvider){
			$routeProvider.when('/about',
				{
					templateUrl:'templates/home.html',
					controller:'teamController'
				}
			);

			$routeProvider.when('/services',
				{
					templateUrl:'templates/services.html',
					controller:'teamController'
				}
			);

			$routeProvider.when('/contact',
				{
					templateUrl:'templates/contact.html',
					controller:'teamController'
				}
			);

			$routeProvider.otherwise({redirectTo:'/about'});

			//$locationProvider.html5Mode({ enabled: true, requireBase: false });
			$locationProvider.html5Mode(true);
		}
	);

	