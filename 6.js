/*

Vector Type
takes x and y parameters (numbers), which it should save to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/



class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}


/*

The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

*/

class Group {
  constructor() {
    this.group = [];
  }

  add(key) {
    if (this.group.includes(key)) {
      return console.log('its arlready taken');
    }
    return this.group.push(key);
  }

  delete(key) {
    if (this.has(key)) {
      let removingElement = this.group.indexOf(key);
      return this.group.splice(removingElement, 1);
    }
  }

  has(key) {
    if(this.group.includes(key)) {
      return true;
    } else {
      return false;
    }
  }

  static from(array) {
    let group = new Group();
    for (let i = 0; i < array.length; i++) {
      group.add(array[i]);
    }
    return group;
  }
}

let testSet = Group.from([3, 5, 6, 6]) ;

testSet.add(2);
testSet.add(4);
testSet.add(5);
testSet.add(10);
testSet.delete(10);
//testSet.from([3, 5, 6]);

console.log(testSet);
console.log(testSet.has(10));

module.exports = {Vec};