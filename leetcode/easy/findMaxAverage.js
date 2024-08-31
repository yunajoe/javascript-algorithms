/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let leftIndex = 0;
  let rightIndex = k - 1; // 1
  let copyArr = [...nums];
  let sum = 0;
  const compareValueArr = [];

  for (let i = leftIndex; i <= rightIndex; i++) {
    sum += copyArr[i];
  }
  compareValueArr.push(sum);
  while (rightIndex < nums.length - 1) {
    rightIndex++;
    let restValue = -copyArr[leftIndex] + copyArr[rightIndex];
    sum += restValue;
    compareValueArr.push(sum);
    leftIndex++;
  }
  let maxSum = Math.max(...compareValueArr);
  let dividedNum = maxSum / k;
  return dividedNum;
};

// sol2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
