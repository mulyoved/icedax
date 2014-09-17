'use strict';

angular.module('icedaxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hdVideoButton', {
        url: '/hdVideoButton',
        templateUrl: 'app/hdVideoButton/hdVideoButton.html',
        controller: 'HdvideobuttonCtrl'
      });
  });