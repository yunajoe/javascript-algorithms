const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

const recursive = (value) => {
  if (value === 0) return 0;
  const quote = parseInt(value / 10);
  return recursive(quote) + Math.pow(value % 10, 2);
};

console.log(recursive(n));
