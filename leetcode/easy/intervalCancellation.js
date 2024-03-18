/**
 *@param {Function} fn
 *@param {Array} args
 *@param {number} t
 *@return {Function}
 */

const cancellable = function (fn, args, t) {
  fn(...args);
  const intervalID = setInterval(() => {
    fn(...args);
  }, t);

  return () => clearInterval(intervalID);
};
