'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = require('../models/note');
var NoteView = require('../views/note-view');
var NoteFormView = require('../views/note-form-view');
var NotesCollection = require('../collections/notes-collection');
var NotesCollectionView = require('../views/notes-collection-view');

module.exports = Backbone.Router.extend({
  routes: {
    "notes": "index",
    "notes/new": "create",
    "notes/:id": "singleNote"
  },

  index: function() {
    this.notes = new NotesCollection();
    this.notes.fetch();
    var self = this;
    this.notesView = new NotesCollectionView({collection: self.notes});
    $('#content').html(self.notesView.$el);
  },

  create: function() {
    var newNote = new Note(); 
    var formView = new NoteFormView({model: newNote});       
    $('#content').html(formView.el);
  },

  singleNote: function(id) {
    var note = this.notes.get(id);
    var noteView = new NoteView({model: note});
    $('#content').html(noteView.el);
  }
});
