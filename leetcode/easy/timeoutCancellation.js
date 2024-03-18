/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 *
 */

const cancellable = function (fn, args, t) {
  let timeOutId = undefined;
  timeOutId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => clearTimeout(timeOutId);
};
