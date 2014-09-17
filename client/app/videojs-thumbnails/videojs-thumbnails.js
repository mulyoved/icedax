'use strict';

angular.module('icedaxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videojs-thumbnails', {
        url: '/videojs-thumbnails',
        templateUrl: 'app/videojs-thumbnails/videojs-thumbnails.html',
        controller: 'VideojsThumbnailsCtrl'
      });
  });