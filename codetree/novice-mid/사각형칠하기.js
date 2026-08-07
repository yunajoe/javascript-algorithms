const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
// 사각형 종이의 크기 = (8,8)
const offset = 100;
const SIZE = offset * 2;
// x는 0~ 192, y 0~192
const grid = Array.from(Array(SIZE), () => new Array(SIZE).fill(false));

const points = rects.map((rect) => {
  const [x1, y1] = rect;
  return [x1, y1, x1 + 8, y1 + 8]; // [x1, y1, x2, y2]
});

const fillRect = ([x1, y1, x2, y2]) => {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      const xOffset = i + offset;
      const yOffset = j + offset;
      if (!grid[xOffset][yOffset]) {
        grid[xOffset][yOffset] = true;
      }
    }
  }
};

for (let i = 0; i < points.length; i++) {
  const point = points[i];
  fillRect(point);
}

let cnt = 0;
for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    if (grid[i][j]) cnt++;
  }
}

console.log(cnt);
