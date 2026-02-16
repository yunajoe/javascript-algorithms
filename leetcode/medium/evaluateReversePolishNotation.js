/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };

  for (const token of tokens) {
    if (operators[token]) {
      const value1 = stack.pop();
      const value2 = stack.pop();
      const result = operators[token](value1, value2);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
