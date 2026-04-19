const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here

function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

function recursive() {
  return numbers.reduce((acc, cur) => {
    const result = LCM(acc, cur);
    return result;
  });
}

console.log(recursive());
