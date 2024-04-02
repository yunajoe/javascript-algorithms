/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time Limit Exceeded
var productExceptSelf = function (nums) {
  return [...nums].map((num, idx, arr) => {
    return arr.reduce((acc, num2, idx2) => {
      if (idx === idx2) {
        return acc;
      }
      return (acc *= num2);
    }, 1);
  });
};

// Time Limit Exceeded
var productExceptSelf = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const numsCopy = [...nums];
    numsCopy.splice(i, 1);
    let sum = 1;
    for (const ele of numsCopy) {
      sum *= ele;
    }
    answer.push(sum);
  }
  return answer;
};

//
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  const answerArr = Array.from({ length: nums.length }).fill(0);
  const prefixArr = Array.from({ length: nums.length }).fill(1);
  const suffixArr = Array.from({ length: nums.length }).fill(1);

  for (let i = 1; i < prefixArr.length; i++) {
    prefixArr[i] = nums[i - 1] * prefixArr[i - 1];
  }
  for (let i = suffixArr.length - 2; i >= 0; i--) {
    suffixArr[i] = nums[i + 1] * suffixArr[i + 1];
  }
  for (let i = 0; i < answerArr.length; i++) {
    answerArr[i] = prefixArr[i] * suffixArr[i];
  }
  return answerArr;
};
