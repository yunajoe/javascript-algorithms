const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.

const recursive = (value) => {
  if (value === 1) return 1;
  else if (value === 2) return 1;

  return recursive(value - 1) + recursive(value - 2);
};

console.log(recursive(n));
