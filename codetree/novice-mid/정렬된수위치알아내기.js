const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
const indexedArr = arr.map((val, idx) => [val, idx]);

indexedArr.sort((a, b) => a[0] - b[0]);

const result = new Array(n);
indexedArr.forEach((item, idx) => {
  const originalIdx = item[1];
  result[originalIdx] = idx + 1;
});

console.log(result.join(" "));
