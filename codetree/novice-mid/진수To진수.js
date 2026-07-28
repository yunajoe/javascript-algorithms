const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const n = input[1];
// Please Write your code here
// a진수로 표현된 숫자 n이 있으면 이 n을 b 진수로 변환하자!
//

const convertDecimal = (number, n) => {
  let decimal = 0;
  const str = String(number);
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    decimal += value * Math.pow(n, str.length - 1 - i);
  }
  return decimal;
};
const convertSpecific = (number, n) => {
  const arr = [];
  while (number) {
    arr.push(number % n);
    number = Math.floor(number / n);
  }
  return arr;
};

const result1 = convertDecimal(n, a);
const result2 = convertSpecific(result1, b);
console.log(result2.reverse().join(""));
