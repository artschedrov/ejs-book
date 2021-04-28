// let cat = {};

// cat.speak = function(line) {
//   console.log(`Кот говорит ${line}`);
// }

// cat.speak('hello!');

// function Dog(type) {
//   this.type = type;
// }

// Dog.prototype.speak = function(line) {
//   console.log(`${this.type} собака говорит ${line}`);
// }

//let redDog = new Dog('Красная');

// class Dog {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//       console.log(`${this.type} собака говорит ${line}`);
//   }
// }

// Dog.prototype.teeth = 'big'
// let redDog = new Dog('Красная');
// let blackDog = new Dog('Черная');
// redDog.teeth = 'small';
// redDog.speak('gav');

// console.log(redDog.teeth);
// console.log(blackDog.teeth);

// let country = new Map();

// country.set('1', 'Russia');
// country.set('2', 'USA');
// country.set('3', 'Germany');
// country.set('4', 'Japan');

// console.log(country.get('2'));

class Matrix {
  constructor( w, h, element = (x, y) => undefined) {
    this.w = w;
    this.h = h;
    this.content = [];

    for(let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        this.content[y * w + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.w + x];
  }

  set(x, y, value) {
    this.content[y * this.w + x] = value;
  }
}

class SymMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if(x !=y) {
      super.set(y, x, value);
    }
  }
}