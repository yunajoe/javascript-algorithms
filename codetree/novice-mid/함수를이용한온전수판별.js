const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
let cnt = 0;

const condition = (num) => {
  if (num % 2 === 0) return false;
  if (num % 10 === 5) return false;
  if (num % 3 === 0 && num % 9 !== 0) return false;
  return true;
};
function perfectNumber(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    const result = condition(i);
    if (result) {
      cnt++;
    }
  }
  return cnt;
}

console.log(perfectNumber(a, b));
