const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

function recursive(n) {
  if (n === 1) return 1;
  return n + recursive(n - 1);
}

console.log(recursive(n));
