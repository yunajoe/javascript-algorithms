const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.

const sum = (n * (n + 1)) / 2;
const result = Math.floor(sum / 10);
console.log(result);
