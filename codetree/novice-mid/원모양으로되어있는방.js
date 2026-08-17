const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let minDistance = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  let totalDist = 0;
  for (let j = 0; j < n; j++) {
    const dist = (j - i + n) % n;
    totalDist += dist * arr[j];
  }
  minDistance = Math.min(minDistance, totalDist);
}

console.log(console.log(minDistance));
