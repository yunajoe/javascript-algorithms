const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const totalSum = arr.reduce((acc, value) => acc + value, 0);

let minDiff = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const remainingSum = totalSum - arr[i] - arr[j];
    const diff = Math.abs(remainingSum - s);
    if (diff <= minDiff) {
      minDiff = diff;
    }
  }
}

console.log(minDiff);
