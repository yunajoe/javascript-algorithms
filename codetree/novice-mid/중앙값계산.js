const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
const sortedArr = [];
const resultArr = [];
for (let i = 0; i < arr.length; i++) {
  const currentValue = arr[i];
  // sort 내장함수 대신 오름차순 정렬 로직
  let idx = 0;
  while (idx < sortedArr.length && sortedArr[idx] < currentValue) {
    idx++;
  }
  sortedArr.splice(idx, 0, currentValue);

  if (sortedArr.length % 2 !== 0) {
    resultArr.push(sortedArr[Math.floor(i / 2)]);
  }
}
console.log(resultArr.join(" "));
