/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise(
//       function (resolve) {
//         resolve(fn(...args));
//       },
//       function (reject) {
//         setTimeout(() => {
//           reject("Time Limit Exceeded");
//         }, t);
//       }
//     );
//   };
// };

var timeLimit3 = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args).then(resolve, reject);
    });
  };
};

// const fn = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//   return n * n;
// };

// const inputs = [5];
// const t = 50;
// const result1 = timeLimit(fn, t);

// result1(...inputs).then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );
