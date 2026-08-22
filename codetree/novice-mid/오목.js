const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input.slice(0, 19).map((row) => row.split(" ").map(Number));

const inRange = (x, y) => {
  return 0 <= x && x < 19 && 0 <= y && y < 19;
};
const dx = [1, 1, 1, 0, -1, -1, -1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (arr[i][j] === 0) continue;

    for (let dir = 0; dir < dx.length; dir++) {
      let curT = 1;
      let curX = i;
      let curY = j;

      while (true) {
        const nx = curX + dx[dir];
        const ny = curY + dy[dir];
        if (!inRange) {
          break;
        }
        if (arr[nx][ny] !== arr[i][j]) {
          break;
        }
        curT += 1;
        curX = nx;
        curY = ny;
      }
      if (curT === 5) {
        console.log(arr[i][j]);
        console.log(i + 2 * dx[dir] + 1, j + 2 * dy[dir] + 1);
        process.exit();
      }
    }
  }
}
