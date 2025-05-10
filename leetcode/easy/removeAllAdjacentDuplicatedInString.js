/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stackArray = [];
  for (let i = 0; i <= s.length; i++) {
    if (stackArray.length === 0) {
      stackArray.push(s[i]);
    } else {
      // 비교할게 있다는 뜼
      if (stackArray[stackArray.length - 1] === s[i]) {
        stackArray.pop();
      } else {
        stackArray.push(s[i]);
      }
    }
  }

  return stackArray.join("");
};

// sol2)

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stackArray = [];
  let answer = "";

  for (const string of s) {
    if (stackArray.length > 0 && stackArray[stackArray.length - 1] === string) {
      stackArray.pop();
    } else {
      stackArray.push(string);
    }
  }
  while (stackArray.length > 0) {
    answer += stackArray.shift();
  }

  return answer;
};
