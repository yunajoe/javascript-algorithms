const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
// Please Write your code here.

function recursive(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;

  return recursive(parseInt(num / 3)) + recursive(num - 1);
}

console.log(recursive(n));
