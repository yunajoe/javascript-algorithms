const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) =>
  input[i + 1].split(" ").map(Number),
);

// Please Write your code here.
let ans = Number.MAX_SAFE_INTEGER;

// 건널뛰 인덱스
for (let i = 1; i < n - 1; i++) {
  let prevIdx = 0;
  let dist = 0;
  for (let j = 1; j < n; j++) {
    if (i === j) continue;
    dist +=
      Math.abs(arr[prevIdx][0] - arr[j][0]) +
      Math.abs(arr[prevIdx][1] - arr[j][1]);
    prevIdx = j;
  }
  ans = Math.min(ans, dist);
}
console.log(ans);
