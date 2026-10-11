const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let arr = [];
let count = 0;
function recursive(arr) {
  if (arr.length === n) {
    count++;
    return;
  }
  if (arr.length > n) {
    return;
  }
  for (let i = 1; i <= 4; i++) {
    if (arr.length + i > n) {
      continue;
    }
    for (let j = 1; j <= i; j++) {
      arr.push(i);
    }
    recursive(arr);
    for (let j = 1; j <= i; j++) {
      arr.pop();
    }
  }
}

recursive(arr);
console.log(count);
