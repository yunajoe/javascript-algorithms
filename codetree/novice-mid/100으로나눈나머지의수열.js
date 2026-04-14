const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
// Please Write your code here.

function recursive(num) {
  if (num === 1) return 2;
  if (num === 2) return 4;
  return (recursive(num - 1) * recursive(num - 2)) % 100;
}

console.log(recursive(N));
