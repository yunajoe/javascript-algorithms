const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
const hasCarry = (a, b, c) => {
  while (a > 0 || b > 0 || c > 0) {
    if ((a % 10) + (b % 10) + (c % 10) >= 10) {
      return true;
    }
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    c = Math.floor(c / 10);
  }
  return false;
};

let maxSum = -1;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (!hasCarry(arr[i], arr[j], arr[k])) {
        maxSum = Math.max(maxSum, arr[i] + arr[j] + arr[k]);
      }
    }
  }
}

console.log(maxSum);
