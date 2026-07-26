const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [m1, d1, m2, d2] = input[0].split(" ").map(Number);

const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getDaysFromJan1 = (month, day) => {
  let totalDays = day;
  for (let i = 1; i < month; i++) {
    totalDays += monthDays[i];
  }
  return totalDays;
};

const diffDays = getDaysFromJan1(m2, d2) - getDaysFromJan1(m1, d1);

const resultDay = days.at(diffDays % 7);
console.log(resultDay);
