/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gameApp
 */
app.controller('LoginCtrl', ['$scope', 'Auth',
  function($scope, Auth) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  }
]);