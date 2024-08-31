/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const makeArr = () => {
  const oneIndexArr = [];

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      oneIndexArr.push(i);
    }
  }
  const resultArr = oneIndexArr.reduce((acc, num) => {
    acc = [...acc, num - 1, num, num + 1];
    return acc;
  }, []);

  return resultArr;
};

var canPlaceFlowers = function (flowerbed, n) {
  const oneIndexArr = [];

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      oneIndexArr.push(i);
    }
  }
  const resultArr = oneIndexArr.reduce((acc, num) => {
    acc = [...acc, num - 1, num, num + 1];
    return acc;
  }, []);

  const filteredArr = Array.from(new Set(resultArr));

  const finalAnswer = [];
  flowerbed.forEach((_, idx) => {
    let targetIndx = filteredArr.indexOf(idx);
    if (targetIndx === -1) {
      finalAnswer.push(idx);
    }
  });

  const isNumSecutive = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] == 1) {
        return false;
      }
    }
    return true;
  };

  return finalAnswer.length > n
    ? true
    : finalAnswer.length === n
    ? isNumSecutive(finalAnswer)
    : false;
};

console.log(canPlaceFlowers(ex1, n));

// 아래거 false나와야한닷
// flowerbed =
// [0,0,0,0]
// n =
// 3
