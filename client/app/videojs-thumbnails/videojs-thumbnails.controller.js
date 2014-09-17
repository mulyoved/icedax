'use strict';

angular.module('icedaxApp')
  .controller('VideojsThumbnailsCtrl', function ($scope, $log) {

    var video = videojs('video1');
    $log.log('Binding2', video );

    video.thumbnails({
      0: {
        src: 'assets/images/thumbnails.png',
        style: {
          left: '-60px',
          width: '600px',
          height: '68px',
          clip: 'rect(0, 120px, 68px, 0)'
        }
      },
      10: {
        style: {
          left: '-180px',
          clip: 'rect(0, 240px, 68px, 120px)'
        }
      },
      20: {
        style: {
          left: '-300px',
          clip: 'rect(0, 360px, 68px, 240px)'
        }
      },
      30: {
        style: {
          left: '-420px',
          clip: 'rect(0, 480px, 68px, 360px)'
        }
      },
      40: {
        style: {
          left: '-540px',
          clip: 'rect(0, 600px, 68px, 480px)'
        }
      }
    });

    $scope.$on("$destroy", function() {
      if (video) {
        $log.log('VideojsThumbnailsCtrl $destroy', video);
        video.dispose();
      }
    });

  });
