'use strict';

angular.module('icedaxApp')
  .controller('VideoJs4Ctrl', function ($scope) {
    var video = videojs('videojs');
    $scope.$on("$destroy", function() {
      if (video) {
        video.dispose();
      }
    });
  });
