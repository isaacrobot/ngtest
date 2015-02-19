'use strict';

myApp.controller('teamController',

	function teamController($scope){
		
		$scope.team = {
			members:[
				{
					name: "PJ",
					title: "Developer / Co Founder",
					moto: "Genuinely enjoys building things for the internet.",
					imgURL:"img/pj.jpg",
					upvoteCount: 0
				},
				{
					name: "Zenia",
					title: "PM / Co Founder",
					moto: "Genuinely enjoys building things for the internet.",
					imgURL:"img/zenia.jpg",
					upvoteCount: 0
				},
				{
					name: "Jamille",
					title: "Jr Developer",
					moto: "Youngest of the team with a big love for coding.",
					imgURL:"img/jamille.png",
					upvoteCount: 0
				},
				{
					name: "Arnel",
					title: "Developer",
					moto: "A web developer with a cool outdoorsy vibe",
					imgURL:"img/arnel.jpg",
					upvoteCount: 0
				},
				{
					name: "Jan Jurgens",
					title: "Jr Developer",
					moto: "He is awesomely fast.",
					imgURL:"img/jann.jpg",
					upvoteCount: 0
				}
			]
		}

		$scope.upvote = function(member){
			member.upvoteCount++;
		}

		$scope.downvote = function(member){
			if(member.upvoteCount > 0){
				member.upvoteCount--;
			}
		}


	}



);