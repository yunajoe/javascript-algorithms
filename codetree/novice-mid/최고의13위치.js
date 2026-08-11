const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.trim().split(" ").map(Number));

// Please Write your code here.
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j <= arr[i].length - 3; j++) {
    const cnt = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    answer = Math.max(cnt, answer);
  }
}
console.log(answer);
