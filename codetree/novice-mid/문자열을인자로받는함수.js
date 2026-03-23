const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const str = input[0];
// Please Write your code here.
function palindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return "No";
    }
  }
  return "Yes";
}
console.log(palindrome(str));
