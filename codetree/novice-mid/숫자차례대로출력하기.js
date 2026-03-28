const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]); // n

// Please Write your code here.
let start = 1;
let end = n;

function increaseRecursive(num) {
  process.stdout.write(String(num) + " ");
  if (num === n) return;
  num++;
  increaseRecursive(num);
}

function decreaseRecursive(num) {
  process.stdout.write(String(num) + " ");
  if (num === 1) return;
  num--;
  decreaseRecursive(num);
}

increaseRecursive(start);
process.stdout.write("\n");
decreaseRecursive(end);
