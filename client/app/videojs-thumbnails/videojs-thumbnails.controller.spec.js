'use strict';

describe('Controller: VideojsThumbnailsCtrl', function () {

  // load the controller's module
  beforeEach(module('icedaxApp'));

  var VideojsThumbnailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideojsThumbnailsCtrl = $controller('VideojsThumbnailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
