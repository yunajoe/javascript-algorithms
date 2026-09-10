const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
// for문
for (let i = 1; i < arr.length; i++) {
  // 비교해야 할 대상
  const key = arr[i];
  let swapIndex;
  for (j = i - 1; j >= 0; j--) {
    if (arr[j] > key) {
      swapIndex = j;
      arr[j + 1] = arr[j];
    }
  }
  if (swapIndex !== undefined) {
    arr[swapIndex] = key;
  }
}
console.log(arr.join(" "));

// while문

for (let i = 1; i < arr.length; i++) {
  const key = arr[i]; // 1
  let compareIndex = i - 1;
  while (compareIndex >= 0 && arr[compareIndex] > key) {
    arr[compareIndex + 1] = arr[compareIndex];
    compareIndex--; // 5
  }
  arr[compareIndex + 1] = key;
}

console.log(arr.join(" "));
