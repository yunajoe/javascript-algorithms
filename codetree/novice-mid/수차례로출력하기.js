const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

// Please Write your code here.
// 1부터 n까지 수를 차례대로 출력
const recursive = (value) => {
  process.stdout.write(value + " ");
  if (value === n) return;
  recursive(value + 1);
};
// n부터 1까지 수를 차레대로 출력
const recursive2 = (value) => {
  if (value === 0) return;
  process.stdout.write(value + " ");
  recursive2(value - 1);
};

recursive(1);
process.stdout.write("\n");
recursive2(n);
