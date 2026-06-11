const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
const [n, k, t] = input[index++].split(" ");
const words = [];
for (let i = 0; i < Number(n); i++) {
  words.push(input[index++]);
}
// Please Write your code here.
// 문자열 n개가 주어졌을때 t로 시작하는 것을 사전순으로 정렬. 정렬후 k번째 글자를 return
const sortedArr = words
  .filter((word) => word.startsWith(t))
  .sort((a, b) => (a > b ? 1 : -1));
console.log(sortedArr[k - 1]);
