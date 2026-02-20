/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let totalSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    totalSum = totalSum - (i - 1);
    if (sum === totalSum) return i;
  }
  return -1;
};
