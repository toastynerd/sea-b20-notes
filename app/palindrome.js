'use strict';
module.exports = function(word) {
  var reverse = require('./reverse');
  return word === reverse(word);
};
