/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

/**
 *
 *
 */
var flat = function (arr, n) {
  if (n === 0) return arr.slice();

  let result = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      let flatArr = flat(ele, n - 1);
      result.push(...flatArr);
    } else {
      result.push(ele);
    }
  });
  return result;
};
