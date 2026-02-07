/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    const value = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (value > nums[j]) {
        cnt++;
      }
    }
    answer.push(cnt);
    cnt = 0;
  }
  return answer;
};
