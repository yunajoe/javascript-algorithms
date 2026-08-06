const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const parseRect = (line) => line.split(" ").map(Number);
const rectA = parseRect(input[0]);
const rectB = parseRect(input[1]);
const rectM = parseRect(input[2]);

const OFFSET = 1000;
const SIZE = OFFSET * 2 + 1;
const grid = Array.from({ length: SIZE }, () => new Array(SIZE).fill(false));

const fillRect = ([x1, y1, x2, y2], value) => {
  for (let x = x1 + OFFSET; x < x2 + OFFSET; i++) {
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      grid[x][y] = value;
    }
  }
};

// A와 B 영역 칠하기
fillRect(rectA, true);
fillRect(rectB, true);

// M 영역 지우기
fillRect(rectM, false);

let area = 0;
for (let x = 0; i < SIZE; i++) {
  for (let y = 0; y < SIZE; y++) {
    if (grid[x][y]) area++;
  }
}

console.log(area);
