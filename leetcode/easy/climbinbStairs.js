// TOP-DOWN 방식 (재귀 + memoization)

/**
 * @param {number} n
 * @return {number}
 */

const memo = {};
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n]) return memo[n];
  const result = climbStairs(n - 2) + climbStairs(n - 1);
  memo[n] = result;

  return memo[n];
};
