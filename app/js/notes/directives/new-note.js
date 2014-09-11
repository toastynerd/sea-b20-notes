'use strict';

module.exports = function(app) {
  app.directive('newNote', function() {
    var direc = {
      restrict: 'EA',
      templateUrl: 'views/notes/new-note.html'
    };

    return direc;
  });
};
