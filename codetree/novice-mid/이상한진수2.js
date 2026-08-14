const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0];
let arr = a.split("");
let maxNum = 0;

// Please Write your code here.
const getNumber = (arr) => {
  let num = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    // 3 2 1 0
    const value = Number(arr[arr.length - 1 - i]);
    num += Math.pow(2, i) * value;
  }
  return num;
};

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === "0") {
    arr[i] = "1";
  } else {
    arr[i] = "0";
  }
  const value = getNumber(arr);
  maxNum = Math.max(value, maxNum);
  arr = a.split("");
}
console.log(maxNum);
