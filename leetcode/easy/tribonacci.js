/**
 * @param {number} n
 * @return {number}
 */

// bottom-up 방식 (성공)
var tribonacci = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr[0] = 0;
    }
    if (i === 1) {
      arr[1] = 1;
    }
    if (i === 2) {
      arr[2] = 1;
    }
    if (i > 2) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
  }

  return arr[n];
};
