const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const isRange = (i, j) => {
  return 0 <= i && i < n && 0 <= j && j < n;
};
// 우, 하, 좌, 상
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = 0;
for (let i = 0; i < grid.length; i++) {
  const row = grid[i];
  for (let j = 0; j < row.length; j++) {
    let cnt = 0;
    for (let dir = 0; dir < 4; dir++) {
      const movedX = i + dx[dir];
      const movedY = j + dy[dir];
      const result = isRange(movedX, movedY);
      if (result && grid[movedX][movedY] === 1) {
        cnt++;
      }
    }
    if (cnt >= 3) {
      answer++;
    }
  }
}
console.log(answer);
