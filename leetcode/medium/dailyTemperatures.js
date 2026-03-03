/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = Array.from({ length: temperatures.length }).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const stackIndex = stack.pop();
      result[stackIndex] = i - stackIndex;
    }
    stack.push(i);
  }

  return result;
};
