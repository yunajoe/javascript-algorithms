/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const compareTwoArray = (target, arr) => {
  for (i = 0; i < target.length; i++) {
    if (target[i] !== arr[i]) return false;
  }
  return true;
};

var buildArray = function (target, n) {
  const arr = [];
  const output = [];
  for (let i = 0; i < n; i++) {
    const value = i + 1;
    arr.push(value);
    output.push("Push");
    if (!target.includes(value)) {
      arr.pop();
      output.push("Pop");
    }
    if (target.length === arr.length) {
      const result = compareTwoArray(target, arr);
      if (result) return output;
    }
  }

  return output;
};
