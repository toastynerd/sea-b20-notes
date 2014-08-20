var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var NoteView = Backbone.View.extend({
  tagName: 'div',
  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/basic-note-template.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  }
});

module.exports = NoteView;
