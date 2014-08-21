'use strict';
/*jshint expr:true */
var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var NoteView = require('../../../app/js/notes/views/note-view');

describe('Backbone Note View', function() {
  before(function(done) {
    sinon.spy(NoteView.prototype, 'render');
    done();
  });

  it('should call render on creation', function(done) {
    this.noteView = new NoteView({model: Backbone.Model.extend({})});
    expect(NoteView.prototype.render.called).to.be.true;
    done();
  });

  it('should not be empty', function(done) {
    expect(this.noteView.$el).to.not.eql('');
    done();
  });

  after(function(done) {
    NoteView.prototype.render.restore();
    done();
  });
});
