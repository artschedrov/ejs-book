function deepEqual(foo, bar) {
  const isObj = typeof foo === 'object' && typeof bar === 'object';
  const isNotNull = foo !== null && bar !== null;
  if(isObj && isNotNull) {
    for(let key in foo) {
      if(!bar.hasOwnProperty(key)) {
        return false
      }
      if(typeof foo[key] === 'object' && typeof bar[key] === 'object') {
        const result = deepEqual(foo[key], bar[key]);
        if(!result) {
          return false;
        } else {
          if(foo[key] !== bar[key]) {
            return false
          }
        }
      }
    }
    return false;
  } else {
    return foo === bar;
  }
} 

console.log(deepEqual({1: {2: 3}, object: 5}, {key: {'abc': null}}));