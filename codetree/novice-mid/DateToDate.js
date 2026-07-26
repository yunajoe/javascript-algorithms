const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [m1, d1, m2, d2] = input[0].split(" ").map(Number);

const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const elapsedTime = (month, day) => {
  let elapsedDays = 0;
  for (let i = 1; i < month; i++) {
    elapsedDays += monthDays[i];
  }
  return elapsedDays + day;
};
const result1 = elapsedTime(m1, d1);
const result2 = elapsedTime(m2, d2);
console.log(result2 - result1 + 1);
