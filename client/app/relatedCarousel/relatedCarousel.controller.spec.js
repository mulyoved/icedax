'use strict';

describe('Controller: RelatedcarouselCtrl', function () {

  // load the controller's module
  beforeEach(module('icedaxApp'));

  var RelatedcarouselCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelatedcarouselCtrl = $controller('RelatedcarouselCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
