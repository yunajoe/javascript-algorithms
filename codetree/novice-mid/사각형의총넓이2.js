const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// Please Write your code here.
// 사각형은  최대 10개 까지
// x,y 좌표의 범위는 -100 부터 100까지. 따라서 음수 배열을 적용하려면 offset을 활용하기!
// 최소 인덱스 => -100 + 100 => 0;
// 최대 인덱스 => 100 + 100 => 200;
// 최소 인덱스 0 ~ 최대 인덱스 200 => 201개 필요
const offset = 101;
const grid = Array.from(Array(offset * 2), () =>
  new Array(offset * 2).fill(false),
);
let count = 0;
for (const rect of rects) {
  const [x1, y1, x2, y2] = rect;
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      let xOffset = i + offset;
      let yOffset = j + offset;
      grid[xOffset][yOffset] = true;
    }
  }
}

grid.forEach((arr) => {
  arr.forEach((cnt) => {
    if (cnt) {
      count++;
    }
  });
});
console.log(count);
