const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let shortest_distance = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i === j) continue;
    if (i > j) {
      const value = (j + (n - 1 - i + 1)) * arr[j];
      sum += value;
    }
    if (i < j) {
      const value = (j - i) * arr[j];
      sum += value;
    }
  }
  shortest_distance = Math.min(sum, shortest_distance);
}

console.log(shortest_distance);
