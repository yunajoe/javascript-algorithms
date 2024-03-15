function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (args.length === 0) {
      cache[key] = callCount;
      return callCount;
    }

    if (key in cache) return cache[key];
    const result = fn.call(this, ...args);
    cache[key] = result;
    return cache[key];
  };
}

// new Map사용해보기
function memoize2(fn) {
  const mapObject = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (args.length === 0) {
      mapObject.set(key, callCount);
      return mapObject.get(key);
    }

    if (mapObject.has(key)) return mapObject.get(key);
    const result = fn.call(this, ...args);
    mapObject.set(key, result);
    return mapObject.get(key);
  };
}

let callCount = 0;
const memoizedFn = memoize2(function (a, b) {
  callCount += 1;
  return a + b;
});

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
