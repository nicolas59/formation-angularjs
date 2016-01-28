
	"use strict";


angular.module("ToonCtrlMod", ["cardDirective"])
	.run(function($rootScope){
		$rootScope.persons = [
			{	
				id:1,
				name:"Doonald Duck", 
				birthday:"9 juin 1944", 
				sex:"Masculin", 
				town:"Donaldville",  
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Spirit_of_43-Donald_Duck%2C_cropped_version.jpg/220px-The_Spirit_of_43-Donald_Duck%2C_cropped_version.jpg"
			},
			{	
				id:2,
				name:"Daisy Duck", 
				birthday:"9 juin 1937", 
				sex:"Féminin", 
				town:"Donaldville", 
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Daisy_duck_at_Tokyo_Disneyland.jpg/220px-Daisy_duck_at_Tokyo_Disneyland.jpg",
				pourc:50

			},	{	
				id:3,
				name:"Mickey Mouse", 
				birthday:"18 novembre 1928", 
				sex:"Masculin", 
				town:"Mickeyville", 
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/D23_Expo_2011_-_Mickey_memorabilia_%286075809438%29.jpg/440px-D23_Expo_2011_-_Mickey_memorabilia_%286075809438%29.jpg",
				pourc:50
			}
		];
	})
	.controller('ToonCtrl', function ($scope, $rootScope) {
		$scope.persons = $rootScope.persons;
		console.log($scope.persons);
	}).controller('ToonDetailCtrl', function($rootScope, $routeParams){	
		var id=$routeParams.toonId;
		var _this = this;
		angular.forEach($rootScope.persons, function(toon){
			if(toon.id == id){
				_this.toon = toon;
			}
		})
	});
