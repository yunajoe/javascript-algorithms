const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const segments = input
  .slice(1, k + 1)
  .map((line) => line.split(" ").map(Number));
// n길이의 array를 만들고, 초기값은 0으로 한다.
// Please write your code here.

const arr = new Array(n).fill(0);
for (const segment of segments) {
  const [start, end] = segment;
  for (let i = start - 1; i <= end - 1; i++) {
    arr[i] += 1;
  }
}
const maxValue = Math.max(...arr);
console.log(maxValue);
