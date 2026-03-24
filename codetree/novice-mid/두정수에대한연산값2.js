const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function calculate(a, b) {
  if (a > b) {
    a = a * 2;
    b = b + 10;
  } else {
    b = b * 2;
    a = a + 10;
  }

  return [a, b];
}

const result = calculate(a, b);
console.log(result.join(" "));
