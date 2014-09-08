'use strict';

module.exports = function(app) {
  app.controller('notesController', function($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/v_0_0_1/notes'
    }).success(function(data) {
      $scope.notes = data;
    }).error(function(data, status) {
      console.log('error!');
      console.log(data);
      console.log(status);
    });
  });
};
