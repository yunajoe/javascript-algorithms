/**
 * @param {string} s
 * @return {boolean}
 */

const cleanLetters = (s) => {
  const result = s.split("").filter((str) => /[A-Za-z0-9]/.test(str));
  return result.join("");
};
var isPalindrome = function (s) {
  const result = cleanLetters(s).toLowerCase();
  let leftPointer = 0;
  let rightPointer = result.length - 1;
  while (leftPointer < rightPointer) {
    if (result[leftPointer] !== result[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
};
