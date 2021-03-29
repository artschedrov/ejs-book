let array = [10, 20, 30];
// Напишите функцию arrayToList, 
// которая строит список, чья структура подобна показанной, 
// если передать функции массив [1, 2, з] в качестве аргумента.

function arrToList(arr = []) {
  let counter = arr.length - 1;
  list = null;
  
  function fn() {
    if(counter >= 0) {
      let rest = list || null;
      list = {};
      list.value = arr[counter];
      list.rest = rest;
      counter--;
      return fn(); 
    }
    return list;
  }
  return fn();
}

console.log(arrToList(array));

// Напишите также функцию listToArray, 
// создающую массив из списка.

function listToArr(list) {
  let tmp = list, arr = [];

  function fn() {
    const {value, rest} = tmp;
    if(value) {
      arr.push(value);
    }
    if(rest) {
      tmp = rest;
      return fn();
    } else {
      return arr;
    }
  }
  return fn();
}

console.log(listToArr(arrToList(array)));

// Затем добавьте вспомогательную функцию prepend, 
// принимающую элемент и список и создающую новый список, 
// в котором заданный элемент добавлен в начало исходного списка.

function prepend(value, rest) {
  return {value, rest};
}

console.log(prepend(10, prepend(20, prepend(30, null))));

// Кроме того, создайте функцию nth, принимающую список и число и возвращающую элемент, 
// находящийся в за­ данной позиции в этом списке (где ноль соответствует первому элементу), 
// или undefined, если элемента в заданной позиции не существует.

function nth(list = {}, index) {
  let counter = 0, arr = [], tmp = list;
  
  function fn() {
    const {value, rest} = tmp;
    if(counter <= index) {
      arr.push(value);
    }
    if(rest) {
      tmp = rest;
      return fn();
    } else {
      return arr[index];
    }
  }
  return fn();
}

module.exports = { arrToList, listToArr, prepend, nth };