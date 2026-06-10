const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const nums = input[1].trim().split(" ").map(Number);

// Please Write your code here.
nums.sort((a, b) => a - b);

let maxValue = -Infinity;
for (let i = 0; i < nums.length / 2; i++) {
  const value = nums[i] + nums[nums.length - i - 1];
  maxValue = Math.max(value, maxValue);
}
console.log(maxValue);
