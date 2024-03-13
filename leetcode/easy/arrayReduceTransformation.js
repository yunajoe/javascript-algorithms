/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let acc = init;
  nums.forEach((num) => {
    acc = fn(acc, num);
  });

  return acc;
};
