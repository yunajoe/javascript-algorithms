const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.
const sortedArr = [...words].sort((a, b) => a.localeCompare(b, "en"));

for (const letter of sortedArr) {
  console.log(letter);
}
