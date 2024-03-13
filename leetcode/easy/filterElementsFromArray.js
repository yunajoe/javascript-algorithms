/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = function (arr, fn) {
  const arrCopy = [...arr];
  const removedIdx = [];
  const result = [];
  for (let i = 0; i < arrCopy.length; i++) {
    let result = fn(arrCopy[i], i);
    if (!result) {
      removedIdx.push(i);
    }
  }

  for (let i = 0; i < arrCopy.length; i++) {
    if (!removedIdx.includes(i)) {
      result.push(arrCopy[i]);
    }
  }
  return result;
};
