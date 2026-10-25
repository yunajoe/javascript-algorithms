const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

const getSum = (value) => {
  if (value === n) {
    return n;
  }
  return getSum(value + 1) + value;
};

console.log(getSum(1));
