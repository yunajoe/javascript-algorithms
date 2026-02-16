/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    output.push("Push");
    if (!target.includes(i)) {
      output.push("Pop");
    }
    if (i === target[target.length - 1]) {
      break;
    }
  }
  return output;
};
