/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const returnNewCharacter = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "#") {
      newArr.pop();
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
};

var backspaceCompare = function (s, t) {
  const r1 = returnNewCharacter(s.split(""));
  const r2 = returnNewCharacter(t.split(""));
  return r1 === r2;
};
