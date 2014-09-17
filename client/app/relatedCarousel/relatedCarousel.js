'use strict';

angular.module('icedaxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('relatedCarousel', {
        url: '/relatedCarousel',
        templateUrl: 'app/relatedCarousel/relatedCarousel.html',
        controller: 'RelatedcarouselCtrl'
      });
  });