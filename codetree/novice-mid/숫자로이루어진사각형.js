const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
// Please write your code here.

for (let i = 0; i < N; i++) {
  let line = "";
  for (let j = 1; j <= N; j++) {
    const calValue = (i * N + j) % 9;
    const str = calValue === 0 ? 9 : calValue;
    line += String(str) + " ";
  }
  console.log(line);
}
