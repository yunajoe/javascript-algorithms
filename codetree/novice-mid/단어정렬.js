const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.

function recursive(arr) {
  arr.sort();
  return arr;
}

recursive(words).forEach((item) => {
  console.log(item);
});
