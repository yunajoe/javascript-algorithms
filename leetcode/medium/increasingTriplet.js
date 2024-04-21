/**
 * @param {number[]} nums
 * @return {boolean}
 */

// TimeLimit
var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

// Time Limit
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const copyNums = [...nums];
  while (copyNums.length) {
    let maxNum = Math.max(...copyNums); //  13
    let maxIndex = copyNums.indexOf(maxNum); // 3
    const slicedArr = copyNums.slice(0, maxIndex); // 10 12 5

    if (slicedArr.length > 1) {
      let rightIndex = slicedArr.length - 1;
      for (let i = 0; i < slicedArr.length; i++) {
        for (let j = i + 1; j <= rightIndex; j++) {
          if (slicedArr[i] < slicedArr[j]) {
            return true;
          }
        }
      }
    }
    copyNums.splice(maxIndex, 1);
  }

  if (copyNums.length === 0) return false;
};

// sucess

var increasingTriplet = function (nums) {
  let a = Infinity;
  (b = Infinity), (c = Infinity);
  for (let i = 0; i < nums.length; i++) {
    if (a >= nums[i]) {
      a = nums[i];
    } else if (b >= nums[i]) {
      b = nums[i];
    } else if (c > nums[i]) {
      return true;
    }
  }
  return false;
};
