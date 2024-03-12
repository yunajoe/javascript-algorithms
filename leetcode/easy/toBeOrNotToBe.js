/**
 *
 * @param {string} val
 * @return {Object}
 *
 */

const expect = function (val) {
  const throwError = (errorStatement) => {
    throw new Error(errorStatement);
  };

  return {
    toBe: function (num) {
      return val === num || throwError("Not Equal");
    },
    notToBe: function (num) {
      return val !== num || throwError("Equal");
    },
  };
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
