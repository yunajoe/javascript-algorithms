const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0];
let arr = a.split("");
let maxNum = 0;

for (let i = 1; i < arr.length; i++) {
  arr[i] = arr[i] === "0" ? "1" : "0";

  const currentNum = parseInt(arr.join("", 2));
  maxNum = Math.max(maxNum, currentNum);

  arr[i] = arr[i] === "0" ? "1" : "0";
}

console.log(maxNum);
