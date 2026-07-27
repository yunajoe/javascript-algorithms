const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const A = input[1];

const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getElapsedDays = (m, d) => {
  let daysCount = d;
  for (let i = 1; i < m; i++) {
    daysCount += monthDays[i];
  }
  return daysCount;
};

const diff = getElapsedDays(m2, d2) - getElapsedDays(m1, d1);
const targetDayIndex = days.indexOf(A);

let count = 0;
for (let i = 0; i <= diff; i++) {
  if (i % 7 === targetDayIndex) {
    count++;
  }
}
console.log(count);
