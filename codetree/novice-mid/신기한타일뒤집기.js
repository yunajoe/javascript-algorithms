const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const map = new Map();
let current = 0;
let blackCount = 0;
let whiteCount = 0;

for (const command of commands) {
  const [count, direction] = command.split(" ");
  const numCount = Number(count);
  if (direction === "R") {
    for (let i = current; i < current + numCount; i++) {
      map.set(i, "B");
    }
    current = current + numCount - 1;
  }
  if (direction === "L") {
    for (let i = current; i > current - numCount; i--) {
      map.set(i, "W");
    }
    current = current - numCount + 1;
  }
}

map.forEach((item) => {
  if (item === "B") {
    blackCount++;
  }
  if (item === "W") {
    whiteCount++;
  }
});

console.log(whiteCount, blackCount);
