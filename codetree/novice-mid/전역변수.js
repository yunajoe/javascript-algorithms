const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];
// Please Write your code here.

function getLocation(text, pattern) {
  const startText = pattern[0];
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let isExist = true;
    if (text[i] === startText) {
      for (let j = 1; j < pattern.length; j++) {
        if (text[i + j] !== pattern[j]) {
          isExist = false;
          break;
        }
      }
      if (isExist) return i;
    }
  }
  return -1;
}

console.log(getLocation(text, pattern));
