const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

const isPrimeNumber = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let sum = 0;
for (let i = A; i <= B; i++) {
  const result = isPrimeNumber(i);
  if (result) {
    sum += i;
  }
}
console.log(sum);
