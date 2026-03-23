const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function divisibleTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value % 2 === 0) {
      arr[i] = value / 2;
    }
  }
  return arr;
}

console.log(divisibleTwo(arr).join(" "));
