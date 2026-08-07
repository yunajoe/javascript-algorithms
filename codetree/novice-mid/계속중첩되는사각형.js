const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  rectangles.push([x1, y1, x2, y2]);
}

// Please Write your code here.
const OFFSET = 100;
const SIZE = OFFSET * 2 + 1;

const grid = Array.from({ length: SIZE }, () => new Uint8Array(SIZE));

rectangles.forEach(([x1, y1, x2, y2], idx) => {
  const color = idx % 2 === 0 ? 1 : 2;

  for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      grid[x][y] = color;
    }
  }
});

let blueCnt = 0;
for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    if (grid[x][y] === 2) blueCnt++;
  }
}

console.log(blueCnt);
