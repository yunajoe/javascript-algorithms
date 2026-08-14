const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((line) => line.trim().split(" "));

// 1. 최소 1행 아래 + 최소 1열 오른쪽으로 이동해
// 2. 시작과 도착 지점을 제외하고 도달한 위치가 정확히 2개 여야 한다.
const first = grid[0][0];
const last = grid[R - 1][C - 1];
let cnt = 0;
//  첫번째 사각형
for (let i = 1; i < R - 2; i++) {
  for (let j = 1; j < C - 2; j++) {
    const firstColor = grid[i][j];
    if (firstColor === first) continue;
    // 두번재 사각형
    for (let k = i + 1; k < R - 1; k++) {
      for (let l = j + 1; l < C - 1; l++) {
        const secondColor = grid[k][l];
        if (firstColor === secondColor || secondColor === last) continue;
        cnt++;
      }
    }
  }
}

console.log(cnt);
