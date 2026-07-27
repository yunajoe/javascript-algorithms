const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, b] = input[0].split(" ").map(Number);

// Please Write your code here.
const arr = [];
const convertBinaryNumber = (n, b) => {
  while (n) {
    let residual = n % b;
    arr.push(residual);
    n = Math.floor(n / b);
  }
  return arr.reverse();
};

const result = convertBinaryNumber(n, b);
console.log(result.join(""));
