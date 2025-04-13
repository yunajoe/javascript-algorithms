/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sortedArr = (nums) => {
  return nums.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
};

// 무조건  one Solution은 갖는다
var threeSumClosest = function (nums, target) {
  const sortArr = sortedArr(nums);
  let diff;
  let answer;

  for (let i = 0; i < sortArr.length - 2; i++) {
    let lowIdx = i + 1;
    let highIdx = sortArr.length - 1;
    while (lowIdx < highIdx) {
      let sum = sortArr[i] + sortArr[lowIdx] + sortArr[highIdx];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        let value = Math.abs(target - sum);
        if (!diff) {
          diff = value;
          answer = sum;
        } else {
          if (value <= diff) {
            diff = value;
            answer = sum;
          }
        }

        highIdx--;
        while (lowIdx < highIdx && sortArr[highIdx] === sortArr[highIdx + 1]) {
          highIdx--;
        }
      } else if (sum < target) {
        let value = Math.abs(target - sum);
        if (!diff) {
          diff = value;
          answer = sum;
        } else {
          if (value <= diff) {
            diff = value;
            answer = sum;
          }
        }
        lowIdx++;
        while (lowIdx < highIdx && sortArr[lowIdx] === sortArr[lowIdx - 1]) {
          lowIdx++;
        }
      }
    }
  }

  return answer;
};
