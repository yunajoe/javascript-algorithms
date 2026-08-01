const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
let max = -Infinity;
let cnt = 0;

// Please Write your code here.
for (let i = 0; i < arr.length; i++) {
  if (i === 0 || arr[i] === arr[i - 1]) {
    cnt++; // 1
  } else {
    cnt = 1; // 0
  }
  max = Math.max(max, cnt);
}

console.log(max);
