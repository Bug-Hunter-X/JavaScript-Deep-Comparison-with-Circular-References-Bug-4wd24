function foo(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const visited = new WeakSet();
  function deepCompare(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
    if (visited.has(a) || visited.has(b)) return false;
    visited.add(a); visited.add(b);
    for (let key of keysA) {
      if (!b.hasOwnProperty(key) || !deepCompare(a[key], b[key])) return false;
    }
    return true;
  }

  return deepCompare(a,b);
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(foo(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 2 } };
const obj4 = { a: 1, b: { c: 3 } };
console.log(foo(obj3, obj4)); // false

const obj5 = {};
obj5.cycle = obj5;
const obj6 = {};
obj6.cycle = obj6;
console.log(foo(obj5, obj6)); // true