/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  const str = String(x);
  let length = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[length - i]) {
      return false;
    }
  }
  return true;
};
