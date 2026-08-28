const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const moves = input.slice(1);

let x = 0;
let y = 0;
let time = 0;
let found = false;

const directObject = { N: 0, E: 1, S: 2, W: 3 };
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (const move of moves) {
  const [dir, count] = move.split(" ");
  const steps = Number(count);
  const idx = directObject[dir];

  for (let t = 0; t < steps; t++) {
    x += dx[idx];
    y += dy[idx];
    time++;

    if (x === 0 && y === 0) {
      found = true;
      break;
    }
  }

  if (found) break;
}

console.log(found ? time : -1);
