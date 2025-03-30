/**
 * @param {number} n
 * @return {boolean}
 */
const sumOfSquredDigits = (number) => {
  let totalSum = 0;
  while (number > 0) {
    let digit = number % 10;
    totalSum += digit ** 2;
    number = Math.floor(number / 10);
  }
  return totalSum;
};

var isHappy = function (n) {
  let slowPointer = n;
  let fastPointer = sumOfSquredDigits(n);
  while (fastPointer !== 1 && slowPointer !== fastPointer) {
    slowPointer = sumOfSquredDigits(slowPointer);
    fastPointer = sumOfSquredDigits(sumOfSquredDigits(fastPointer));
    if (fastPointer == 1) {
      return true;
    }
  }
  return false;
};
