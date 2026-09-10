const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

// key
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
