'use strict';

angular.module('icedaxApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Video',
        'link': '/video'
      },
      {
        'title': 'relatedCarousel',
        'link': '/relatedCarousel'
      },
      {
        'title': 'videojs-thumbnails',
        'link': '/videojs-thumbnails'
      },
      {
        'title': 'hdVideoButton [BAD]',
        'link': '/hdVideoButton '
      },
      {
        'title': 'video-js-4',
        'link': '/video-js-4'
      }




    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });