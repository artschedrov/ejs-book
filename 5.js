let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b)
});
//console.log(flattened);

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

function everyCheck(array, func) {
  for(i = 0; i < array.length; i ++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

function check(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

arr = [1, 2, 3, 1];

console.log(everyCheck(arr, check));

module.exports = {everyCheck};
