const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let cnt = 0;
for (let i = 0; i < string.length; i++) {
  for (let j = i + 1; j < string.length; j++) {
    for (let k = j + 1; k < string.length; k++) {
      if (string[i] !== "C" || string[j] !== "O" || string[k] !== "W") continue;
      cnt++;
    }
  }
}
console.log(cnt);
