/**
 *@param {Function} fn
 *@return {Function}
 */

const once = function (fn) {
  let cnt = 0;
  return function (...args) {
    if (cnt > 0) return;
    cnt++;
    return fn(...args);
  };
};

const once2 = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
  };
};
