'use strict';

module.exports = function(app) {
  app.factory('notesServer', function($http) {
    var parseNote = function(note) {
      var parsedNote = {noteBody: note.noteBody};
      return parsedNote;
    };

    var notes = {
      saveNewNote: function(note) {
        return $http.post('/api/v_0_0_1/notes', parseNote(note))
                .error(function(data, status) {
                  console.log('error!');
                  console.log(data);
                  console.log(status);
                });
      },

      saveNote: function(note) {
        return $http.put('/api/v_0_0_1/notes/' + note._id, parseNote(note))
                .error(function(data, status) {
                  console.log('error!');
                  console.log(data);
                  console.log(status);
                });
      },

      deleteNote: function(note) {
        return $http.delete('/api/v_0_0_1/notes/' + note._id, parseNote(note))
                .error(function(data, status) {
                  console.log('error!');
                  console.log(data);
                  console.log(status);
                });
      }
    };
    return notes;
  });
};
