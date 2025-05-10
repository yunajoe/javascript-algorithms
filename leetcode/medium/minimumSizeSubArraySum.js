/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let startIndex = 0;
  let sum = 0;
  let windowSize = Infinity;
  for (let endIndex = 0; endIndex < nums.length; endIndex++) {
    sum = sum + nums[endIndex];
    while (sum >= target) {
      let currentWindowSize = endIndex - startIndex + 1;
      windowSize = Math.min(currentWindowSize, windowSize);
      sum = sum - nums[startIndex];
      startIndex++;
    }
  }
  if (windowSize === Infinity) {
    return 0;
  }
  return windowSize;
};
