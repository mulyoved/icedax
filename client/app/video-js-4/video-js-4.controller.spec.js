'use strict';

describe('Controller: VideoJs4Ctrl', function () {

  // load the controller's module
  beforeEach(module('icedaxApp'));

  var VideoJs4Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoJs4Ctrl = $controller('VideoJs4Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
