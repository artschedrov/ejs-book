const {assert} = require('chai');
const {everyCheck} = require('../5.js');

describe('test function EveryCheck', function() {
  let trueArr = [1, 2, 3, 5];
  let falseArr = [0, -1, 2];
  let nanArr = [NaN, NaN, NaN];
  
  function testHandler(num) {
    if (num > 0) {
      return true;
    } else {
      return false;
    }
  }

  it('test for True', function() {
    assert.deepEqual(everyCheck(trueArr, testHandler), true);
  });

  it('test for False', function() {
    assert.deepEqual(everyCheck(falseArr, testHandler), false);
  });

  it('test for isNaN false', function() {
    assert.deepEqual(everyCheck(trueArr, isNaN), false);
  });

  it('test for isNaN true', function() {
    assert.deepEqual(everyCheck(nanArr, isNaN), true);
  });
});