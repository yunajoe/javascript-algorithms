const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let MaxNum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 2; j < arr.length; j++) {
    MaxNum = Math.max(MaxNum, arr[i] + arr[j]);
  }
}
console.log(MaxNum);
