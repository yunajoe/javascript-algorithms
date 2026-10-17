const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
// Please Write your code here.

const starPrint = (value) => {
  if (value > n) {
    return;
  }
  console.log("*".repeat(value));
  starPrint(value + 1);
};

starPrint(1);
