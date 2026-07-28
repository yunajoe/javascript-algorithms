const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const binaryInput = input[0];

// Please Write your code here.
// 2진수 => 10 진수 * 17 => 2진수
const convertDecimalNumber = (binary) => {
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    const value = binary[i];
    sum += value * Math.pow(2, binary.length - 1 - i);
  }
  return sum;
};

const convertBinaryNumber = (decimal) => {
  const remains = [];
  while (decimal) {
    remains.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return remains;
};

const result1 = convertDecimalNumber(binaryInput);
const result2 = convertBinaryNumber(result1 * 17);
console.log(result2.reverse().join(""));
