'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('NotesController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('notesApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should able to create a new controller', function() {
    var ctrl = $controllerConstructor('notesController', {$scope: scope });
    expect(typeof ctrl).toBe('object'); 
  });

  it('should make a get request', inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/v_0_0_1/notes').respond(200, [{'noteBody': 'test note'}]);
    var ctrl = $controllerConstructor('notesController', {$scope: scope});

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
