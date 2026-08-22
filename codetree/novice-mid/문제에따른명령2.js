const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const commands = input[0];

let x = 0;
let y = 0;
let currDir = 0;

// 북, 동, 남, 서 순서로 dx, dy 정의
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

for (const cmd of commands) {
  if (cmd === "L") {
    currDir = (currDir - 1 + 4) % 3;
  } else if (cmd === "R") {
    currDir = (currDir + 1) % 4;
  } else {
    x += dx[currDir];
    y += dy[currDir];
  }
}

console.log(`${x} ${y}`);
