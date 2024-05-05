/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// time exceed
var maxOperations = function (nums, k) {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (typeof nums[i] === "boolean" || typeof nums[j] === "boolean") {
        continue;
      }
      if (nums[i] + nums[j] === k) {
        nums[i] = true;
        nums[j] = true;
        cnt++;
        break;
      }
    }
  }
  return cnt;
};

// time exceed2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 가능한 각 값 x에 대해, 그것은 k - x와 짝지어질 수 있습니다.

// 그런 짝의 수는 count(x)와 count(k-x) 중 최소값과 같습니다. 다만, x = k / 2인 경우에는 그러한 짝의 수가 floor(count(x) / 2)가 됩니다.

// For each possible value x, it can be paired up with k - x.
//
// The number of such pairs equals to min(count(x), count(k-x)), unless that x = k / 2, where the number of such pairs will be floor(count(x) / 2).
var maxOperations = function (nums, k) {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) {
      nums[i] = false;
    }
  }

  const filterdNums = nums.filter((item) => item); //
  for (let i = 0; i < filterdNums.length; i++) {
    if (typeof filterdNums[i] === "boolean") {
      continue;
    }
    for (let j = i + 1; j < filterdNums.length; j++) {
      let pairNum = k - filterdNums[i];
      if (typeof filterdNums[j] !== "boolean" && pairNum === filterdNums[j]) {
        filterdNums[j] = true;
        cnt++;
        break;
      }
    }
  }
  return cnt;
};

//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) {
      nums[i] = false;
    }
  }

  // [1,true,3,3,trye] n = 7
  const filterdNums = nums.filter((item) => item).sort((a, b) => a - b);
  for (let i = 0; i < filterdNums.length; i++) {
    if (typeof filterdNums[i] === "boolean") {
      break;
    }

    // [true, 2,3, true]
    for (let j = filterdNums.length - 1; j >= i + 1; j--) {
      let pairNum = k - filterdNums[i];
      if (typeof filterdNums[j] === "boolean") {
        continue;
      }
      if (
        typeof filterdNums[j] !== "boolean" &&
        filterdNums[i] + filterdNums[j] < k
      ) {
        break;
      }
      if (typeof filterdNums[j] !== "boolean" && pairNum === filterdNums[j]) {
        filterdNums[j] = true;
        filterdNums[i] = true;
        cnt++;
        break;
      }
    }
  }
  return cnt;
};

// accepted

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let startIdx = 0;
  let cnt = 0;
  let endIdx = nums.length - 1;
  while (startIdx < endIdx) {
    if (nums[startIdx] + nums[endIdx] === k) {
      cnt++;
      startIdx++;
      endIdx--;
      continue;
    }
    if (nums[startIdx] + nums[endIdx] < k) {
      startIdx++;
      continue;
    }
    if (nums[startIdx] + nums[endIdx] > k) {
      endIdx--;
      continue;
    }
  }
  return cnt;
};
