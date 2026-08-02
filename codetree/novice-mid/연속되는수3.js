const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let maxLength = 1;
let cnt = 1;
const isNegative = (value) => {
  return value < 0;
};
for (let i = 1; i < arr.length; i++) {
  const [previousSign, currentSign] = [
    isNegative(arr[i - 1]),
    isNegative(arr[i]),
  ];
  if (previousSign !== currentSign) {
    cnt = 1;
  } else {
    cnt++;
  }
  maxLength = Math.max(maxLength, cnt);
}
console.log(maxLength);
