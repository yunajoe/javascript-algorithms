const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

let minValue = Math.min(n, m);
let maxValue = Math.max(n, m);

while (maxValue % minValue) {
  let residual = maxValue % minValue;
  maxValue = minValue;
  minValue = residual;
}

console.log((n * m) / minValue);
