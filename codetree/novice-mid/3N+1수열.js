const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

// Please Write your code here.

function recursive(n) {
  if (n === 1) return 0;

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = n * 3 + 1;
  }

  return recursive(n) + 1;
}

console.log(recursive(n));
