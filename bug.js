function foo(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!b.hasOwnProperty(key) || !deepCompare(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

function deepCompare(a,b){
  if(a===b) return true
  if(typeof a !== 'object' || typeof b !== 'object') return false
  if(Object.keys(a).length !== Object.keys(b).length) return false

  for(let key in a){
    if(!b.hasOwnProperty(key) || !deepCompare(a[key],b[key])) return false
  }
  return true
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(foo(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 2 } };
const obj4 = { a: 1, b: { c: 3 } };
console.log(foo(obj3, obj4)); // false