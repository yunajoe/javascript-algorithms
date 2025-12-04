/**
 * @param {string} digits
 * @return {string[]}
 */

function combine(arrays) {
  let result = [];
  function dfs(depth, str) {
    if (depth === arrays.length) {
      result.push(str);
      return;
    }

    for (let i = 0; i < arrays[depth].length; i++) {
      const arr = arrays[depth];
      const value = arr[i];
      str += value;
      dfs(depth + 1, str);
      str = str.slice(0, -1);
      depth - 1;
    }
  }
  dfs(0, "");
  return result;
}

var letterCombinations = function (digits) {
  const letterObject = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  Object.freeze(letterObject);

  const totalArray = [];

  for (let num of digits) {
    const value = letterObject[num];
    const splitValues = value.split("");
    totalArray.push(splitValues);
  }
  return combine(totalArray);
};
