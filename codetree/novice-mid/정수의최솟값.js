const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b, c] = input[0].split(" ").map(Number);

function minValue(a, b, c) {
  return Math.min(a, b, c);
}

console.log(minValue(a, b, c));
