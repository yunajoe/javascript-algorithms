/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  let obj = {};

  arr.map(fn).forEach((key, idx) => {
    obj[key] = idx;
  });

  const data = Object.entries(obj);
  const sortedData = [...data].sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  return sortedData.map((data) => {
    return arr.at(data[1]);
  });
};
