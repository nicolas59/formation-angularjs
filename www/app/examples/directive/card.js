"use strict";
var cardDirectove = angular.module("cardDirective", []);
cardDirectove.directive("card", function(){
 	return {
 		scope:{
 			data :"="
 		},
    	templateUrl: 'partial/card.html'
  	};
});