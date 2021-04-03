let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b)
});
//console.log(flattened);

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
