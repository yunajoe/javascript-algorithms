/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = [];
  const copyPrices = [...prices];
  for (let i = 0; i < copyPrices.length; i++) {
    while (
      stack.length &&
      copyPrices[stack[stack.length - 1]] >= copyPrices[i]
    ) {
      const currentIndex = stack.pop();
      copyPrices[currentIndex] -= copyPrices[i];
    }
    stack.push(i);
  }
  return copyPrices;
};
