
	"use strict";


angular.module("ToonCtrlMod", [])
	.controller('ToonCtrl', ["$scope",function ($scope) {
		$scope.sex="";
		$scope.persons = [
			{	name:"Doonald Duck", 
				birthday:"9 juin 1944", 
				sex:"Masculin", 
				town:"Donaldville",  
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Spirit_of_43-Donald_Duck%2C_cropped_version.jpg/220px-The_Spirit_of_43-Donald_Duck%2C_cropped_version.jpg"
			},
			{	
				name:"Daisy Duck", 
				birthday:"9 juin 1937", 
				sex:"Féminin", 
				town:"Donaldville", 
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Daisy_duck_at_Tokyo_Disneyland.jpg/220px-Daisy_duck_at_Tokyo_Disneyland.jpg",
				pourc:50

			},	{	
				name:"Mickey Mouse", 
				birthday:"18 novembre 1928", 
				sex:"Masculin", 
				town:"Mickeyville", 
				picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/D23_Expo_2011_-_Mickey_memorabilia_%286075809438%29.jpg/440px-D23_Expo_2011_-_Mickey_memorabilia_%286075809438%29.jpg",
				pourc:50
			}
		];

		console.log($scope.persons);
	}]);
