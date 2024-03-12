/**
 *
 * @param {number}n
 * @returns {Function}
 */

const createCounter = function (n) {
  let isFirstTime = false;
  let num = n;
  return function () {
    if (!isFirstTime) {
      isFirstTime = true;
      return num;
    }
    num = num + 1;
    return num;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
