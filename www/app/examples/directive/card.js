(function(){
  "use strict";
  //Ne pas declarer de variable inutile
  //declarer la directive et mettre son implementation dans une fontion
  angular.module("cardDirective", []).directive("card", cardDirective);

  function cardDirective(){
    return {
      scope:{
        data :"="
      },
        templateUrl: 'partial/card.html'
      };
    }


})(angular)
