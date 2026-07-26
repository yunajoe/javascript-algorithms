const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

const START_DAY = 11;
const START_HOUR = 11;
const START_MINUTE = 11;

function getTimeLapsed(day, hour, minute) {
  const startTotalMinutes = START_HOUR * 60 + START_MINUTE;
  const currentTotalMinutes = (day - START_DAY) * 24 * 60 + hour * 60 + minute;

  if (currentTotalMinutes < startTotalMinutes) {
    return -1;
  }

  return currentTotalMinutes - startTotalMinutes;
}

console.log(getTimeLapsed(A, B, C));
