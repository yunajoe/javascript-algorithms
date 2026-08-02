const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.
let cnt = 0;
let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
  if (i === 0 || (i >= 1 && arr[i] > arr[i - 1])) {
    cnt++;
  } else {
    cnt = 1;
  }
  maxLength = Math.max(maxLength, cnt);
}
console.log(maxLength);
