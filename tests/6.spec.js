const {assert} = require('chai');
const {Vec} = require('../6.js');

describe('test class Vec', function() {
  it('Test create vector', function() {
    let testVector = new Vec(10, 20);
    assert.deepEqual(testVector, {x: 10, y: 20});
  });

  it('Test sum vectors', function() {
    assert.deepEqual(new Vec(1, 2).plus(new Vec(2, 3)), {x: 3, y: 5});
  })

  it('Test minus vectors', function() {
    assert.deepEqual(new Vec(1, 2).minus(new Vec(2, 3)), {x: -1, y: -1});
  })

  it('Test length vector', function() {
    assert.deepEqual(new Vec(3, 4).length, 5);
  })
})