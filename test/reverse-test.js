'use strict';
var reverse = require('../app/reverse');
var expect  = require('chai').expect;

describe('reverse', function() {
  it('reverses a string', function() {
    expect(reverse('boy')).to.equal('yob');
  });
  it('with spaces in it');
});
