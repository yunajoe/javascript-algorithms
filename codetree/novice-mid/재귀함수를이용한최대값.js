const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
function recursive(num) {
  if (num === 0) return arr[num];
  return Math.max(arr[num], recursive(num - 1));
}

console.log(recursive(n - 1));
