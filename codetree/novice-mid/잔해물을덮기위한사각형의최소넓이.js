const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const rect1 = input[0].split(" ").map(Number);
const rect2 = input[1].split(" ").map(Number);
const [x1, y1, x2, y2] = rect1;
const [a1, b1, a2, b2] = rect2;

let minX = Infinity,
  maxX = -Infinity;
let minY = Infinity,
  maxY = -Infinity;

for (let x = x1; i < x2; x++) {
  for (let y = y1; y < y2; y++) {
    const isCovered = x >= a1 && x < a2 && y >= b1 && y < b2;
    if (!isCovered) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
}
if (minX === Infinity) {
  console.log(0);
} else {
  console.log((maxX - minX + 1) * (maxY - minY + 1));
}
