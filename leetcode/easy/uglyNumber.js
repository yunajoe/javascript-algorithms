/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  for (const value of [2, 3, 5]) {
    while (n % value === 0) {
      n = n / value;
    }
  }
  return n === 1;
};
