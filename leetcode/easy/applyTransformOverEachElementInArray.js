/**
 *@param{number[]} arr
 *@param{Function} fn
 *@return{number[]}
 */

const map = function (arr, fn) {
  let result = [];
  arr.forEach((num, idx) => {
    let value = fn(num, idx);
    result.push(value);
  });
  return result;
};

const map2 = function (arr, fn) {
  const arrCopy = [...arr];
  arrCopy.forEach((num, idx) => {
    arrCopy[idx] = fn(num, idx);
  });
  return arrCopy;
};
