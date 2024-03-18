/**
 * A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.
 *
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// 새로운게 호출이 될때마다 이전의 schedule되었던 함수가 취소가 된다
// 궁금한게 새로운게 호출이 되기 전에, 아래에서는 Hello2가 호출이 되기전에
// Hello scheudle되었떤게 먼저 일어날수는 없는건가??
// setTimeout(()=>.., 시간) 에서 시간을 0을 주더라두 Hello는 실행이 안된다.
//
const debounce = function (fn, t) {
  let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
