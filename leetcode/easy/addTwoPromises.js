/**
 * @param {Promises} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

const addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    return values.reduce((acc, curr) => acc + curr, 0);
  });
};
