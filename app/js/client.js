'use strict';
var $ = require('jquery');
var Note = require('./notes/models/note');
var BasicNoteView = require('./notes/views/note-view');
var NotesCollection = require('./notes/collections/notes-collection');
var NotesCollectionView = require('./notes/views/notes-collection-view');

var note = new Note();
note.set('noteBody', 'wow such note, so words');
note.set('awesomeFactor', 'ten billion');
note.save();

var note2 = new Note();
note2.set('noteBody', 'b-flat');
note2.save();

var notesCollection = new NotesCollection();
var notesCollectionView = new NotesCollectionView({collection: notesCollection});
notesCollection.fetch();
$('#notes').html(notesCollectionView.$el);


