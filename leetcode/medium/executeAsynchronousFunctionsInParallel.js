/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise(function (resolve, reject) {
    let resultArr = [];
    let totalLength = functions.length;

    functions.forEach((func, idx) => {
      func().then(
        (result) => {
          resultArr[idx] = result;
          totalLength -= 1;

          if (totalLength === 0) {
            resolve(resultArr);
          }
        },
        (error) => reject(error)
      );
    });
  });
};

// const functions3 = [
//   () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
//   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
// ];

// const promise3 = promiseAll(functions3);

// // 4, 10, 16이 나와야함
// promise3.then(console.log);
