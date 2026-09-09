const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

console.log(arr.join(" "));
