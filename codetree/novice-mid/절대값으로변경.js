const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function getAbsoluteValues(arr) {
  arr.forEach((value, idx) => {
    const absValue = Math.abs(value);
    arr[idx] = absValue;
  });
}

getAbsoluteValues(arr);
console.log(arr.join(" "));
