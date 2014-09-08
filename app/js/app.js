'use strict';
require('angular/angular');
require('angular-route');

var notesApp = angular.module('notesApp', ['ngRoute']);

require('./notes/controllers/notes-controller')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes/notes.html',
      controller: 'notesController'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
