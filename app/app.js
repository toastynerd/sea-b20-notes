'use strict';
var $   = require('jquery');
var pal = require('./palindrome');

$.each($('li'), function(index, li)  {
  console.log(pal(li.innerText));
});

