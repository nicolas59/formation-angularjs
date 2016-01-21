'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('myApp')
  .controller('TreeCtrl', function () {
  
	this.treeOptions = {
 		accept: function(sourceNodeScope, destNodesScope, destIndex) {
      		return true;
    	}
	};

	this.treeConfig = {
		defaultCollapsed : false
	}

  	this.toggle = function (scope) {
        scope.toggle();
     };

    this.list =[
    	{
    		title:"Dossier 1",
    		items:[
    			{title:"Dossier 1.1"},
    			{title:"Dossier 1.2"},
    			{title:"Dossier 1.3"}
    		]

    },
    	{title:"Dossier 2",
			items:[
    			{title:"Dossier 2.1",
	    		items:[
	    			{title:"Dossier 2.1.1"},
	    			{title:"Dossier 2.1.2"},
	    			{title:"Dossier 2.1.3"}
	    		]},
    			{title:"Dossier 2.2"},
    			{title:"Dossier 2.3"}
    		]
    },
    	{title:"Dossier 3"}

    ];

this.nodes =[
    	{
    		title:"Dossier 1",
    		nodes:[
    			{title:"Dossier 1.1"},
    			{title:"Dossier 1.2"},
    			{title:"Dossier 1.3"}
    		]

    },
    	{title:"Dossier 2",
			nodes:[
    			{title:"Dossier 2.1",
	    		nodes:[
	    			{title:"Dossier 2.1.1"},
	    			{title:"Dossier 2.1.2"},
	    			{title:"Dossier 2.1.3"}
	    		]},
    			{title:"Dossier 2.2"},
    			{title:"Dossier 2.3"}
    		]
    },
    	{title:"Dossier 3"}

    ];


   //  alert(JSON.stringify(this));
    

  });
