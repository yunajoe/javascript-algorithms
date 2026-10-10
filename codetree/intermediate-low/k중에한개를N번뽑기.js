const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [k, n] = input[0].split(" ").map(Number);

let arr = [];

const recursive = (arr) => {
  if (arr.length === n) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = 1; i <= k; i++) {
    arr.push(i);
    recursive(arr);
    arr.pop();
  }
};

recursive(arr);
