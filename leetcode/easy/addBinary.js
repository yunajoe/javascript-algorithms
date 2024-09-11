/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// sol1
const convertDecimalToBinary = (sum) => {
  const arr = [];
  let copySum = sum;
  let remainder = copySum % 2;
  arr.push(remainder);
  let quotient = Math.floor(copySum / 2);

  while (quotient !== 1) {
    remainder = quotient % 2;
    arr.push(remainder);
    quotient = Math.floor(quotient / 2);
  }
  arr.push(1);
  return arr;
};

// 2진법을 십진법으로
const convertBinaryToDecimal = (binary) => {
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    let NumBinary = Number(binary[i]);
    let exponent = binary.length - i - 1; // 1, 0
    let num = NumBinary * 2 ** exponent;
    sum += num;
  }
  return sum;
};
var addBinary = function (a, b) {
  const num1 = convertBinaryToDecimal(a);
  const num2 = convertBinaryToDecimal(b);
  return convertDecimalToBinary(num1 + num2)
    .reverse()
    .join("");
};
