/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const backTracking = (result, i, n, k, answerArr) => {
  if (result.length === k) {
    answerArr.push([...result]);

    return result;
  }
  for (let j = i; j <= n; j++) {
    result.push(j);
    backTracking(result, j + 1, n, k, answerArr);
    result.pop();
  }
};

var combine = function (n, k) {
  let result = [];
  let answerArr = [];
  backTracking(result, 1, n, k, answerArr);
  return answerArr;
};
