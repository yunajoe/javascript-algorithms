const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let cnt = 0;
let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > t) {
    cnt++; // 1,2, 3
  } else {
    cnt = 0; // 0
  }
  maxLength = Math.max(maxLength, cnt);
}

console.log(maxLength);
