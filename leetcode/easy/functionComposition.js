/**
 *  @param {Function[]} functions
 *  @return {Function}
 */

const compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    const functionCopy = [...functions].reverse();
    let value = x;
    return functionCopy.reduce((acc, fun) => {
      acc = fun(value);
      value = acc;
      return acc;
    }, 0);
  };
};

const compose2 = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let value = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      value = functions[i](value);
    }
    return value;
  };
};
