'use strict';
//comment for changes
require('angular/angular');
require('angular-route');

var notesApp = angular.module('notesApp', ['ngRoute']);

require('./notes/controllers/notes-controller')(notesApp);
require('./filters/sentence-filter')(notesApp);

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
