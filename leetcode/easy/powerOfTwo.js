/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  const absN = n;
  if (absN === 1) return true;
  let res = absN % 2;
  if (res !== 0) {
    return false;
  }

  let quotient = absN / 2;
  if (quotient === 1) return true;

  return isPowerOfTwo(quotient);
};
