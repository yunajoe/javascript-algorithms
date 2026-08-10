const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
let min_total = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  let total = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      const value = Math.abs(j - i);
      total += arr[j] * value;
    }
  }
  min_total = Math.min(min_total, total);
}
console.log(min_total);
