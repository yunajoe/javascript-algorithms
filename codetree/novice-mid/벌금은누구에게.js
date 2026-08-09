const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const counts = new Array(n + 1).fill(0);
let answer = -1;

for (const person of penalizedPersons) {
  counts[person]++;

  if (counts[person] >= k) {
    answer = person;
    break;
  }
}

console.log(answer);
