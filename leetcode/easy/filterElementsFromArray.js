/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    if (result) {
      answer.push(arr[i]);
    }
  }
  return answer;
};
