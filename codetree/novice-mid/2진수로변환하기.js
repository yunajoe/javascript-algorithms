const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.

if (n === 0) {
  console.log(0);
  return;
}
const squaresOfTwo = [
  1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768,
  65536,
];

// n보다 작지지만 squaresOfTwo 에서 가장 큰 수를 찾아서 뺴기!
let copyN = n;
const arr = []; //  [ 4, 3, 2, 0 ]
let answer = [];

const findMaxNum = (num) => {
  return squaresOfTwo.findLast((value) => value <= num);
};

while (copyN) {
  const value = findMaxNum(copyN);
  arr.push(squaresOfTwo.indexOf(value));
  copyN = copyN - value;
}

for (let i = 0; i < arr.length; i++) {
  answer[arr[i]] = 1;
}
const result = Array.from(answer, (item) => item ?? 0);
console.log(result.reverse().join(""));
