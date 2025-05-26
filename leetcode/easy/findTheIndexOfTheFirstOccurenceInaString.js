/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const regex = new RegExp(needle);
  const result = haystack.match(regex);
  if (result) {
    return result.index;
  }
  return -1;
};
