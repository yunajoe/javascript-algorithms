/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s
    .trim()
    .split(" ")
    .filter((item) => item);
  return arr.reverse().join(" ");
};
