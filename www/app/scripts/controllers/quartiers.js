//http://odata.bordeaux.fr/v1/databordeaux/refvoiesquartiers/?format=json

angular.module('myApp').config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

angular.module('myApp')
  .controller('QuartierCtrl', function ($scope, $http) {
		$http.jsonp("http://odata.bordeaux.fr/v1/databordeaux/refvoiesquartiers/?format=json").then(
			function(response){
				alert(response);
				$scope.quartiers =response.d;
			});

  });


