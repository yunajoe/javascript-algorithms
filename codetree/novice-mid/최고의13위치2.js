const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

const getSum = (r, c) => grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

const isOverLap = (r1, c1, r2, c2) => r1 === r2 && Math.abs(c1 - c2) < 3;

let maxSum = Number.MIN_SAFE_INTEGER;

for (let r1 = 0; r1 < n; r1++) {
  for (let c1 = 0; c1 < n - 2; c1++) {
    for (let r2 = 0; r2 < n; r2++) {
      for (let c2 = 0; c2 < n - 2; c2++) {
        if (isOverLap(r1, c1, r2, c2)) continue;
        const currentSum = getSum(r1, c1) + getSum(r2, c2);
        maxSum = Math.max(maxSum, currentSum);
      }
    }
  }
}

console.log(maxSum);
