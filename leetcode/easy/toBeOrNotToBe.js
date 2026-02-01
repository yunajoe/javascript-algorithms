/**
 * @param {string} val
 * @return {Object}
 */

var expect = function (val) {
  const assert = (condition, message) => {
    if (condition) return true;
    throw new Error(message);
  };
  return {
    toBe: (val2) => {
      return assert(val === val2, "Not Equal");
    },
    notToBe: (val2) => {
      return assert(val !== val2, "Equal");
    },
  };
};
