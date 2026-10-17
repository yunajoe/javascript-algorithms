const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

// Please Write your code here.

const recursive = (value) => {
  if (value === 0) {
    return;
  }
  process.stdout.write(value + " ");
  recursive(value - 1);
  process.stdout.write(value + " ");
};

recursive(n);
