const {assert} = require('chai');
const {arrToList, listToArr, prepend, nth} = require('./4-3.js');

describe('test functions for creating list', function() {
  it('test arrToList', function() {
    assert.deepEqual(arrToList([10, 20, 30]), {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}});
  });

  it('test listToArray', function() {
    let list = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};
    assert.deepEqual(listToArr(list), [10, 20, 30]);
  });

  it('test prepend', function() {
    assert.deepEqual(prepend(10, prepend(20, prepend(30, null))), {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}});
  });

  it('test nth', function() {
    let list = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
    assert.deepEqual(nth(list, 0), 10);
    assert.deepEqual(nth(list, 1), 20);
    assert.deepEqual(nth(list, 2), 30);
    assert.deepEqual(nth(list, 3), undefined);
    assert.deepEqual(nth(list, -1), undefined);
  });
});