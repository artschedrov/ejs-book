// Напишите функцию range, которая принимает два аргумента, start и end,
// и возвращает массив, содержащий все числа от start до end включительно.

// Затем напишите функцию sum, которая принимает массив чисел и возвра­ щает их сумму. 
// Запустите пример программы и посмотрите, действительно ли она возвращает 55.

// В качестве дополнительного задания: измените функцию range так, 
// чтобы она принимала необязательный третий аргумент, 
// который указывал бы значение шага, используемое при построении массива. 
// Если шаг не задан, элементы увеличиваются на единицу, что соответствует старому поведению. 
// Вызов функции range(l, 10, 2) должен возвращать [1, з, 5, 7, 9). 
// Убедитесь, что функция также работает и с отрицательными значениями шага, 
// так что результатом range(5, 2, -1) является [5, 4, з, 2).

function range(start, end) {
  let array = [];

  if (end > 0) {
    for (let i = start; i <= end; i ++) array.push(i);
  } else {
    for (let i = start; i >= end; i--) array.push(i);
  }
  return array;
}


function rangeWithStep(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

//sum1
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

//sum2
let sumArray = arr => arr.reduce((sum, current) => sum + current);


console.log(rangeWithStep(1, -10));

// У массивов есть метод reverse, который изменяет порядок следования элементов в массиве. 
// Для выполнения этого упражнения напишите две функции: reverseArray и reverseArrayinPlace. 
// Первая функция, reverseArray, принимает массив в качестве аргумента и создает новый массив, 
// содержащий те же элементы в обратном порядке. 
// Вторая, reverseArrayinPlace, делает то же, 
// что и метод reverse: преобразовывает массив, заданный в качестве аргумента, 
// меняя порядок следования его элементов на обратный. 
// Не ис­пользуйте для этого стандартный метод reverse.

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}


function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


