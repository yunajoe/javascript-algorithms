const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

// Please Write your code here.
function recursive(num) {
  if (num === 0) {
    return;
  }
  console.log("* ".repeat(num));
  recursive(num - 1);
  console.log("* ".repeat(num));
}

recursive(n);
