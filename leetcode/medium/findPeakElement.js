/**
 * @param {number[]} nums
 * @return {number}
 */

const checkAllvaluesAreNegative = (value) => value < 0;
var findPeakElement = function (nums) {
  const maxNum = Math.max(...nums);
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (nums[leftIndex] === maxNum) {
      return leftIndex;
    }
    if (nums[rightIndex] === maxNum) {
      return rightIndex;
    }
    if (nums[leftIndex] !== maxNum) {
      leftIndex++;
    }
    if (nums[rightIndex] !== maxNum) {
      rightIndex--;
    }
  }
};
