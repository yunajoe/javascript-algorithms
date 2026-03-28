const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

// Please Write your code here.

let num = 1;
function recursive(num) {
  if (num > n) return;
  console.log("*".repeat(num));
  num++;
  recursive(num);
}

recursive(num);
