const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.
function print(text) {
  console.log(text);
}

for (let i = 1; i <= n; i++) {
  print("HelloWorld");
}
