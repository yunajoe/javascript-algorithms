const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map((line) => line.split(" ").map(Number));

// Please write your code here.
function calculate(queries) {
  for (const query of queries) {
    let sum = 0;
    const [start, end] = query;
    for (let i = start - 1; i < end; i++) {
      sum += A[i];
    }
    console.log(sum);
  }
}

calculate(queries);
