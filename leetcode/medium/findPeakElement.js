/**
 * @param {number[]} nums
 * @return {number}
 */

const checkAllvaluesAreNegative = (value) => value < 0;
//   find the index of the heightest number
var findPeakElement = function (nums) {
  //   const copyNums = [...nums].sort();
  //   const copyNegativeNums = [...nums].sort((a, b) => a - b);
  //   const isAllNegative = copyNums.every(checkAllvaluesAreNegative);
  // const maxNum =  isAllNegative ? copyNegativeNums[copyNegativeNums.length-1] : copyNums[copyNums.length-1]
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
