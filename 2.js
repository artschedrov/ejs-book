//елочка
let rect = '';

for (let i = 0; i <= 7; i++) {
  rect += '#';
  console.log(rect);
}

//fizzbuzz
//1
for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0) {
    if (num % 5 != 0) {
      console.log ('Fizz');
    } else {
      console.log ('FizzBuzz');
    }
  } else if (num % 5 == 0) {
    console.log('Buzz');
  }
}

//2
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0 ) {
      console.log ('FizzBuzz');
  }
  else if (num % 3 === 0) {
    console.log('Fizz');
  }
  else if (num % 5 === 0) {
    console.log('Buzz');
  }
}

//chessbox
function generateChessboard(size) {
  let chessboard = '\n';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 !== 0) {
        chessboard += j % 2 === 0 ? ' ' : '#';
      } else {
        chessboard += j % 2 === 0 ? '#' : ' ';  
      }
    }
    chessboard += '\n';
  }
  return chessboard;
}

console.log(generateChessboard(2));
