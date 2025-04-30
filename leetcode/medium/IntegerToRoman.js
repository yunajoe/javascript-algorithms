/**
 * @param {number} num
 * @return {string}
 */

const isFourAndNight = (value) => {
  if (value === 4) {
    return "IV";
  } else if (value === 40) {
    return "XL";
  } else if (value === 400) {
    return "CD";
  } else if (value === 9) {
    return "IX";
  } else if (value === 90) {
    return "XC";
  } else if (value === 900) {
    return "CM";
  }
};

const getLowestMaxNum = (value) => {
  if (value >= 1000) {
    return 1000;
  } else if (value >= 500) {
    return 500;
  } else if (value >= 100) {
    return 100;
  } else if (value >= 50) {
    return 50;
  } else if (value >= 10) {
    return 10;
  } else if (value >= 5) {
    return 5;
  }
  return 1;
};

const getReturnSymbol = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

var intToRoman = function (num) {
  let answer = "";
  let numsArray = String(num)
    .split("")
    .map((item, index, arr) => {
      let zeroNum = arr.length - index - 1;
      let value = item * Math.pow(10, zeroNum);
      return value;
    });
  const arr = [4, 40, 400, 9, 90, 900];

  numsArray.forEach((num, index) => {
    if (arr.includes(num)) {
      answer += isFourAndNight(num);
    } else {
      while (true) {
        let divider = getLowestMaxNum(num);
        let quotient = num / divider;
        let remainder = num % divider;
        let symbol = getReturnSymbol[divider];
        if (remainder === 0) {
          answer += symbol.repeat(quotient);
          break;
        } else {
          answer += symbol.repeat(quotient);
          num = remainder;
        }
      }
    }
  });
  return answer;
};

var intToRoman = function (num) {
  let answer = "";
  const arr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (const [value, symbol] of arr) {
    let count = Math.floor(num / value);
    answer += symbol.repeat(count);
    num = num - value * count;
  }
  return answer;
};
