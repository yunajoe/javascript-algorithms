const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.
const recursive = (value) => {
  if (value === 1) return 0;

  if (value % 2 === 0) {
    value = parseInt(value / 2);
  } else {
    value = parseInt(value / 3);
  }
  return recursive(value) + 1;
};

console.log(recursive(n));
