const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
let cnt = 0;

const isPrimeNumber = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isSumEven = (num) => {
  const sum = String(num)
    .split("")
    .map(Number)
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
  return sum % 2 === 0;
};

for (let i = a; i <= b; i++) {
  // 1. 소수
  const isPrime = isPrimeNumber(i);
  // 2. 모든 자리 수의 합이 짝수
  const allSumEven = isSumEven(i);
  if (isPrime && allSumEven) {
    cnt++;
  }
}
console.log(cnt);
