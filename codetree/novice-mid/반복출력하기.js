const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

// Please Write your code here.
function recursive(n) {
  if (n === 0) return;
  console.log("HelloWorld");
  n = n - 1;
  recursive(n);
}

recursive(n);
