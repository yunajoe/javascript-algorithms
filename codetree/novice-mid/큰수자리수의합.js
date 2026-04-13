const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b, c] = input[0].split(" ").map(Number);

const arr = [a, b, c];
// Please Write your code here.
function recursive(num) {
  if (num >= 2) return arr[num];
  return recursive(num + 1) * arr[num];
}

let result = recursive(0);

let sum = 0;
while (result) {
  sum += result % 10;
  result = parseInt(result / 10);
}
console.log(sum);
