const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const commands = input[0];
// Please Write your code here.

let time = 0;
let x = 0;
let y = 0;
let currentDir = 3;
let isReturn = false;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

for (const command of commands) {
  time++;
  if (command === "F") {
    x += dx[currentDir];
    y += dy[currentDir];
  } else if (command === "R") {
    currentDir = (currentDir + 1) % 4;
  } else if (command === "L") {
    currentDir = (currentDir + 3) % 4;
  }

  if (x === 0 && y === 0) {
    isReturn = true;
    break;
  }
}
console.log(!isReturn ? -1 : time);
