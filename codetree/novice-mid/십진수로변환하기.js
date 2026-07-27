const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.
const length = String(n).length;

let num = 0;
for (let i = length - 1; i >= 0; i--) {
  const value = String(n)[length - 1 - i];
  num += value * Math.pow(2, i);
}
console.log(num);
