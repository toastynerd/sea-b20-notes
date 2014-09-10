'use strict';

module.exports = function(app) {
  app.filter('sentencify', function() {
    return function(input) {
      return input[0].toUpperCase() + input.slice(1) + (input[input.length - 1] === '.'  ? '' : '.');
    };
  });
};
