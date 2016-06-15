(function(){
  "use strict";

  angular.module('myApp')
    .controller('HelloCtrl', function ($scope) {
   	$scope.name="Nicolas";
   	$scope.textColor = "#FF00000";

    $scope.reset = function(){
      $scope.name="";
      $scope.textColor = "#000000";
      $scope.bold = false;
    }
   })

})();
