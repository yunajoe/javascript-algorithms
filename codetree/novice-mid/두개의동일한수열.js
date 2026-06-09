const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1].trim().split(" ").map(Number);
const b = input[2].trim().split(" ").map(Number);

// Please Write your code here.
const aSet = new Set(a);
const bSet = new Set(b);

function equal() {
  if (aSet.size !== bSet.size) {
    return false;
  }

  for (const value of aSet) {
    if (!bSet.has(value)) {
      return false;
    }
  }
  return true;
}

if (equal()) {
  console.log("Yes");
} else {
  console.log("No");
}
