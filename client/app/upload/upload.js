'use strict';

angular.module('musicManApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('upload', {
        url: '/upload',
        templateUrl: 'app/upload/upload.html',
        controller: 'UploadCtrl'
  });
});