const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.
const condition = (n) => {
  const isEven = n % 2;
  const multiple = String(n)
    .split("")
    .map(Number)
    .reduce((acc, num) => {
      acc = acc + num;
      return acc;
    }, 0);
  return !isEven && !(multiple % 5);
};

function getYesOrNo(n) {
  const value = condition(n);
  return value ? "Yes" : "No";
}

console.log(getYesOrNo(n));
