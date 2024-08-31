/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [4,2,4,0,0,3,0,5,1,0]  => [4,2,4,3,5,1,0,0,0,0]
//  [0,1,0,3,12] =>  [1,3,12,0,0]
//  [4,2,4,0,0,3,0,5,1] => [4,2,4,3,5,1,0,0,0]

var moveZeroes = function (nums) {
  const callback = (num) => num !== 0;

  const isNonZeroArr = nums.some(callback);
  if (!isNonZeroArr) return nums;

  const firstNonZeroIndex = nums.findIndex((num) => num !== 0);
  const lastNonZeroIndex = nums.findLastIndex((num) => num !== 0);

  const copyNums = [...nums].slice(firstNonZeroIndex, lastNonZeroIndex + 1);
  for (let i = 0; i < copyNums.length; i++) {
    if (copyNums[i] === 0) {
      copyNums[i] = "";
    }
  }

  const filteredArr = copyNums.filter((num) => num);

  while (filteredArr.length < nums.length) {
    filteredArr.push(0);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = filteredArr[i];
  }
  return nums;
};

// sol2)
var moveZeroes = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[idx] === 0) {
      nums.splice(idx, 1);
      nums.push(0);
    } else {
      idx++;
    }
  }
};

// sol3)
var moveZeroes = function (nums) {
  let leftIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
      leftIndex++;
    }
  }
  return nums;
};
