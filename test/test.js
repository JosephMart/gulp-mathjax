'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('gulp_mathjax function test', () => {
  it('should return hello world', () => {
    var result = index.gulp_mathjax('hello world');
    expect(result).to.equal('hello world');
  });
});
