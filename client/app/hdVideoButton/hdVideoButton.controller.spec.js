'use strict';

describe('Controller: HdvideobuttonCtrl', function () {

  // load the controller's module
  beforeEach(module('icedaxApp'));

  var HdvideobuttonCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HdvideobuttonCtrl = $controller('HdvideobuttonCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
