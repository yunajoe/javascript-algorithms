/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let copyInit = init;

  return {
    increment: () => {
      copyInit++;
      return copyInit;
    },
    decrement: () => {
      copyInit--;
      return copyInit;
    },
    reset: () => {
      copyInit = init;
      return copyInit;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
