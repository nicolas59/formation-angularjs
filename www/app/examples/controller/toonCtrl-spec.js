'use strict';

describe('Controller: ToonCtrl', function () {

  // load the controller's module
  beforeEach(module('ToonCtrlMod'));

  var ToonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToonCtrl = $controller('ToonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of persons to the scope', function () {
    expect(scope.persons.length).toBe(3);
  });
});
