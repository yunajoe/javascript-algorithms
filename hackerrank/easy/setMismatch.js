/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const answer = [];
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  for (const [key, value] of map.entries()) {
    if (value === 2) {
      answer.push(key);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      answer.push(i);
    }
  }
  return answer;
};
