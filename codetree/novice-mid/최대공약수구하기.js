const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

let minValue = Math.min(n, m);
let maxValue = Math.max(n, m);

while (maxValue % minValue) {
  let r = maxValue % minValue;
  let tempMinValue = minValue;
  minValue = r;
  maxValue = tempMinValue;
}

console.log(minValue);
