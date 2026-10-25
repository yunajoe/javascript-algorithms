const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);

// Please write your code here.

const factorial = (value) => {
  if (value === 0 || value === 1) return 1;
  return factorial(value - 1) * value;
};

console.log(factorial(N));
