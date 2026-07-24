const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(" ").map(Number);
  studentInputs.push([height, weight, i]);
}

// Please Write your code here.

studentInputs.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return b[1] - a[1];
});

studentInputs.forEach((student) => console.log(student.join(" ")));
