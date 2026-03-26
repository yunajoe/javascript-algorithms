const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.
const arr = Array.from({ length: n + 1 }).fill(0);
for (let i = 1; i < arr.length; i++) {
  arr[i] = A[i - 1];
}

function get_answer(arr) {
  let sum = 0;
  let idx = m;
  while (idx) {
    sum += arr[idx];
    if (idx % 2 === 0) {
      idx = idx / 2;
    } else {
      idx = idx - 1;
    }
  }
  return sum;
}

console.log(get_answer(arr));
