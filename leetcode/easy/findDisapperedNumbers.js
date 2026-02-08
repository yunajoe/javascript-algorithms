/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = [];
  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, true);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.get(i)) {
      arr.push(i);
    }
  }
  return arr;
};
