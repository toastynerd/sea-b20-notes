'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    "submit": "save"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/note-form.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var newNoteBody = this.$('input[name=noteBody]').val();
    this.model.save({noteBody: newNoteBody});
    Backbone.history.navigate('notes', {trigger: true});
  }
});
