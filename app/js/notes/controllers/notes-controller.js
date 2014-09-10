'use strict';

module.exports = function(app) {
  app.controller('notesController', function($scope, $http, notesServer) {
    $scope.getAllNotes = function() {
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
    };

    $scope.getAllNotes();

    $scope.saveNewNote = function() {
      notesServer.saveNewNote($scope.newNote)
        .success(function(data) {
          $scope.notes.push(data);
        });
    };

    $scope.editNote = function(note) {
      note.editing = true;
    };

    $scope.saveNote = function(note) {
      notesServer.saveNote(note)
        .success(function(data) {
          $scope.getAllNotes();
        });
    };

    $scope.deleteNote = function(note) {
      notesServer.deleteNote(note)
        .success(function(data) {
          $scope.getAllNotes();
        })
    };

    $scope.deleteAll = function() {
      $scope.notes.forEach(function(note) {$scope.deleteNote(note)});
    }
  });
};
