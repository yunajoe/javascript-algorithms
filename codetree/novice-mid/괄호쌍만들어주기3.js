const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const A = input[0];

// Please Write your code here.
/**
 * 기준 => 0부터~ A마지막 인덱스 -1
 * 비교하는 문자열이 인덱스는  기준보다 무조건 커야한다!
 */

let cnt = 0;
for (let i = 0; i < A.length - 1; i++) {
  if (A[i] === ")") continue;
  for (let j = i + 1; j < A.length; j++) {
    if (A[j] === "(") continue;
    cnt++;
  }
}
console.log(cnt);
