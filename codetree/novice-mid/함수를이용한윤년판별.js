const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const y = Number(input[0]);
// Please Write your code here.

function isLeapYear(year) {
  if (year % 4 !== 0) return false;

  if (year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}

console.log(isLeapYear(y));
