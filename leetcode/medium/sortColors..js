/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let currentIndex = 0;
  let cnt = 0;
  while (currentIndex <= endIndex) {
    if (nums[currentIndex] === 0) {
      let temp = nums[startIndex];
      nums[startIndex] = nums[currentIndex];
      nums[currentIndex] = temp;
      startIndex++;
      currentIndex++;
    } else if (nums[currentIndex] === 1) {
      currentIndex++;
    } else if (nums[currentIndex] === 2) {
      let temp = nums[endIndex];
      nums[endIndex] = nums[currentIndex];
      nums[currentIndex] = temp;
      endIndex--;
    }
  }
};
