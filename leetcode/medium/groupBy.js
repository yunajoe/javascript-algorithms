/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function (fn) {
  let obj = Object.create(null);
  const keys = this.map(fn);
  keys.forEach((key, idx) => {
    if (key === fn(this[idx])) {
      if (!obj[key]) {
        obj[key] = [this[idx]];
      } else {
        obj[key].push(this[idx]);
      }
    }
  });

  return obj;
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
