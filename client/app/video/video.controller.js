'use strict';

angular.module('icedaxApp')
  .controller('VideoCtrl', function ($scope) {
    var video = videojs('video2');
    $scope.$on("$destroy", function() {
      if (video) {
        video.dispose();
      }
    });
  });
