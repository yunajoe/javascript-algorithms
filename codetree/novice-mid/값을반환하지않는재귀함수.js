const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

// Please Write your code here.
function recursive(num) {
  if (num === 0) return;
  process.stdout.write(String(num) + " ");
  recursive(num - 1);
  process.stdout.write(String(num) + " ");
}

recursive(n);
