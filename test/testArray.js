/* global describe, it */
'use strict';
var expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('returns -1 when the value is not present', function() {
      // assert.equal(-1, [1,2,3].indexOf(5));
      expect([1,2,3].indexOf(5)).to.equal(-1);
    });
  });
});
