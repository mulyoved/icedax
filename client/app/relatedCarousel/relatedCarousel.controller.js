'use strict';

angular.module('icedaxApp')
  .controller('RelatedcarouselCtrl', function ($scope, $log) {
    var video = videojs('video', {}, function() {
      var player = this;
      $log.log('player', player);
      player.relatedCarousel([
        { imageSrc: 'http://placehold.it/140x100&text=image1', url: '/video1-url.html', title: 'video 1 title' },
        { imageSrc: 'http://placehold.it/140x100&text=image2', url: '/video2-url.html', title: 'video 2 title' }
      ]);
    });


    $scope.$on("$destroy", function() {
      if (video) {
        video.dispose();
      }
    });

  });
