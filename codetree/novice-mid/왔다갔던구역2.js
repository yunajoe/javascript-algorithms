const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const offset = 100;
let current = offset;
const arr = new Array(offset * 2).fill(0);

for (const command of commands) {
  const [num, direction] = command.split(" ");
  if (direction === "R") {
    let start = current;
    let end = current + Number(num);
    for (let i = start; i < end; i++) {
      arr[i] += 1;
    }
    current = end;
  }
  if (direction === "L") {
    let start = current;
    let end = current - num;
    for (let i = start - 1; i >= end; i--) {
      arr[i] += 1;
    }
    current = end;
  }
}

const result = arr.filter((value) => value >= 2).length;
console.log(result);
