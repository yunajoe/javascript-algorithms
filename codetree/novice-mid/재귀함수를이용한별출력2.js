const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
// Please Write your code here.

const recursive = (value) => {
  if (value < 1) {
    return;
  }
  console.log("* ".repeat(value).trimEnd());
  recursive(value - 1);
  console.log("* ".repeat(value).trimEnd());
};

recursive(n);
