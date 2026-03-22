const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
function isLeapYear(y) {
  if (y % 4 !== 0) return false;

  if (y % 100 !== 0) return true;

  if (y % 400 === 0) return true;

  return false;
}

function isExistDay(y, m, d) {
  const numOfDays = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  numOfDays[2] = isLeapYear(y) ? 29 : 28;

  return d <= numOfDays[m];
}

if (!isExistDay(year, month, day)) {
  console.log("-1");
  return;
}

if (3 <= month && month <= 5) {
  console.log("Spring");
} else if (6 <= month && month <= 8) {
  console.log("Summer");
} else if (9 <= month && month <= 11) {
  console.log("Fall");
} else {
  console.log("Winter");
}
