const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let cnt = 0;
for (let i = 0; i <= arr.length - 3; i++) {
  for (let j = i + 1; j <= arr.length - 2; j++) {
    for (let k = j + 1; k <= arr.length - 1; k++) {
      const [first, second, third] = [arr[i], arr[j], arr[k]];
      if (first <= second && second <= third) {
        cnt++;
      }
    }
  }
}
console.log(cnt);
