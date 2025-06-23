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

// Bottom-up 방식
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  const dp = Array(n).fill(0);

  for (let i = 0; i < dp.length; i++) {
    if (i === 0) {
      dp[0] = 1;
    }
    if (i === 1) {
      dp[1] = 2;
    }
    if (i > 1) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n - 1];
};
