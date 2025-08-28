/**
 * @param {string} s
 * @return {boolean}
 */
const pair = {
  ")": "(",
  "]": "[",
  "}": "{",
};

var isValid = function (s) {
  let answer;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const openValueArray = Object.values(pair);
    if (openValueArray.includes(value)) {
      result.push(s[i]);
    } else {
      const lastValue = result[result.length - 1];
      if (pair[value] === lastValue) {
        result.pop();
      } else {
        return false;
      }
    }
  }

  return result.length === 0 ? true : false;
};
