/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxLength = 0;
  let count = 0;
  for (const num of nums) {
    if (num === 1) {
      count++;
      maxLength = Math.max(count, maxLength);
    } else {
      count = 0;
    }
  }
  return maxLength;
};
