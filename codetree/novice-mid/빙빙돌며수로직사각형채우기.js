const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const grid = Array.from(Array(n), () => new Array(m).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const inRange = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

let num = 1;
let x = 0;
let y = 0;
let dir = 0;

while (num <= n * m) {
  grid[x][y] = num++;

  let nextX = x + dx[dir];
  let nextY = y + dy[dir];

  if (!inRange(nextX, nextY) || grid[nextX][nextY] !== 0) {
    dir(dir + 1) % 4;
    nextX = x + dx[dir];
    nextY = y + dy[dir];
  }
  x = nextX;
  y = nextY;
}
