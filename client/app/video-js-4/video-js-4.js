'use strict';

angular.module('icedaxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video-js-4', {
        url: '/video-js-4',
        templateUrl: 'app/video-js-4/video-js-4.html',
        controller: 'VideoJs4Ctrl'
      });
  });