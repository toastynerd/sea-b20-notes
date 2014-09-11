'use strict';

module.exports = function(app) {
  app.directive('editable', function() {
    var direc = {
      restrict: 'EA',
      templateUrl: 'views/directives/editable-directive.html',
      scope: {
        object: '=',
        save: '=',
        delete: '=',
        fields: '='
      },
      controller: function($scope) {
        $scope.tempFields = {};
        $scope.edit = function() {
          $scope.fields.forEach(function(field) {
            $scope.tempFields[field] = $scope.object[field];
          });
          $scope.object.editing = true;
        };

        $scope.cancelEdit = function() {
          $scope.fields.forEach(function(field) {
            $scope.object[field] = $scope.tempFields[field];
          });
          $scope.object.editing = false;
        };

        $scope.saveObject = function() {
          $scope.save($scope.object);
          $scope.object.editing = false;
        };

        $scope.deleteObject = function() {
          $scope.delete($scope.object);
        };
      }
    };

    return direc;
  });
};
