'use strict';

angular.module('icedaxApp')
  .controller('HdvideobuttonCtrl', function ($scope) {
    var video = videojs('example_video_1');


    $scope.$on("$destroy", function() {
      video.dispose();
    });

    $scope.onBind = function() {
      $log.log('OnBind');
      HDtoggle();
    }
  });
