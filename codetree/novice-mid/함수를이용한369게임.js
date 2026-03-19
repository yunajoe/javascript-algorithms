const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
// 1. A, B 사이의 수를 구한다  ( 1 ~ 100000)
// 2. 조건1: 3,6,9 중 하나가 포함 (ㅈㄹ)
//     조건2: 그 수 자체가 3의 배수

// 3. 조건1,2를 만족하는 갯수 구하시오

function isMatch(number) {
  const condition1 = String(number)
    .split("")
    .map(Number)
    .some((v) => [3, 6, 9].includes(v));
  const condition2 = number % 3;
  return condition1 || !condition2;
}

let cnt = 0;
const getCount = (a, b) => {
  for (let i = a; i <= b; i++) {
    const result = isMatch(i);
    if (result) {
      cnt++;
    }
  }
  return cnt;
};

console.log(getCount(A, B));
