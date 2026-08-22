const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const moves = input.slice(1);
const directionMap = { N: 0, E: 1, S: 2, W: 3 };
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let x = 0;
let y = 0;

for (const move of moves) {
  const [direct, countStr] = move.split(" ");
  const count = Number(countStr);
  const idx = directionMap[direct];
  x += dy[idx] * count;
  y += dy[idx] * count;
}
console.log(`${x} ${y}`);
